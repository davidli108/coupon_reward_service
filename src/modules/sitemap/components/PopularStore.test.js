import '../../../setupTests.js';
import React from 'react';
import PopularStores from './PopularStores';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../../store/configureStore';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../../../theme';
import { initializeI18n } from '../../../modules/localization/i18n';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-styled-components';

initializeI18n();

const { store } = configureStore();
const { theme } = getTheme('base');

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <PopularStores
              isLoadingCategories={false}
              isLoadingStores={false}
            />
          </ThemeProvider>
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
