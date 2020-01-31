// @flow
import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const StoreLinksLoader = () => (
  <StoreLinksLoader.Wrapper>
    <rect x="0" y="0" rx="0" ry="0" width="117" height="16" />
    <rect x="0" y="26" rx="0" ry="0" width="200" height="16" />
    <rect x="0" y="52" rx="0" ry="0" width="168" height="16" />
    <rect x="0" y="78" rx="0" ry="0" width="187" height="16" />
    <rect x="0" y="104" rx="0" ry="0" width="87" height="16" />
  </StoreLinksLoader.Wrapper>
);

StoreLinksLoader.Wrapper = styled(ContentLoader)``;

export default StoreLinksLoader;
