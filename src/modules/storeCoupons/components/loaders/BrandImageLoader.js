// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import React from 'react';

const BrandImageLoader = () => (
  <BrandImageLoader.ContentLoader height={window.screen.height}>
    <rect x="0" y="0" rx="4" ry="2" width="500" height="2000" />
  </BrandImageLoader.ContentLoader>
);

BrandImageLoader.ContentLoader = styled(ContentLoader)`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 150px;

  border-radius: 5px;

  ${breakpoint('xl')`
    width: 270px;
    height: 280px;
  `}

  > img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export default BrandImageLoader;
