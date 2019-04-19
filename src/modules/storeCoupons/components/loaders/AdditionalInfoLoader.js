// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import React from 'react';

const BrandImageLoader = () => (
  <BrandImageLoader.Wrapper height={window.screen.height}>
    <rect x="0" y="0" rx="4" ry="2" width="200" height="40" />
    <rect x="0" y="70" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="95" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="120" rx="4" ry="2" width="350" height="20" />
    <rect x="0" y="145" rx="4" ry="2" width="400" height="20" />
    <rect x="0" y="170" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="195" rx="4" ry="2" width="150" height="20" />
    <rect x="0" y="220" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="245" rx="4" ry="2" width="350" height="20" />

    <rect x="0" y="350" rx="4" ry="2" width="200" height="40" />
    <rect x="0" y="430" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="455" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="480" rx="4" ry="2" width="350" height="20" />
    <rect x="0" y="505" rx="4" ry="2" width="400" height="20" />
    <rect x="0" y="530" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="555" rx="4" ry="2" width="150" height="20" />
    <rect x="0" y="580" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="605" rx="4" ry="2" width="350" height="20" />

    <rect x="0" y="710" rx="4" ry="2" width="200" height="40" />
    <rect x="0" y="780" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="805" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="830" rx="4" ry="2" width="350" height="20" />
    <rect x="0" y="855" rx="4" ry="2" width="400" height="20" />
    <rect x="0" y="880" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="905" rx="4" ry="2" width="150" height="20" />
    <rect x="0" y="930" rx="4" ry="2" width="300" height="20" />
    <rect x="0" y="955" rx="4" ry="2" width="350" height="20" />
  </BrandImageLoader.Wrapper>
);

BrandImageLoader.Wrapper = styled(ContentLoader)`
  width: 95%;
  margin-top: 100px;
`;

export default BrandImageLoader;
