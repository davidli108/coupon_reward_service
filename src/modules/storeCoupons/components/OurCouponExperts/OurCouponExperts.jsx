// @flow
import React from 'react';

import type { OurCouponExpertsProps } from './index';

const OurCouponExperts = ({ t, list }: OurCouponExpertsProps) => {
  if (!list) {
    return null;
  }

  const filteredList = list.filter(item => +item.value !== 0);

  if (filteredList.length === 0) {
    return null;
  }

  return (
    <OurCouponExperts.Wrapper>
      <OurCouponExperts.Title>
        {t('storeCoupons.ourCouponExperts.title')}
      </OurCouponExperts.Title>
      <OurCouponExperts.List>
        {filteredList.map(category => {
          return (
            <OurCouponExperts.ListItem
              key={`category-filter-desktop-${category.label}`}
            >
              <OurCouponExperts.ListItemLabelValue>
                {category.value}
              </OurCouponExperts.ListItemLabelValue>
              <OurCouponExperts.ListItemLabel>
                {category.label}
              </OurCouponExperts.ListItemLabel>
            </OurCouponExperts.ListItem>
          );
        })}
      </OurCouponExperts.List>
    </OurCouponExperts.Wrapper>
  );
};

export default OurCouponExperts;
