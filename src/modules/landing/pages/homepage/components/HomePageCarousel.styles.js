// @flow
import styled from 'styled-components';

const styles = (HomePageCarousel: Object) => {
  HomePageCarousel.Wrapper = styled.div`
    display: flex;
    padding: 0 0 30px;

    @media (max-width: 991px) {
      flex-flow: column nowrap;
    }

    @media (min-width: 1199px) {
      .sliderCarousel .slick-prev.slick-disabled,
      .sliderCarousel .slick-next.slick-disabled {
        display: flex !important;
        opacity: 0.3;
      }
    }

    @media (min-width: 1199px) {
      .sliderCarousel .slick-prev,
      .sliderCarousel .slick-next {
        opacity: 1;
      }
    }
  `;

  HomePageCarousel.SliderWrapper = styled.div`
    overflow: hidden;
    width: 948px;
    height: 265px;
    border-radius: 0 0 5px 5px;
    border: 1px solid ${({ theme }) => theme.colors.whiteLight};
    border-top: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.white};
    position: relative;

    div {
      &:focus {
        outline: none;
      }
    }

    .slick-track {
      display: flex;
    }

    .slick-prev,
    .slick-next {
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      position: absolute;
      left: 20px;
      z-index: 1;
      top: 50%;
      transform: translate(0, -50%);
      box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      opacity: 0.3;
      transition: opacity 0.3s ease;

      svg {
        width: 14px;
        height: 14px;
        transform: translate(-2px, 0);
      }

      &:hover {
        opacity: 1;
      }

      &.slick-disabled {
        display: none !important;
      }
    }

    .slick-next {
      left: auto;
      right: 20px;

      svg {
        transform: translate(2px, 0);
      }
    }

    @media (max-width: 1199px) {
      width: 730px;

      .slick-prev,
      .slick-next {
        opacity: 1;

        &.slick-disabled {
          display: flex !important;
          opacity: 0.3;
        }
      }
    }

    @media (max-width: 991px) {
      width: 690px;
    }

    @media (max-width: 767px) {
      width: 100%;
      height: auto;

      .slick-next,
      .slick-prev {
        padding: 0 8px;
        box-sizing: border-box;

        svg {
          width: 20px;
          height: 20px;
        }
      }

      .slick-next {
        right: -32px;
        justify-content: flex-start;
      }

      .slick-prev {
        left: -32px;
        justify-content: flex-end;
      }
    }
  `;

  HomePageCarousel.TopStores = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 0 auto;
      background-color: ${({ theme }) => theme.colors.white};
      width: 100%;
      cursor: pointer;
      border-bottom: 2px solid ${({ theme }) => theme.colors.whitebg};

      &:last-child {
        border-radius: 0 0 6px 0;
        border: 0;
      }

      @media (max-width: 1199px) {
        border: 0;
      }

      @media (max-width: 991px) {
        width: auto;
        background: 0 none;
        flex: 0;
        height: 57px;
      }
    }

    img {
      display: block;
      max-height: 46px;
    }

    @media (max-width: 991px) {
      flex-flow: row nowrap;
      justify-content: space-around;
      margin: 9px 0 0;
    }

    @media (max-width: 767px) {
      flex-flow: row nowrap;
      justify-content: flex-start;
      overflow: scroll;

      span {
        padding: 0 25px;
      }
    }
  `;

  HomePageCarousel.Slide = styled.div`
    display: flex !important;
    align-items: center;
    justify-content: center;

    .img-content {
      width: 35%;
      display: flex;
      justify-content: center;
    }

    img {
      width: 265px;
      height: 265px;
      object-fit: scale-down;
    }

    .content {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      width: 40%;
      height: 265px;

      img {
        display: block;
        height: 51px;
        margin: 0;
      }

      h3 {
        margin: 0 0 10px;
        font: bold 20px/34px ${({ theme }) => theme.fonts.montserrat} !important;
      }

      .storeName {
        margin: 30px 0 10px;
        font-weight: bold;
        font-size: 30px;
        font-family: ${({ theme }) => theme.fonts.montserrat} !important;

        div {
          font-family: ${({ theme }) => theme.fonts.montserrat} !important;
        }
      }

      .overrideText {
        line-height: normal;
        max-height: 100px;
      }

      p {
        margin: 0 0 10px;
        font: 600 18px/24px ${({ theme }) => theme.fonts.roboto};
      }

      button {
        border: 0;
        width: 230px;
        background-color: ${({ theme }) => theme.colors.greenMain};
        padding: 0 30px;
        height: 47px;
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.white};
        font: normal 700 17px/21px ${({ theme }) => theme.fonts.montserrat} !important;
        cursor: pointer;
        transition: background 0.3s ease;
        margin-bottom: 10px;

        &:hover {
          background-color: ${({ theme }) => theme.colors.greenBlank};
        }

        &:focus {
          outline: none;
        }

        @media (max-width: 425px) {
          width: 100%;
        }
      }
    }

    @media (max-width: 1199px) {
      height: 265px;
      display: flex;
      align-items: center;

      img {
        flex: 0 0 290px;
      }

      .content {
        h3 {
          font: normal 700 16px/21px ${({ theme }) => theme.fonts.montserrat} !important;
        }
      }
    }

    @media (max-width: 767px) {
      flex-flow: column nowrap;
      height: auto;

      img {
        flex: 0 0 190px;
        width: 315px;
      }

      .content {
        text-align: center;
        padding: 16px;

        h1 {
          margin: 0 0 15px;
        }
      }
    }

    @media (max-width: 425px) {
      .img-content {
        width: 100%;
      }

      .content {
        width: 85%;
      }

      img {
        flex: 0 0 190px;
        width: inherit;
      }
    }
  `;
};

export default styles;
