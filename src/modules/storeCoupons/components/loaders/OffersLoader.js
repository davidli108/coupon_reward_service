// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import React from 'react';

const OffersLoader = () => (
  <OffersLoader.ContentLoader height={130} width={window.screen.width}>
    <rect x="0" y="0" rx="2" ry="2" width={window.screen.width} height="130" />
  </OffersLoader.ContentLoader>
);

OffersLoader.ContentLoader = styled(ContentLoader)`
  width: 100%;
  height: 130px;
  min-width: 350px;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 30px;
`;

export default OffersLoader;
