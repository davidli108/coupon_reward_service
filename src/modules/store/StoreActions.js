// @flow
export const namespace = 'STORE';
export const GET_STORE = `${namespace}/GET_STORE`;
export const SET_FILTER = `${namespace}/SET_FILTER`;
export const SET_SEARCH = `${namespace}/SET_SEARCH`;
export const SET_FILTER_CLEAR = `${namespace}/SET_FILTER_CLEAR`;
export const SET_LOAD_MORE = `${namespace}/SET_LOAD_MORE`;
export const LOAD_MORE_STATE = `${namespace}/LOAD_MORE_STATE`;
export const REQUEST_SEARCH = `${namespace}/REQUEST_SEARCH`;
export const SEARCH = `${namespace}/SEARCH`;
export const GET_CATEGORIES = `${namespace}/GET_CATEGORIES`;

export const getStores = (payload: string) => ({
  type: GET_STORE,
  payload: {
    request: {
      url: `/api/cashback-stores/${payload}`,
    },
  },
});

export const setLoadMore = (storeName: string, count: number) => ({
  type: SET_LOAD_MORE,
  payload: {
    request: {
      url: `/api/cashback-stores/${
        storeName ? `${storeName}/${count}` : count
      }`,
    },
  },
});

export const setFilter = (payload: any) => ({
  type: SET_FILTER,
  payload,
});

export const requestSearch = (payload: string) => ({
  type: REQUEST_SEARCH,
  payload,
});

export const onSearch = (keywords: string) => ({
  type: SEARCH,
  payload: {
    request: {
      url: `/jsonstores?keywords=${keywords}`,
    },
  },
});

export const setFilterClear = () => ({
  type: SET_FILTER_CLEAR,
});
