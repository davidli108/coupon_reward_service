import React from 'react';
import { hydrate, render } from 'react-dom';
import Loadable from 'react-loadable';
import './modules/localization/i18n';

import AppContainer from './AppContainer';
import { unregister } from './registerServiceWorker';

// Unregister service worker
unregister();

const mountEl = document.getElementById('root');

if (mountEl.hasChildNodes() === true) {
  Loadable.preloadReady().then(() => {
    hydrate(<AppContainer />, mountEl);
  });
} else {
  render(<AppContainer />, mountEl);
}

if (module.hot) {
  module.hot.accept('./AppContainer', () => {
    render(<AppContainer />, mountEl);
  });
}
