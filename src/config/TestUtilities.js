// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import { getTheme } from '@theme';
import configureStore from '@store/configureStore';
import { initializeI18n } from '@modules/localization/i18n';

export const styled = (tag: string) => {
  if (!tag) return '';

  const tagSplit = tag.split('.');
  return `${tagSplit[0]}styles__${tagSplit[1]}`;
};

const history = createMemoryHistory({ initialEntries: ['/'] });
const { store } = configureStore();
const { theme } = getTheme('base');

export const wrapComponent = (Component: Object, props: Object) => {
  initializeI18n();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Component {...props} />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
};
