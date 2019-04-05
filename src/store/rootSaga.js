/* eslint-disable import/order */
// @flow
import type { Saga } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import appSagas from '@modules/app/AppSagas';
import couponsSagas from '@modules/coupons/CouponsSagas';
import storeSagas from '@modules/store/StoreSagas';
import storeCouponsSagas from '@modules/storeCoupons/StoreCouponsSagas';

function* rootSaga(): Saga<void> {
  yield all([
    fork(appSagas),
    fork(couponsSagas),
    fork(storeSagas),
    fork(storeCouponsSagas),
  ]);
}

export default rootSaga;
