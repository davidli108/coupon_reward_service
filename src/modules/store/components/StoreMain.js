// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import StoreList from './StoreList';
import Featured from './Featured';

import { type Store, type Feature } from '../models';

type StoresListProps = {
  title: string,
  stores: Store[],
  featured: Feature[],
  storesAll: Store[],
  loadState: number,
  loadToState: number,
  onLoadMore: Function,
  storesCount: number,
  isLoadedStores: boolean,
  setIsLoadedStores: boolean => void,
  isLoadedMore: boolean,
  setIsLoadedMore: boolean => void,
};

const StoreMain = ({
  title,
  stores,
  featured,
  onLoadMore,
  loadState,
  loadToState,
  storesAll,
  storesCount,
  isLoadedStores,
  setIsLoadedStores,
  isLoadedMore,
  setIsLoadedMore,
}: StoresListProps) => (
  <StoreMain.Wrapper>
    <StoreMain.Title>Browse among more than 1000 stores</StoreMain.Title>
    <Featured featured={featured} />
    <StoreList
      stores={stores}
      onLoadMore={onLoadMore}
      loadState={loadState}
      loadToState={loadToState}
      storesAll={storesAll}
      storesCount={storesCount}
      isLoadedStores={isLoadedStores}
      setIsLoadedStores={setIsLoadedStores}
      isLoadedMore={isLoadedMore}
      setIsLoadedMore={setIsLoadedMore}
    />
  </StoreMain.Wrapper>
);

StoreMain.defaultProps = {
  stores: [],
  featured: [],
  storesAll: [],
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
