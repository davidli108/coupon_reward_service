// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import moment from 'moment';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import StoreListLoader from './loaders/StoreListLoader';
import AppConfig from '@config/AppConfig';

type FeaturedStoreListProps = {
  t: string => string,
  stores: Object,
  loaded: boolean,
};

const FeaturedStoreList = ({ t, stores, loaded }: FeaturedStoreListProps) => {
  if (loaded) {
    return (
      <FeaturedStoreList.Wrapper>
        {stores.map(store => (
          <FeaturedStoreList.Item
            key={`store_${store.store_id}`}
            href={store.offer_link}
            target="_blank"
          >
            <img
              src={
                store.offer_img
                  ? `${AppConfig.cloudUrl}${store.offer_img}`
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
          </FeaturedStoreList.Item>
        ))}
      </FeaturedStoreList.Wrapper>
    );
  }

  return (
    <FeaturedStoreList.Wrapper>
      {Array.apply(null, Array(5)).map((_, ind) => (
        <StoreListLoader key={ind} />
      ))}
    </FeaturedStoreList.Wrapper>
  );
};

FeaturedStoreList.Wrapper = styled.div`
  display: flex;

  margin-top: 20px;
  justify-content: space-between;
  overflow-x: scroll;

  height: 140px;

  > a {
    padding: 5px;
    margin-right: 26px;

    ${breakpoint('sm')`
      margin-right: 30px;
    `}
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

FeaturedStoreList.Item = styled.a`
  min-width: 117px;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;

  background: #fff;

  border: 1px solid #dadde2;
  border-radius: 5px;

  width: 117px;
  height: 112px;

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

  ${breakpoint('sm')`
    width: 130px;
    height: 112px;
  `}

  ${breakpoint('md')`
    width: 174px;
    height: 136px;
  `}
`;

export default withTranslation()(FeaturedStoreList);
