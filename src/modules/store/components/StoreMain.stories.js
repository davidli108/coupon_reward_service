import { storiesOf } from '@storybook/react';
import React from 'react';

import BackgroundsDecorator from '@modules/storybook/decorators/BackgroundsDecorator';
import RouterDecorator from '@modules/storybook/decorators/RouterDecorator';
import StyledComponentsDecorator from '@modules/storybook/decorators/StyledComponentsDecorator';

import StoreMain from './StoreMain';

storiesOf('Components|@Store', module)
  .addDecorator(BackgroundsDecorator)
  .addDecorator(RouterDecorator)
  .addDecorator(StyledComponentsDecorator)
  .add('StoreMain', () => (
    <StoreMain
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
