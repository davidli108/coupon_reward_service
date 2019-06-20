// @flow
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Frontload } from 'react-frontload';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store/configureStore';

const { history, store } = configureStore();

const AppContainer = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender={true}>
        <App />
      </Frontload>
    </ConnectedRouter>
  </Provider>
);

export default AppContainer;
