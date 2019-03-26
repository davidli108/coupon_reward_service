// @flow
import * as R from 'ramda';

import { type Store, type Feature } from './models';
import {
  GET_STORE,
  SET_FILTER,
  SET_FILTER_CLEAR,
  SET_LOAD_MORE,
  LOAD_MORE_STATE,
} from './StoreActions';

export const STATE_KEY = 'store';

const FEATURE_ITEMS = 3;
const STORE_ITEMS = 6;
const STORE_ITEMS_LOAD = 4;

type StoresState = {
  filter: ?string,
  stores: Store[],
  featured: Feature[],
  loadState: number,
  loadToState: number,
};

const initialState: StoresState = {
  loadState: STORE_ITEMS,
  loadToState: STORE_ITEMS_LOAD,
  filter: null,
  stores: [],
  featured: [],
};

const StoreReducer = (state: StoresState = initialState, action: Object) => {
  switch (action.type) {
    case GET_STORE: {
      const offersData = R.compose(
        // R.indexBy(R.prop('offer_id')),
        R.pathOr([], ['payload', 'offers_data']),
      )(action);

      const featuredStores = R.compose(
        // R.indexBy(R.prop('store_id')),
        R.pathOr([], ['payload', 'featured_stores']),
      )(action);

      return R.compose(
        R.assoc<Object, Object>('featured', featuredStores),
        R.assoc<Object, Object>('stores', offersData),
      )(state);
    }
    case SET_FILTER: {
      return R.assoc<Object, Object>('filter', action.payload, state);
    }
    case SET_FILTER_CLEAR: {
      return R.assoc<Object, Object>('filter', null, state);
    }
    case SET_LOAD_MORE: {
      return R.assoc<Object, Object>('loadState', action.payload, state);
    }
    case LOAD_MORE_STATE: {
      return R.assoc<Object, Object>('loadToState', null, state);
    }
    default: {
      return state;
    }
  }
};

export const getLoadState = R.path<number>([STATE_KEY, 'loadState']);
export const getLoadToState = R.path<number>([STATE_KEY, 'loadToState']);
export const getStoreFilters = R.path<string>([STATE_KEY, 'filter']);

// $FlowFixMe
export const getStores = R.compose(
  R.values,
  R.path([STATE_KEY, 'stores']),
);
// $FlowFixMe
export const getStoresFeatured = R.compose(
  R.values,
  R.path([STATE_KEY, 'featured']),
);
// $FlowFixMe
export const getStoresAll = R.compose(
  R.values,
  R.path([STATE_KEY, 'stores']),
);

export const getFilteredStores = (state: Object) => {
  // const filter = getStoreFilters(state);
  const stores = getStores(state);
  const loadState = getLoadState(state);

  return R.compose(
    R.slice(0, loadState),
    // R.sort((a, b) => {
    //   if (a.newStore && !b.newStore) return -1;
    //   if (!a.newStore && b.newStore) return 1;
    //   return 0;
    // }),
    // R.filter(store =>
    //   filter ? R.prop<string, Object>('category', store) === filter : true,
    // ),
  )(stores);
};

export const getFeatured = (state: Object) => {
  // const filter = getStoreFilters(state);
  const featured = getStoresFeatured(state);

  return R.compose(
    R.slice(0, FEATURE_ITEMS),
    // R.filter(R.prop('isFeatured')),
    // R.filter(store =>
    //   filter ? R.prop<string, Object>('category', store) === filter : true,
    // ),
  )(featured);
};

export default StoreReducer;
