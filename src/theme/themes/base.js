// @flow
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import breakpoints from '../patterns/breakpoints';
import colors from '../patterns/colors';
import fonts from '../patterns/fonts';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family : ${props => props.theme.fonts.roboto};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition-delay: 99999s;
  }

  * {
    font-family: Roboto, sans-serif !important;
  }

  a {
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: none;
    }
  }
`;

export const theme = {
  // patterns
  breakpoints,
  colors,
  fonts,
  // components
};
