// @flow
import ContentLoader from 'react-content-loader';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const CategoriesLoader = () => (
  <CategoriesLoader.Wrapper height="136px" width={165}>
    <rect x="0" y="0" rx="2" ry="4" width="165" height="136" />
  </CategoriesLoader.Wrapper>
);

CategoriesLoader.Wrapper = styled(ContentLoader)`
  margin-right: 7px;
  margin-left: 7px;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;

  background: #fff;

  border-radius: 5px;

  width: 120px;
  height: 120px;

  ${breakpoint('xl')`
    width: 165px;
    height: 136px;
  `}
`;

export default CategoriesLoader;
