// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import React from 'react';

const StoreContentLoader = () => (
  <StoreContentLoader.Wrapper
    height={window.screen.height}
    width={window.screen.width}
  >
    <rect
      x="0"
      y="10"
      rx="4"
      ry="2"
      width={window.screen.width * 0.6}
      height="50"
    />

    <StoreContentLoader.ThreeRect
      x="0"
      y="100"
      rx="1"
      ry="1"
      width="400"
      height="330"
    />
    <StoreContentLoader.ThreeRect
      x={window.screen.width * 0.33}
      y="100"
      rx="1"
      ry="1"
      width="400"
      height="330"
    />
    <StoreContentLoader.ThreeRect
      x={window.screen.width * 0.66}
      y="100"
      rx="1"
      ry="1"
      width="400"
      height="330"
    />

    <rect
      x="0"
      y="500"
      rx="4"
      ry="2"
      width={window.screen.width * 0.96}
      height="200"
    />
    <rect
      x="0"
      y="710"
      rx="4"
      ry="2"
      width={window.screen.width * 0.96}
      height="200"
    />
    <rect
      x="0"
      y="920"
      rx="4"
      ry="2"
      width={window.screen.width * 0.96}
      height="200"
    />
  </StoreContentLoader.Wrapper>
);

StoreContentLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 800px;
`;

StoreContentLoader.ThreeRect = styled.rect`
  width: 30%;
`;

export default StoreContentLoader;
