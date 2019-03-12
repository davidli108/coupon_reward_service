import { storiesOf } from '@storybook/react';
import React from 'react';

import BackgroundsDecorator from '@modules/storybook/decorators/BackgroundsDecorator';
import StyledComponentsDecorator from '@modules/storybook/decorators/StyledComponentsDecorator';

import StoreList from './StoreList';

storiesOf('Components|@Store', module)
  .addDecorator(BackgroundsDecorator)
  .addDecorator(StyledComponentsDecorator)
  .add('StoreList', () => (
    <StoreList
      stores={[
        {
          name: 'Target',
          newStore: false,
          deals: 1000,
          offer: '-12%',
          logo: null,
          url: 'https://target.com',
        },
      ]}
    />
  ));
