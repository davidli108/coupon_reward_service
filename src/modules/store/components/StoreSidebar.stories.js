import { storiesOf } from '@storybook/react';
import React from 'react';

import BackgroundsDecorator from '@modules/storybook/decorators/BackgroundsDecorator';
import RouterDecorator from '@modules/storybook/decorators/RouterDecorator';
import StyledComponentsDecorator from '@modules/storybook/decorators/StyledComponentsDecorator';

import StoreSidebar from './StoreSidebar';

storiesOf('Components|@Store', module)
  .addDecorator(RouterDecorator)
  .addDecorator(BackgroundsDecorator)
  .addDecorator(StyledComponentsDecorator)
  .add('StoreSidebar', () => (
    <StoreSidebar
      searchIsLoading={false}
      isLoadedCategories
      categories={[
        {
          title: 'Clothing',
          number: 100,
          short_name: 'clothing',
        },
        {
          title: 'Cars',
          number: 81,
          short_name: 'cars',
        },
      ]}
      onSetFilter={() => {}}
    />
  ));
