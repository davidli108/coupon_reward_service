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
  margin: 10px 0;

  ${breakpoint('sx')`
    width: 45%;
    margin: 10px 9px;
  `}

  ${breakpoint('lg')`
    width: 47%;
  `}

  ${breakpoint('xl')`
    width: 31%;
  `}
`;

export default CouponLoader;
