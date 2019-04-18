// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import React from 'react';

const CategoriesLoader = () => (
  <CategoriesLoader.Wrapper height={window.screen.height}>
    <rect x="0" y="10" rx="4" ry="2" width="200" height="50" />
    <rect x="0" y="80" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="130" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="180" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="230" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="280" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="330" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="380" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="430" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="480" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="530" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="590" rx="4" ry="2" width="200" height="50" />
    <rect x="0" y="660" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="710" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="760" rx="1" ry="1" width="400" height="40" />
    <rect x="0" y="810" rx="1" ry="1" width="400" height="40" />
  </CategoriesLoader.Wrapper>
);

CategoriesLoader.Wrapper = styled(ContentLoader)`
  margin-top: 10px;
`;

export default CategoriesLoader;
