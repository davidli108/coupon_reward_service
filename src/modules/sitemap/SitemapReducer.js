// @flow
import * as R from 'ramda';
import type { SitemapReducerProps } from './models/SitemapPage';
import {
  FETCH_CATEGORIES,
  FETCH_ALL_STORES,
  SET_FILTER_STORE,
} from './SitemapActions';
import { chars } from './constants';

export const STATE_KEY = 'sitemap';

const initialState: SitemapReducerProps = {
  stores: [],
  filteredStores: [],
  categories: [],
  storesIsLoading: false,
  categoriesIsLoading: false,
  chars: {},
  filterBy: 'a',
};

const SitemapReducer = (
  state: SitemapReducerProps = initialState,
  action: Object,
) => {
  switch (action.type) {
    case `${FETCH_ALL_STORES}_SUCCESS`: {
      const stores = R.pathOr([], ['payload', 'data'], action);
      const computedChars = {};
      const regex = (char: string) => new RegExp('^\\b' + char, 'i');

      chars.forEach((char: string) => {
        computedChars[char] = stores.some((store: any) =>
          regex(char).test(store.store_name),
        );
      });

      const filteredStores = stores
        .filter((store: any) => regex(state.filterBy).test(store.store_name))
        .sort((a, b) => a.store_name.localeCompare(b.store_name));

      return R.compose(
        R.assoc<Object, Object>('stores', stores),
        R.assoc<Object, Object>('filteredStores', filteredStores),
        R.assoc<Object, Object>('chars', computedChars),
      )(state);
    }

    case `${FETCH_CATEGORIES}_SUCCESS`: {
      const categories = R.pathOr(
        [],
        ['payload', 'data', 'categories'],
        action,
      );
      return R.assoc<Object, Object>('categories', categories, state);
    }

    case SET_FILTER_STORE: {
      const regex = new RegExp('^\\b' + action.payload, 'i');
      const filtered = state.stores
        .filter((store: any) => regex.test(store.store_name))
        .sort((a, b) => a.store_name.localeCompare(b.store_name));
      return R.compose(
        R.assoc<Object, Object>('filterBy', action.payload),
        R.assoc<Object, Object>('filteredStores', filtered),
      )(state);
    }

    default: {
      return state;
    }
  }
};

export const getAllStores = R.path<any>([STATE_KEY, 'stores']);
export const getFilteredStores = R.path<any>([STATE_KEY, 'filteredStores']);
export const getCategories = R.path<any>([STATE_KEY, 'categories']);
export const getChars = R.path<any>([STATE_KEY, 'chars']);
export const storesIsLoading = R.path<string>([STATE_KEY, 'storesIsLoading']);
export const getFilterBy = R.path<string>([STATE_KEY, 'filterBy']);
export const categoriesIsLoading = R.path<string>([
  STATE_KEY,
  'categoriesIsLoading',
]);

export default SitemapReducer;
