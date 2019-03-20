//@flow
export const namespace = 'COUPONS';
export const LOAD_MORE = `${namespace}/LOAD_MORE`;
export const SET_FILTER = `${namespace}/SET_FILTER`;

export const loadMore = (payload: number) => ({
  type: LOAD_MORE,
  payload,
});

export const setFilter = (payload: string) => ({
  type: SET_FILTER,
  payload,
});
