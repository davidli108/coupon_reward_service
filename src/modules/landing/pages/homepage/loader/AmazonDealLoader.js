// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import React from 'react';

const AmazonDealLoader = () => (
  <>
    <AmazonDealLoader.Wrapper>
      <rect x="0" y="15" rx="4" ry="2" width="75" height="80" />
      <rect x="85" y="15" rx="4" ry="2" width="75" height="80" />
      <rect x="165" y="15" rx="4" ry="2" width="75" height="80" />
      <rect x="245" y="15" rx="4" ry="2" width="75" height="80" />
      <rect x="325" y="15" rx="4" ry="2" width="75" height="80" />
    </AmazonDealLoader.Wrapper>
  </>
);

AmazonDealLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  display: block;
  margin: -20px 0 0;
`;

export default AmazonDealLoader;
