// @flow
import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo(
    'https://api.joinpiggy.com',
    process.env.REACT_APP_API_URL,
  ),
};
