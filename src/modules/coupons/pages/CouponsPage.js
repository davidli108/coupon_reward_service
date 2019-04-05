//@flow
import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import * as couponsActions from '@modules/coupons/CouponsActions';
import {
  getStores,
  getCategories,
  getStoresAll,
  getFilteredDeals,
  getDealsFilter,
  getStoreSearch,
  searchIsLoading,
} from '@modules/coupons/CouponsReducer';

import DownloadPiggy from '../components/DownloadPiggy';
import SearchBar from '../components/SearchBar';
import TodaysFeaturedCoupon from '../components/TodaysFeaturedCoupon';
import StoreList from '../components/StoreList';
import Content from '../components/Content';
import preloader from '../assets/preloader.svg';

type CouponsPageProps = {
  match: Object,
  categories: Object,
  stores: Object,
  storesAll: Object,
  getFilteredDeals: () => Object,
  getCoupons: () => Promise<number>,
  loadMore: number => Promise<number>,
  fetchCategories: () => Promise<number>,
  getCouponsByCategory: string => Promise<number>,
  getDealsFilter: Object,
  setDealsFilter: string => void,
  storeSearchResult: Object,
  requestSearch: Function,
  searchIsLoading: boolean,
};

const CouponsPage = ({
  match,
  categories,
  stores,
  storesAll,
  getFilteredDeals,
  getCoupons,
  loadMore,
  fetchCategories,
  getCouponsByCategory,
  getDealsFilter,
  setDealsFilter,
  storeSearchResult,
  requestSearch,
  searchIsLoading,
}: CouponsPageProps) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!match.params.name) {
      getCoupons();
    }
  }, []);

  const onSearchChange = e => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      requestSearch(e.target.value);
    }
  };

  return (
    <CouponsPage.Wrapper>
      <DownloadPiggy />
      <CouponsPage.SearchWrapper>
        <SearchBar
          onSet={onSearchChange}
          result={searchValue ? storeSearchResult : []}
          value={searchValue}
          isLoading={searchIsLoading}
        />
      </CouponsPage.SearchWrapper>
      {Boolean(stores.length) ? (
        <TodaysFeaturedCoupon store={stores[0]} />
      ) : (
        <img src={preloader} alt="" />
      )}
      {categories && categories.stores ? (
        <StoreList stores={categories.stores} />
      ) : (
        <img src={preloader} alt="" />
      )}
      <Content
        categories={categories}
        getFilteredDeals={getFilteredDeals}
        loadMore={loadMore}
        fetchCategories={fetchCategories}
        getCouponsByCategory={getCouponsByCategory}
        getDealsFilter={getDealsFilter}
        setDealsFilter={setDealsFilter}
      />
    </CouponsPage.Wrapper>
  );
};

CouponsPage.Wrapper = styled.div`
  padding: 10px;
  padding-bottom: 50px;
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('xl')`
    width: 80%;
    margin: 0 auto;
  `}
`;

CouponsPage.SearchWrapper = styled.div`
  width: inherit;
  margin-top: 50px;

  ${breakpoint('md')`
    width: 80%;
    max-width: 617px;
    margin: 0 auto;
    margin-top: 50px;

    > div {
      width: 100%;
    }
  `}
`;

const mapStateToProps = state => ({
  categories: getCategories(state),
  stores: getStores(state),
  storesAll: getStoresAll(state),
  getFilteredDeals: getFilteredDeals(state),
  getDealsFilter: getDealsFilter(state),
  storeSearchResult: getStoreSearch(state),
  searchIsLoading: searchIsLoading(state),
});

const mapDispatchToProps = {
  getCoupons: couponsActions.getCoupons,
  loadMore: couponsActions.loadMore,
  fetchCategories: couponsActions.fetchCategories,
  getCouponsByCategory: couponsActions.getCouponsByCategory,
  setDealsFilter: couponsActions.setDealsFilter,
  requestSearch: couponsActions.requestSearch,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(CouponsPage);
