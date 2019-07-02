// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import StoreList from './StoreList';
import Featured from './Featured';

import { type Store, type Feature } from '../models';

type StoresListProps = {
  t: Function,
  stores: Store[],
  featured: Feature[],
  onLoadMore: Function,
  storesCount: number,
  isLoadedStores: boolean,
  setIsLoadedStores: boolean => void,
  isLoadedMore: boolean,
  setIsLoadedMore: boolean => void,
};

const StoreMain = ({
  t,
  stores,
  featured,
  onLoadMore,
  storesCount,
  isLoadedStores,
  setIsLoadedStores,
  isLoadedMore,
  setIsLoadedMore,
}: StoresListProps) => (
  <StoreMain.Wrapper>
    <StoreMain.Title>{t('cashbackStores.browseStores')}</StoreMain.Title>
    <Featured featured={featured} />
    <StoreList
      stores={stores}
      onLoadMore={onLoadMore}
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
};

StoreMain.Wrapper = styled.div`
  flex: 1;
  min-width: 0;
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

  ${breakpoint('md')`
    display: block;
    font-size: 25px;
  `}
`;

export default withTranslation()(StoreMain);
