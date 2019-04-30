//@flow
import * as R from 'ramda';

import { SIGN_IN, FETCH_USER, SIGN_UP, LOGOUT } from './AuthActions';

const initialState = {
  auth: '',
  app_key: '',
  fb_id: '',
  google_id: '',
  earnings: '',
  savings: '',
  user_id: null,
  user_pw: '',
};

type AuthReducerState = {
  auth: ?string,
  app_key: ?string,
  fb_id: ?string,
  google_id: ?string,
  earnings: ?string,
  savings: ?string,
  user_id: ?number,
  user_pw: ?string,
};

const resetState: Function = (state: Object) =>
  R.compose(
    R.fromPairs,
    R.map(([key, value]) => [key, null]),
    R.toPairs,
  )((state: Object));

const AuthReducer = (
  state: AuthReducerState = initialState,
  action: Object,
) => {
  switch (action.type) {
    case `${FETCH_USER}_SUCCESS`: {
      return R.merge(state, R.path(['payload', 'data'])(action));
    }
    case `${SIGN_IN}_SUCCESS`: {
      return R.assoc<Object, Object>(
        'user_id',
        R.pathOr(null, ['payload', 'data'])(action),
      )(state);
    }
    case `${SIGN_UP}_SUCCESS`: {
      return R.merge(resetState(state), R.path(['payload', 'data'])(action));
    }
    case LOGOUT: {
      return resetState(state);
    }

    default: {
      return state;
    }
  }
};

export const STATE_KEY = 'auth';
export const getUserID = R.path<number | null>([STATE_KEY, 'user_id']);
export const getUserPW = R.path<string>([STATE_KEY, 'user_pw']);
export const isAuth = (state: Object) =>
  localStorage.getItem('auth') === state.auth.auth;

export default AuthReducer;
