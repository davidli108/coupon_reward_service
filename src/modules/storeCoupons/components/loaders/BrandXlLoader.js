// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import React from 'react';

const BrandXlLoader = () => (
  <BrandXlLoader.Wrapper height={200}>
    <rect x="0" y="0" rx="4" ry="2" width="100" height="40" />
    <rect x="0" y="60" rx="4" ry="2" width="150" height="30" />
    <rect x="0" y="120" rx="4" ry="2" width="500" height="200" />
  </BrandXlLoader.Wrapper>
);

BrandXlLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 270px;
  display: none;

  ${breakpoint('xl')`
    display: flex;
  `}
`;

export default BrandXlLoader;
