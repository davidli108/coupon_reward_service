// @flow
import ContentLoader from 'react-content-loader';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const CouponLoader = () => (
  <CouponLoader.Wrapper height="590">
    <rect x="0" y="0" rx="2" ry="4" width={window.screen.width} height="590" />
  </CouponLoader.Wrapper>
);

CouponLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 590px;
  margin: 16px 0;

  ${breakpoint('sx')`
    width: 47%;
    margin: 10px 1.3% 10px 0;
  `}

  ${breakpoint('md')`
    width: 47%;
    margin: 10px 0 10px 2.2%;
  `}

  ${breakpoint('lg')`
    width: 47%;
    margin: 10px 0 10px 1.8%;
  `}

  ${breakpoint('xl')`
    width: 31%;
    margin: 10px 0 10px 13px;
  `}
`;

export default CouponLoader;
