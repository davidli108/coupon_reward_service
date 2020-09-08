// @flow
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SlickButtonWrapper = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any) => <span {...props}>{children}</span>;

export const sliderSettings = {
  speed: 500,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
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
      breakpoint: 1200,
      settings: {
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
  ],
};
