//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import type { BrandNeverOverpayProps } from '../models/StorePage';

const BrandNeverOverpay = ({ storeName }: BrandNeverOverpayProps) => {
  return (
    <>
      <BrandNeverOverpay.NeverOverpay>
        <h2>Never Overpay Again at {storeName}</h2>
        <p>
          Automatically add all active coupons to your order with Piggy's
          browser extension. When you get to checkout, Piggy will find coupons
          and cash back at {storeName} and more.
        </p>
      </BrandNeverOverpay.NeverOverpay>
      <BrandNeverOverpay.Advantages>
        <span>Automatic Coupons</span>
        <span>-</span>
        <span>Price Check</span>
        <span>-</span>
        <span>Secret Rates and Deals</span>
      </BrandNeverOverpay.Advantages>
    </>
  );
};

BrandNeverOverpay.Advantages = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 400px;
  padding: 0 0 25px 0;

  ${breakpoint('xl')`
      max-width: 500px;
  `}

  & > span {
    font-weight: bold;
    font-size: 12px;
    color: #62707b;

    ${breakpoint('xl')`
      font-size: 13px;
      max-width: 300px;
    `}

    &:last-child {
      margin-right: 5px;
    }
  }
`;

BrandNeverOverpay.NeverOverpay = styled.div`
  width: 90%;

  h2 {
    font-size: 22px;
    font-weight: 700;
    color: #374b5a;
  }

  p {
    padding: 15px 0;
    font-weight: 500;
    font-size: 13px;
    color: #899197;
    line-height: 20px;
  }
`;

export default BrandNeverOverpay;
