// @flow
import * as R from 'ramda';

import { type Store, type Feature } from './models';
import {
  GET_STORE,
  SET_FILTER,
  SET_FILTER_CLEAR,
  SET_LOAD_MORE,
  LOAD_MORE_STATE,
  ON_SEARCH,
} from './StoreActions';

export const STATE_KEY = 'store';

const FEATURE_ITEMS = 3;

type StoresState = {
  filter: ?string,
  stores: Store[],
  featured: Feature[],
};

const initialState: StoresState = {
  filter: null,
  stores: [],
  featured: [],
  search: [],
};

const StoreReducer = (state: StoresState = initialState, action: Object) => {
  switch (action.type) {
    case `${GET_STORE}_SUCCESS`: {
      const storesData = R.compose(
        R.pathOr([], ['payload', 'data', 'stores_data']),
      )(action);

      const featuredStores = R.compose(
        // R.indexBy(R.prop('store_id')),
        R.pathOr([], ['payload', 'data', 'featured_stores']),
      )(action);

      return R.compose(
        R.assoc<Object, Object>('featured', featuredStores),
        R.assoc<Object, Object>('stores', storesData),
      )(state);
    }
    case SET_FILTER: {
      return R.assoc<Object, Object>('filter', action.payload, state);
    }
    case SET_FILTER_CLEAR: {
      return R.assoc<Object, Object>('filter', null, state);
    }
    case `${SET_LOAD_MORE}_SUCCESS`: {
      const storesData = R.compose(
        R.pathOr([], ['payload', 'data', 'stores_data']),
      )(action);

      // $FlowFixMe
      return R.assoc<Object, Object>(
        'stores',
        R.concat(state.stores, storesData),
        state,
      );
    }
    case `${ON_SEARCH}_SUCCESS`: {
      return R.assoc<Object, Object>('search', action.payload.data, state);
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
export const getStoreSearch = R.path<string>([STATE_KEY, 'search']);

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
