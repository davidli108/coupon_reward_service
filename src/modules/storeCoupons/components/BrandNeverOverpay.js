//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { MdKeyboardArrowUp } from 'react-icons/md';

import type { BrandNeverOverpayProps } from '../models/StorePage';

const BrandNeverOverpay = ({ storeName }: BrandNeverOverpayProps) => {
  const [isCovered, setCovered] = React.useState(true);
  const handleCoveredToggler = () => setCovered(!isCovered);

  return (
    <>
      <BrandNeverOverpay.Cover>
        <BrandNeverOverpay.NeverOverpay isCovered={isCovered}>
          <h2>Never Overpay Again at {storeName}</h2>
          <p>
            Automatically add all active coupons to your order with Piggy's
            browser extension. When you get to checkout, Piggy will find coupons
            and cash back at {storeName} and more.
          </p>
        </BrandNeverOverpay.NeverOverpay>
        <span onClick={handleCoveredToggler}>
          {isCovered ? 'See More' : <MdKeyboardArrowUp />}
        </span>
      </BrandNeverOverpay.Cover>
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

BrandNeverOverpay.Cover = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    ${breakpoint('xl')`
      display: none;
    `}

    text-align: center;
    font-weight: bold;
    line-height: 20px;
    margin-top: 5px;
    font-size: 13px;
    color: #899197;
    cursor: pointer;
  }
`;

BrandNeverOverpay.Advantages = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 15px 0 25px 0;

  ${breakpoint('xl')`
      max-width: 500px;
  `}

  & > span {
    font-weight: bold;
    font-size: 10px;
    color: #62707b;

    ${breakpoint('xl')`
      font-size: 13px;
      max-width: 300px;
    `}

    &:first-child {
      margin-left: 5px;
    }

    &:last-child {
      margin-right: 5px;
    }
  }
`;

BrandNeverOverpay.NeverOverpay = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: ${({ isCovered }) => (isCovered ? '87px' : 'auto')};

  overflow: hidden;

  ${breakpoint('xl')`
    height: auto;
  `}

  > h2 {
    position: relative;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    color: #374b5a;
    ${breakpoint('xl')`
      text-align: start;
    `}

    padding-top: 15px;

    ${({ isCovered }) =>
      isCovered
        ? `
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 55px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.496207) 0%, #fff 100%);
      }
    `
        : ''}

    &::after {
      ${breakpoint('xl')`
        display: none;
      `}
    }
  }

  > p {
    padding: 15px;
    font-weight: 500;
    font-size: 13px;
    color: #899197;
    line-height: 20px;

    ${breakpoint('xl')`
      max-width: 600px;
      padding: 15px 0;
    `}
  }
`;

export default BrandNeverOverpay;
