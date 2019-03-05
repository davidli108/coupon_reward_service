// @flow
import type { StoryDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { getTheme } from '@theme';

const { theme } = getTheme('base');

const StyledComponentsDecorator: StoryDecorator = story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);

export default StyledComponentsDecorator;
