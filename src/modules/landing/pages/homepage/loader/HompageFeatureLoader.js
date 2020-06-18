// @flow
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import React from 'react';

const HomepageFeatureLoader = () => (
  <HomepageFeatureLoader.Wrapper>
    <rect x="0" y="0" rx="4" ry="2" width="325" height="265" />
    <rect x="330" y="0" rx="4" ry="2" width="70" height="265" />
  </HomepageFeatureLoader.Wrapper>
);

HomepageFeatureLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 265px;
  margin: 0 0 30px;
  display: block;
  margin-left: 10px;
`;

export default HomepageFeatureLoader;
