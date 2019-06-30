import React from 'react';
import ModalActivateCoupons from './ModalActivateCoupons';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';

const { store } = configureStore();

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ModalActivateCoupons
          title="test"
          subTitle="test"
          isActive={true}
          logo="test"
          callback={() => {}}
          code={123}
          isAuthenticated={true}
        />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
