// @flow
import * as R from 'ramda';

import targetIcon from './assets/target.png';
import walmartIcon from './assets/walmart.png';
import macysIcon from './assets/macys.png';

import { type Store } from './models';
import { SET_FILTER } from './StoreActions';

export const STATE_KEY = 'store';

type StoresState = {
  filter: ?string,
  stores: Store[],
};

const initialState: StoresState = {
  filter: null,
  stores: [{
      name: 'Target',
      logo: targetIcon,
      newStore: true,
      deals: 258456,
      offer: '+12% Cash Back',
      url: 'https://target.com',
      couponActive: true,
    },
    {
      name: 'Welmart',
      logo: walmartIcon,
      newStore: true,
      deals: 258422,
      offer: '+1% Cash Back',
      url: 'https://welmart.com',
      couponActive: false,
    },
    {
      name: 'Macus',
      logo: macysIcon,
      newStore: false,
      deals: 211156,
      offer: '+50% Cash Back',
      url: 'https://macus.com',
      couponActive: true,
    },
  ],
};

const StoreReducer = (state: StoresState = initialState, action: Object) => {
  switch (action.type) {
    case SET_FILTER: {
      return R.assoc<Object, Object>('filter', action.payload, state);
    }
    default: {
      return state;
    }
  }
};

export const getStoreFilters = R.path<string>([STATE_KEY, 'filter']);
export const getStores       = R.path<Store[]>([STATE_KEY, 'stores']);
export const getFilteredStores = (state: Object) => {
  const filter = getStoreFilters(state);
  const stores = getStores(state);

  if (!filter) {
    return stores;
  }
  // $FlowFixMe
  return R.filter((store => R.prop<string>('category', store) === filter), stores);
};

export default StoreReducer;
