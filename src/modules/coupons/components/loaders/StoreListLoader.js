// @flow
import ContentLoader from 'react-content-loader';
import React from 'react';
import styled from 'styled-components';

const CategoriesLoader = () => (
  <CategoriesLoader.Wrapper height="140px" width={770}>
    <rect x="0" y="0" rx="2" ry="4" width="120" height="100" />
    <rect x="130" y="0" rx="2" ry="4" width="120" height="100" />
    <rect x="260" y="0" rx="2" ry="4" width="120" height="100" />
    <rect x="390" y="0" rx="2" ry="4" width="120" height="100" />
    <rect x="520" y="0" rx="2" ry="4" width="120" height="100" />
    <rect x="650" y="0" rx="2" ry="4" width="120" height="100" />
  </CategoriesLoader.Wrapper>
);

CategoriesLoader.Wrapper = styled(ContentLoader)`
  width: 770px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export default CategoriesLoader;
