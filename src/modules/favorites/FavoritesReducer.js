// @flow
import * as R from 'ramda';

import { LOGOUT } from '@modules/auth/AuthActions';

import {
  FETCH_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from './FavoritesActions';

export const STATE_KEY = 'favorites';

const initialState = {
  data: {},
};

type FavoritesReducerState = {
  data: any,
};

const FavoritesReducer = (
  state: FavoritesReducerState = initialState,
  action: Object,
) => {
  switch (action.type) {
    case `${FETCH_FAVORITES}_SUCCESS`: {
      const stores = R.compose(
        R.indexBy(R.prop('store_id')),
        R.defaultTo([]),
        R.pathOr([], ['payload', 'data']),
      )(action);

      return R.assoc<any, any, any>('data', stores, state);
    }
    case `${ADD_FAVORITE}_SUCCESS`: {
      const storeId = R.path(
        ['meta', 'previousAction', 'payload', 'storeId'],
        action,
      );
      return R.assocPath<any, any, any>(['data', storeId], {}, state);
    }
    case `${REMOVE_FAVORITE}_SUCCESS`: {
      const storeId = R.path(
        ['meta', 'previousAction', 'payload', 'storeId'],
        action,
      );
      return R.dissocPath<any, any>(['data', storeId], state);
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

// $FlowFixMe
export const getFavorites = R.compose(
  R.values,
  R.pathOr({}, [STATE_KEY, 'data']),
);
// $FlowFixMe
export const getFavoritesMap = R.pathOr({}, [STATE_KEY, 'data']);
// $FlowFixMe
export const getIsFavorite = (state, storeId) =>
  Boolean(R.path([STATE_KEY, 'data', storeId], state));

export default FavoritesReducer;
