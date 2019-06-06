// @flow
import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo(window.location.origin, process.env.REACT_APP_API_URL),
  cloudUrl: R.defaultTo(
    'https://d2umvgb8hls1bt.cloudfront.net',
    process.env.REACT_APP_CLOUD_URL,
  ),
  extension: {
    chrome: R.defaultTo(
      'chrome-extension://hfapbcheiepjppjbnkphkmegjlipojba/manifest.json',
      process.env.REACT_APP_EXTENSION_CHROME,
    ),
    url: R.defaultTo(
      'https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba',
      process.env.REACT_APP_EXTENSION_URL,
    ),
  },
};
