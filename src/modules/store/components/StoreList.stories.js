import { storiesOf } from '@storybook/react';
import React from 'react';

import BackgroundsDecorator from '@modules/storybook/decorators/BackgroundsDecorator';
import RouterDecorator from '@modules/storybook/decorators/RouterDecorator';
import StyledComponentsDecorator from '@modules/storybook/decorators/StyledComponentsDecorator';

import StoreList from './StoreList';

storiesOf('Components|@Store', module)
  .addDecorator(BackgroundsDecorator)
  .addDecorator(RouterDecorator)
  .addDecorator(StyledComponentsDecorator)
  .add('StoreList', () => (
    <StoreList
      isLoadedStores
      stores={[
        {
          name: 'Target',
          newStore: false,
          deals: 1000,
          offer: '-12%',
          logo: null,
          url: 'https://target.com',
          store_page_link: 'https://target.com',
        },
      ]}
    />
  ));
