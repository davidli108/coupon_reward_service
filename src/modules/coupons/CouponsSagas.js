// @flow
import { all, put, debounce } from 'redux-saga/effects';

import type { Saga } from 'redux-saga';

import { REQUEST_SEARCH, onSearch } from './CouponsActions';

function* searchCoupons(action) {
  yield put(onSearch(action.payload));
}

function* couponsSagas(): Saga<void> {
  yield all([
    // $FlowFixMe
    debounce(500, REQUEST_SEARCH, searchCoupons),
  ]);
}

export default couponsSagas;
