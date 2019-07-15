// @flow
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import moment from 'moment';

import SearchBar from '@components/SearchBar/SearchBar';
import { getIsAuthenticated } from '@modules/auth/AuthReducer';
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
  getCoupons,
} from '@modules/coupons/CouponsReducer';
import {
  getFilteredList,
  getIsExtensionInstalled,
} from '@modules/app/AppReducer';
import * as favoritesActions from '@modules/favorites/FavoritesActions';
import { getFavoritesMap } from '@modules/favorites/FavoritesReducer';

// import DownloadPiggy from '../components/DownloadPiggy';
import TodaysFeaturedCoupon from '../components/TodaysFeaturedCoupon';
import FeaturedStoreList from '../components/FeaturedStoreList';
import Content from '../components/Content';
import FeatureCouponLoader from '../components/loaders/FeatureCouponLoader';

type CouponsPageProps = {
  t: Function,
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
  getAllDeals: Object,
  favorites: any,
  addFavorite: any,
  getFilteredList: any,
  removeFavorite: any,
  isAuthenticated: boolean,
  isExtensionInstalled: boolean,
};

const CouponsPage = ({
  t,
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
  getAllDeals,
  favorites,
  addFavorite,
  getFilteredList,
  removeFavorite,
  isAuthenticated,
  isExtensionInstalled,
}: CouponsPageProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);

  const onSearchChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <CouponsPage.Wrapper>
      <Helmet
        title={t('titles.coupons')
          .replace('%mmmm', moment().format('MMMM'))
          .replace('%yyyy', moment().format('YYYY'))}
        meta={[
          {
            name: 'description',
            content: `Join Piggy’s quest to never overpay for anything online ever again. Piggy automatically finds and applies the internet's best coupon codes & cashback in cart.`,
          },
        ]}
      />

      {/* <DownloadPiggy /> */}
      <CouponsPage.SearchWrapper>
        <SearchBar
          onSet={onSearchChange}
          result={searchValue ? getFilteredList(searchValue) : []}
          value={searchValue}
        />
      </CouponsPage.SearchWrapper>
      {isLoaded ? (
        offersCount !== 0 && Boolean(stores.length) ? (
          <TodaysFeaturedCoupon
            isAuthenticated={isAuthenticated}
            isExtensionInstalled={isExtensionInstalled}
            store={stores[6]}
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
          />
        ) : (
          <CouponsPage.NoData>
            {t('coupons.noFeaturedCouponsFound')}
          </CouponsPage.NoData>
        )
      ) : (
        <FeatureCouponLoader />
      )}
      <FeaturedStoreList
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
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
        getAllDeals={getAllDeals}
        favoriteStores={Object.values(favorites)}
        isAuthenticated={isAuthenticated}
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
    width: 1140px;
    margin: 0 auto;
  `}
`;

CouponsPage.SearchWrapper = styled.div`
  width: inherit;
  margin-top: 10px;

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
  line-height: 228px;
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
  getAllDeals: getCoupons(state),
  favorites: getFavoritesMap(state),
  isAuthenticated: getIsAuthenticated(state),
  isExtensionInstalled: getIsExtensionInstalled(state),
  getFilteredList: getFilteredList(state),
});

const mapDispatchToProps = {
  getCoupons: couponsActions.getCoupons,
  loadMore: couponsActions.loadMore,
  getCouponsByCategory: couponsActions.getCouponsByCategory,
  setDealsFilter: couponsActions.setDealsFilter,
  requestSearch: couponsActions.requestSearch,
  resetCoupons: couponsActions.resetCoupons,
  addFavorite: favoritesActions.addFavorite,
  removeFavorite: favoritesActions.removeFavorite,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withTranslation(),
)(CouponsPage);
