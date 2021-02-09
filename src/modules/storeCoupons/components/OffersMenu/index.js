// @flow
import { memo } from 'react';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';

import OffersMenu from './OffersMenu';
import styles from './OffersMenu.styles';

export const OfferTypes = {
  BROWSE: 'browse',
  COUPONS: 'codes',
  DEALS: 'sales',
  CASHBACK: 'cashback',
  OVERVIEW: 'overview',
  FAQS: 'FAQs',
};

styles(OffersMenu);

export default compose(withTranslation(), memo)(OffersMenu);
