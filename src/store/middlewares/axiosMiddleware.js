// @flow
import axios from 'axios';
import axiosMiddlewareFactory from 'redux-axios-middleware';

import AppConfig from '@config/AppConfig';

const axiosClient = axios.create({
  baseURL: AppConfig.apiUrl,
  responseType: 'json',
});

const axiosMiddlewareOptions = {};

const axiosMiddleware = axiosMiddlewareFactory(
  axiosClient,
  axiosMiddlewareOptions,
);

export default axiosMiddleware;
