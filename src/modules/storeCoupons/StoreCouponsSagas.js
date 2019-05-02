// @flow
import { all, put, debounce } from 'redux-saga/effects';

import type { Saga } from 'redux-saga';

import { REQUEST_SEARCH, onSearch } from './StoreCouponsActions';

function* searchStores(action) {
  yield put(onSearch(action.payload));
}

function* storeCouponsSagas(): Saga<void> {
  yield all([
    // $FlowFixMe
    debounce(500, REQUEST_SEARCH, searchStores),
  ]);
}

export default storeCouponsSagas;
