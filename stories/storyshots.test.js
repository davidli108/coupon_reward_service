import initStoryshots, {
  snapshotWithOptions,
}             from '@storybook/addon-storyshots';
import React  from 'react';

import 'jest-styled-components';
import { initializeI18n } from '../src/modules/localization/i18n';

initializeI18n();

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock: element => {
      if (element.type === 'input' && element.props.type === 'file') {
        return document.createElement('input');
      }

      return null;
    },
  }),
});
