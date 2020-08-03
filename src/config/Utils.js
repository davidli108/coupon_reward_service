// @flow
import AppConfig from '@config/AppConfig';

export const isAmazonStore = (storeName: string) =>
  storeName && storeName.match(/^amazon/i);

export const setDirectTrue = (link: string) =>
  !link.includes('direct=1') ? `${link}&direct=1` : link;

export const getStoresWithDirectLinkSet = (stores: Object, link: any) =>
  stores.map(store => ({
    ...store,
    [link]: setDirectTrue(store[link]),
  }));

export const fireGTMEvent = (eventConfig: Object) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventConfig);
};

export const renderTrackRefsScript = () => {
  const baseUrl = new URL(AppConfig.apiUrl);
  const apiHost = baseUrl.host.includes('www')
    ? baseUrl.host.replace('www', 'api')
    : `api-${baseUrl.host}`;
  const scriptUrl = document.createElement('script');
  scriptUrl.type = 'text/javascript';
  scriptUrl.async = true;
  scriptUrl.src = `${baseUrl.protocol}//${apiHost}/js/track-refs.js`;

  document.body && document.body.appendChild(scriptUrl);
};

type updateElementClassListProps = {
  element: string,
  className: string,
  add: boolean,
};

export const updateElementClassList = ({
  element,
  className,
  add,
}: updateElementClassListProps) => {
  const el = document && document.querySelector(element);

  if (el) {
    className.split(',').forEach(name => {
      add ? el.classList.add(name) : el.classList.remove(name);
    });
  }
};
