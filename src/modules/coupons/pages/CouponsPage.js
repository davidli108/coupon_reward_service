//@flow
import React, { useState } from 'react';
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
  getOffersCount,
} from '@modules/coupons/CouponsReducer';

// import DownloadPiggy from '../components/DownloadPiggy';
import SearchBar from '../components/SearchBar';
import TodaysFeaturedCoupon from '../components/TodaysFeaturedCoupon';
import StoreList from '../components/StoreList';
import Content from '../components/Content';
import FeatureCouponLoader from '../components/loaders/FeatureCouponLoader';

type CouponsPageProps = {
  match: Object,
  categories: Object,
  stores: Object,
  storesAll: Object,
  getFilteredDeals: () => Object,
  getCoupons: () => Promise<number>,
  loadMore: number => Promise<number>,
  getCouponsByCategory: string => Promise<number>,
  getDealsFilter: Object,
  setDealsFilter: string => void,
  storeSearchResult: Object,
  requestSearch: Function,
  searchIsLoading: boolean,
  resetCoupons: Function,
  offersCount: number,
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
  resetCoupons,
  offersCount,
}: CouponsPageProps) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = e => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      requestSearch(e.target.value);
    }
  };

  return (
    <CouponsPage.Wrapper>
      {/* <DownloadPiggy /> */}
      <CouponsPage.SearchWrapper>
        <SearchBar
          onSet={onSearchChange}
          result={searchValue ? storeSearchResult : []}
          value={searchValue}
          isLoading={searchIsLoading}
        />
      </CouponsPage.SearchWrapper>
      {Boolean(stores.length) ? (
        offersCount !== 0 ? (
          <TodaysFeaturedCoupon store={stores[0]} />
        ) : (
          <CouponsPage.NoData>No Featured Coupons Found</CouponsPage.NoData>
        )
      ) : (
        <FeatureCouponLoader />
      )}
      <StoreList
        stores={categories.stores}
        loaded={!!categories && !!categories.stores}
      />
      <Content
        categories={categories}
        getFilteredDeals={getFilteredDeals}
        loadMore={loadMore}
        getCouponsByCategory={getCouponsByCategory}
        getDealsFilter={getDealsFilter}
        setDealsFilter={setDealsFilter}
        resetCoupons={resetCoupons}
        offersCount={offersCount}
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

CouponsPage.NoData = styled.p`
  width: 100%;
  line-height: 250px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.45px;
  color: #adb8c0;

  ${breakpoint('lg')`
    width: 95%;
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
  offersCount: getOffersCount(state),
});

const mapDispatchToProps = {
  getCoupons: couponsActions.getCoupons,
  loadMore: couponsActions.loadMore,
  getCouponsByCategory: couponsActions.getCouponsByCategory,
  setDealsFilter: couponsActions.setDealsFilter,
  requestSearch: couponsActions.requestSearch,
  resetCoupons: couponsActions.resetCoupons,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(CouponsPage);
