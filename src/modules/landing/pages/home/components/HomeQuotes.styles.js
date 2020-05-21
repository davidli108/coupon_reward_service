// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (HomeQuotes: Object) => {
  HomeQuotes.Wrapper = styled.div`
    h2 {
      margin: 50px 0;
    }

    .ul-quote {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        outline: 0;
      }
    }

    .quote-block {
      box-sizing: border-box;
      width: 200px;
      height: 220px;
      margin: 0;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      padding: 10px;
      background: #fff;
      box-shadow: 0px 19.4472px 35.6531px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      position: relative;
      transition: all .3s ease-in;
      transform: scale(1);
      flex-direction: column;
      filter: blur(3px);

      ${breakpoint('ss')`
        flex-direction: row;
        width: 280px;
        height: 135px;
      `}

      ${breakpoint('md')`
        justify-content: space-between;
        padding: 15px 25px;
        width: 400px;
        height: 130px;
        margin: 0 10px;
      `}

      ${breakpoint('lg')`
        width: 598px;
        height: 145px;
        margin: 0 60px;
      `}

      &:hover {
        filter: blur(0);
      }

      .quote-img {
        width: 60px;
        height: 60px;
        margin-top: -7px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }

        ${breakpoint('md')`
          width: 90px;
          height: 90px;
          margin-top: -7px;
        `}
      }

      p {
        width: 100%;
        margin: 0 10px 0;
        font-weight: 300;
        font-style: italic;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.0945348px;
        color: #62707b;
        text-align: center;
        margin-top: 15px;
        padding-bottom: 20px;

        ${breakpoint('ss')`
          width: calc(100% - 60px);
          text-align: left;
          font-size: 12px;
          line-height: 14px;
          margin-top: 0;
          padding-bottom: 0;
        `}

        ${breakpoint('md')`
          width: calc(100% - 100px);
          margin: 0 0 0 20px;
          text-align: left;
        `}

        .quote-name {
          margin-top: 5px;
          display: block;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 1;

          ${breakpoint('md')`
            margin-top: 20px;
          `}
        }
      }
    }

    .slick-current {
      .quote-block {
        filter: blur(0);
        z-index: 2;
        transition: all .3s ease-in;
        transform: scale(1.3);
      }
    }

    .slick-slider {
      position: relative;
      display: block;
      box-sizing: border-box;
      user-select: none;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;

      *:focus {
        outline: none;
      }
    }

    .slick-list {
      position: relative;
      display: block;
      overflow: hidden;
      margin: 0;
      padding: 0;
      padding-bottom: 130px !important;
      padding-top: 60px !important;
      height: 440px !important;
      box-sizing: border-box;

      ${breakpoint('ss')`
        padding-top: 60px !important;
        height: 340px !important;
      `}

      ${breakpoint('md')`
        padding: 60px 0 130px !important;
        height: 340px !important;
      `}

      ${breakpoint('lg')`
        padding-top: 40px !important;
        height: auto !important;
      `}
    }

    .slick-list:focus {
      outline: none;
    }

    .slick-list.dragging {
      cursor: pointer;
      cursor: hand;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list {
      transform: translate3d(0, 0, 0);
    }

    .slick-track {
      position: relative;
      top: 0;
      left: 0;
      display: flex;
      margin-left: auto;
      margin-right: auto;
    }

    .slick-track::before,
    .slick-track::after {
      display: table;
      content: '';
    }

    .slick-track::after {
      clear: both;
    }

    .slick-loading .slick-track {
      visibility: hidden;
    }

    .slick-slide {
      display: none;
      float: left;
      height: 100%;
      min-height: 1px;
    }

    [dir='rtl'] .slick-slide {
      float: right;
    }

    .slick-slide img {
      display: block;
    }

    .slick-slide.slick-loading img {
      display: none;
    }

    .slick-slide.dragging img {
      pointer-events: none;
    }

    .slick-initialized .slick-slide {
      display: block;
    }

    .slick-loading .slick-slide {
      visibility: hidden;
    }

    .slick-vertical .slick-slide {
      display: block;
      height: auto;
      border: 1px solid transparent;
    }

    .slick-arrow.slick-hidden {
      display: none;
    }

    h2.h2class {
      font-size: 29px;
      line-height: 35px;
      font-family: ${({ theme }) => theme.fonts.montserrat} !important;
      color: #374b5a;
      font-weight: 700;
      text-align: center;

      ${breakpoint('md')`
        font-size: 30px;
        line-height: 36px;
      `}

      ${breakpoint('lg')`
        font-size: 39px;
        line-height: 47px;
      `}
    }
  `;
};

export default styles;
