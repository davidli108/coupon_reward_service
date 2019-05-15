//@flow
import * as R from 'ramda';

import {
  FETCH_STORE_COUPONS,
  SEARCH,
  REQUEST_SEARCH,
  FETCH_STORE_COUPONS_BY_PAGINATION,
} from './StoreCouponsActions';

export const STATE_KEY = 'storeCoupons';
type StoreCouponsState = {};

const initialState = {
  fetchingState: null,
  offers: [],
  search: [],
  store: {
    id: '',
    name: '',
    description: '',
    cashbackText: '',
    logoPath: '',
    saleCount: '',
    codeCount: '',
  },
  additionalInfo: [],
  searchIsLoading: false,
  count: 0,
  reviews: 0,
};

const StoreCouponsReducer = (
  state: StoreCouponsState = initialState,
  action: Object,
) => {
  switch (action.type) {
    case `${FETCH_STORE_COUPONS}_START`: {
      return R.assoc<Object, Object>('fetchingState', 'FETCHING')(state);
    }
    case `${FETCH_STORE_COUPONS}_SUCCESS`: {
      const count: number = R.pathOr(0, ['payload', 'data', 'offers_count'])(
        action,
      );
      const offers = R.pathOr([], ['payload', 'data', 'offers_data'])(action);

      const store = R.compose(
        R.fromPairs,
        R.toPairs,
        R.path(['payload', 'data']),
      )(action);

      const reviews = R.pathOr(0, ['payload', 'data', 'cws_reviews'])(action);

      const additionalInfo = R.compose(
        R.fromPairs,
        R.filter(([key, value]) => R.match(/body|content$/g)(key).length !== 0),
        R.toPairs,
        R.path(['payload', 'data']),
      )(action);

      const newState = {
        ...state,
        offers,
        store,
        additionalInfo,
        count,
        reviews,
      };

      return R.assoc<Object, Object>('fetchingState', 'LOADED')(newState);
    }
    case `${FETCH_STORE_COUPONS_BY_PAGINATION}_SUCCESS`: {
      const offersData = R.pathOr([], ['payload', 'data', 'offers_data'])(
        action,
      );

      // $FlowFixMe
      const offers = R.concat(state.offers, offersData);

      const newState = {
        ...state,
        offers,
      };

      return R.assoc<Object, Object>('fetchingState', 'LOADED')(newState);
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
    case `${FETCH_STORE_COUPONS}_ERROR`: {
      return R.assoc<Object, Object>('fetchingState', 'ERROR')(state);
    }
    default: {
      return state;
    }
  }
};

export const getOffers = R.path<Object[]>([STATE_KEY, 'offers']);
export const getStore = R.path<Object>([STATE_KEY, 'store']);
export const getAdditionalInfo = R.path<Object[]>([
  STATE_KEY,
  'additionalInfo',
]);
export const getFetchingState = R.path<string>([STATE_KEY, 'fetchingState']);
export const getStoreSearch = R.path<string>([STATE_KEY, 'search']);
export const searchIsLoading = R.path<string>([STATE_KEY, 'searchIsLoading']);
export const getCountOffers = R.path<string>([STATE_KEY, 'count']);
export const getReviews = R.path<string>([STATE_KEY, 'reviews']);

export default StoreCouponsReducer;
