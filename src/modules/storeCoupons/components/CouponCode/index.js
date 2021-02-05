// @flow
import { memo } from 'react';
import CouponCode from './CouponCode';
import { withRouter } from 'react-router-dom';

import styles from './CouponCode.styles';

export type CouponCodeProps = {
  t: Function,
  match?: Object,
  i18n: Object,
  code?: string,
  link: string,
  store: string,
  logo: string,
  isAuthenticated?: boolean,
  isExtensionInstalled: boolean,
  isVisit: boolean,
  isCashbackRate?: boolean,
};

styles(CouponCode);

export default memo<any>(withRouter(CouponCode));
