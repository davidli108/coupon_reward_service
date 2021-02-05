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
    width: 263px;
    min-height: 343px;
  `}

  @media (max-width: 992px) {
    width: 211px;
    min-height: 333px;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 189px;
  }
`;

export default BrandImageLoader;
