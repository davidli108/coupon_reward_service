// @flow
import { AUTHENTICATED } from '../app/AppActions';

const namespace = 'AUTHENTICATION';
export const SIGN_IN = `${namespace}/SIGN_IN`;
export const SIGN_IN_SUCCESS = `${namespace}/SIGN_IN_SUCCESS`;
export const SIGN_UP = `${namespace}/SIGN_UP`;
export const CHECK_EMAIL_AVAILABLE = `${namespace}/CHECK_EMAIL_AVAILABLE`;
export const FETCH_USER = `${namespace}/FETCH_USER`;
export const PASSWORD_RESET = `${namespace}/PASSWORD_RESET`;
export const LOGOUT = `${namespace}/LOGOUT`;
export const SET_LOGGED_OUT = `${namespace}/SET_LOGGED_OUT`;
export const REQUEST_NONCE = `${namespace}/REQUEST_NONCE`;

export const fetchUser = () => ({
  type: FETCH_USER,
  payload: {
    client: 'base',
    request: {
      url: '/account/getUser',
      method: 'GET',
    },
  },
});

export const signIn = (payload: FormData) => ({
  type: SIGN_IN,
  payload: {
    client: 'base',
    request: {
      url: '/auth/signin',
      method: 'POST',
      data: payload,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    },
  },
});

export const checkEmailAvailable = (payload: FormData) => ({
  type: CHECK_EMAIL_AVAILABLE,
  payload: {
    client: 'base',
    request: {
      url: '/api/checkemailnotexists',
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
    client: 'base',
    request: {
      url: '/auth/signup',
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
    client: 'base',
    request: {
      url: '/api/forgot-password',
      method: 'POST',
      data: payload,
    },
  },
});

export const authenticate = () => ({
  type: AUTHENTICATED,
});

export const signOut = () => ({
  type: LOGOUT,
  payload: {
    client: 'base',
    request: {
      url: '/auth/signout',
      method: 'POST',
    },
  },
});

export const requestNonce = () => ({
  type: REQUEST_NONCE,
  payload: {
    client: 'default',
    request: {
      url: '/auth/request-nonce',
      method: 'GET',
    },
  },
});

export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT,
});
