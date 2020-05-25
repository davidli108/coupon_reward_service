// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import { MdKeyboardArrowUp } from 'react-icons/md';
import AppConfig from '@config/AppConfig';
import { isAmazonStore } from '@config/Utils';
import type { BrandNeverOverpayProps } from '../models/StorePage';

const BrandNeverOverpay = ({ t, i18n, storeName }: BrandNeverOverpayProps) => {
  const [isCovered, setCovered] = useState(true);
  const handleCoveredToggler = () => setCovered(!isCovered);
  const [isAmazon, setIsAmazon] = useState(false);

  const addChromeLink = `${AppConfig.extension.url}?hl=${i18n.language}`;

  useEffect(() => {
    if (isAmazonStore(storeName)) {
      setIsAmazon(true);
    }
  }, [storeName]);

  return (
    <>
      <BrandNeverOverpay.Cover>
        <BrandNeverOverpay.NeverOverpay isCovered={isCovered}>
          <h2>
            {isAmazon
              ? t('storeCoupons.getBestPrice')
              : t('storeCoupons.neverOverlay', { storeName })}
          </h2>
          <p>
            {isAmazon
              ? t('storeCoupons.alertAutomatically', { storeName })
              : t('storeCoupons.automaticallyAddAll', { storeName })}
          </p>
        </BrandNeverOverpay.NeverOverpay>
        <span onClick={handleCoveredToggler}>
          {isCovered ? 'See More' : <MdKeyboardArrowUp />}
        </span>
      </BrandNeverOverpay.Cover>

      <BrandNeverOverpay.Advantages>
        {!isAmazon && (
          <>
            <a href={addChromeLink} target="_blank" rel="noopener noreferrer">
              {t('storeCoupons.automaticCoupons')}
            </a>
            <span>-</span>
            <a href={addChromeLink} target="_blank" rel="noopener noreferrer">
              {t('storeCoupons.priceCheck')}
            </a>
            <span>-</span>
            <a href={addChromeLink} target="_blank" rel="noopener noreferrer">
              {t('storeCoupons.secretRates')}
            </a>
          </>
        )}
      </BrandNeverOverpay.Advantages>
    </>
  );
};

BrandNeverOverpay.Cover = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    ${breakpoint('sx')`
      display: none;
    `}

    text-align: center;
    font-weight: bold;
    line-height: 20px;
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 13px;
    color: #899197;
    cursor: pointer;
    text-decoration: underline;
  }
`;

BrandNeverOverpay.Advantages = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  min-width: 250px;
  margin: 0 auto;
  max-width: 400px;

  ${breakpoint('xl')`
    text-align: left;
    max-width: 430px;
  `}

  & > span,
  > a {
    font-weight: bold;
    font-size: 10px;
    color: #62707b;

    ${breakpoint('sx')`
      font-size: 13px;
    `}

    ${breakpoint('xl')`
      font-size: 13px;
      max-width: 300px;
    `}

    &:last-child {
      margin-right: 5px;
    }
  }

  a {
    min-width: 50px;
    padding: 0 !important;
  }

  a:hover {
    color: #40c8e5;
  }

  ${breakpoint('sx')`
    text-align: left;
    margin: 0;
    padding: 0 0 25px 0;
  `}

  @media (min-width: 768px) {
    display: block;

    & > span {
      margin: 0 5%;
    }
  }

  @media (min-width: 1024px) {
    display: flex;

    & > span {
      margin: auto;
    }
  }
`;

BrandNeverOverpay.NeverOverpay = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: ${({ isCovered }) => (isCovered ? '87px' : 'auto')};

  overflow: hidden;

  ${breakpoint('sx')`
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
      ${breakpoint('sx')`
        display: none;
      `}
    }

    ${breakpoint('sx')`
      text-align: center;
    `}

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  > p {
    padding: 15px;
    font-weight: 500;
    font-size: 13px;
    color: #899197;
    line-height: 20px;
    text-align: center;

    ${breakpoint('sx')`
      max-width: 600px;
      padding: 15px 0;
      text-align: left;
    `}
  }
`;

export default withTranslation()(BrandNeverOverpay);
