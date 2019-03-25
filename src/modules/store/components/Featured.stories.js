import { storiesOf } from '@storybook/react';
import React from 'react';

import BackgroundsDecorator from '@modules/storybook/decorators/BackgroundsDecorator';
import StyledComponentsDecorator from '@modules/storybook/decorators/StyledComponentsDecorator';

import Featured from './Featured';

storiesOf('Components|@Store', module)
  .addDecorator(BackgroundsDecorator)
  .addDecorator(StyledComponentsDecorator)
  .add('Featured', () => (
    <Featured
      featured={[
        {
          name: 'Target',
          newStore: true,
          deals: 258456,
          offer: '12',
          url: 'https://target.com',
          couponActive: true,
          category: 'Accessories',
          isFeatured: true,
        },
      ]}
    />
  ));
