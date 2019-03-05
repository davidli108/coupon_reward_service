/* eslint-disable import/order */
// @flow
import type { Saga } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import appSagas from '@modules/app/AppSagas';

function* rootSaga(): Saga<void> {
  yield all([fork(appSagas)]);
}

export default rootSaga;
