// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import moment from 'moment';
import i18n, {
  currencyLocaleFormat,
  setDecimalFormat,
} from '@modules/localization/i18n';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import StoreListLoader from './loaders/StoreListLoader';
import { isAmazonStore } from '@config/Utils';

type FeaturedStoreListProps = {
  t: Function,
  stores: Object,
  loaded: boolean,
};

const FeaturedStoreList = ({ t, stores, loaded }: FeaturedStoreListProps) => {
  const getCashBack = store => {
    if (isAmazonStore(store.store_name)) {
      return t('global.noCashBack');
    }

    const discount = store.cashbackok
      ? store.pay_type === 1
        ? currencyLocaleFormat(
            store.cashback_text,
            store.country || i18n.language,
          )
        : setDecimalFormat(`${store.cashback_text}%`)
      : '';
    const cashBackMessageKey = store.cashbackok
      ? store.pay_type === 1
        ? 'global.amCashBack'
        : 'global.upToCashBack'
      : 'global.instantSaving';

    return store.override || t(cashBackMessageKey, { discount });
  };

  const date = moment().format('MMMM | YYYY');

  if (loaded) {
    return (
      <FeaturedStoreList.Wrapper>
        {stores.map(store => {
          return (
            <FeaturedStoreList.Item
              key={`store_${store.store_id}`}
              href={store.offer_link}
              target="_blank"
            >
              <img
                src={store.offer_img || placeholder}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
                alt={`${store.store_name || ''} ${t(
                  'storeCoupons.codes',
                )} ${date.charAt(0).toUpperCase() + date.slice(1)}`}
              />
              <p>{getCashBack(store)}</p>
            </FeaturedStoreList.Item>
          );
        })}
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
  text-align: center;
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
