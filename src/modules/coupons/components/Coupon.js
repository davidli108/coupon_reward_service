//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import type { Deal as DealModel } from '../models/CouponsPage';

const zeroPadStars = val => String(val).padStart(2, '0');

const OfferType = {
  discount: 'discount',
  freeShipping: 'free-shipping',
};

const Coupon = ({
  discount,
  discount_print,
  offer_type,
  offer_link,
  show_exp_date,
  store_logo,
  store_name,
  ref_text,
}: DealModel) => {
  return (
    <Coupon.Wrapper>
      <Coupon.BorderWrapper>
        <Coupon.Circle position="left" />
        <Coupon.Circle position="right" />
      </Coupon.BorderWrapper>
      <Coupon.Content>
        <Coupon.StoreLogo
          src={`http://d2umvgb8hls1bt.cloudfront.net${store_logo}`}
          alt={store_name}
        />
        {offer_type === OfferType.freeShipping ? (
          <Coupon.Discount>
            <span>Free</span>
            <span>Shipping</span>
          </Coupon.Discount>
        ) : (
          <Coupon.Discount>
            <span>{zeroPadStars(discount)}</span>
            <span>off</span>
          </Coupon.Discount>
        )}
        <Coupon.ExpDate>
          <p>{show_exp_date}</p>
        </Coupon.ExpDate>
        <Coupon.OfferText>{ref_text}</Coupon.OfferText>
        <Coupon.ViewDealButton href={offer_link} target="_blank">
          View Deal
        </Coupon.ViewDealButton>
        <Coupon.CashbackPercent>{discount_print}</Coupon.CashbackPercent>
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
  max-height: 477px;

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

Coupon.StoreLogo = styled.img`
  width: 100px;
  height: auto;
`;

Coupon.Discount = styled.p`
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

Coupon.ViewDealButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  width: 90%;

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
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;

  padding: 13px 30px;
  margin: 0 0 14px 0;

  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: #00bad5;
  }
`;

Coupon.CashbackPercent = styled.div`
  font-weight: normal;
  line-height: 21px;
  font-size: 16px;
  text-align: center;
  color: #b1b1b1;
`;

export default Coupon;
