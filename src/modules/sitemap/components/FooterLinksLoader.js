// @flow
import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const FooterLinksLoader = () => (
  <FooterLinksLoader.Wrapper>
    <rect x="0" y="0" rx="0" ry="0" width="117" height="15" />
    <rect x="0" y="30" rx="0" ry="0" width="150" height="13" />
    <rect x="0" y="53" rx="0" ry="0" width="168" height="13" />
    <rect x="0" y="76" rx="0" ry="0" width="187" height="13" />
    <rect x="0" y="99" rx="0" ry="0" width="87" height="13" />
    <rect x="0" y="122" rx="0" ry="0" width="125" height="13" />
  </FooterLinksLoader.Wrapper>
);

FooterLinksLoader.Wrapper = styled(ContentLoader)`
  width: 100%;
  height: 100px;
`;

export default FooterLinksLoader;
