import { setConsoleOptions } from '@storybook/addon-console';
import { withOptions }       from '@storybook/addon-options';
import {
  addDecorator,
  configure,
}                            from '@storybook/react';

if (typeof jest === 'undefined') {
  setConsoleOptions({
    panelExclude: [],
  });
}

addDecorator(
  withOptions({
    name                   : 'Piggy',
    url                    : '#',
    addonPanelInRight      : true,
    sortStoriesByKind      : true,
    hierarchySeparator     : /\//,
    hierarchyRootSeparator : /\|/,
  }),
);

configure(() => {
  const req = require.context('../src', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}, module);
