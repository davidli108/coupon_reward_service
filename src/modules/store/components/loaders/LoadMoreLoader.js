// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import React from 'react';

const LoadMoreLoader = () => (
  <LoadMoreLoader.Wrapper
    height={window.screen.height}
    width={window.screen.width}
  >
    <rect x="0" y="10" rx="4" ry="2" width={window.screen.width} height="200" />
    <rect
      x="0"
      y="220"
      rx="4"
      ry="2"
      width={window.screen.width}
      height="200"
    />
    <rect
      x="0"
      y="430"
      rx="4"
      ry="2"
      width={window.screen.width}
      height="200"
    />
  </LoadMoreLoader.Wrapper>
);

LoadMoreLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 800px;
  flex-basis: 850px;
`;

export default LoadMoreLoader;
