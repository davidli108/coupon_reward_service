// @flow
import Loadable from 'react-loadable';
import { REHYDRATE } from 'redux-persist';
import type { Saga } from 'redux-saga';
import { all, put, takeLatest, fork } from 'redux-saga/effects';

import { appBootstrap, BOOTSTRAP } from './AppActions';
import { fetchUser } from '../auth/AuthActions';

function* appBootstrapSaga(): Saga<void> {
  yield put(appBootstrap());
}

function* userAuth(): Saga<void> {
  yield put(fetchUser());
}

function* loadPages() {
  yield Loadable.preloadAll();
}

function* appSagas(): Saga<void> {
  yield all([
    takeLatest(REHYDRATE, appBootstrapSaga),
    fork(userAuth),
    takeLatest(BOOTSTRAP, loadPages),
  ]);
}

export default appSagas;
