import React from 'react';
import ModalActivateCoupons from './ModalActivateCoupons';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import { initializeI18n } from '../../modules/localization/i18n';
import 'jest-styled-components';

initializeI18n();
const { store } = configureStore();

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/coupons']}>
          <ModalActivateCoupons
            title="test"
            subTitle="test"
            isActive={true}
            logo="test"
            callback={() => {}}
            code={123}
            isAuthenticated={true}
          />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
