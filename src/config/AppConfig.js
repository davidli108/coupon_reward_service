// @flow
import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo(
    'http://33499c7a.ngrok.io',
    process.env.REACT_APP_API_URL,
  ),
};
