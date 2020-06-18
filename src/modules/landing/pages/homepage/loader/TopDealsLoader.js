// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import React from 'react';

const TopDealsLoader = () => (
  <>
    <TopDealsLoader.Wrapper>
      <rect x="0" y="15" rx="4" ry="2" width="75" height="55" />
      <rect x="85" y="15" rx="4" ry="2" width="75" height="55" />
      <rect x="165" y="15" rx="4" ry="2" width="75" height="55" />
      <rect x="245" y="15" rx="4" ry="2" width="75" height="55" />
      <rect x="325" y="15" rx="4" ry="2" width="75" height="55" />

      <rect x="0" y="75" rx="4" ry="2" width="75" height="55" />
      <rect x="85" y="75" rx="4" ry="2" width="75" height="55" />
      <rect x="165" y="75" rx="4" ry="2" width="75" height="55" />
      <rect x="245" y="75" rx="4" ry="2" width="75" height="55" />
      <rect x="325" y="75" rx="4" ry="2" width="75" height="55" />
    </TopDealsLoader.Wrapper>
  </>
);

TopDealsLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 676px;
  margin: -70px 0 0 0;
  display: block;
`;

export default TopDealsLoader;
