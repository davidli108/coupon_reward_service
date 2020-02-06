// @flow
import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const PopularStoresLoader = () => {
  return <PopularStoresLoader.Wrapper />;
};

PopularStoresLoader.Wrapper = styled(ContentLoader)`
  display: flex;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  height: 288px;
  box-sizing: border-box;
`;

export default PopularStoresLoader;
