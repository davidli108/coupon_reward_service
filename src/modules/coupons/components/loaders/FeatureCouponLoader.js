// @flow
import ContentLoader from 'react-content-loader';
import React from 'react';
import styled from 'styled-components';

const FeatureCouponLoader = () => (
  <FeatureCouponLoader.Wrapper height="250px" width={window.screen.width}>
    <rect x="0" y="0" rx="2" ry="4" width={window.screen.width} height="250" />
  </FeatureCouponLoader.Wrapper>
);

FeatureCouponLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 250px;
  margin-top: 33px;
  margin-left: auto;
  margin-right: auto;
`;

export default FeatureCouponLoader;
