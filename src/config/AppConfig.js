// @flow
import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo(
    'http://ea0d1d8f.ngrok.io',
    process.env.REACT_APP_API_URL,
  ),
};
