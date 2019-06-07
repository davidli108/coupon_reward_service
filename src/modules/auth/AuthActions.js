// @flow
const namespace = 'AUTHENTICATION';
export const SIGN_IN = `${namespace}/SIGN_IN`;
export const SIGN_IN_SUCCESS = `${namespace}/SIGN_IN_SUCCESS`;
export const SIGN_UP = `${namespace}/SIGN_UP`;
export const FETCH_USER = `${namespace}/FETCH_USER`;
export const PASSWORD = `${namespace}/PASSWORD`;
export const PASSWORD_RESET = `${namespace}/PASSWORD_RESET`;
export const LOGOUT = `${namespace}/LOGOUT`;

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
      url: '/loginAjax',
      method: 'POST',
      data: payload,
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-requested-with': 'XMLHttpRequest',
      },
    },
  },
});

export const signInCf = () => ({
  type: SIGN_IN_SUCCESS,
});

export const signUp = (payload: FormData) => ({
  type: SIGN_UP,
  payload: {
    request: {
      url: '/signupAjax',
      method: 'POST',
      data: payload,
    },
  },
});

export const password = (payload: FormData) => ({
  type: PASSWORD,
  payload: {
    request: {
      url: '/passwordAjax',
      method: 'POST',
      data: payload,
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

export const logout = () => ({
  type: LOGOUT,
  payload: {
    request: {
      url: '/logout',
    },
  },
});
