//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import type { BrandNeverOverpayProps } from '../models/StorePage';

const BrandNeverOverpay = ({ t, i18n, storeName }: BrandNeverOverpayProps) => {
  const addChromeLink = `https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba?hl=${
    i18n.language
  }`;

  return (
    <>
      <BrandNeverOverpay.NeverOverpay>
        <h2>
          {t('storeCoupons.neverOverlay')} {storeName}
        </h2>
        <p>
          {t('storeCoupons.automaticalyAddAll').replace('storeName', storeName)}
        </p>
      </BrandNeverOverpay.NeverOverpay>
      <BrandNeverOverpay.Advantages>
        <a href={addChromeLink} target="_blank" rel="noopener noreferrer">
          Automatic Coupons
        </a>
        <span>-</span>
        <a href={addChromeLink} target="_blank" rel="noopener noreferrer">
          Price Check
        </a>
        <span>-</span>
        <a href={addChromeLink} target="_blank" rel="noopener noreferrer">
          Secret Rates and Deals
        </a>
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
      max-width: 400px;
  `}

  & > span,
  > a {
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

  a:hover {
    color: #40c8e5;
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

export default withTranslation()(BrandNeverOverpay);
