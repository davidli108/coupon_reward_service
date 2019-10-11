import { storiesOf } from '@storybook/react';
import React from 'react';

import BackgroundsDecorator from '@modules/storybook/decorators/BackgroundsDecorator';
import RouterDecorator from '@modules/storybook/decorators/RouterDecorator';
import StyledComponentsDecorator from '@modules/storybook/decorators/StyledComponentsDecorator';

import Featured from './Featured';

storiesOf('Components|@Store', module)
  .addDecorator(RouterDecorator)
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
          offer_id: 12344,
          cashback_text: '2.00',
          cashbackok: 1,
          country: 'us',
          pay_type: 1,
          store_id: '1',
        },
      ]}
    />
  ));
