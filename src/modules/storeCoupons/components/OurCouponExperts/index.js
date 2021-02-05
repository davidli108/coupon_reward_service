// @flow
import { memo } from 'react';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';

import OurCouponExperts from './OurCouponExperts';
import styles from './OurCouponExperts.styles';

export type OurCouponExpertsListItemType = {
  label: string,
  value: string | number,
};

export type OurCouponExpertsProps = {
  t: Function,
  list: OurCouponExpertsListItemType[],
};

styles(OurCouponExperts);

export default compose(withTranslation(), memo)(OurCouponExperts);
