// @flow
import ContentLoader from 'react-content-loader';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const CouponLoader = () => (
  <CouponLoader.Wrapper height="550">
    <rect x="0" y="0" rx="2" ry="4" width={window.screen.width} height="550" />
  </CouponLoader.Wrapper>
);

CouponLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 550px;
  margin-top: 20px;
  margin-right: 15px;

  ${breakpoint('sx')`
    width: 46%;
  `}

  ${breakpoint('sm')`
    width: 47%;
  `}

  ${breakpoint('xl')`
    width: 30%;
  `}
`;

/*

const breakpoints = {
  xs: 0,
  sx: 413,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

*/

export default CouponLoader;
