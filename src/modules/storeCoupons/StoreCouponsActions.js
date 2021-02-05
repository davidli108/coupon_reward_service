// @flow
import { OfferTypes } from './components/OffersMenu';
import { objectToQueryString } from '@config/Utils';

export const namespace = 'STORE_COUPONS';
export const FETCH_STORE_COUPONS = `${namespace}/FETCH_STORE_COUPONS`;
export const REQUEST_SEARCH = `${namespace}/REQUEST_SEARCH`;
export const SEARCH = `${namespace}/SEARCH`;
export const FETCH_STORE_COUPONS_BY_PAGINATION = `${namespace}/FETCH_STORE_COUPONS_BY_PAGINATION`;

export const fetchStoreCoupons = (
  storeName: string,
  filter: Object = undefined,
  categories: Object = undefined,
  selectedOfferType: string,
  token: string = '',
) => {
  const params = {
    sort: filter && filter.value,
    categories: categories && categories.length ? categories : undefined,
    pt_token: token,
  };
  const queryString = objectToQueryString(params);
  const offersType = [OfferTypes.COUPONS, OfferTypes.DEALS].includes(
    selectedOfferType,
  )
    ? `/${selectedOfferType}`
    : '';

  return {
    type: FETCH_STORE_COUPONS,
    payload: {
      client: 'default',
      request: {
        url: `/api/coupons/${storeName}${offersType}?${queryString}`,
      },
    },
  };
};

export const fetchStoreCouponsByPagination = (
  storeName: string,
  pagination: number,
  filter: Object = undefined,
  categories: Object = undefined,
  selectedOfferType: string,
) => {
  const params = {
    sort: filter && filter.value,
    categories: categories && categories.length ? categories : undefined,
  };
  const offersType = selectedOfferType ? `/${selectedOfferType}` : '';
  const queryString = objectToQueryString(params);

  return {
    type: FETCH_STORE_COUPONS_BY_PAGINATION,
    payload: {
      client: 'default',
      request: {
        url: `/api/coupons/${storeName}${
          pagination ? `/${pagination}` : ''
        }${offersType}?${queryString}`,
      },
    },
  };
};

export const requestSearch = (payload: string) => ({
  type: REQUEST_SEARCH,
  payload,
});

export const onSearch = (keywords: string) => ({
  type: SEARCH,
  payload: {
    client: 'default',
    request: {
      url: `/jsonstores?keywords=${keywords}`,
    },
  },
});
