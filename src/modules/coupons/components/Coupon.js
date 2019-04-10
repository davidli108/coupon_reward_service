//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import CouponCode from './CouponCode';
import SocialShare from './SocialShare';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import type { Deal as DealModel } from '../models/CouponsPage';

const OfferType = {
  discount: 'discount',
  freeShipping: 'free-shipping',
};

const Coupon = ({
  t,
  discount,
  discount_print,
  offer_type,
  offer_link,
  show_exp_date,
  store_logo,
  store_name,
  ref_text,
  coupon_code,
}: DealModel) => {
  return (
    <Coupon.Wrapper>
      <Coupon.BorderWrapper>
        <Coupon.Circle position="left" />
        <Coupon.Circle position="right" />
      </Coupon.BorderWrapper>
      <Coupon.Content>
        <Coupon.StoreLogoWrapper>
          <Coupon.StoreLogo
            src={
              store_logo
                ? `http://d2umvgb8hls1bt.cloudfront.net${store_logo}`
                : placeholder
            }
            alt={store_name}
          />
        </Coupon.StoreLogoWrapper>
        {offer_type === OfferType.freeShipping ? (
          <Coupon.Discount>
            <span>{t('coupons.type.free')}</span>
            <span>{t('coupons.type.shiping')}</span>
          </Coupon.Discount>
        ) : coupon_code ? (
          <Coupon.Discount>
            <span>{t('coupons.type.coupon')}</span>
            <span>{t('coupons.type.code')}</span>
          </Coupon.Discount>
        ) : (
          <Coupon.DiscontDeal>{t('coupons.type.deal')}</Coupon.DiscontDeal>
        )}
        <Coupon.ExpDate>
          <p>{show_exp_date}</p>
        </Coupon.ExpDate>
        <Coupon.OfferText>{ref_text}</Coupon.OfferText>
        <CouponCode code={coupon_code} link={offer_link} />
        <Coupon.CashbackPercent>
          {discount_print
            .replace('Cash Back', t('global.cashBack'))
            .replace('Instant Savings', t('global.instantSaving'))}
        </Coupon.CashbackPercent>
        <SocialShare text={ref_text} link={offer_link} />
      </Coupon.Content>
    </Coupon.Wrapper>
  );
};

Coupon.Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;

  width: 100%;
  max-height: 550px;

  margin: 20px auto;
  overflow: hidden;

  ${breakpoint('sx')`
    margin: 20px 0;
  `}
`;

Coupon.BorderWrapper = styled.div`
  position: absolute;

  width: calc(100% - 2px);
  height: calc(100% - 2px);

  border-radius: 3px;
  border: 1px solid #dadde2;

  pointer-events: none;
`;

Coupon.Circle = styled.div`
  position: absolute;
  top: 50%;

  background: white;

  width: 14px;
  height: 14px;

  border-top: 1px solid #dadde2;
  border-bottom: 1px solid #dadde2;
  border-radius: 50%;

  z-index: 3;

  ${({ position }) => {
    switch (position) {
      case 'left': {
        return `
          border-right: 1px solid #dadde2;
          left: -7px;
        `;
      }
      case 'right': {
        return `
          border-left: 1px solid #dadde2;
          right: -7px;
        `;
      }

      default: {
        return;
      }
    }
  }}
`;

Coupon.Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  padding: 60px 27px 23px 27px;
`;

Coupon.StoreLogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
`;

Coupon.StoreLogo = styled.img`
  width: 100%;
  height: auto;
`;

Coupon.Discount = styled.p`
  height: 100px;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;

  white-space: nowrap;
  color: #d0c000;

  margin-top: 40px;

  > span:first-child {
    font-weight: 900;
    line-height: 52px;
    font-size: 44px;
    letter-spacing: 1.375px;
  }

  > span:last-child {
    font-size: 45px;
    line-height: 40px;
    letter-spacing: 1.40625px;
    text-transform: uppercase;
    font-weight: 300;
  }
`;

Coupon.DiscontDeal = styled.p`
  height: 100px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  font-weight: 900;
  line-height: 52px;
  font-size: 44px;
  letter-spacing: 1.375px;
  white-space: nowrap;
  color: #d0c000;
`;

Coupon.ExpDate = styled.div`
  border: 1px solid #dadde2;
  border-radius: 5px;

  margin-top: 12px;
  padding: 6px 10px;

  > p {
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
    font-size: 13px;

    color: #c2c2c2;
  }
`;

Coupon.OfferText = styled.p`
  line-height: 20px;
  text-overflow: ellipsis;
  overflow-y: hidden;
  height: 60px;
  margin: 10px 0;
  color: #b1b1b1;
  text-align: center;
  font-size: 16px;
`;

Coupon.CashbackPercent = styled.div`
  font-weight: normal;
  line-height: 21px;
  font-size: 16px;
  text-align: center;
  color: #b1b1b1;
`;

export default withTranslation()(Coupon);
