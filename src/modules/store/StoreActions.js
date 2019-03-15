// @flow
export const namespace = 'STORE';
export const SET_FILTER = `${namespace}/SET_FILTER`;
export const SET_CATEGORY = `${namespace}/SET_CATEGORY`;
export const SET_SEARCH = `${namespace}/SET_SEARCH`;
export const SET_FILTER_CLEAR = `${namespace}/SET_FILTER_CLEAR`;
export const LOAD_MORE  = `${namespace}/LOAD_MORE`;

export const loadMore = (payload: any) => ({
  type: LOAD_MORE,
  payload,
});

export const setSearch = (payload: any) => ({
  type: SET_SEARCH,
  payload,
});

export const setFilterClear = () => ({
  type: SET_FILTER_CLEAR,
});


export const setFilter = (payload: any) => ({
  type: SET_FILTER,
  payload,
});
