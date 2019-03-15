//@flow
import * as React from 'react';

import PiggyExtAd from './PiggyExtAd';
import BrandNeverOverpay from './BrandNeverOverpay';

import type { BrandContentProps } from '../models/StorePage';

const BrandContent = ({
  storeName,
  stars,
  reviewsCount,
}: BrandContentProps) => (
  <>
    <div>
      <BrandNeverOverpay storeName={storeName} />
    </div>
    <PiggyExtAd stars={stars} reviewsCount={reviewsCount} />
  </>
);

export default BrandContent;
