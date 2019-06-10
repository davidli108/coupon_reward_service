// @flow
import * as R from 'ramda';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import ReduxPersist from '@config/ReduxPersist';
import AppReducer, {
  STATE_KEY as APP_STATE_KEY,
} from '@modules/app/AppReducer';
import AuthReducer, {
  STATE_KEY as AUTH_STATE_KEY,
} from '@modules/auth/AuthReducer';
import CouponsReducer, {
  STATE_KEY as COUPONS_STATE_KEY,
} from '@modules/coupons/CouponsReducer';
import FavoritesReducer, {
  STATE_KEY as FAVORITES_STATE_KEY,
} from '@modules/favorites/FavoritesReducer';
import RouterReducer, {
  STATE_KEY as ROUTER_STATE_KEY,
} from '@modules/router/RouterReducer';
import StoreCouponsReducer, {
  STATE_KEY as STORE_COUPONS_STATE_KEY,
} from '@modules/storeCoupons/StoreCouponsReducer';
import StoreReducer, {
  STATE_KEY as STORE_STATE_KEY,
} from '@modules/store/StoreReducer';

const persist = R.curry(persistReducer)(ReduxPersist.storeConfig);

// $FlowFixMe
export default history =>
  // $FlowFixMe
  R.compose(
    persist,
    combineReducers,
    R.assoc(APP_STATE_KEY, AppReducer),
    R.assoc(AUTH_STATE_KEY, AuthReducer),
    R.assoc(COUPONS_STATE_KEY, CouponsReducer),
    R.assoc(FAVORITES_STATE_KEY, FavoritesReducer),
    R.assoc(ROUTER_STATE_KEY, RouterReducer(history)),
    R.assoc(STORE_COUPONS_STATE_KEY, StoreCouponsReducer),
    R.assoc(STORE_STATE_KEY, StoreReducer),
  )({});
