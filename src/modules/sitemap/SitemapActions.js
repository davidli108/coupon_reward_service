// @flow
export const namespace = 'SITEMAP';
export const FETCH_CATEGORIES = `${namespace}/FETCH_CATEGORIES`;
export const FETCH_ALL_STORES = `${namespace}/FETCH_ALL_STORES`;
export const SET_FILTER_STORE = `${namespace}/SET_FILTER_STORE`;

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
  payload: {
    request: {
      url: `/api/coupons`,
    },
  },
});

export const fetchAllStores = () => ({
  type: FETCH_ALL_STORES,
  payload: {
    request: {
      url: `/jsonstores?keywords=`,
    },
  },
});

export const setStoreFilter = (payload: string) => ({
  type: SET_FILTER_STORE,
  payload,
});
