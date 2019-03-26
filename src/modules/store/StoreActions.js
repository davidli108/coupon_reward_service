// @flow
import axios from 'axios';
export const namespace = 'STORE';
export const GET_STORE = `${namespace}/GET_STORE`;
export const SET_FILTER = `${namespace}/SET_FILTER`;
export const SET_SEARCH = `${namespace}/SET_SEARCH`;
export const SET_FILTER_CLEAR = `${namespace}/SET_FILTER_CLEAR`;
export const SET_LOAD_MORE = `${namespace}/SET_LOAD_MORE`;
export const LOAD_MORE_STATE = `${namespace}/LOAD_MORE_STATE`;

const API = 'api/coupons';

export const getStore = () => (dispatch: any) => {
  axios.get(`${API}`).then(res => {
    dispatch({
      type: GET_STORE,
      payload: res.data,
    });
  });
};

export const setLoadMore = (payload: any) => ({
  type: SET_LOAD_MORE,
  payload,
});

export const setFilter = (payload: any) => ({
  type: SET_FILTER,
  payload,
});

export const setSearch = (payload: any) => ({
  type: SET_SEARCH,
  payload,
});

export const setFilterClear = () => ({
  type: SET_FILTER_CLEAR,
});
