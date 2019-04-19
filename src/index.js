import React from 'react';
import { hydrate, render } from 'react-dom';
import Loadable from 'react-loadable';

import AppContainer from './AppContainer';
import { initializeI18n } from './modules/localization/i18n';
import { unregister } from './registerServiceWorker';

initializeI18n();

// Unregister service worker
unregister();

const mountEl = document.getElementById('root');
mountEl.innerHTML = '';

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
