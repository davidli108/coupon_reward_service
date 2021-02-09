// @flow
import { memo } from 'react';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import CouponCodeTable from './CouponCodeTable';
import styles from './CouponCodeTable.styles';

type CouponCodeDataType = {
  offerName: string,
  offerCode: string,
  expireDate: string,
};

export type CouponCodeTableProps = {
  t: Function,
  couponCodeData: CouponCodeDataType[],
};

styles(CouponCodeTable);

export default compose(withTranslation(), withRouter, memo)(CouponCodeTable);
