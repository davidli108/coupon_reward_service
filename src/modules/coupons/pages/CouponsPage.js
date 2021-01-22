// @flow
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

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
import * as authActions from '@modules/auth/AuthActions';
import { getFavoritesMap } from '@modules/favorites/FavoritesReducer';
import { month, year, metaTags, openGraph } from '@config/SeoTags';

// import DownloadPiggy from '../components/DownloadPiggy';
import TodaysFeaturedCoupon from '../components/TodaysFeaturedCoupon';
import FeaturedStoreList from '../components/FeaturedStoreList';
import Content from '../components/Content';
import FeatureCouponLoader from '../components/loaders/FeatureCouponLoader';
import { fireGTMEvent } from '@config/Utils';
import { hreflangMetas } from '@modules/localization/i18n';

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
  getFilteredList: any,
  requestNonce: Function,
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
  getFilteredList,
  requestNonce,
  isAuthenticated,
  isExtensionInstalled,
}: CouponsPageProps) => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fireGTMEvent({
      pageCategory: 'Coupons by Category',
      event: 'coupons_page_load',
      label: document.location.href,
    });
  }, [match]);

  return (
    <CouponsPage.Wrapper>
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
            href={`${item.url}coupons`}
            key={item.hreflang}
          />
        ))}
      </Helmet>

      {/* <DownloadPiggy /> */}
      {isLoaded ? (
        categories.featuredCoupon ? (
          <TodaysFeaturedCoupon
            isAuthenticated={isAuthenticated}
            isExtensionInstalled={isExtensionInstalled}
            store={categories.featuredCoupon}
            favorites={favorites}
            requestNonce={requestNonce}
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
  padding: 30px 10px 50px;
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('lg')`
    padding: 50px 10px;
  `}

  ${breakpoint('xl')`
    width: 1140px;
    margin: 0 auto;
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
  requestNonce: authActions.requestNonce,
  resetCoupons: couponsActions.resetCoupons,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withTranslation(),
)(CouponsPage);
