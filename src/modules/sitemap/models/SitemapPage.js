// @flow
import type { Category } from '../constants';

export type SitemapPageProps = {
  t: Function,
  i18n: Object,
  stores: any[],
  chars: Object,
  categories: Category[],
  fetchAllStores: () => Promise<Object>,
  fetchCategories: () => Promise<Object>,
  getFilteredList: Function,
  setStoreFilter: Function,
  filterBy: string,
  isAuthenticated: boolean,
};

export type SitemapReducerProps = {
  stores: any[],
  filteredStores: any[],
  categories: Category[],
  storesIsLoading: boolean,
  categoriesIsLoading: boolean,
  chars: Object,
  filterBy: string,
};
