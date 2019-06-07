// @flow
import Loadable from 'react-loadable';
import { REHYDRATE } from 'redux-persist';
import type { Saga } from 'redux-saga';
import { all, fork, put, take, takeLatest } from 'redux-saga/effects';

import { SIGN_IN, SIGN_UP } from '@modules/auth/AuthActions';
import Cookie from 'js-cookie';

import { appAuthenticated, appBootstrap, BOOTSTRAP } from './AppActions';

function* appBootstrapSaga(): Saga<void> {
  yield put(appBootstrap());
}

function* appAuthenticatedSaga(): Saga<void> {
  // eslint-disable-next-line fp/no-loops
  while (true) {
    yield take([REHYDRATE, `${SIGN_IN}_SUCCESS`, `${SIGN_UP}_SUCCESS`]);
    const isAuthenticated = yield Cookie.get('cf');

    if (isAuthenticated) {
      yield put(appAuthenticated());
    }
  }
}

function* loadPages() {
  yield Loadable.preloadAll();
}

function* appSagas(): Saga<void> {
  yield all([
    takeLatest(REHYDRATE, appBootstrapSaga),
    takeLatest(BOOTSTRAP, loadPages),
    fork(appAuthenticatedSaga),
  ]);
}

export default appSagas;
