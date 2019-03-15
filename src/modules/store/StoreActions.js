// @flow
export const namespace = 'STORE';
export const SET_FILTER = `${namespace}/SET_FILTER`;
export const LOAD_MORE  = `${namespace}/LOAD_MORE`;

export const loadMore = (payload: any) => ({
  type: LOAD_MORE,
  payload,
});

export const setFilter = (payload: any) => ({
  type: SET_FILTER,
  payload,
});
