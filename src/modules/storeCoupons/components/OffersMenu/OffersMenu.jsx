// @flow
import React from 'react';

import type { OffersMenuProps } from '../../models/StorePage';
import { OfferTypes } from './index';
import { getLocale } from '@modules/localization/i18n';

const OffersMenu = ({
  t,
  storeName,
  activeItem = OfferTypes.BROWSE,
  hideCashBackRate = false,
  onChange,
}: OffersMenuProps) => {
  const menuItems = [
    {
      key: OfferTypes.BROWSE,
      label: t('storeCoupons.offersMenu.browse', { storeName }),
    },
    {
      key: OfferTypes.COUPONS,
      label: t('storeCoupons.offersMenu.coupons'),
    },
    {
      key: OfferTypes.DEALS,
      label: t('storeCoupons.offersMenu.deals'),
    },
    {
      key: OfferTypes.OVERVIEW,
      label: t('storeCoupons.offersMenu.overview'),
    },
    {
      key: OfferTypes.FAQS,
      label: t('storeCoupons.offersMenu.faqs'),
    },
  ];

  menuItems.splice(getLocale() === 'en' ? 3 : 1, 0, {
    key: OfferTypes.CASHBACK,
    label: t('storeCoupons.offersMenu.cashback'),
  });

  return (
    <>
      <OffersMenu.Wrapper>
        {menuItems
          .filter(
            item => !(item.key === OfferTypes.CASHBACK && hideCashBackRate),
          )
          .map(item => (
            <OffersMenu.Item
              className={activeItem === item.key ? 'active' : ''}
              key={item.key}
              onClick={() => onChange(item.key)}
            >
              {item.label}
            </OffersMenu.Item>
          ))}
      </OffersMenu.Wrapper>
    </>
  );
};

export default OffersMenu;
