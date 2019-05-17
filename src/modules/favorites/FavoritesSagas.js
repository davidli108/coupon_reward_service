// @flow
import type { Saga } from 'redux-saga';
import { all, put, takeLatest } from 'redux-saga/effects';

import { AUTHENTICATED } from '@modules/app/AppActions';

import { fetchFavorites } from './FavoritesActions';

function* fetchFavoritesSaga(): Saga<void> {
  yield put(fetchFavorites());
}

function* favoritesSagas(): Saga<void> {
  yield all([takeLatest(AUTHENTICATED, fetchFavoritesSaga)]);
}

export default favoritesSagas;
