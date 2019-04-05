//@flow
export const namespace = 'STORE_COUPONS';
export const FETCH_STORE_COUPONS = `${namespace}/FETCH_STORE_COUPONS`;
export const REQUEST_SEARCH = `${namespace}/REQUEST_SEARCH`;
export const SEARCH = `${namespace}/SEARCH`;

export const fetchStoreCoupons = (storeName: string) => ({
  type: FETCH_STORE_COUPONS,
  payload: {
    request: {
      url: `/api/coupons/${storeName}`,
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
      url: `/jsonstores?keywords=${keywords}`,
    },
  },
});
