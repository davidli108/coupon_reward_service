// @flow
export const namespace = 'STORE';
export const GET_STORE = `${namespace}/GET_STORE`;
export const SET_FILTER = `${namespace}/SET_FILTER`;
export const SET_SEARCH = `${namespace}/SET_SEARCH`;
export const SET_FILTER_CLEAR = `${namespace}/SET_FILTER_CLEAR`;
export const SET_LOAD_MORE = `${namespace}/SET_LOAD_MORE`;
export const LOAD_MORE_STATE = `${namespace}/LOAD_MORE_STATE`;
export const ON_SEARCH = `${namespace}/ON_SEARCH`;

export const getStore = () => ({
  type: GET_STORE,
  payload: {
    request: {
      url: `/api/cashback-stores`,
    },
  },
});

export const setLoadMore = (count: number) => ({
  type: SET_LOAD_MORE,
  payload: {
    request: {
      url: `/api/cashback-stores/${count}`,
    },
  },
});

export const setFilter = (payload: any) => ({
  type: SET_FILTER,
  payload,
});

export const setSearch = (payload: any) => ({
  type: SET_SEARCH,
  payload,
});

export const setFilterClear = () => ({
  type: SET_FILTER_CLEAR,
});

export const onSearch = (keywords: string) => ({
  type: ON_SEARCH,
  payload: {
    request: {
      url: `/jsonstores?keywords=${keywords}`,
    },
  },
});
