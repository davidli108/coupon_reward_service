// @flow
import * as R from 'ramda';

import targetIcon from './assets/target.png';
import walmartIcon from './assets/walmart.png';
import macysIcon from './assets/macys.png';
import udemyIcon from './assets/udemy.png';
import verizonIcon from './assets/verizon.png';
import flowersIcon from './assets/flowers.png';

import { type Store, type Categories } from './models';
import { SET_FILTER, SET_CATEGORY, SET_FILTER_CLEAR, SET_SEARCH } from './StoreActions';

export const STATE_KEY = 'store';

type StoresState = {
  filter: ?string,
  stores: Store[],
  categories: Categories[],
  search: string,
};

const initialState: StoresState = {
  search: '',
  filter: null,
  stores: [
    {
      name: 'Target',
      logo: targetIcon,
      newStore: true,
      deals: 258456,
      offer: '+12% Cash Back',
      url: 'https://target.com',
      couponActive: true,
      category: 'Accessories',
    },
    {
      name: 'Welmart',
      logo: walmartIcon,
      newStore: true,
      deals: 258422,
      offer: '+1% Cash Back',
      url: 'https://welmart.com',
      couponActive: false,
      category: 'Beauty',
    },
    {
      name: 'Macus',
      logo: macysIcon,
      newStore: false,
      deals: 211156,
      offer: '+50% Cash Back',
      url: 'https://macus.com',
      couponActive: true,
      category: 'Clothing',
    },
    {
      name: 'Verizon',
      logo: verizonIcon,
      newStore: false,
      deals: 258456,
      offer: '+60% Cash Back',
      url: 'https://target.com',
      couponActive: false,
      category: 'Accessories',
    },
    {
      name: 'Udemy',
      logo: udemyIcon,
      newStore: false,
      deals: 111111,
      offer: '+30% Cash Back',
      url: 'https://macus.com',
      couponActive: true,
      category: 'Clothing',
    },
    {
      name: 'FLowers',
      logo: flowersIcon,
      newStore: true,
      deals: 222222,
      offer: '+1% Cash Back',
      url: 'https://welmart.com',
      couponActive: false,
      category: 'Beauty',
    },
  ],
  categories: [
    { title: 'Accessories', number: 101 },
    { title: 'Beauty', number: 200002 },
    { title: 'Clothing', number: 9991 },
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
    case SET_CATEGORY: {
      return R.assoc<Object, Object>('categories', action.payload, state);
    }
    case SET_SEARCH: {
      return R.assoc<Object, Object>('search', action.payload, state);
    }
    default: {
      return state;
    }
  }
};

export const getStoreCategories = R.path<Categories[]>([STATE_KEY, 'categories']);
export const getStoreSearch     = R.path<string>([STATE_KEY, 'search']);
export const getStoreFilters    = R.path<string>([STATE_KEY, 'filter']);
export const getStores          = R.path<Store[]>([STATE_KEY, 'stores']);
export const getFilteredStores  = (state: Object) => {
  const filter = getStoreFilters(state);
  const stores = getStores(state);
  // const search = getStoreSearch(state);

  return R.compose(
    R.sort((a, b) => {
      if (a.newStore && !b.newStore) return -1;
      if (!a.newStore && b.newStore) return 1;
      return 0;
    }),
    R.filter((store => filter ? R.prop<string, Object>('category', store) === filter : true)),
  )(stores);
};

export default StoreReducer;
