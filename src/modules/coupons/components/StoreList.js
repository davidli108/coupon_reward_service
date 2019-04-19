//@flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import StoreListLoader from './loaders/StoreListLoader';

type StoreListProps = {
  t: string => string,
  stores: Object,
  loaded: boolean,
};

const StoreList = ({ t, stores, loaded }: StoreListProps) => {
  if (loaded) {
    return (
      <StoreList.Wrapper>
        {stores.map(store => (
          <StoreList.Item
            key={`store_${store.store_id}`}
            href={store.offer_link}
            target="_blank"
          >
            <img
              src={
                store.offer_img
                  ? `http://d2umvgb8hls1bt.cloudfront.net${store.offer_img}`
                  : placeholder
              }
              onError={e => {
                e.target.onerror = null;
                e.target.src = placeholder;
              }}
              alt={store.store_name}
            />
            <p>
              {store.cashback_text
                .replace('Cash Back', t('global.cashBack'))
                .replace('Instant Savings', t('global.instantSaving'))}
            </p>
          </StoreList.Item>
        ))}
      </StoreList.Wrapper>
    );
  }
  return (
    <StoreList.Wrapper>
      {Array.apply(null, Array(5)).map(() => (
        <StoreListLoader />
      ))}
    </StoreList.Wrapper>
  );
};

StoreList.Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
  overflow-x: scroll;

  height: 140px;

  > a {
    padding: 5px;
    margin-right: 15px;
  }

  > a:last-child {
    padding: 5px;
    margin-right: 0;
  }

  ::-webkit-scrollbar {
    height: 0;
  }

  ${breakpoint('xl')`
    overflow-x: scroll;
    margin-bottom: 25px;
  `}
`;

StoreList.Item = styled.a`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;

  background: #fff;

  border: 1px solid #dadde2;
  border-radius: 5px;

  width: 120px;
  height: 120px;

  > img {
    height: auto;
    width: 60px;

    align-self: center;
    margin-top: auto;
  }

  > p {
    margin-top: auto;
    align-self: center;

    font-weight: bold;
    line-height: 23px;
    font-size: 13px;

    color: #899197;
  }

  ${breakpoint('xl')`
    width: 165px;
    height: 136px;
  `}
`;

export default withTranslation()(StoreList);
