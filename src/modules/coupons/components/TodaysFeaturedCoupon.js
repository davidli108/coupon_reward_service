// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import moment from 'moment';
import ModalActivateCoupons from '@components/ModalActivateCoupons/ModalActivateCoupons';

import SignInModal from '@modules/auth/components/SignInModal';
import SignUpModal from '@modules/auth/components/SignUpModal';
import ResetPasswordModal from '@modules/auth/components/ResetPasswordModal';
import placeholder from '@modules/coupons/assets/image-placeholder.png';
import {
  getLocaleConfig,
  redirectToEnOrigin,
} from '@modules/localization/i18n';

import type { Store } from '../models/CouponsPage';
import SocialShareFeatured from './SocialShareFeatured';
import AppConfig from '@config/AppConfig';
import CouponCode from './CouponCode';

const modal = {
  modalSignIn: 'modalSignIn',
  modalSignUp: 'modalSignUp',
  modalResetPassword: 'modalResetPassword',
};

type TodaysFeaturedCouponProps = {
  t: Function,
  store: Store,
  favorites: any,
  addFavorite: any,
  removeFavorite: any,
  isAuthenticated: boolean,
  isExtensionInstalled: boolean,
};

const TodaysFeaturedCoupon = ({
  t,
  store,
  favorites,
  addFavorite,
  removeFavorite,
  isAuthenticated,
  isExtensionInstalled,
}: TodaysFeaturedCouponProps) => {
  const [currentModal, setCurrentModal] = React.useState(null);
  const [showActivateModal, setShowActivateModal] = useState(false);
  const localeConfig = getLocaleConfig();

  const isFavorite = Boolean(favorites[store.store_id]);
  const toggleFavoriteStore = () => {
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

    if (!isFavorite) {
      addFavorite(store.store_id);
    } else {
      removeFavorite(store.store_id);
    }
  };

  const modalCallback = () => {
    setShowActivateModal(false);
    window.open(store.offer_link, '_blank');
  };

  const formatDiscountAmt = (store: Store) => {
    const domain = [
      { name: '.co.uk', value: '£', locale: 'uk', prefix: true },
      { name: '.com', value: '$', locale: 'en', prefix: true },
      { name: '.de', value: '€', locale: 'de', prefix: false },
      { name: '.fr', value: '€', locale: 'fr', prefix: false },
    ];
    const url = new URL(window.location);
    const currency = domain.find(({ name }) =>
      new RegExp(`${name}$`).test(url.hostname),
    );

    if (!currency || store.discount_amt === '0.00') {
      return <small>{t('global.instantSaving')}</small>;
    }

    if (store.discount_type === '1') {
      if (currency.prefix) {
        return `${currency.value}${parseFloat(
          store.discount_amt,
        ).toLocaleString(currency.locale)} OFF`;
      }
      return `${parseFloat(store.discount_amt).toLocaleString(
        currency.locale,
      )}${currency.value} OFF`;
    }

    return parseFloat(store.discount_amt) + '% OFF';
  };

  return (
    <TodaysFeaturedCoupon.Wrapper>
      <h2>
        {t('coupons.todaysFeatureCoupon')} {store.store_name}
      </h2>
      <TodaysFeaturedCoupon.Content>
        <TodaysFeaturedCoupon.LogoControlsWrapper>
          <Link to={store.store_page_link}>
            <TodaysFeaturedCoupon.Logo
              src={
                store.store_logo
                  ? `${AppConfig.cloudUrl}${store.store_logo}`
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
          </Link>
          <TodaysFeaturedCoupon.Controls isLiked={isFavorite}>
            {isFavorite ? (
              <IoIosHeart
                style={{ cursor: 'pointer' }}
                onClick={toggleFavoriteStore}
              />
            ) : (
              <IoIosHeartEmpty
                style={{ cursor: 'pointer' }}
                onClick={toggleFavoriteStore}
              />
            )}
            <SocialShareFeatured
              text={store.ref_text}
              link={store.offer_link}
              twitterLink={store.twitter_link}
              pinterestLink={store.pinterest_link}
            />
          </TodaysFeaturedCoupon.Controls>
        </TodaysFeaturedCoupon.LogoControlsWrapper>

        <TodaysFeaturedCoupon.OfferingWrapper>
          <TodaysFeaturedCoupon.Offering>
            <span>{formatDiscountAmt(store)}</span>
            <span>
              {t('coupons.upToCashback', { discount: store.discount })}
            </span>
          </TodaysFeaturedCoupon.Offering>
        </TodaysFeaturedCoupon.OfferingWrapper>

        <TodaysFeaturedCoupon.DescriptionButtonWrapper>
          <TodaysFeaturedCoupon.Description>
            {store.offer_name}
          </TodaysFeaturedCoupon.Description>
          <CouponCode
            isAuthenticated={isAuthenticated}
            isExtensionInstalled={isExtensionInstalled}
            store={store.store_name}
            logo={
              store.store_logo
                ? `${AppConfig.cloudUrl}${store.store_logo}`
                : placeholder
            }
            code={store.coupon_code}
            link={store.offer_link}
          />
        </TodaysFeaturedCoupon.DescriptionButtonWrapper>
      </TodaysFeaturedCoupon.Content>

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
      {showActivateModal && (
        <ModalActivateCoupons
          isActive={showActivateModal}
          callback={modalCallback}
          title={store.store_name}
          coupon={store.coupon_code}
          logo={
            store.store_logo
              ? `${AppConfig.cloudUrl}${store.store_logo}`
              : placeholder
          }
        />
      )}
    </TodaysFeaturedCoupon.Wrapper>
  );
};

TodaysFeaturedCoupon.Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  > h2 {
    font-weight: bold;
    line-height: 19px;
    font-size: 16px;
    color: #374b5a;
    text-align: center;

    margin-bottom: 15px;

    ${breakpoint('sx')`
      line-height: 24px;
      font-size: 20px;
      font-weight: bold;
    `}

    ${breakpoint('md')`
      font-weight: bold;
      line-height: 29px;
      font-size: 25px;
    `}
  }
`;

TodaysFeaturedCoupon.Content = styled.div`
  display: flex;
  flex-flow: row wrap;

  background: #fff;
  border: 2px solid #dadde2;
  border-radius: 5px;

  width: 100%;
  padding: 15px 30px;

  ${breakpoint('sx')`
    flex-flow: column nowrap;
    align-items: center;
  `}

  ${breakpoint('md')`
    height: 180px;
    flex-flow: column wrap;
    justify-content: flex-end;
    padding: 20px 18px 30px 18px;

    > div {
      width: 55%;
    }
  `}

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 10px;

    padding: 0;

    > div {
      width: calc(33% - 20px) !important;
    }
  `}

  ${breakpoint('xl')`
    justify-content: space-between;
    padding: 0 30px;
    margin: 0 10px;

    > div {
      width: calc(33% - 20px) !important;
    }
  `}

  @media (min-width: 768px) and (max-width: 991px) {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 15px 30px;
    height: auto;
  }
`;

TodaysFeaturedCoupon.LogoControlsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 50%;
  margin: 8px 10px 0 0;

  > div {
    margin: 0 0 0 20px;
  }

  ${breakpoint('sx')`
    width: 100%;
    justify-content: center;
    margin: 0 0 20px 0;
  `}

  ${breakpoint('md')`
    flex-flow: column nowrap;
    justify-content: center;
    width: fit-content !important;
    margin: 0 auto;

    img {
      width: 130px;
      height: auto;
      margin: 0 auto;
    }

    a {
      width: 200px;
      text-align: center;
    }
  `}

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    margin: 0 30px 0 0;

    img {
      width: 80%;
      height: auto;
      margin-left: 20%;
    }

    a {
      width: 50%;
      margin-right: 5%;
    }
  `}

  @media (min-width: 768px) and (max-width: 991px) {
    grid-row-start: span 2;
    justify-content: flex-start;
    margin: 0;
    padding: 30px 0 30px 30px;
    display: flex;
  }
`;

TodaysFeaturedCoupon.Logo = styled.img`
  width: auto;
  height: 100px;
  max-width: 100%;

  margin-bottom: 8px;

  ${breakpoint('sx')`
    order: 2;
  `}

  ${breakpoint('md')`
    order: 0;
    height: 48px;
  `}

  ${breakpoint('lg')`
    width: 140px;
    height: 140px;
    object-fit: contain;
    margin: 0;
  `}
`;

TodaysFeaturedCoupon.Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20px;

  color: #adb8c0;

  margin-right: 15px;

  > svg {
    width: 27px;
    height: 25px;
  }

  > svg:first-child {
    margin-right: 10px;
    color: ${({ isLiked }) => (isLiked ? 'red' : '#adb8c0')};
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin: 30px 0 0 0;
  }

  ${breakpoint('sx')`
    align-items: center;
    justify-content: flex-end;
    margin-right: 0;
    position: absolute;
    right: 20px;
  `}

  ${breakpoint('md')`
    position: relative;
    justify-content: center;
    right: 0;
  `}

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    margin: 0;
  `}
`;

TodaysFeaturedCoupon.OfferingWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  width: calc(50% - 20px);

  ${breakpoint('sx')`
    width: 100%;
  `}

  ${breakpoint('xl')`
    width: fit-content;
  `}

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100% !important;
  }
`;

TodaysFeaturedCoupon.Offering = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  > span {
    white-space: nowrap;

    small {
      display: block;
      line-height: normal;

      ${breakpoint('xs')`
        font-size: 20px;
        line-height: 32px;
        white-space: normal;
      `}

      ${breakpoint('md')`
        font-size: 24px;
        line-height: 30px;
        white-space: nowrap;
      `}
    }
  }

  > span:first-child {
    font-weight: bold;
    line-height: 35px;
    font-size: 30px;

    color: #374b5a;

    ${breakpoint('sx')`
      line-height: 41px;
      font-size: 35px;

      margin-right: 15px;
    `}

    ${breakpoint('md')`
      line-height: 57px;
      font-size: 48px;
    `}
  }

  > span:last-child {
    line-height: 15px;
    font-size: 13px;

    color: #374b5a;

    ${breakpoint('sx')`
      line-height: 31px;
      font-size: 18px;
      letter-spacing: 0.45px;
    `}

    ${breakpoint('md')`
      line-height: 21px;
      font-size: 18px;
    `}
  }

  ${breakpoint('sx')`
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
  `}

  ${breakpoint('md')`
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
  `}
`;

TodaysFeaturedCoupon.DescriptionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;

  > * {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100% !important;
  }

  ${breakpoint('md')`
    width: 100%;
  `}

  ${breakpoint('lg')`
    max-width: 300px;
  `}

  ${breakpoint('xl')`
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 100%;

    flex: 2 1 50%;
  `}

  p {
    margin: 10px 0;
  }

  > div:nth-child(2) {
    margin: 0;
    height: 48px;

    > div,
    > a {
      margin: 0;
      height: 100%;
      padding: 13px 70px;

      :first-child:hover {
        background: ${props => props.theme.colors.blueDark};
      }
    }

    ${breakpoint('md')`
      flex: 1 1 360px;
      max-width: 360px;
      margin: 0;
    `}

    ${breakpoint('xl')`
      flex: 1 1 220px;
      max-width: 220px;
      white-space: nowrap;
      height: 60px;
      margin: 0 0 0 20px;
    `}
  }
`;

TodaysFeaturedCoupon.Description = styled.p`
  line-height: 17px;
  font-size: 13px;
  color: #899197;
  text-align: center;

  ${breakpoint('xs')`
    font-weight: bold;
    line-height: 23px;
    font-size: 16px;
    letter-spacing: 0.4px;
    white-space: wrap;
  `}

  ${breakpoint('md')`
    flex: 1 1 360px;
    text-align: start;
  `}

  ${breakpoint('xl')`
    flex: 1 1 50%;
  `}
`;

TodaysFeaturedCoupon.Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00cbe9;
  border: 1px solid #00b4cf;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.5),
    inset 0px -1px 5px rgba(0, 0, 0, 0.0584805),
    inset 0px -2px 0px rgba(255, 255, 255, 0.213315);
  border-radius: 4px;

  font-weight: bold;
  line-height: 20px;
  font-size: 17px;
  letter-spacing: 0.51px;
  color: #fff;

  padding: 13px 70px;

  transition: 0.2s;
  cursor: pointer;

  :hover {
    background: #00b4cf;
  }

  :focus {
    outline: none;
  }

  ${breakpoint('md')`
    flex: 1 1 360px;
    margin: 0;
  `}

  ${breakpoint('xl')`
    flex: 1 1 220px;
    white-space: nowrap;
    height: 60px;
    margin-left: 30px;
    margin-top: auto;
    margin-bottom: auto;
  `}
`;

export default withTranslation()(TodaysFeaturedCoupon);
