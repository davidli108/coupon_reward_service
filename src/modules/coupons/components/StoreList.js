//@flow
import * as React from 'react';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import preloader from '../assets/preloader.svg';
import type { StoreListProps } from '../models/CouponsPage';

const StoreList = ({ t, stores }: StoreListProps) => (
  <StoreList.Wrapper>
    {stores.length !== 0 ? (
      stores.map(store => (
        <StoreList.Item
          key={`store_${store.offer_id}`}
          href={store.offer_link}
          target="_blank"
        >
          <img
            src={`http://d2umvgb8hls1bt.cloudfront.net${store.store_logo}`}
            alt={store.store_name}
          />
          <p>
            {store.discount_print
              .replace('Cash Back', t('global.cashBack'))
              .replace('Instant Savings', t('global.instantSaving'))}
          </p>
        </StoreList.Item>
      ))
    ) : (
      <img src={preloader} alt="" />
    )}
  </StoreList.Wrapper>
);

StoreList.Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;

  margin-top: 20px;
  overflow-x: scroll;

  height: 140px;

  > a {
    padding: 5px;
    margin-right: 15px;
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
