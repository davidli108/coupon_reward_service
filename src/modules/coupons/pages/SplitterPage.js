// @flow
import * as R from 'ramda';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { isCouponCategory } from '@config/CategoriesConfig';
import StorePage from '@modules/storeCoupons/pages/StorePage';

import CouponsPage from './CouponsPage';

type SplitterPageType = {
  match: Object,
};

const SplitterPage = ({ match }: SplitterPageType) =>
  isCouponCategory(R.pathOr('', ['params', 'name'], match)) ? (
    <CouponsPage />
  ) : (
    <StorePage />
  );

export default withRouter(SplitterPage);
