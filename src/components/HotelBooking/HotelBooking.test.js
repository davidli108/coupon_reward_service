import React from 'react';
import HotelBooking from './HotelBooking';
import renderer from 'react-test-renderer';
import { initializeI18n } from '../../modules/localization/i18n';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '@theme';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
const { theme } = getTheme('base');

initializeI18n();
const { store } = configureStore();

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HotelBooking isAuthenticated={true} toggleLogin={() => {}} />
        </ThemeProvider>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
