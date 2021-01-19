// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (Home: Object) => {
  Home.Wrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
    height: 670px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 580px;
    box-sizing: border-box;
    margin-top: 150px;

    * {
      letter-spacing: .3px;
    }

    ${breakpoint('md')`
      margin-top: 100px;
    `}

    ${breakpoint('lg')`
      height: 670px;
      margin-bottom: 0px;
    `}

    .floating-banner {
      width: 280px;
      height: 210px;
      margin: 20px auto;
      border-radius: 5px;
      box-shadow: 0px 18.1925px 26.4619px rgba(0, 0, 0, 0.2);

      ${breakpoint('ss')`
        width: 328px;
        height: 258px;
      `}

      ${breakpoint('lg')`
        width: 461px;
        height: 363px;
        margin: 0;
        float: right;
      `}

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    h1 {
      font-family: ${({ theme }) => theme.fonts.montserrat} !important;
      font-size: 24px;
      line-height: 30px;
      letter-spacing: -5%;
      color: #374b5a;
      font-weight: 700;
      margin: 0;
      text-align: center;

      ${breakpoint('ss')`
        font-size: 35px;
        line-height: 42px;
      `}

      ${breakpoint('lg')`
        text-align: left;
        font-size: 45px;
        line-height: 54px;
      `}

      ${breakpoint('xl')`
        font-size: 55px;
        line-height: 66px;

        &:lang(fr) {
          font-size: 45px;
          line-height: 50px;
        }
      `}
    }

    p {
      font-size: 13px;
      line-height: 140%;
      color: #374b5a;
      margin: 15px 0;
      padding: 0;
      text-align: center;

      ${breakpoint('ss')`
        font-size: 15px;
        line-height: 140%;
      `}

      ${breakpoint('lg')`
        text-align: left;
        font-size: 17px;
        line-height: 140%;
        padding-right: 20px;
      `}

      ${breakpoint('xl')`
        line-height: 160%;
        padding-right: 40px;
      `}

      span {
        font-weight: 700;
        color: #222b31;
      }

      &.number-users {
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin-right: 10px;
        padding: 0;
      }
    }

    .five-stars {
      margin: 0;
      text-align: center;

      ${breakpoint('lg')`
        text-align: left;
      `}

      img {
        display: inline-block;
        margin-top: -3px;
      }
    }

    .center-it-m {
      text-align: center;

      ${breakpoint('lg')`
        text-align: left;
      `}
    }
  }

  #home-hero-v2 {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 100%;
    grid-template-areas:
      "title "
      "banner"
      "info";

    ${breakpoint('lg')`
      grid-template-columns: 50% 50%;
      grid-template-areas:
        "title banner"
        "info banner";
    `}

    ${breakpoint('xl')`
      grid-template-columns: 58.33333333% 41.66666667%;
    `}

    .hero-block-title {
      grid-area: title;
    }

    .hero-block-banner {
      grid-area: banner;
    }

    .hero-block-info {
      grid-area: info;

      a {
        display: inline-block;
        align-items: center;
        background: #00ba4a;
        border-radius: 5px;
        line-height: 50px;
        color: #fff;
        text-decoration: none !important;
        text-align: center;
        border: 1px solid #00ba4a;
        cursor: pointer;
        box-shadow: 0 10px 44px rgba(0, 0, 0, .17);
        transition: all .4s ease;
        margin: 5px 0;
        font-weight: 400;

        ${breakpoint('xs')`
          font-size: 14px;
          padding: 0 7px;
        `}

        ${breakpoint('sx')`
          padding: 0 15px;
        `}

        ${breakpoint('md')`
          padding: 0 50px;
          font-size: 20px;
        `}

        strong {
          font-weight: 700;

          ${breakpoint('lg')`
            display: block;
          `}

          ${breakpoint('xl')`
            display: inline;
          `}
        }

        &::after {
          content: '';
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 6px solid #fff;
          display: inline-block;
          margin: 0 0 0 10px;
          position: relative;
          top: 1px;
        }

        &:hover {
          background: #fff;
          color: #00ba4a;
  
          &::after {
            border-left-color: #00ba4a;
          }
        }
      }
    }
  `;
};

export default styles;
