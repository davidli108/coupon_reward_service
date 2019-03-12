// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import StoreList from './StoreList';
import Featured from './Featured';

type StoresListProps = {
  stores: {
    name: string,
    newStore: boolean,
    deals: number,
    offer: string,
    logo: string,
    url: string,
  }[],
};

const StoreMain = ({ stores }: StoresListProps) => (
  <StoreMain.Wrapper>
    <StoreMain.Title>Browse among more than 1000 stores</StoreMain.Title>
    <Featured stores={stores} />
    <StoreList stores={stores} />
  </StoreMain.Wrapper>
);

StoreMain.defaultProps = {
  stores: [],
};

StoreMain.Wrapper = styled.div`
  flex-basis: 850px;
`;

StoreMain.Title = styled.h3`
  padding: 7px 0 0 0;
  line-height: 29px;
  font-weight: bold;
  font-size: 25px;
  color: ${props => props.theme.colors.blackLight};

  ${breakpoint('xs')`
    display: none;
  `}

  ${breakpoint('sm')`
    display: block;
    font-size: 19px;
  `}

  ${breakpoint('sm')`
    font-size: 25px;
  `}
`;

export default StoreMain;
