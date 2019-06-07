// @flow
import * as R from 'ramda';
import { GET_STORES_LIST, SET_STORES_LIST } from './AppActions';

type AppReducerProps = {
  stores: any,
};

const initialState: AppProps = {
  stores: [],
};

const AppReducer = (state: AppReducerProps = initialState, action: Object) => {
  switch (action.type) {
    case `${GET_STORES_LIST}_SUCCESS`: {
      const data = R.pathOr([], ['payload', 'data'], action);
      return R.assoc<Object, Object>('stores', data, state);
    }
    case `${SET_STORES_LIST}`: {
      return R.assoc<Object, Object>('stores', action.data, state);
    }
    default: {
      return state;
    }
  }
};

export const STATE_KEY = 'app';

export const getStoresList = R.path<string>([STATE_KEY, 'stores']);
export const getFilteredList = state => keyword => {
  const regex = new RegExp('\\b' + keyword, 'gi');
  return state.app.stores
    .filter(store => regex.test(store.store_name))
    .slice(0, 5);
};

export default AppReducer;
