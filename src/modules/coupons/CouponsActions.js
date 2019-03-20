//@flow
export const namespace = 'COUPONS';
export const LOAD_MORE = `${namespace}/LOAD_MORE`;

export const loadMore = (payload: number) => ({
  type: LOAD_MORE,
  payload,
});
