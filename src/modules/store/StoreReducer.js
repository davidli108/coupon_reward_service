// @flow
import * as R from 'ramda';

import targetIcon from './assets/target.png';
import walmartIcon from './assets/walmart.png';
import macysIcon from './assets/macys.png';
import udemyIcon from './assets/udemy.png';
import verizonIcon from './assets/verizon.png';
import flowersIcon from './assets/flowers.png';

import { type Store } from './models';
import {
  SET_FILTER,
  SET_FILTER_CLEAR,
  SET_SEARCH_CLEAR,
  SET_SEARCH,
  SET_LOAD_MORE,
  LOAD_MORE_STATE,
} from './StoreActions';

export const STATE_KEY = 'store';

const FEATURE_ITEMS = 3;
const STORE_ITEMS = 6;
const STORE_ITEMS_LOAD = 1;

type StoresState = {
  filter: ?string,
  stores: Store[],
  search: string,
  loadState: number,
  loadToState: number,
};

const initialState: StoresState = {
  loadState: STORE_ITEMS,
  loadToState: STORE_ITEMS_LOAD,
  search: '',
  filter: null,
  stores: [
    {
      name: 'Target',
      logo: targetIcon,
      newStore: true,
      deals: 258456,
      offer: '12',
      url: 'https://target.com',
      couponActive: true,
      category: 'Accessories',
      isFeatured: true,
    },
    {
      name: 'Welmart',
      logo: walmartIcon,
      newStore: true,
      deals: 258422,
      offer: '1',
      url: 'https://welmart.com',
      couponActive: false,
      category: 'Beauty',
      isFeatured: false,
    },
    {
      name: 'Macus',
      logo: macysIcon,
      newStore: false,
      deals: 211156,
      offer: '50',
      url: 'https://macus.com',
      couponActive: true,
      category: 'Clothing',
      isFeatured: true,
    },
    {
      name: 'Verizon',
      logo: verizonIcon,
      newStore: false,
      deals: 258456,
      offer: '60',
      url: 'https://target.com',
      couponActive: false,
      category: 'Accessories',
      isFeatured: false,
    },
    {
      name: 'Udemy',
      logo: udemyIcon,
      newStore: false,
      deals: 111111,
      offer: '30',
      url: 'https://macus.com',
      couponActive: true,
      category: 'Clothing',
      isFeatured: true,
    },
    {
      name: 'FLowers',
      logo: flowersIcon,
      newStore: true,
      deals: 222222,
      offer: '1',
      url: 'https://welmart.com',
      couponActive: false,
      category: 'Beauty',
      isFeatured: false,
    },
    // LOAD MORE
    {
      name: 'Verizon1',
      logo: verizonIcon,
      newStore: false,
      deals: 258456,
      offer: '60',
      url: 'https://target.com',
      couponActive: false,
      category: 'Accessories',
      isFeatured: true,
    },
    {
      name: 'Udemy1',
      logo: udemyIcon,
      newStore: false,
      deals: 111111,
      offer: '30',
      url: 'https://macus.com',
      couponActive: true,
      category: 'Clothing',
      isFeatured: false,
    },
    {
      name: 'FLowers1',
      logo: flowersIcon,
      newStore: true,
      deals: 222222,
      offer: '1',
      url: 'https://welmart.com',
      couponActive: false,
      category: 'Beauty',
      isFeatured: true,
    },
  ],
};

const StoreReducer = (state: StoresState = initialState, action: Object) => {
  switch (action.type) {
    case SET_FILTER: {
      return R.assoc<Object, Object>('filter', action.payload, state);
    }
    case SET_FILTER_CLEAR: {
      return R.assoc<Object, Object>('filter', null, state);
    }
    case SET_SEARCH_CLEAR: {
      return R.assoc<Object, Object>('search', '', state);
    }
    case SET_SEARCH: {
      return R.assoc<Object, Object>('search', action.payload, state);
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

export const getStoreSearch = R.path<string>([STATE_KEY, 'search']);
export const getStoreFilters = R.path<string>([STATE_KEY, 'filter']);
export const getStores = R.path<Store[]>([STATE_KEY, 'stores']);
export const getStoresAll = R.path<Store[]>([STATE_KEY, 'stores']);

export const getFilteredStores = (state: Object) => {
  const filter = getStoreFilters(state);
  const stores = getStores(state);
  const loadState = getLoadState(state);

  return R.compose(
    R.slice(0, loadState),
    R.sort((a, b) => {
      if (a.newStore && !b.newStore) return -1;
      if (!a.newStore && b.newStore) return 1;
      return 0;
    }),
    R.filter(store =>
      filter ? R.prop<string, Object>('category', store) === filter : true,
    ),
  )(stores);
};

export const getFeatured = (state: Object) => {
  const filter = getStoreFilters(state);
  const stores = getStores(state);

  return R.compose(
    R.slice(0, FEATURE_ITEMS),
    R.filter(R.prop('isFeatured')),
    R.filter(store =>
      filter ? R.prop<string, Object>('category', store) === filter : true,
    ),
  )(stores);
};

export default StoreReducer;
