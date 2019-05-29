// @flow
import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo(window.location.origin, process.env.REACT_APP_API_URL),
  cloudUrl: R.defaultTo(
    'https://d2umvgb8hls1bt.cloudfront.net',
    process.env.REACT_APP_CLOUD_URL,
  ),
};
