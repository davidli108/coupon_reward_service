//@flow
export const namespace = 'STORE_COUPONS';
export const FETCH_STORE_COUPONS = `${namespace}/FETCH_STORE_COUPONS`;

export const fetchStoreCoupons = ({ storeName }: { storeName: string }) => ({
  type: FETCH_STORE_COUPONS,
  payload: {
    request: {
      url: `/api/coupons/${storeName}`,
    },
  },
});
