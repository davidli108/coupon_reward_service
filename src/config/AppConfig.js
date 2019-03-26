// @flow
import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo(
    'http://joinpiggy.local:8080',
    process.env.REACT_APP_API_URL,
  ),
};
