//@flow
import axios from 'axios';
export const namespace = 'COUPONS';
export const GET_COUPONS = `${namespace}/GET_COUPONS`;
export const LOAD_MORE = `${namespace}/LOAD_MORE`;
export const SET_DEALS_FILTER = `${namespace}/SET_DEALS_FILTER`;
export const SET_FILTER_TYPE = `${namespace}/SET_FILTER_TYPE`;

const API = 'api/coupons';

export const getCoupons = () => (dispatch: any) => {
  axios.get(`${API}`).then(res => {
    dispatch({
      type: GET_COUPONS,
      payload: res.data,
    });
  });
};

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
