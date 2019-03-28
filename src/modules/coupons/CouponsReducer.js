//@flow
import * as R from 'ramda';

import type {
  CouponsReducerProps,
  FeaturedCoupon,
  Store,
  Deal,
  Categories,
} from './models/CouponsPage';

import {
  LOAD_MORE,
  SET_DEALS_FILTER,
  SET_FILTER_TYPE,
  GET_COUPONS,
} from './CouponsActions';

export const STATE_KEY = 'coupons';

const initialState: CouponsReducerProps = {
  dealsFilter: 'allDeals',
  categoriesFilter: null,
  storesFilter: null,
  search: '',
  featuredCoupon: {
    storeName: '',
    highestCashbackPercent: null,
    discountPercent: null,
    description: ``,
    isFavorited: false,
  },
  stores: [],
  categories: {
    categories: [
      { title: 'Accessories', value: 122 },
      { title: 'Automotive', value: 1222 },
      { title: 'Baby', value: 123 },
      { title: 'Beauty', value: 34 },
      { title: 'Books & Media', value: 58 },
      { title: 'Business & Office', value: 0 },
      { title: 'Cell Phones', value: 54 },
      { title: 'Clothing', value: 212 },
      { title: 'Computers', value: 39 },
      { title: 'Department Stores', value: 74 },
    ],
    stores: [
      { title: 'Macy`s', value: 12 },
      { title: 'Sears', value: 13 },
      { title: 'Udemy', value: 14 },
      { title: 'Verizon', value: 15 },
      { title: 'Wallgreens', value: 16 },
    ],
  },
  deals: [],
};

const CouponsReducer = (
  state: CouponsReducerProps = initialState,
  action: Object,
) => {
  switch (action.type) {
    case `${LOAD_MORE}_SUCCESS`: {
      // $FlowFixMe
      const offersData = R.pathOr(
        [],
        ['payload', 'data', 'offers_data'],
        action,
      );
      // $FlowFixMe
      const data = R.concat(state.stores, offersData);

      return R.assoc<Object, Object>('stores', data, state);
    }
    case `${GET_COUPONS}_SUCCESS`: {
      // $FlowFixMe
      const offersData = R.pathOr(
        [],
        ['payload', 'data', 'offers_data'],
        action,
      );

      return R.assoc<Object, Object>('stores', offersData, state);
    }
    case SET_DEALS_FILTER: {
      return R.assoc<Object, Object>(
        'dealsFilter',
        R.path(['payload'], action),
      )(state);
    }
    case SET_FILTER_TYPE: {
      const [filterType, filterValue] = R.path(['payload'], action).split('_');
      return R.assoc<Object, Object>(`${filterType}Filter`, filterValue, state);
    }
    default: {
      return state;
    }
  }
};

export const getFeaturedCoupon = R.path<FeaturedCoupon>([
  STATE_KEY,
  'featuredCoupon',
]);
// $FlowFixMe
export const getOffersData = R.compose(
  R.values,
  R.path([STATE_KEY, 'offersData']),
);
// $FlowFixMe
export const getStores = (state: Object) =>
  // $FlowFixMe
  R.uniqBy(i => i.store_id, state.coupons.stores);
export const getCoupons = (state: Object) => state.coupons.stores;
export const getCategories = R.path<Categories>([STATE_KEY, 'categories']);
export const getDeals = R.path<Deal[]>([STATE_KEY, 'deals']);
export const getDealsFilter = R.path<string>([STATE_KEY, 'dealsFilter']);
export const getStoreSearch = R.path<string>([STATE_KEY, 'search']);

// $FlowFixMe
export const getStoresAll = R.compose(
  R.values,
  R.path([STATE_KEY, 'stores']),
);

export const getLoadState = R.path<Store[]>([STATE_KEY, 'loadState']);

export const getCategoryFilter = R.path<string>([
  STATE_KEY,
  'categoriesFilter',
]);

export const getStoresFilter = R.path<string>([STATE_KEY, 'storesFilter']);

export const getFilteredDeals = (state: Object) => {
  if (state.coupons.dealsFilter === 'allDeals') {
    return getCoupons(state);
  } else if (state.coupons.dealsFilter === 'onlyCoupons') {
    return R.filter(i => i.coupon_code !== '', getCoupons(state));
  }

  return null;
};

export default CouponsReducer;
