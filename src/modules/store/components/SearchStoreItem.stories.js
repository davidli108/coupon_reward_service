import { storiesOf } from '@storybook/react';
import React from 'react';

import BackgroundsDecorator from '@modules/storybook/decorators/BackgroundsDecorator';
import StyledComponentsDecorator from '@modules/storybook/decorators/StyledComponentsDecorator';

import SearchStoreItem from './SearchStoreItem';

storiesOf('Components|@Store', module)
  .addDecorator(BackgroundsDecorator)
  .addDecorator(StyledComponentsDecorator)
  .add('SearchStoreItem', () => (
    <SearchStoreItem
      searchResult={[
        {
          name: 'Target',
          offer: '-12%',
          logo: null,
          url: 'https://target.com',
        },
      ]}
    />
  ));
