// @flow
import ContentLoader from 'react-content-loader';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const CategoriesLoader = () => (
  <CategoriesLoader.Wrapper height={136} width={165}>
    <rect x="0" y="0" rx="2" ry="4" width="165" height="136" />
  </CategoriesLoader.Wrapper>
);

CategoriesLoader.Wrapper = styled(ContentLoader)`
  margin-right: 7px;
  margin-left: 7px;
  display: flex;
  box-sizing: border-box;

  background: #fff;

  border-radius: 5px;

  width: 120px;
  height: 120px;

  ${breakpoint('md')`
    width: 170px;
    height: 136px;
  `}
`;

export default CategoriesLoader;
