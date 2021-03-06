// @flow
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import moment from 'moment';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import AppConfig from '@config/AppConfig';
import { isAmazonStore, fireGTMEvent } from '@config/Utils';

type SearchBarItemsProps = {
  t: Function,
  match: Object,
  result: Object,
  history: Object,
  currentIndex: number,
  setCurrentIndex: number => void,
  setIsShowItems: boolean => void,
  setSearchValue: Function,
};

const SearchBarItems = ({
  t,
  match,
  result,
  history,
  currentIndex,
  setCurrentIndex,
  setIsShowItems,
  setSearchValue,
}: SearchBarItemsProps) => {
  const [refItem, setRefItem] = useState(null);

  useEffect(() => {
    if (refItem) {
      refItem.focus();
    }
  });

  const onClickItem = (shortName: string) => () => {
    setIsShowItems(false);
    setSearchValue('');
    history.push(`/coupons/${shortName}`);

    fireGTMEvent({
      pageCategory: 'Header Menu',
      event: 'store_search',
      label: document.location.href,
    });
  };

  const getCashback = store => {
    if (isAmazonStore(store.store_name)) {
      return t('global.noCashBack');
    }

    if (store.store_discount.includes('0.0%')) {
      return t('global.instantSaving');
    }

    const discount = store.store_discount.includes('%')
      ? store.store_discount.replace(/[^@\d%,.]/g, '')
      : store.store_discount.replace(/[^@\d$£€,.]/g, '');

    return discount
      ? t('global.earnCashBack', { discount })
      : t('global.instantSaving');
  };

  return (
    <SearchBarItems.StoreWrapper onKeyDown={e => e.preventDefault()}>
      <div>
        <SearchBarItems.StoreScrollArea>
          {result && result.length > 0 ? (
            result.map((item, index) => (
              <SearchBarItems.Item
                key={`store_item_${item.store_id}`}
                onClick={onClickItem(item.short_name)}
                isFocus={index === currentIndex}
                tabIndex={index === currentIndex ? 1 : -1}
                ref={e => index === currentIndex && setRefItem(e)}
              >
                <img
                  src={
                    item.image
                      ? `${AppConfig.cloudUrl}${item.image}`
                      : placeholder
                  }
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = placeholder;
                  }}
                  alt={`${item.store_name || ''} Coupon Codes ${moment().format(
                    'MMMM',
                  )} | ${moment().format('YYYY')}`}
                />
                <div>
                  <h3>{item.store_name}</h3>
                  <p>{getCashback(item)}</p>
                </div>
              </SearchBarItems.Item>
            ))
          ) : (
            <SearchBarItems.NotFound>
              {t('global.nothingFound')}
            </SearchBarItems.NotFound>
          )}
        </SearchBarItems.StoreScrollArea>
      </div>
    </SearchBarItems.StoreWrapper>
  );
};

SearchBarItems.StoreWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 80px;
  max-height: 50vh;
  background: ${props => props.theme.colors.white};
  box-sizing: border-box;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
  ${breakpoint('lg')`
    z-index: 1;
    width: 393px;
    left: -0.5px;
    top: 56px;
    border: 1px solid ${props => props.theme.colors.whiteLight};
    border-radius: 5px;

    &:after,
    &:before {
      bottom: 100%;
      left: 10%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      z-index: 100;
    }

    &:after {
      border-color: rgba(255, 255, 255, 0);
      border-bottom-color: ${props => props.theme.colors.white};
      border-width: 5px;
      margin-left: -5px;
    }

    &:before {
      border-color: rgba(218, 221, 226, 0);
      border-bottom-color: ${props => props.theme.colors.whiteLight};
      border-width: 6px;
      margin-left: -6px;
    }

    > div {
      width: 100%;
      max-height: 49vh;
      box-sizing: border-box;
      overflow: hidden;
    }
  `}
`;

SearchBarItems.StoreScrollArea = styled.div`
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
  box-sizing: border-box;
`;

SearchBarItems.PreloaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

SearchBarItems.NotFound = styled.p`
  width: 100%;
  line-height: 50px;
  text-align: center;
`;

SearchBarItems.Item = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  padding: 15px 30px;

  &:focus {
    background: ${props => props.theme.colors.whiteExLight};
  }

  img {
    flex-shrink: 0;
    width: 75px;
    height: 75px;
    object-fit: contain;
  }

  div {
    margin: 0 0 0 20px;
    text-align: left;

    h3 {
      margin: 0 0 5px 0;
      font-weight: bold;
      font-size: 16px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export default withRouter(SearchBarItems);
