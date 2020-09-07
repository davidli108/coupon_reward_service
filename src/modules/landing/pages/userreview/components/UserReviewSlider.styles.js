// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (UserReviewSlider: Object) => {
  UserReviewSlider.Wrapper = styled.div`
    background: ${props => props.theme.colors.blueBg};

    .container {
      width: 95%;
      margin: 0 auto;
      padding: 50px 0;

      ${breakpoint('md')`
        width: 100%;
      `}

      ${breakpoint('lg')`
        width: 1170px;
      `}
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
      width: 135px;
      height: 360px;
      margin: 0;
      border-radius: 5px;
      display: flex;
      align-items: center;
      border: 0;
      padding: 20px 18px;
      background: ${props => props.theme.colors.white};
      cursor: pointer;
      position: relative;
      transition: all .3s ease-in;
      flex-direction: column;

      ${breakpoint('md')`
        width: 166px;
      `}

      ${breakpoint('lg')`
        width: 166px;
        height: 340px;
      `}

      .reviews {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 10px;
        flex-direction: column;
        ${breakpoint('lg')`
          flex-direction: row;
        `}

        img {
          display: inline-block;
          width: 13px;
          height: 13px;
        }

        span {
          font-size: 12px;
          line-height: 150%;
          letter-spacing: 0.220812px;
          color: ${props => props.theme.colors.blackGrey};
          margin-left: 5px;
        }
      }

      .quote-img {
        width: 85px;
        height: 85px;

        img {
          width: 100%;
          height: 100%;
          margin-right: 2px;
        }
      }

      p {
        width: 100%;
        margin: 0;
        text-align: center;
        padding: 10px;
  
        /* stylelint-disable */
        &.quote-content {
          font-family: ${({ theme }) => theme.fonts.roboto} !important;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          letter-spacing: 0.5px;
          padding: 0;
          color: ${props => props.theme.colors.blackGrey};
          display: block;
          overflow: hidden;
          height: 120px;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
        /* stylelint-enable */

        .quote-name {
          font-family: ${({ theme }) => theme.fonts.roboto} !important;
          letter-spacing: 0.405149px;
          line-height: 150%;
          font-weight: 700;
          font-size: 14px;
          color: ${props => props.theme.colors.blackGrey};
        }
      }
    }

    .slick-slider {
      position: relative;
      display: block;
      box-sizing: border-box;
      user-select: none;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
      padding: 0 0 40px 0;

      *:focus {
        outline: none;
      }
    }

    .slick-list {
      position: relative;
      display: block;
      overflow: hidden;
      margin: 0;
      box-sizing: border-box;
    }

    .slick-list:focus {
      outline: none;
    }

    .slick-list.dragging {
      cursor: pointer;
      cursor: hand;
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
      color: ${props => props.theme.colors.blueBlanknew};
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

    .center-it {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-green-v2 {
      display: inline-block;
      align-items: center;
      font-family: ${({ theme }) => theme.fonts.montserrat} !important;
      background: ${props => props.theme.colors.greenBlank};
      border-radius: 5px;
      line-height: 50px;
      color: ${props => props.theme.colors.white};
      text-decoration: none !important;
      text-align: center;
      border: 1px solid ${props => props.theme.colors.greenBlank};
      cursor: pointer;
      box-shadow: 0 10px 44px rgba(0, 0, 0, .17);
      transition: all .4s ease;
      margin: 5px 0;
      font-weight: 700;

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

      &:hover {
        background: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.greenBlank};

        &::after {
          border-left-color: ${props => props.theme.colors.greenBlank};
        }
      }
    }
  `;
};

export default styles;
