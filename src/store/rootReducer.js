// @flow
import * as R from 'ramda';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import ReduxPersist from '@config/ReduxPersist';
import RouterReducer, {
  STATE_KEY as ROUTER_STATE_KEY,
} from '@modules/router/RouterReducer';
import StoreReducer, {
  STATE_KEY as STORE_STATE_KEY,
} from '@modules/store/StoreReducer';
import CouponsReducer, {
  STATE_KEY as COUPONS_STATE_KEY,
} from '@modules/coupons/CouponsReducer';

import StoreCouponsReducer, {
  STATE_KEY as STORE_COUPONS_STATE_KEY,
} from '@modules/storeCoupons/StoreCouponsReducer';

const persist = R.curry(persistReducer)(ReduxPersist.storeConfig);

// $FlowFixMe
export default history =>
  R.compose(
    persist,
    combineReducers,
    R.assoc(ROUTER_STATE_KEY, RouterReducer(history)),
    R.assoc(STORE_STATE_KEY, StoreReducer),
    R.assoc(COUPONS_STATE_KEY, CouponsReducer),
    R.assoc(STORE_COUPONS_STATE_KEY, StoreCouponsReducer),
  )({});
