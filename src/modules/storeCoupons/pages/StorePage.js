// @flow
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import parse from 'html-react-parser';

import {
  getFilteredList,
  getIsExtensionInstalled,
} from '@modules/app/AppReducer';
import { isAmazonStore } from '@config/Utils';
import { month, year, metaTags, openGraph } from '@config/SeoTags';
import Brand from '../components/Brand';
import Offers from '../components/Offers';
import AdditionalInfo from '../components/AdditionalInfo';
import type { StorePageProps } from '../models/StorePage';
import {
  getTerms,
  getCashbackRates,
  getFetchingState,
  getOffers,
  getStoreSearch,
  searchIsLoading,
  getCountOffers,
  getStore,
  getReviews,
} from '../StoreCouponsReducer';
import * as actions from '../StoreCouponsActions';
import AdditionalInfoLoader from '../components/loaders/AdditionalInfoLoader';
import OffersLoader from '../components/loaders/OffersLoader';
import AddSaving from '../components/AddSaving';

import styles from './StorePage.styles';

const StorePage = ({
  t,
  fetchStoreCoupons,
  match,
  state,
  offers,
  requestSearch,
  storeSearchResult,
  getFilteredList,
  searchIsLoading,
  fetchStoreCouponsByPagination,
  offersCount,
  store,
  reviews,
  isExtensionInstalled,
  cashbackRates,
  terms,
}: StorePageProps) => {
  const [storeName, setStoreName] = useState(match.params.name);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAmazon, setIsAmazon] = useState(false);
  const [nrOfOffers, setNrOfOffers] = useState('');

  useEffect(() => {
    match.params.name &&
      // $FlowFixMe
      fetchStoreCoupons(match.params.name).then(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    if (isAmazonStore(storeName)) {
      setIsAmazon(true);
    } else {
      setIsAmazon(false);
    }
  }, [storeName]);

  useEffect(() => {
    if (store && store.store_name) {
      if (store.store_name !== storeName) {
        setStoreName(store.store_name);
      }

      setNrOfOffers(store.offers_count ? `${store.offers_count} ` : '');
    }
  }, [store]);

  useEffect(() => {
    const { name } = match.params;

    if (name && name !== storeName) {
      setStoreName(name);
      setIsLoaded(false);
      // $FlowFixMe
      fetchStoreCoupons(name).then(() => setIsLoaded(true));
    }

    if (name) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        pageCategory: 'Store Pages',
        event: isExtensionInstalled
          ? 'store_page_load_extension_installed'
          : 'store_page_load_no_extension',
        label: match.url,
      });
    }
  }, [match]);

  return (
    <StorePage.Wrapper>
      <Helmet
        title={t('titles.storeCoupons', { storeName, month, year })}
        meta={[
          ...metaTags({
            description: t('description.storeCoupons', {
              storeName,
              nrOfOffers,
            }),
            keywords: store.store_name,
          }),
          ...openGraph({
            title: t('titles.storeCoupons', { storeName, month, year }),
            description: t('description.storeCoupons', {
              storeName,
              nrOfOffers,
            }),
          }),
        ]}
      />

      <Brand
        t={t}
        isLoaded={isLoaded}
        extensionActive={isLoaded && (isExtensionInstalled || isAmazon)}
        offersCount={offersCount}
        reviews={reviews}
      />
      <StorePage.DesktopContent>
        <StorePage.ColumnNoWrapFlexBox
          order="2"
          extensionActive={isLoaded && (isExtensionInstalled || isAmazon)}
          style={{ marginBottom: 50 }}
        >
          {isLoaded ? (
            <Offers
              offers={offers}
              cashbackRates={cashbackRates}
              offersCount={offersCount}
              fetchStoreCoupons={fetchStoreCouponsByPagination}
              storeName={match.params.name}
              match={match}
              store={store}
            />
          ) : (
            Array.apply(null, Array(3)).map((_, ind) => (
              <OffersLoader key={ind} />
            ))
          )}
          {!isExtensionInstalled && !isAmazon && <AddSaving />}
          <StorePage.TermsWrapper>{parse(terms)}</StorePage.TermsWrapper>
        </StorePage.ColumnNoWrapFlexBox>
        <StorePage.ColumnNoWrapFlexBox order="1">
          {isLoaded ? (
            <AdditionalInfo cashbackRates={cashbackRates} />
          ) : (
            <AdditionalInfoLoader />
          )}
        </StorePage.ColumnNoWrapFlexBox>
      </StorePage.DesktopContent>
    </StorePage.Wrapper>
  );
};

const mapStateToProps = state => ({
  state: getFetchingState(state),
  offers: getOffers(state),
  storeSearchResult: getStoreSearch(state),
  searchIsLoading: searchIsLoading(state),
  offersCount: getCountOffers(state),
  store: getStore(state),
  reviews: getReviews(state),
  getFilteredList: getFilteredList(state),
  isExtensionInstalled: getIsExtensionInstalled(state),
  cashbackRates: getCashbackRates(state),
  terms: getTerms(state),
});

styles(StorePage);

const mapDispatchToProps = {
  fetchStoreCoupons: actions.fetchStoreCoupons,
  requestSearch: actions.requestSearch,
  fetchStoreCouponsByPagination: actions.fetchStoreCouponsByPagination,
};

const enhance = compose(
  withRouter,
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(StorePage);
