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
  FETCH_CATEGORIES,
  GET_COUPONS_BY_CATEGORY,
  GET_COUPONS,
  SEARCH,
  REQUEST_SEARCH,
  RESET_COUPONS,
} from './CouponsActions';

export const STATE_KEY = 'coupons';

const initialState: CouponsReducerProps = {
  dealsFilter: 'allDeals',
  categoriesFilter: null,
  storesFilter: null,
  search: [],
  featuredCoupon: {
    storeName: '',
    highestCashbackPercent: null,
    discountPercent: null,
    description: ``,
    isFavorited: false,
  },
  stores: [],
  categories: {},
  deals: [],
  searchIsLoading: false,
  offersCount: 0,
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

      const offersCount = R.pathOr(
        0,
        ['payload', 'data', 'offers_count'],
        action,
      );

      return R.compose(
        R.assoc<Object, Object>('stores', offersData),
        R.assoc<Object, Object>('offersCount', offersCount),
      )(state);
    }
    case RESET_COUPONS: {
      return R.assoc<Object, Object>('stores', [], state);
    }
    case `${FETCH_CATEGORIES}_SUCCESS`: {
      const data = {
        categories: R.pathOr([], ['payload', 'data', 'categories'], action),
        stores: R.pathOr([], ['payload', 'data', 'featured_stores'], action),
      };

      return R.assoc<Object, Object>('categories', data, state);
    }
    case `${GET_COUPONS_BY_CATEGORY}_SUCCESS`: {
      const offersData = R.pathOr(
        [],
        ['payload', 'data', 'offers_data'],
        action,
      );

      const offersCount = R.pathOr(
        0,
        ['payload', 'data', 'offers_count'],
        action,
      );

      return R.compose(
        R.assoc<Object, Object>('stores', offersData),
        R.assoc<Object, Object>('offersCount', offersCount),
      )(state);
    }
    case REQUEST_SEARCH: {
      return R.assoc<Object, Object>('searchIsLoading', false, state);
    }

    case `${SEARCH}_SUCCESS`: {
      return R.compose(
        R.assoc<Object, Object>('search', action.payload.data),
        R.assoc<Object, Object>('searchIsLoading', true),
      )(state);
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
export const searchIsLoading = R.path<string>([STATE_KEY, 'searchIsLoading']);

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

export const getOffersCount = R.path<string>([STATE_KEY, 'offersCount']);

export const getFilteredDeals = (state: Object) => {
  if (state.coupons.dealsFilter === 'allDeals') {
    return getCoupons(state);
  } else if (state.coupons.dealsFilter === 'onlyCoupons') {
    return R.filter(i => i.coupon_code !== '', getCoupons(state));
  }

  return null;
};

export default CouponsReducer;
