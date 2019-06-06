// @flow
import * as R from 'ramda';
import Cookie from 'js-cookie';

import { PASSWORD, SIGN_IN, FETCH_USER, SIGN_UP, LOGOUT } from './AuthActions';

const initialState = {
  isAuthenticated: Boolean(Cookie.get('cf')),
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
  isAuthenticated: boolean,
  auth: ?string,
  app_key: ?string,
  fb_id: ?string,
  google_id: ?string,
  earnings: ?string,
  savings: ?string,
  user_id: ?number,
  user_pw: ?string,
};

const AuthReducer = (
  state: AuthReducerState = initialState,
  action: Object,
) => {
  switch (action.type) {
    case `${FETCH_USER}_SUCCESS`: {
      return R.merge(state, R.path(['payload', 'data'], action));
    }
    case `${SIGN_IN}_SUCCESS`: {
      const userId = R.pathOr(null, ['payload', 'data'], action);

      if (!userId) {
        return state;
      }

      return R.merge(state, { isAuthenticated: true, user_id: userId });
    }
    case `${SIGN_UP}_SUCCESS`: {
      const data = R.path(['payload', 'data'], action);

      if (!data) {
        return state;
      }

      return R.merge(initialState, { isAuthenticated: true, ...data });
    }
    case `${PASSWORD}_SUCCESS`: {
      return R.merge(state, { isAuthenticated: true });
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const STATE_KEY = 'auth';
export const getUserID = R.path<number | null>([STATE_KEY, 'user_id']);
export const getUserPW = R.path<string>([STATE_KEY, 'user_pw']);
export const getIsAuthenticated = R.path<boolean>([
  STATE_KEY,
  'isAuthenticated',
]);

export default AuthReducer;
