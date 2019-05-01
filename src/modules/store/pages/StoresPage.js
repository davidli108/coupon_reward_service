// @flow
/* eslint-disable max-len */
import React, { useState } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import moment from 'moment';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import StoreSidebar from '../components/StoreSidebar';
import StoreMain from '../components/StoreMain';
import StoreContentLoader from '../components/loaders/StoreContentLoader';

import { type Store, type Feature } from '../models';

import * as storeActions from '../StoreActions';

import {
  getFilteredStores,
  getFeatured,
  getStoreFilters,
  getLoadState,
  getLoadToState,
  getStoresAll,
  getStoreSearch,
  searchIsLoading,
  getCategories,
  getStoresCount,
} from '../StoreReducer';

type StoresPageProps = {
  t: Function,
  match: Object,
  title: string,
  stores: Store[],
  storesAll: Store[],
  featured: Feature[],
  filter: string,
  search: string,
  loadState: number,
  loadToState: number,
  onLoadMore: Function,
  onSetFilter: Function,
  onSetFilterClear: Function,
  onGetStore: Function,
  storeSearchResult: Object,
  onSearch: Function,
  searchIsLoading: boolean,
  categories: Object,
  storesCount: number,
};

const StoresPage = ({
  t,
  match,
  title,
  stores,
  featured,
  filter,
  onLoadMore,
  loadState,
  loadToState,
  storesAll,
  onSetFilter,
  onSetFilterClear,
  onGetStore,
  storeSearchResult,
  onSearch,
  searchIsLoading,
  categories,
  storesCount,
}: StoresPageProps) => {
  const [isLoadedStores, setIsLoadedStores] = useState(false);
  const [isLoadedMore, setIsLoadedMore] = useState(true);
  const [isLoadedCategories, setIsLoadedCategories] = useState(false);

  return (
    <React.Fragment>
      <Helmet
        title={`Automate Your Coupons, Savings and Cashback - ${moment().format(
          'MMMM',
        )} ${moment().format('YYYY')} - Piggy`}
        meta={[
          {
            name: 'description',
            content: `Join Piggy’s quest to never overpay for anything online ever again. Piggy automatically finds and applies the internet's best coupon codes & cashback in cart.`,
          },
        ]}
      />

      <StoresPage.Wrapper>
        <StoresPage.Container>
          <StoresPage.Box>
            <StoresPage.Title>{title}</StoresPage.Title>
            <StoreSidebar
              title={t('header.stores')}
              filter={filter}
              // $FlowFixMe
              onSearch={onSearch}
              searchResult={storeSearchResult}
              storesAll={storesAll}
              onSetFilter={onSetFilter}
              onSetFilterClear={onSetFilterClear}
              searchIsLoading={searchIsLoading}
              categories={categories}
              getStore={onGetStore}
              setIsLoadedStores={setIsLoadedStores}
              isLoadedCategories={isLoadedCategories}
              setIsLoadedCategories={setIsLoadedCategories}
            />
            {!isLoadedMore || isLoadedStores ? (
              <StoreMain
                title={title}
                stores={stores}
                featured={featured}
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
            ) : (
              <StoreContentLoader />
            )}
          </StoresPage.Box>
        </StoresPage.Container>
      </StoresPage.Wrapper>
    </React.Fragment>
  );
};

StoresPage.defaultProps = {
  title: 'Browse among more than 1000 stores',
};

StoresPage.PreloaderWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
`;

StoresPage.Wrapper = styled.section`
  position: relative;
  margin: 0 auto;

  ${breakpoint('xs')`
    padding: 21px 0 75px 0;
  `}

  ${breakpoint('sx')`
    padding: 25px 0 75px 0;
  `}

  ${breakpoint('md')`
    padding: 36px 0 75px 0;
  `}

  ${breakpoint('lg')`
    padding: 41px 0 75px 0;
  `}

  ${breakpoint('xl')`
    width: 1140px;
    padding: 57px 0 75px 0;
  `}
`;

StoresPage.Container = styled.div`
  max-width: 1141px;
  margin: 0 auto;
  padding: 0 15px;

  ${breakpoint('sm')`
    padding: 0 40px;
  `}

  ${breakpoint('md')`
    padding: 0 15px;
  `}
`;

StoresPage.Title = styled.h3`
  margin: 0 0 18px 0;
  text-align: center;
  line-height: 29px;
  font-weight: bold;
  font-size: 25px;
  color: ${props => props.theme.colors.blackLight};

  ${breakpoint('xs')`
    display: block;
    font-size: 17px;
    padding: 0;
  `}

  ${breakpoint('sx')`
    font-size: 22px;
  `}

  ${breakpoint('sm')`
    display: none;
    font-size: 25px;
    padding: 7px 0 0 0;
  `}
`;

StoresPage.Box = styled.div`
  display: flex;
  width: 100%;

  ${breakpoint('xs')`
    flex-direction: column;
  `}

  ${breakpoint('sm')`
    flex-direction: row;
  `}
`;

const mapStateToProps = state => ({
  stores: getFilteredStores(state),
  featured: getFeatured(state),
  filter: getStoreFilters(state),
  loadState: getLoadState(state),
  loadToState: getLoadToState(state),
  storesAll: getStoresAll(state),
  storeSearchResult: getStoreSearch(state),
  searchIsLoading: searchIsLoading(state),
  categories: getCategories(state),
  storesCount: getStoresCount(state),
});

const mapDispatchToProps = {
  onLoadMore: storeActions.setLoadMore,
  onSetFilter: storeActions.setFilter,
  onSetFilterClear: storeActions.setFilterClear,
  onGetStore: storeActions.getStores,
  onSearch: storeActions.requestSearch,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withTranslation(),
)(StoresPage);
