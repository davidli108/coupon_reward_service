// @flow
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import AppConfig from '@config/AppConfig';
import i18n, { currencyLocaleFormat } from '@modules/localization/i18n';

type SearchBarItemsProps = {
  t: Function,
  result: Object,
  history: Object,
  currentIndex: number,
  setCurrentIndex: number => void,
  setIsShowItems: boolean => void,
};

const SearchBarItems = ({
  t,
  result,
  history,
  currentIndex,
  setCurrentIndex,
  setIsShowItems,
}: SearchBarItemsProps) => {
  const [refItem, setRefItem] = useState(null);

  useEffect(() => {
    if (refItem) {
      refItem.focus();
    }
  });

  const onClickItem = shortName => {
    setIsShowItems(false);
    history.push(`/coupons/${shortName}`);
  };

  return (
    <SearchBarItems.StoreWrapper onKeyDown={e => e.preventDefault()}>
      {result && result.length > 0 ? (
        result.map((item, index) => (
          <SearchBarItems.Item
            key={`store_item_${item.store_id}`}
            onClick={() => onClickItem(item.short_name)}
            isFocus={index === currentIndex}
            tabIndex={index === currentIndex ? 1 : -1}
            ref={e => index === currentIndex && setRefItem(e)}
          >
            <img
              src={
                item.image ? `${AppConfig.cloudUrl}${item.image}` : placeholder
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
              <p>
                {t('global.earnCashBack', {
                  discount: item.store_discount.includes('%')
                    ? item.store_discount.replace(/[^@\d$|%£€ .]/g, '')
                    : currencyLocaleFormat(item.store_discount, i18n.language),
                })}
              </p>
            </div>
          </SearchBarItems.Item>
        ))
      ) : (
        <SearchBarItems.NotFound>
          {t('global.nothingFound')}
        </SearchBarItems.NotFound>
      )}
    </SearchBarItems.StoreWrapper>
  );
};

SearchBarItems.StoreWrapper = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.white};
  z-index: 1;
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
  left: 0;
  top: 42px;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  border-radius: 5px;
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
  padding: 5px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;

  &:focus {
    background: ${props => props.theme.colors.whiteExLight};
  }

  img {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    object-fit: contain;
    border: 1px solid ${props => props.theme.colors.whiteLight};
  }

  div {
    margin: 0 0 0 10px;
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
