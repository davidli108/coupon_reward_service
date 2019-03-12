// @flow
import React from 'react';
import styled from 'styled-components';

import StoreList from './StoreList';
import Featured from './Featured';

type StoresListProps = {
  stores: {
    name: string,
    offer: string,
    logo: string,
    url: string,
  }[],
};

const StoreMain = ({ stores }: StoresListProps) => (
  <StoreMain.Wrapper>
    <StoreMain.Title>Browse among more than 1000 stores</StoreMain.Title>
    <Featured />
    <StoreList stores={stores} />
  </StoreMain.Wrapper>
);

StoreMain.Wrapper = styled.div`
  flex-basis: 100%;
  padding: 0 15px;
`;

StoreMain.Title = styled.h3`
  padding: 7px 0 0 0;
  line-height: 29px;
  font-size: 25px;
  color: #374b5a;
`;

export default StoreMain;
