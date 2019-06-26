// @flow
import {
  GlobalStyle as BaseGlobalStyle,
  theme as baseTheme,
} from './themes/base';

const themeMap = {
  base: {
    theme: baseTheme,
    GlobalStyle: BaseGlobalStyle,
  },
};

export const getTheme = (themeName: string) => themeMap[themeName] || {};
