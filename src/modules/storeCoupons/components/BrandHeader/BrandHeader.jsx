// @flow
import React from 'react';

import type { BrandHeaderProps } from './index';

const BrandHeader = ({
  t,
  store,
  counterList,
}: BrandHeaderProps) => {
  return (
    <>
      <BrandHeader.Name>
        {t('storeCoupons.codesAndDeals', { storeName: store.store_name })}
      </BrandHeader.Name>
      <BrandHeader.CounterList>
        {counterList
          .filter(
            item =>
              item.value && parseInt(item.value.replace(/[^0-9]/g, '')) > 0,
          )
          .map(item => (
            <BrandHeader.CounterListItem key={`${item.label}-${item.value}`}>
              <BrandHeader.CounterListItemValue>
                {item.value}
              </BrandHeader.CounterListItemValue>
              <BrandHeader.CounterListItemLabel>
                {item.label}
              </BrandHeader.CounterListItemLabel>
            </BrandHeader.CounterListItem>
          ))}
      </BrandHeader.CounterList>
    </>
  );
};

export default BrandHeader;
