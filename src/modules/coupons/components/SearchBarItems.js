// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import preloader from '../assets/preloader.svg';

type SearchBarItemsProps = {
  t: Function,
  result: Object,
  isLoading: boolean,
  history: Object,
};

const SearchBarItems = ({
  t,
  result,
  isLoading,
  history,
}: SearchBarItemsProps) => (
  <SearchBarItems.StoreWrapper>
    {!isLoading ? (
      <SearchBarItems.PreloaderWrapper>
        <img src={preloader} alt="preloader" />
      </SearchBarItems.PreloaderWrapper>
    ) : result && result.length > 0 ? (
      result.map(item => (
        <SearchBarItems.Item
          key={`store_item_${item.store_id}`}
          onClick={() => history.push(`/coupons/${item.short_name}`)}
        >
          <img
            src={
              item.image
                ? `https://d2umvgb8hls1bt.cloudfront.net${item.image}`
                : placeholder
            }
            onError={e => {
              e.target.onerror = null;
              e.target.src = placeholder;
            }}
            alt={item.store_name}
          />
          <div>
            <h3>{item.store_name}</h3>
            <p>{item.store_discount}</p>
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

SearchBarItems.Item = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.whiteExLight};
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border: 1px solid ${props => props.theme.colors.whiteLight};
  }

  div {
    margin: 0 0 0 5px;

    h3 {
      margin: 0 0 5px 0;
      font-weight: bold;
    }

    p {
      font-size: 13px;
    }
  }
`;

export default withRouter(SearchBarItems);
