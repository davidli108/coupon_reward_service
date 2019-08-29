// @flow
import axios from 'axios';
import { multiClientMiddleware } from 'redux-axios-middleware';

import AppConfig from '@config/AppConfig';

const getBaseUrl = () => {
  const { host, protocol } = document.location;

  return `${protocol}//${host.split('.joinpiggy.').shift()}.joinpiggy.com`;
};

const axiosClients = {
  default: {
    client: axios.create({
      baseURL: AppConfig.apiUrl,
      responseType: 'json',
      withCredentials: true,
    }),
  },
  base: {
    client: axios.create({
      baseURL: getBaseUrl(),
      responseType: 'json',
      withCredentials: true,
    }),
  },
};

const axiosMiddlewareOptions = {
  interceptors: {
    request: [],
  },
};

const axiosMiddleware = multiClientMiddleware(
  axiosClients,
  axiosMiddlewareOptions,
);

export default axiosMiddleware;
