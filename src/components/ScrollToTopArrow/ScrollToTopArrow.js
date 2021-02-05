import React from 'react';
import ScrollToTop from 'react-scroll-up';

import Arrow from './assets/scroll_to_top_arrow.svg';

const ScrollToTopArrow = () => (
  <ScrollToTop showUnder={160} style={{ right: '5%', zIndex: 100 }}>
    <ScrollToTopArrow.Wrapper>
      <img src={Arrow} alt="Up" />
    </ScrollToTopArrow.Wrapper>
  </ScrollToTop>
);

export default ScrollToTopArrow;
