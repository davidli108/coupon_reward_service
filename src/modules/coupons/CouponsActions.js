// @flow
export const namespace = 'COUPONS';
export const GET_COUPONS = `${namespace}/GET_COUPONS`;
export const LOAD_MORE = `${namespace}/LOAD_MORE`;
export const FETCH_CATEGORIES = `${namespace}/FETCH_CATEGORIES`;
export const GET_COUPONS_BY_CATEGORY = `${namespace}/GET_COUPONS_BY_CATEGORY`;
export const REQUEST_SEARCH = `${namespace}/REQUEST_SEARCH`;
export const SEARCH = `${namespace}/SEARCH`;
export const SET_DEALS_FILTER = `${namespace}/SET_DEALS_FILTER`;
export const SET_FILTER_TYPE = `${namespace}/SET_FILTER_TYPE`;
export const RESET_COUPONS = `${namespace}/RESET_COUPONS`;

export const getCoupons = () => ({
  type: GET_COUPONS,
  payload: {
    request: {
      url: '/api/coupons',
    },
  },
});

export const resetCoupons = () => ({
  type: RESET_COUPONS,
});

export const loadMore = (count: number) => ({
  type: LOAD_MORE,
  payload: {
    request: {
      url: `/api/coupons/${count}`,
    },
  },
});

export const getCouponsByCategory = (category: string) => ({
  type: GET_COUPONS_BY_CATEGORY,
  payload: {
    request: {
      url: `/api/coupons/${category}`,
    },
  },
});

export const requestSearch = (payload: string) => ({
  type: REQUEST_SEARCH,
  payload,
});

export const onSearch = (keywords: string) => ({
  type: SEARCH,
  payload: {
    request: {
      url: `/jsonstores?keywords=${keywords}&limit=1`,
    },
  },
});

export const setDealsFilter = (payload: string) => ({
  type: SET_DEALS_FILTER,
  payload,
});

export const setCategoryFilter = (payload: string) => ({
  type: SET_FILTER_TYPE,
  payload,
});
