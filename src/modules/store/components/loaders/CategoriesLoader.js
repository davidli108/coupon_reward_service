// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import React from 'react';

const CategoriesLoader = () => (
  <CategoriesLoader.Wrapper height={window.screen.height}>
    <rect x="0" y="0" rx="4" ry="2" width="200" height="60" />
    <rect x="0" y="70" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="140" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="210" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="280" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="350" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="420" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="490" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="560" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="630" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="700" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="770" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="840" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="910" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="980" rx="1" ry="1" width="400" height="60" />
    <rect x="0" y="1050" rx="1" ry="1" width="400" height="60" />
  </CategoriesLoader.Wrapper>
);

CategoriesLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 800px;
`;

export default CategoriesLoader;
