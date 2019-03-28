// @flow
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import axiosMiddleware from './middlewares/axiosMiddleware';
import loggerMiddleware from './middlewares/loggerMiddleware';
import promiseMiddleware from './middlewares/promiseMiddleware';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default () => {
  // const history = createHistory();
  const history = isServer
    ? createMemoryHistory({ initialEntries: ['/'] })
    : createBrowserHistory();

  const initialState = !isServer ? window.__PRELOADED_STATE__ || {} : {};

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    routerMiddleware(history),
    axiosMiddleware,
    thunk,
    promiseMiddleware,
    sagaMiddleware,
  ];

  if (!isServer && typeof jest === 'undefined') {
    middlewares.push(loggerMiddleware);
  }

  const composeEnhancers = isServer
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // $FlowFixMe
  const store = createStore(
    (rootReducer: Object)(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  // $FlowFixMe
  if (module.hot) {
    // $FlowFixMe
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer: Object = require('./rootReducer').default(history);
      store.replaceReducer(nextRootReducer);
    });
  }

  return { history, persistor, store };
};
