// @flow
import * as R from 'ramda';
import * as React from 'react';
// eslint-disable-next-line no-unused-vars, import/no-unresolved
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import * as favoritesActions from '@modules/favorites/FavoritesActions';
import { getIsFavorite } from '@modules/favorites/FavoritesReducer';

import { getStore, getOffers } from '../StoreCouponsReducer';

export type BrandHeaderProps = {
  t: Function,
  store: any,
  offers: any[],
  offersCount: number,
  isFavorite: boolean,
  addFavorite: any,
  removeFavorite: any,
};

const getCouponsCount = offers =>
  offers.filter(x => x.coupon_code !== '').length;
const getDealsCount = offers => offers.filter(x => x.coupon_code === '').length;

const BrandHeader = ({
  t,
  store,
  offers,
  offersCount,
  addFavorite,
  removeFavorite,
  isFavorite,
}: BrandHeaderProps) => {
  // eslint-disable-next-line no-unused-vars
  const toggleFavoriteStore = () => {
    if (!isFavorite) {
      addFavorite(store.store_id);
    } else {
      removeFavorite(store.store_id);
    }
  };

  return (
    <>
      <BrandHeader.Name>
        {store.store_name} {t('storeCoupons.codesAndDeals')}
      </BrandHeader.Name>
      <BrandHeader.NoWrapFlexBox>
        <BrandHeader.OffersStats>
          {offersCount !== 0 && (
            <>
              <span>
                {getCouponsCount(offers)}{' '}
                {getCouponsCount(offers) === 1
                  ? t('coupons.type.coupon')
                  : t('header.coupons')}
              </span>
              <span>-</span>
              <span>
                {getDealsCount(offers)}{' '}
                {getDealsCount(offers) === 1
                  ? t('coupons.type.deal')
                  : t('global.deals')}
              </span>
              <BrandHeader.SmNonVisible>
                <span>-</span>
              </BrandHeader.SmNonVisible>
            </>
          )}
          <BrandHeader.SmNonVisible>
            <span>
              {t('templates.upToCashback').replace('%s', store.store_discount)}
            </span>
          </BrandHeader.SmNonVisible>
        </BrandHeader.OffersStats>
        <BrandHeader.SmVisible>
          <BrandHeader.CashBack>
            {t('templates.upToCashback').replace('%s', store.store_discount)}
          </BrandHeader.CashBack>
        </BrandHeader.SmVisible>
        <BrandHeader.FollowStoreWrapper isFavorite={isFavorite}>
          <div onClick={toggleFavoriteStore}>
            {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
            <span>{t('storeCoupons.followStore')}</span>
          </div>
        </BrandHeader.FollowStoreWrapper>
      </BrandHeader.NoWrapFlexBox>
    </>
  );
};

BrandHeader.Name = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #374b5a;
  padding-top: 15px;
  text-align: center;

  ${breakpoint('sx')`
    text-align: left;
  `}

  ${breakpoint('xl')`
    padding: 0;
    width: 100%;

    line-height: 46px;
    font-size: 39px;
  `}
`;

BrandHeader.SmNonVisible = styled.span`
  display: flex;

  ${breakpoint('sx')`
    display: none;
  `}

  ${breakpoint('md')`
    display: flex;
  `}
`;

BrandHeader.SmVisible = styled.span`
  display: none;

  ${breakpoint('sx')`
    display: flex;
  `}

  ${breakpoint('md')`
    display: none;
  `}
`;

BrandHeader.Br = styled.br`
  display: flex;

  ${breakpoint('md')`
    display: none;
  `}
`;

BrandHeader.NoWrapFlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('xl')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;

    width: 100%;
    padding: 10px 0;
  `}
`;

BrandHeader.OffersStats = styled.div`
  min-width: 200px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  padding: 15px 0 18px 0;

  ${breakpoint('sx')`
    width: 200px;
    margin: 0;
  `}

  ${breakpoint('md')`
    width: 100%;
    max-width: 500px;
    padding: 0 0 20px 0;
  `}

  ${breakpoint('xl')`
    padding: 0 0 5px 0;
  `}

  & > span {
    font-size: 11px;
    color: #62707b;

    ${breakpoint('sx')`
      font-size: 13px;
    `}

    ${breakpoint('md')`
      font-size: 16px;
    `}

    &:last-child {
      margin-right: 5px;
    }
  }
`;

BrandHeader.CashBack = styled.span`
  font-size: 13px;
  color: #62707b;

  ${breakpoint('md')`
    font-size: 16px;
  `}
`;

BrandHeader.FollowStoreWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  ${breakpoint('sx')`
    padding: 25px 0 10px 0;
    margin: auto 0;
  `}

  ${breakpoint('md')`
    padding: 0;
    margin: auto 0;
  `}

  ${breakpoint('xl')`
    padding: 0 0 0 30px;
  `}

  > div {
    display: flex;
    align-items: center;

    width: fit-content;
    height: auto;

    cursor: pointer;

    > svg {
      width: 22px;
      height: 22px;
      color: ${({ isFavorite }) => (isFavorite ? 'red' : '#d2d2d2')};
    }

    > span {
      padding-left: 5px;
      font-size: 14px;
      color: ${({ isFavorite }) => (isFavorite ? 'black' : '#b1b1b1')};
    }
  }
`;

const mapStateToProps = state => ({
  store: getStore(state),
  offers: getOffers(state),
  isFavorite: getIsFavorite(state, R.propOr(null, 'store_id', getStore(state))),
});

const mapDispatchToProps = {
  addFavorite: favoritesActions.addFavorite,
  removeFavorite: favoritesActions.removeFavorite,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation(),
)(BrandHeader);
