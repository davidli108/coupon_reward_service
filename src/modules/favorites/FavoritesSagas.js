// @flow
import type { Saga } from 'redux-saga';
import { all, delay, put, takeLatest } from 'redux-saga/effects';

import { AUTHENTICATED } from '@modules/app/AppActions';

import { ADD_FAVORITE, fetchFavorites } from './FavoritesActions';

function* fetchFavoritesSaga(): Saga<void> {
  yield put(fetchFavorites());
}

function* fetchFavoritesSagaDebounce(): Saga<void> {
  yield delay(1000);
  yield put(fetchFavorites());
}

function* favoritesSagas(): Saga<void> {
  yield all([
    takeLatest(AUTHENTICATED, fetchFavoritesSagaDebounce),
    takeLatest(`${ADD_FAVORITE}_SUCCESS`, fetchFavoritesSaga),
  ]);
}

export default favoritesSagas;
