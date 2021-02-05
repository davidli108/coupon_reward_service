// @flow
import React, { useState, useEffect } from 'react';
import moment from 'moment';

import CouponCode from '../CouponCode';
import placeholder from '@modules/coupons/assets/image-placeholder.png';
import {
  currencyLocaleFormat,
  getCurrencySymbol,
} from '@modules/localization/i18n';
import styles from './Offer.styles';
import { type OfferProps } from './index';

const Offer = ({
  t,
  i18n,
  coupon_code,
  offer_link,
  discount_type,
  discount_amt,
  offer_name,
  offer_description,
  offer_type,
  store_logo,
  store_name,
  end_date,
  isAuthenticated,
  isExtensionInstalled,
  store,
  country,
  isCashbackRate,
  randomOffer,
  openTerms,
}: OfferProps) => {
  const [isAmazon, setIsAmazon] = useState(false);

  useEffect(() => {
    if (store_name === 'Amazon') {
      setIsAmazon(true);
    }
  }, [store_name]);

  const getDiscount = () => {
    if (discount_type === 1) {
      return currencyLocaleFormat(discount_amt, country);
    }

    if (discount_type === 2) {
      return `${parseFloat(discount_amt)}%`;
    }
  };

  const getTitle = () => {
    if (+discount_amt === 0 && offer_type === 'free-shipping') {
      return (
        <div>
          {randomOffer ? `${store_name} - ` : ''}
          {t('coupons.freeShipping')}
        </div>
      );
    }

    if (coupon_code) {
      if (randomOffer) {
        return (
          <div>
            {t('coupons.otherStoreTitle', {
              discount: getDiscount(),
              store_name,
            })}
          </div>
        );
      }

      return (
        <div>{t('coupons.currentStoreTitle', { discount: getDiscount() })}</div>
      );
    }

    if (isCashbackRate) {
      return (
        <div>
          {offer_type} {t('coupons.cashBack')}
        </div>
      );
    }

    const discount = getDiscount() || '';
    return (
      <div>
        {randomOffer ? `${store_name} ` : ''}
        {discount !== '0%'
          ? t('coupons.currentStoreTitle', { discount: getDiscount() })
          : ''}
      </div>
    );
  };

  return (
    <Offer.Wrapper>
      <Offer.Content>
        <Offer.Title isCashbackRate={isCashbackRate}>
          {offer_type === 'image'
            ? `
              ${randomOffer ? `${store_name} - ` : ''}
              ${t('coupons.shopBy.freeGift')}
            `
            : getTitle()}
        </Offer.Title>

        <Offer.Description>
          {offer_name.replace(/\$/g, getCurrencySymbol() || '$')}
        </Offer.Description>

        {offer_description && (
          <Offer.SubDescription>{offer_description}</Offer.SubDescription>
        )}

        <Offer.DetailsWrapper>
          { end_date && (
            <Offer.ExpirationDate>
              {t('coupons.expiry_date')} {moment(end_date).format('MM/DD/YYYY')}
            </Offer.ExpirationDate>
          )}
        </Offer.DetailsWrapper>
      </Offer.Content>

      <Offer.ButtonWrapper>
        <CouponCode
          t={t}
          i18n={i18n}
          code={coupon_code}
          link={offer_link}
          store={store_name}
          isCashbackRate={isCashbackRate}
          isAuthenticated={isAuthenticated}
          isExtensionInstalled={isExtensionInstalled || isAmazon}
          logo={store_logo || placeholder}
          isVisit={false}
        />
        {store.terms && !randomOffer && (
          <Offer.TermsLink onClick={openTerms}>
            {t('storeCoupons.terms')}
          </Offer.TermsLink>
        )}
      </Offer.ButtonWrapper>
    </Offer.Wrapper>
  );
};

styles(Offer);

export default Offer;
