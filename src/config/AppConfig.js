// @flow
import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo(
    'http://8ea9c26d.ngrok.io',
    process.env.REACT_APP_API_URL,
  ),
};
