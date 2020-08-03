// @flow
import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
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
    margin-top: 60px;

    ${breakpoint('ss')`
      margin-top: 105px;
    `}

    &.landing-minimized {
      margin-top: 191px;
    }

    &.no-scroll {
      position: fixed;
      max-height: 100%;
      width: 100%;
      overflow: hidden;
    }
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

  ${({ theme }) => `
    #iubenda-cs-banner {
      box-sizing: border-box;
      bottom: 0px !important;
      left: 0px !important;
      position: fixed !important;
      width: 100% !important;
      z-index: 99999998 !important;
      background-color: rgba(255, 255, 255, .95);
      box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.2);

      @media only screen and (min-width: 320px) {
        padding: 10px 0 !important;
      }

      @media only screen and (min-width: 768px) {
        padding: 10px 40px !important;
      }

      @media only screen and (min-width: 992px) {
        padding: 10px 75px !important;
      }

      @media only screen and (min-width: 1200px) {
        padding: 10px 20px !important;
      }
    }

    .iubenda-cs-content {
      display: block;
      margin: 0 auto;
      padding: 0 15px;
      width: auto;
      font-family: ${theme.fonts.roboto};
      line-height: 14px;
      font-size: 11px;
      background: 0 none;
      color: ${theme.colors.blackExLight};

      @media only screen and (min-width: 320px) {
        max-width: padding: 0 10px;;
      }

      @media only screen and (min-width: 768px) {
        max-width: padding: 0 15px;
      }

      #iubenda-cs-title {
        display: none;
      }

      #iubenda-cs-paragraph {
        @media only screen and (min-width: 320px) {
          max-width: calc(100% - 40px);
        }

        @media only screen and (min-width: 992px) {
          max-width: 800px;
        }

        @media only screen and (min-width: 1200px) {
          max-width: 900px;
        }
      }

      .iubenda-cs-cookie-policy-lnk {
        font-family: ${theme.fonts.roboto};
        line-height: 14px;
        font-size: 11px;
        font-weight: 400;
        color: ${theme.colors.blackExLight};
      }

      .iubenda-cs-rationale {
        max-width: 975px;
      }
    }

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
      background: 0 none;
      text-decoration: none;
      position: absolute;
      top: -10px;
      right: 0;
      border: none;
      width: 40px;
      height: 40px;
      line-height: 12px;
      color: transparent;
      display: block;
      cursor: pointer;

      @media only screen and (min-width: 320px) {
        top: auto;
        bottom: -5px;
        right: -10px;
      }

      @media only screen and (min-width: 768px) {
        right: -40px;
        top: -5px;
        bottom: auto;
      }

      @media only screen and (min-width: 992px) {
        bottom: auto;
        top: -5px;
      }

      &:before,
      &:after {
        content: '';
        display: block;
        background-color: ${theme.colors.blackExLight};
        position: absolute;
        width: 16px;
        height: 1px;
        left: 50%;
        top: 50%;
        margin: 0px 0 0 -8px;
        transform-origin: center;
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }

    .iubenda-cs-cookie-policy-lnk {
      text-decoration: underline;
      color: #fff;
      font-size: 14px;
      font-weight: 900;
    }

    div#iubenda-iframe {
      box-sizing: border-box;

      @media only screen and (min-width: 320px) {
        align-items: center !important;
      }

      #iubenda-iframe-popup {
        width: 100% !important;
        margin: 0 15px !important;
        max-width: 980px !important;
        box-shadow: none !important;
        background-color: white !important;
        border-radius: 8px !important;
        box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.2) !important;
        padding: 40px 20px 0!important;
        height: calc(100vh - 175px + 40px + 90px) !important;
        max-height: calc(650px + 40px + 90px) !important;

        @media only screen and (min-width: 480px) {
          height: calc(100vh - 230px + 40px + 90px) !important;
        }

        @media only screen and (min-width: 768px) {
          padding: 40px 40px 0 !important;
        }

        @media only screen and (min-width: 1200px) {
          padding: 40px 90px 0 !important;
        }

        #iubenda-iframe-content {
          margin: 0 auto !important;
          border-radius: 5px !important;
          background-color: #fff !important;

          .iubenda-iframe-footer {
            justify-content: center !important;
            background-color: #fff !important;

            > * {
              margin: 0 !important;
            }

            #iubFooterBtnContainer {
              display: flex;
              align-items: center;

              @media only screen and (min-width: 320px) {
                transform: none !important;
                justify-content: center !important;
                height: 60px !important;
              }

              @media only screen and (min-width: 768px) {
                transform: none !important;
                justify-content: center !important;
                height: 90px !important;
              }

              button {
                height: 31px !important;
                margin: 0 !important;
                padding: 0 20px !important;
                border-radius: 5px !important;
                background-color: ${theme.colors.greenMain} !important;
                font-family: 'Montserrat', Helvetica, Arial, sans-serif !important;
                font-size: 12px !important;
                line-height: 15px !important;
                font-weight: 700 !important;
                text-transform: capitalize !important;

                @media only screen and (min-width: 320px) {
                  flex: none !important;
                }
              }
            }
          }
        }

        .iubenda-iframe-close-btn {
          display: none !important;
        }
      }

      .iubenda-iframe-top-container {
        padding: 0 !important;

        // iframe {
        //   height: calc(100vh - 230px) !important;
        // }
      }
    }

    #iubenda-iframe.iubenda-iframe-visible {
      background: 0 none !important;
    }
  `}
`;

export const theme = {
  // patterns
  breakpoints,
  colors,
  fonts,
  // components
};
