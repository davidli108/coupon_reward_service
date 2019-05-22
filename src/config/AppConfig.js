// @flow
import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo(window.location.origin, process.env.REACT_APP_API_URL),
};
