// @flow
import Loadable from 'react-loadable';
import { REHYDRATE } from 'redux-persist';
import type { Saga } from 'redux-saga';
import { all, put, takeLatest } from 'redux-saga/effects';

import { appBootstrap, BOOTSTRAP } from './AppActions';

function* appBootstrapSaga(): Saga<void> {
  yield put(appBootstrap());
}

function* loadPages() {
  yield Loadable.preloadAll();
}

function* appSagas(): Saga<void> {
  yield all([
    takeLatest(REHYDRATE, appBootstrapSaga),
    takeLatest(BOOTSTRAP, loadPages),
  ]);
}

export default appSagas;
