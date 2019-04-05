// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import StoreSidebar from '../components/StoreSidebar';
import StoreMain from '../components/StoreMain';

import { type Store, type Feature } from '../models';

import {
  setLoadMore,
  setFilter,
  setFilterClear,
  getStore,
  onSearch,
} from '../StoreActions';

import {
  getFilteredStores,
  getFeatured,
  getStoreFilters,
  getLoadState,
  getLoadToState,
  getStoresAll,
  getStoreSearch,
} from '../StoreReducer';

type StoresPageProps = {
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
};

const StoresPage = ({
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
}: StoresPageProps) => {
  useEffect(() => {
    onGetStore();
  }, []);

  // const onFilterFeatured = stores =>
  //   R.filter(({ isFeatured }) => isFeatured === true, stores);

  return (
    <React.Fragment>
      {
        <Helmet
          title="Stores"
          meta={[
            {
              name: 'description',
              content:
                "Download Piggy's Automatic Coupons at Checkout and Never Miss a Deal Again!",
            },
          ]}
        />
      }

      <StoresPage.Wrapper>
        <StoresPage.Container>
          <StoresPage.Box>
            <StoresPage.Title>{title}</StoresPage.Title>
            <StoreSidebar
              title="Stores"
              filter={filter}
              // $FlowFixMe
              onSearch={onSearch}
              searchResult={storeSearchResult}
              storesAll={storesAll}
              onSetFilter={onSetFilter}
              onSetFilterClear={onSetFilterClear}
            />
            <StoreMain
              title={title}
              stores={stores}
              // featured={onFilterFeatured(featured)}
              featured={featured}
              onLoadMore={onLoadMore}
              loadState={loadState}
              loadToState={loadToState}
              storesAll={storesAll}
            />
          </StoresPage.Box>
        </StoresPage.Container>
      </StoresPage.Wrapper>
    </React.Fragment>
  );
};

StoresPage.defaultProps = {
  title: 'Browse among more than 1000 stores',
  filter: [],
};

StoresPage.Wrapper = styled.section`
  position: relative;

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
});

const mapDispatchToProps = {
  onLoadMore: setLoadMore,
  onSetFilter: setFilter,
  onSetFilterClear: setFilterClear,
  onGetStore: getStore,
  onSearch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoresPage);
