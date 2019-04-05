// @flow
import { all, put, debounce } from 'redux-saga/effects';

import type { Saga } from 'redux-saga';

import { REQUEST_SEARCH, onSearch } from './StoreActions';

function* searchStore(action) {
  yield put(onSearch(action.payload));
}

function* storesSagas(): Saga<void> {
  yield all([
    // $FlowFixMe
    debounce(300, REQUEST_SEARCH, searchStore),
  ]);
}

export default storesSagas;
