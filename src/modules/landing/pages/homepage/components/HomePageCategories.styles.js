// @flow
import styled from 'styled-components';

const styles = (HomePageCategories: Object) => {
  HomePageCategories.Wrapper = styled.div`
    padding: 20px 0 30px;
    margin: 0 -15px;

    div {
      &:focus {
        outline: none;
      }
    }

    .slick-track {
      display: flex;
    }

    .slick-slider {
      position: relative;
    }

    .slick-list {
      overflow: hidden;
      padding: 30px 0;
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
      right: 100%;
      margin: 0 5px 0 0;
      z-index: 1;
      bottom: 50%;
      box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      opacity: 0.8;
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
        display: flex !important;
        opacity: 0.3;
      }
    }

    .slick-next {
      right: auto;
      left: 100%;
      margin: 0 0 0 5px;

      svg {
        transform: translate(2px, 0);
      }
    }

    @media (max-width: 1199px) {
      .slick-slider {
        overflow: hidden;
      }

      .slick-next,
      .slick-prev {
        right: -50px;
        left: auto;
        margin: 0;
        opacity: 1;
        width: 90px;
        height: 90px;
        padding: 0 16px;
        box-sizing: border-box;
        justify-content: flex-start;

        svg {
          width: 20px;
          height: 20px;
        }

        &.slick-disabled {
          display: flex !important;
          opacity: 0.3;
        }
      }

      .slick-prev {
        left: -50px;
        right: auto;
        justify-content: flex-end;
      }
    }

    @media (max-width: 767px) {
      padding: 0 20px;
      overflow: visible;

      .slick-next,
      .slick-prev {
        display: none !important;

        &.slick-disabled {
          display: none !important;
        }
      }
    }
  `;

  HomePageCategories.TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 15px 20px;
  `;

  HomePageCategories.Title = styled.h2`
    font: 700 13px/19px ${({ theme }) => theme.fonts.montserrat} !important;
    color: ${({ theme }) => theme.colors.blackGrey};
  `;

  HomePageCategories.Category = styled.div`
    position: relative;
    padding: 0 21px;

    .selected {
      display: flex;
      align-items: center;
      cursor: pointer;
      font: 500 13px/19px ${({ theme }) => theme.fonts.montserrat} !important;
      color: ${({ theme }) => theme.colors.blackGrey};
    }

    svg {
      margin: 0 0 0 15px;
      height: 12px;
      width: 12px;
    }
  `;

  HomePageCategories.Backdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    cursor: pointer;
    pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
  `;

  HomePageCategories.Dropdown = styled.ul`
    position: absolute;
    left: 100%;
    top: -30px;
    z-index: 10;
    padding: 15px 0;
    border-radius: 10px;
    width: 250px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 14px 21px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease-in-out;
    transform: ${({ opened }) => `translate3d(${opened ? '0' : '20%'}, 0, 0)`};
    opacity: ${({ opened }) => Number(opened)};
    pointer-events: ${({ opened }) => (opened ? 'auto' : 'none')};
    overflow-y: auto;
    max-height: 470px;

    li {
      height: 40px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      font: 400 13px/20px ${({ theme }) => theme.fonts.roboto};
      color: ${({ theme }) => theme.colors.darkGray};
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.blackGrey};
      }
    }

    a {
      color: ${({ theme }) => theme.colors.darkGray};

      &:hover {
        color: ${({ theme }) => theme.colors.blackGrey};
      }
    }

    &::before {
      content: '';
      display: block;
      border-width: 8px 8px 8px 0;
      border-style: solid;
      border-color: transparent;
      border-right-color: ${({ theme }) => theme.colors.white};
      position: absolute;
      right: 100%;
      top: 32px;
    }

    @media (max-width: 767px) {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      max-height: 50%;
    }
  `;

  HomePageCategories.Slide = styled.div`
    padding: 0 15px;
    box-sizing: border-box;

    @media (max-width: 991px) {
      padding: 0 10px;
    }

    @media (max-width: 767px) {
      padding: 0 5px;
    }
  `;

  HomePageCategories.SlideWrapper = styled.div`
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    height: 223px;
    box-sizing: border-box;
    padding: 20px 7px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;

    svg {
      width: 32px;
      height: 32px;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.greenMain};
      color: ${({ theme }) => theme.colors.white};
      padding: 7px;
      position: absolute;
      transition: all 0.3s ease;
      left: 50%;
      top: 0;
      opacity: 0;
      transform: translate3d(-50%, 0, 0);
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 121px;

      img {
        display: block;
        width: auto;
        height: 66px;
      }
    }

    b {
      display: block;
      text-align: center;
      width: 100%;
      height: 42px;
      font: 600 14px/21px ${({ theme }) => theme.fonts.montserrat} !important;
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.colors.blackGrey};
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.darkGray};
      box-shadow: 0px 14px 21px rgba(0, 0, 0, 0.25);

      svg {
        opacity: 1;
        transform: translate3d(-50%, -50%, 0);
      }
    }

    @media (max-width: 375px) {
      b {
        display: block;
        text-align: center;
        width: 100%;
        height: 42px;
        font: 600 10px/21px ${({ theme }) => theme.fonts.montserrat} !important;
        letter-spacing: 0.5px;
        color: ${({ theme }) => theme.colors.blackGrey};
      }
    }
  `;
};

export default styles;
