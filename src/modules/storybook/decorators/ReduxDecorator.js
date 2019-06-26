// @flow
import type { StoryDecorator } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '@store/configureStore';

const { store } = configureStore();

const ReduxDecorator: StoryDecorator = story => (
  <Provider store={store}>{story()}</Provider>
);

export default ReduxDecorator;
