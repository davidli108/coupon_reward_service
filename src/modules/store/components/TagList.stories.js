import { storiesOf } from '@storybook/react';
import React from 'react';

import BackgroundsDecorator from '@modules/storybook/decorators/BackgroundsDecorator';
import StyledComponentsDecorator from '@modules/storybook/decorators/StyledComponentsDecorator';

import TagList from './TagList';

storiesOf('Components|@Store', module)
  .addDecorator(BackgroundsDecorator)
  .addDecorator(StyledComponentsDecorator)
  .add('TagList', () => (
    <TagList
      categories={[
        {
          title: 'Clothing',
          number: 100,
        },
        {
          title: 'Cars',
          number: 81,
        },
      ]}
    />
  ));
