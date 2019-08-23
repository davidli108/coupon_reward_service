// @flow
import { AUTHENTICATED } from '../app/AppActions';

const namespace = 'AUTHENTICATION';
export const SIGN_IN = `${namespace}/SIGN_IN`;
export const SIGN_IN_SUCCESS = `${namespace}/SIGN_IN_SUCCESS`;
export const SIGN_UP = `${namespace}/SIGN_UP`;
export const FETCH_USER = `${namespace}/FETCH_USER`;
export const PASSWORD = `${namespace}/PASSWORD`;
export const PASSWORD_RESET = `${namespace}/PASSWORD_RESET`;
export const LOGOUT = `${namespace}/LOGOUT`;
export const SET_LOGGED_OUT = `${namespace}/SET_LOGGED_OUT`;

export const fetchUser = () => ({
  type: FETCH_USER,
  payload: {
    request: {
      url: '/account/getUser',
      method: 'GET',
      headers: {
        Accept: '*/*',
        'x-requested-with': 'XMLHttpRequest',
      },
    },
  },
});

export const signIn = (payload: FormData) => ({
  type: SIGN_IN,
  payload: {
    request: {
      url: '/api/signin',
      method: 'POST',
      data: payload,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    },
  },
});

export const signUp = (payload: FormData) => ({
  type: SIGN_UP,
  payload: {
    request: {
      url: '/api/checkemailnotexists',
      method: 'POST',
      data: payload,
      headers: {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      },
    },
  },
});

export const password = (payload: FormData) => ({
  type: PASSWORD,
  payload: {
    request: {
      url: '/api/signup',
      method: 'POST',
      data: payload,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    },
  },
});

export const resetPassword = (payload: FormData) => ({
  type: PASSWORD_RESET,
  payload: {
    request: {
      url: '/getpasswordAjax',
      method: 'POST',
      data: payload,
    },
  },
});

export const authenticate = () => ({
  type: AUTHENTICATED,
});

export const logout = () => ({
  type: LOGOUT,
  payload: {
    request: {
      url: '/logout',
    },
  },
});

export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT,
});
