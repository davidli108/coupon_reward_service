// @flow
import { push } from 'connected-react-router';
import * as R from 'ramda';
import { all, put, debounce, takeLatest } from 'redux-saga/effects';

import type { Saga } from 'redux-saga';

import {
  REQUEST_SEARCH,
  FETCH_STORE_COUPONS,
  onSearch,
} from './StoreCouponsActions';

function* searchStores(action) {
  yield put(onSearch(action.payload));
}

function* redirectOnLoadError(action) {
  const error = R.path(['payload', 'data', 'error'], action);

  if (error) {
    yield put(push('/coupons'));
  }
}

function* storeCouponsSagas(): Saga<void> {
  yield all([
    // $FlowFixMe
    debounce(500, REQUEST_SEARCH, searchStores),
    takeLatest(`${FETCH_STORE_COUPONS}_SUCCESS`, redirectOnLoadError),
  ]);
}

export default storeCouponsSagas;
