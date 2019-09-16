import AppConfig from '@config/AppConfig';

export const isMainSite = () => document.location.origin === AppConfig.apiUrl;

export const getOrigin = () => {
  const locationMap = {
    com: 'US',
    uk: 'GB',
    de: 'DE',
    fr: 'FR',
    kr: 'KR',
    jp: 'JP',
  };
  const location = document.location.host.split('.').pop();
  return locationMap.hasOwnProperty(location) ? locationMap[location] : 'US';
};

export const setAuthCookie = (nonce, redirect, origin) => {
  const authRedirect = encodeURIComponent(
    '/auth/set?nonce=' + nonce + '&redirect=' + redirect,
  );
  document.location.href =
    AppConfig.apiUrl +
    '/auth/set?nonce=' +
    nonce +
    '&redirect=' +
    authRedirect +
    '&origin=' +
    origin.toUpperCase();
};
