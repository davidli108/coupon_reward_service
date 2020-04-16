// @flow
import * as R from 'ramda';
import React, { useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { getIsAuthenticated } from '@modules/auth/AuthReducer';
import SignInModal from '@modules/auth/components/SignInModal';
import SignUpModal from '@modules/auth/components/SignUpModal';
import ResetPasswordModal from '@modules/auth/components/ResetPasswordModal';
import * as authActions from '@modules/auth/AuthActions';
import { getIsFavorite } from '@modules/favorites/FavoritesReducer';
import {
  getLocaleConfig,
  redirectToEnOrigin,
  currencyLocaleFormat,
  getDomainAttrs,
  setDecimalFormat,
} from '@modules/localization/i18n';
import { getOrigin } from '@modules/auth/AuthHelper';

import { getStore, getOffers } from '../StoreCouponsReducer';
import AppConfig from '@config/AppConfig';
import { isAmazonStore } from '@config/Utils';

const modal = {
  modalSignIn: 'modalSignIn',
  modalSignUp: 'modalSignUp',
  modalResetPassword: 'modalResetPassword',
};

export type BrandHeaderProps = {
  t: Function,
  match: Object,
  store: any,
  offers: any[],
  offersCount: number,
  isFavorite: boolean,
  requestNonce: Function,
  isAuthenticated: boolean,
};

const getCouponsCount = offers =>
  offers.filter(x => x.coupon_code !== '').length;
const getDealsCount = offers => offers.filter(x => x.coupon_code === '').length;

const BrandHeader = ({
  t,
  match,
  store,
  offers,
  offersCount,
  requestNonce,
  isFavorite,
  isAuthenticated,
}: BrandHeaderProps) => {
  const [currentModal, setCurrentModal] = useState(null);
  const [isAmazon, setIsAmazon] = useState(false);
  const localeConfig = getLocaleConfig();

  const discount = store.store_cashback_ok
    ? store.store_numeric_type === 1
      ? currencyLocaleFormat(store.store_discount, store.store_country_code)
      : setDecimalFormat(`${store.store_discount}`)
    : '';

  const cashBackMessageKey = store.store_cashback_ok
    ? store.store_network_status === 1
      ? store.store_numeric_type === 1
        ? 'global.amCashBack'
        : 'global.upToCashBack'
      : 'global.noCashBack'
    : 'global.instantSaving';

  const toggleFavoriteStore = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      pageCategory: 'Store Pages',
      event: 'favorite_store',
      label: match.url,
    });

    if (
      !localeConfig.isAuthenticationAvailable ||
      !localeConfig.isFollowStoreAvailable
    ) {
      return redirectToEnOrigin();
    }

    if (!isAuthenticated) {
      setCurrentModal(modal.modalSignUp);
      return;
    }

    requestNonce().then(response => {
      const data = R.path(['payload', 'data'], response);
      if (data.nonce) {
        const origin = getOrigin();
        const { pathname } = document.location;

        document.location.href = `${AppConfig.apiUrl}/account/toggle-favorite/?nonce=${data.nonce}&store_id=${store.store_id}&origin=${origin}&redirect=${pathname}`;
      }
    });
  };

  useEffect(() => {
    if (isAmazonStore(store.store_name)) {
      setIsAmazon(true);
    }
  }, [store]);

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
              {isAmazon
                ? t('global.noCashBack')
                : discount
                ? t(cashBackMessageKey, { discount })
                : t('global.instantSaving')}
            </span>
          </BrandHeader.SmNonVisible>
        </BrandHeader.OffersStats>
        <BrandHeader.SmVisible>
          <BrandHeader.CashBack>
            {t(cashBackMessageKey, { discount })}
          </BrandHeader.CashBack>
        </BrandHeader.SmVisible>
        <BrandHeader.FollowStoreWrapper isFavorite={isFavorite}>
          <div onClick={toggleFavoriteStore}>
            {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
            <span>{t('storeCoupons.followStore')}</span>
          </div>
        </BrandHeader.FollowStoreWrapper>
      </BrandHeader.NoWrapFlexBox>

      {currentModal === modal.modalSignIn && (
        <SignInModal
          onRouteModalReset={() => setCurrentModal(modal.modalResetPassword)}
          onRouteModal={() => setCurrentModal(modal.modalSignUp)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
      {currentModal === modal.modalSignUp && (
        <SignUpModal
          onRouteModal={() => setCurrentModal(modal.modalSignIn)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
      {currentModal === modal.modalResetPassword && (
        <ResetPasswordModal
          onRouteModal={() => setCurrentModal(modal.modalSignUp)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
    </>
  );
};

BrandHeader.Name = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #374b5a;
  padding-top: 15px;
  text-align: center;

  @media (max-width: 320px) {
    font-size: 100%;
  }

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
    padding: 10px 0 20px 0;
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
    padding: 0px;
  `}

  ${breakpoint('md')`
    padding: 0;
    margin: auto 0 10px;
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
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  requestNonce: authActions.requestNonce,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation(),
  withRouter,
)(BrandHeader);
