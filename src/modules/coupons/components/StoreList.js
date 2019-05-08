//@flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import moment from 'moment';

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
                  ? `https://d2umvgb8hls1bt.cloudfront.net${store.offer_img}`
                  : placeholder
              }
              onError={e => {
                e.target.onerror = null;
                e.target.src = placeholder;
              }}
              alt={`${store.store_name || ''} Coupon Codes ${moment().format(
                'MMMM',
              )} | ${moment().format('YYYY')}`}
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
      {Array.apply(null, Array(5)).map((_, ind) => (
        <StoreListLoader key={ind} />
      ))}
    </StoreList.Wrapper>
  );
};

StoreList.Wrapper = styled.div`
  display: flex;

  margin-top: 20px;
  justify-content: space-between;
  overflow-x: scroll;

  height: 140px;

  > a {
    padding: 5px;
    margin-right: 30px;
  }

  > a:last-child {
    padding: 5px;
    margin-right: 0;
  }

  ::-webkit-scrollbar {
    height: 0;
  }

  ${breakpoint('lg')`
    margin: 25px 10px 0 10px;
  `}
`;

StoreList.Item = styled.a`
  min-width: 130px;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;

  background: #fff;

  border: 1px solid #dadde2;
  border-radius: 5px;

  width: 130px;
  height: 130px;

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

  ${breakpoint('md')`
    width: 174px;
    height: 136px;
  `}
`;

export default withTranslation()(StoreList);
