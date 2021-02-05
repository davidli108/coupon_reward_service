// @flow
import * as React from 'react';
import PiggyExtAd from '../PiggyExtAd';

import type { BrandContentProps } from '../../models/StorePage';

const BrandContent = ({
  t = (value: string, options: Object) => {},
  stars,
  reviewsCount,
  offersCount,
}: BrandContentProps) => (
  <>
    <BrandContent.Wrapper>
      {offersCount > 2
        ? t('storeCoupons.applyAllCouponsWithNumber', {
            couponsNumber: offersCount,
          })
        : t('storeCoupons.applyAllCoupons')}
    </BrandContent.Wrapper>
    <PiggyExtAd stars={stars} reviewsCount={reviewsCount} />
  </>
);

export default BrandContent;
