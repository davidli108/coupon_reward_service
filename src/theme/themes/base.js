// @flow
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import breakpoints from '../patterns/breakpoints';
import breakpoint from 'styled-components-breakpoint';
import colors from '../patterns/colors';
import fonts from '../patterns/fonts';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family : ${props => props.theme.fonts.roboto};
    margin-top: 66px;
    ${breakpoint('ss')`
      margin-top: 88px;
    `}
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

  ${({ domain }) =>
    domain.includes('joinpiggy.com')
      ? `
    #iubenda-cs-banner {
      bottom: 0px !important;
      left: 0px !important;
      position: fixed !important;
      width: 100% !important;
      z-index: 99999998 !important;
      background-color: black;
    }
    .iubenda-cs-content {
      display: block;
      margin: 0 auto;
      padding: 20px;
      width: auto;
      font-family: Helvetica,Arial,FreeSans,sans-serif;
      font-size: 14px;
      background: #000;
      color: #fff;}
    .iubenda-cs-rationale {
      max-width: 900px;
      position: relative;
      margin: 0 auto;
    }
    .iubenda-banner-content > p {
      font-family: Helvetica,Arial,FreeSans,sans-serif;
      line-height: 1.5;
    }
    .iubenda-cs-close-btn {
      margin:0;
      color: #000;
      text-decoration: none;
      font-size: 14px;
      position: absolute;
      top: 0;
      right: -10px;
      border: none;
      background-color: #fff;
    }
    .iubenda-cs-cookie-policy-lnk {
      text-decoration: underline;
      color: #fff;
      font-size: 14px;
      font-weight: 900;
    }
  `
      : ''}
`;

export const theme = {
  // patterns
  breakpoints,
  colors,
  fonts,
  // components
};
