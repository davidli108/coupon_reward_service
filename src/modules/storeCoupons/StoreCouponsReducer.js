//@flow
import * as R from 'ramda';

import { FETCH_STORE_COUPONS } from './StoreCouponsActions';

export const STATE_KEY = 'storeCoupons';
type StoreCouponsState = {};

const initialState = {
  fetchingState: null,
  offers: [],
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
      const offers = R.pathOr([], ['payload', 'data', 'offers_data'])(action);

      const store = R.compose(
        R.fromPairs,
        R.filter(
          ([key, value]) =>
            R.match(
              /stores?_(id|name|description|cashback_text|logo_image_path|sale_count|code_count)/g,
            )(key).length !== 0,
        ),
        R.toPairs,
        R.path(['payload', 'data']),
      )(action);

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
      };

      return R.assoc<Object, Object>('fetchingState', 'LOADED')(newState);
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

export default StoreCouponsReducer;
