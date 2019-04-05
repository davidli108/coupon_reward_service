//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import PiggyExtAd from './PiggyExtAd';
import BrandNeverOverpay from './BrandNeverOverpay';

import type { BrandContentProps } from '../models/StorePage';

const BrandContent = ({
  storeName,
  stars,
  reviewsCount,
}: BrandContentProps) => (
  <>
    <BrandContent.Wrapper>
      <BrandNeverOverpay storeName={storeName} />
    </BrandContent.Wrapper>
    <PiggyExtAd stars={stars} reviewsCount={reviewsCount} />
  </>
);

BrandContent.Wrapper = styled.div`
  ${breakpoint('md')`
    padding: 20px 20px 0 20px !important;
  `}
`;

export default BrandContent;
