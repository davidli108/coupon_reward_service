// @flow
import * as R from 'ramda';
import {
  GET_STORES_LIST,
  SET_STORES_LIST,
  SET_EXTENSION_INSTALLED,
} from './AppActions';

type AppReducerProps = {
  stores: any,
  isExtensionInstalled: boolean,
};

const initialState: AppReducerProps = {
  stores: [],
  isExtensionInstalled: false,
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
    case SET_EXTENSION_INSTALLED: {
      return R.assoc<Object, Object>(
        'isExtensionInstalled',
        action.status,
        state,
      );
    }
    default: {
      return state;
    }
  }
};

export const STATE_KEY = 'app';

export const getStoresList = R.path<string>([STATE_KEY, 'stores']);
export const getFilteredList = (state: any) => (keyword: string) => {
  const sort = new RegExp(`^(${keyword})`, 'i');

  return state.app.stores
    .filter(store => new RegExp(`(${keyword})`, 'gi').test(store.store_name))
    .sort(
      (a, b) =>
        Number(sort.test(b.store_name)) - Number(sort.test(a.store_name)),
    )
    .slice(0, 5);
};

export const getIsExtensionInstalled = R.path<boolean>([
  STATE_KEY,
  'isExtensionInstalled',
]);

export default AppReducer;
