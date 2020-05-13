// @flow
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SlickButtonWrapper = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any) => <span {...props}>{children}</span>;

export const slider_settings = {
  speed: 500,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  swipe: false,
  prevArrow: (
    <SlickButtonWrapper>
      <FaChevronLeft />
    </SlickButtonWrapper>
  ),
  nextArrow: (
    <SlickButtonWrapper>
      <FaChevronRight />
    </SlickButtonWrapper>
  ),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
  ],
};

export const categories_settings = {
  speed: 500,
  dots: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: false,
  swipe: false,
  prevArrow: (
    <SlickButtonWrapper>
      <FaChevronLeft />
    </SlickButtonWrapper>
  ),
  nextArrow: (
    <SlickButtonWrapper>
      <FaChevronRight />
    </SlickButtonWrapper>
  ),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
  ],
};
