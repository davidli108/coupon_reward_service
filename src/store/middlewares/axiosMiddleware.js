// @flow
import axios from 'axios';
import axiosMiddlewareFactory from 'redux-axios-middleware';

import AppConfig from '@config/AppConfig';

const axiosClient = axios.create({
  baseURL: AppConfig.apiUrl,
  responseType: 'json',
});

const axiosMiddlewareOptions = {
  interceptors: {
    request: [
      (_, req) => {
        // Set X-Referrer header for locale resolution on API side
        req.headers['X-Referrer'] = window.location.hostname;

        return req;
      },
    ],
  },
};

const axiosMiddleware = axiosMiddlewareFactory(
  axiosClient,
  axiosMiddlewareOptions,
);

export default axiosMiddleware;
