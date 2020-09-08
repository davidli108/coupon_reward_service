// @flow
import AppConfig from '@config/AppConfig';

export const isAmazonStore = (storeName: string) =>
  storeName && storeName.match(/^amazon/i);

export const setDirectTrue = (link: string) =>
  link && !link.includes('direct=1') ? `${link}&direct=1` : link;

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

type TScriptLoaderOptions = {
  src: string,
  host?: string,
  global: string,
  protocol?: string,
};

export class ScriptLoader {
  src: string;
  host: string;
  global: any;
  protocol: string;
  isLoaded: boolean;
  baseUrl: Object;

  constructor(options: TScriptLoaderOptions) {
    const { src, host = '', global, protocol } = options;

    const baseUrl = new URL(AppConfig.apiUrl);
    const apiHost = baseUrl.host.includes('www')
      ? baseUrl.host.replace('www', 'api')
      : `api-${baseUrl.host}`;

    this.baseUrl = baseUrl;
    this.src = src;
    this.host = host === 'apiHost' ? apiHost : host;
    this.global = global;
    this.protocol = protocol === 'auto' ? '' : baseUrl.protocol;
    this.isLoaded = false;
  }

  loadScript = () =>
    new Promise<any>(resolve => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `${this.protocol}//${this.baseUrl.host}${this.src}`;

      const el = document.getElementsByTagName('script')[0];
      el && el.parentNode && el.parentNode.insertBefore(script, el);

      script.addEventListener('load', () => {
        this.isLoaded = true;
        resolve(script);
      });
    });

  load = () =>
    new Promise<any>((resolve, reject) => {
      if (!this.isLoaded) {
        try {
          this.loadScript().then(() => {
            resolve(window[this.global]);
          });
        } catch (e) {
          reject(e);
        }
      } else {
        resolve(window[this.global]);
      }
    });
}
