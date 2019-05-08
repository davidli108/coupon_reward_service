// @flow
import ContentLoader from 'react-content-loader';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const FeatureCouponLoader = () => (
  <FeatureCouponLoader.Wrapper height={250} width={window.screen.width}>
    <rect x="0" y="0" rx="2" ry="4" width={window.screen.width} height="250" />
  </FeatureCouponLoader.Wrapper>
);

FeatureCouponLoader.Wrapper = styled(ContentLoader)`
  width: 98%;
  height: 250px;
  margin-top: 48px;
  margin-left: auto;
  margin-right: auto;

  ${breakpoint('md')`
    height: 230px;
  `}

  ${breakpoint('lg')`
    height: 180px;
  `}
`;

export default FeatureCouponLoader;
