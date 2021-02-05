// @flow
import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import StoreSidebar from '../components/StoreSidebar';
import StoreMain from '../components/StoreMain';
import StoreContentLoader from '../components/loaders/StoreContentLoader';

import { type Store, type Feature } from '../models';

import * as storeActions from '../StoreActions';
import { getFilteredList } from '@modules/app/AppReducer';
import { month, year, metaTags, openGraph } from '@config/SeoTags';
import { fireGTMEvent } from '@config/Utils';
import { hreflangMetas } from '@modules/localization/i18n';

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
  getFilteredList: any,
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
  getFilteredList,
}: StoresPageProps) => {
  const [isLoadedStores, setIsLoadedStores] = useState(false);
  const [isLoadedMore, setIsLoadedMore] = useState(true);
  const [isLoadedCategories, setIsLoadedCategories] = useState(false);

  useEffect(() => {
    fireGTMEvent({
      pageCategory: 'Stores by Category',
      event: 'stores_page_load',
      label: document.location.href,
    });
  }, [match]);

  return (
    <React.Fragment>
      <Helmet
        title={t('titles.coupons', { month, year })}
        meta={[
          ...metaTags({ description: t('description.coupons') }),
          ...openGraph({
            title: t('description.coupons'),
            description: t('description.coupons'),
          }),
        ]}
      >
        {hreflangMetas.map(item => (
          <link
            rel="alternate"
            hreflang={item.hreflang}
            href={`${item.url}cashback-stores`}
            key={item.hreflang}
          />
        ))}
      </Helmet>

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
              getFilteredList={getFilteredList}
              getStore={onGetStore}
              setIsLoadedStores={setIsLoadedStores}
              isLoadedCategories={isLoadedCategories}
              setIsLoadedCategories={setIsLoadedCategories}
            />
            {!isLoadedMore || isLoadedStores ? (
              <StoreMain
                stores={stores}
                featured={featured}
                onLoadMore={onLoadMore}
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
  min-width: 310px;
  margin: 0 auto;

  ${breakpoint('xs')`
    padding: 21px 15px 75px;
  `}

  ${breakpoint('md')`
    padding: 36px 30px 75px;
  `}

  ${breakpoint('lg')`
    padding: 57px 30px 75px;
  `}

  ${breakpoint('xl')`
    width: 1140px;
    padding: 57px 30px 75px;
  `}
`;

StoresPage.Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0;
`;

StoresPage.Title = styled.h3`
  margin: 0 0 18px 0;
  text-align: center;
  line-height: 29px;
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.theme.colors.blackLight};

  ${breakpoint('xs')`
    display: block;
    padding: 0;
  `}

  ${breakpoint('sx')`
    font-size: 22px;
  `}

  ${breakpoint('md')`
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

  ${breakpoint('md')`
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
  getFilteredList: getFilteredList(state),
});

const mapDispatchToProps = {
  onLoadMore: storeActions.setLoadMore,
  onSetFilter: storeActions.setFilter,
  onSetFilterClear: storeActions.setFilterClear,
  onGetStore: storeActions.getStores,
  onSearch: storeActions.requestSearch,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withTranslation(),
)(StoresPage);
