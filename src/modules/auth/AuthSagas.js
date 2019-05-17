// @flow
import type { Saga } from 'redux-saga';
import { all, put, takeLatest } from 'redux-saga/effects';

import { AUTHENTICATED } from '@modules/app/AppActions';

import { fetchUser } from './AuthActions';

function* fetchUserSaga(): Saga<void> {
  yield put(fetchUser());
}

function* authSagas(): Saga<void> {
  yield all([takeLatest(AUTHENTICATED, fetchUserSaga)]);
}

export default authSagas;
