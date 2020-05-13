// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (HomeHowItWorks: Object) => {
  HomeHowItWorks.Wrapper = styled.div`
    margin: 70px auto 100px;
    padding: 0 15px;
    max-width: 1170px;
    box-sizing: border-box;
    text-align: center;

    ${breakpoint('md')`
      margin: 70px auto 100px;
    `}

    .row {
      margin: 0 -15px;
      display: flex;
      flex-flow: row wrap;

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    [class*='col-'] {
      padding: 0 15px;
      box-sizing: border-box;
    }

    .col-xs-12 {
      flex: 1 0 100%;
      max-width: 100%;
    }

    .col-sm-4 {
      flex: 1 0 100%;
      max-width: 100%;

      ${breakpoint('md')`
        flex: 1 0 33.333333%;
        max-width: 33.333333%;
      `}
    }

    h2 {
      margin: 10px 20px;

      ${breakpoint('lg')`
        margin: 10px 0 40px;
      `}
    }

    p {
      padding: 10px 20px;

      > a {
        display: block;
        color: #29343c;
        font-weight: 700;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
          text-decoration: none;
        }
      }

      ${breakpoint('lg')`
        padding: 10px 50px;
      `}
    }

    .center-it {
      margin-top: 60px;
    }

    .btn-green-v2 {
      display: inline-flex;
      align-items: center;
      background: #00ba4a;
      border-radius: 5px;
      line-height: 50px;
      color: #fff;
      text-decoration: none !important;
      text-align: center;
      border: 1px solid #00ba4a;
      cursor: pointer;
      box-shadow: 0 10px 44px rgba(0, 0, 0, 0.17);
      transition: all 0.4s ease;
      margin: 5px 0;
      padding: 0 50px;
      font-size: 20px;
      font-weight: 400;

      strong {
        font-weight: 700;
        margin: 0 5px 0 0;
      }

      &::after {
        content: '';
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 6px solid #fff;
        display: block;
        margin: 0 0 0 20px;
      }

      &:hover {
        background: #fff;
        color: #00ba4a;

        &::after {
          border-left-color: #00ba4a;
        }
      }
    }

    .text-center {
      text-align: center;
    }

    h2.h2class,
    h3.h3class {
      font-size: 29px;
      line-height: 35px;
      font-family: ${({ theme }) => theme.fonts.montserrat} !important;
      color: #374b5a;
      font-weight: 700;

      ${breakpoint('md')`
        font-size: 30px;
        line-height: 36px;
      `}

      ${breakpoint('lg')`
        font-size: 39px;
        line-height: 47px;
      `}
    }

    h3.h3class {
      font-size: 25px;
      line-height: 30px;
      letter-spacing: 0.5px;
      margin-top: 20px;
    }

    p.pclass {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.5px;
      color: #62707b;
      padding: 10px 20px;
      margin: 15px 0;

      ${breakpoint('lg')`
        padding: 10px 50px;
      `}
    }
  `;
};

export default styles;
