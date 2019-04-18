// @flow
import ContentLoader from 'react-content-loader';
import React from 'react';
import styled from 'styled-components';

const CouponLoader = () => (
  <CouponLoader.Wrapper height="550">
    <rect
      x="0"
      y="0"
      rx="2"
      ry="4"
      width={window.screen.width * 0.5}
      height="550"
    />
  </CouponLoader.Wrapper>
);

CouponLoader.Wrapper = styled(ContentLoader)`
  width: 30%;
  height: 550px;
  margin-top: 20px;
  margin-right: 15px;
`;

export default CouponLoader;
