// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import React from 'react';

const FeaturedCashbackLoader = () => (
  <>
    <FeaturedCashbackLoader.Wrapper>
      <rect x="0" y="15" rx="4" ry="2" width="75" height="45" />
      <rect x="85" y="15" rx="4" ry="2" width="75" height="45" />
      <rect x="165" y="15" rx="4" ry="2" width="75" height="45" />
      <rect x="245" y="15" rx="4" ry="2" width="75" height="45" />
      <rect x="325" y="15" rx="4" ry="2" width="75" height="45" />

      <rect x="0" y="65" rx="4" ry="2" width="75" height="45" />
      <rect x="85" y="65" rx="4" ry="2" width="75" height="45" />
      <rect x="165" y="65" rx="4" ry="2" width="75" height="45" />
      <rect x="245" y="65" rx="4" ry="2" width="75" height="45" />
      <rect x="325" y="65" rx="4" ry="2" width="75" height="45" />
    </FeaturedCashbackLoader.Wrapper>
  </>
);

FeaturedCashbackLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 676px;
  margin: -70px 0 0;
  display: block;
`;

export default FeaturedCashbackLoader;
