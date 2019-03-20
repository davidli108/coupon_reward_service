//@flow
export const namespace = 'COUPONS';
export const LOAD_MORE = `${namespace}/LOAD_MORE`;
export const SET_DEALS_FILTER = `${namespace}/SET_DEALS_FILTER`;
export const SET_FILTER_TYPE = `${namespace}/SET_FILTER_TYPE`;

export const loadMore = (payload: number) => ({
  type: LOAD_MORE,
  payload,
});

export const setDealsFilter = (payload: string) => ({
  type: SET_DEALS_FILTER,
  payload,
});

export const setCategoryFilter = (payload: string) => ({
  type: SET_FILTER_TYPE,
  payload,
});
