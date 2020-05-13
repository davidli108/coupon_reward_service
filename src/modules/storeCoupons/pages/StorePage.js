// @flow
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import moment from 'moment';
import { withTranslation } from 'react-i18next';
import {
  getFilteredList,
  getIsExtensionInstalled,
} from '@modules/app/AppReducer';
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
import { getDomainAttrs } from '@modules/localization/i18n';
import parse from 'html-react-parser';
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
  const { tld } = getDomainAttrs();

  useEffect(() => {
    match.params.name &&
      // $FlowFixMe
      fetchStoreCoupons(match.params.name).then(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    if (storeName === 'amazon' && ['com', 'co.uk'].includes(tld)) {
      setIsAmazon(true);
    } else {
      setIsAmazon(false);
    }
  }, [storeName]);

  useEffect(() => {
    const { name } = match.params;

    if (name && name !== storeName) {
      setStoreName(name);
      setIsLoaded(false);
      // $FlowFixMe
      fetchStoreCoupons(name).then(() => setIsLoaded(true));
    }
  }, [match]);

  useEffect(() => {
    const { name } = match.params;
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
        title={t('titles.storeCoupons')
          .replace('storeName', storeName)
          .replace('%mmmm', moment().format('MMMM'))
          .replace('%yyyy', moment().format('YYYY'))}
        meta={[
          {
            name: 'description',
            content:
              'Never overpay again with the latest ' +
              store.store_name +
              ' coupons and promotional codes automatically applied at checkout.' +
              ' Plus ' +
              store.store_cashback_text +
              ' today when you use Piggy to ' +
              store.store_name,
          },
          {
            name: 'keywords',
            content: `${store.store_name}`,
          },
        ]}
      />

      <Brand
        t={t}
        isLoaded={isLoaded}
        extensionActive={isLoaded && isExtensionInstalled}
        offersCount={offersCount}
        reviews={reviews}
      />
      <StorePage.DesktopContent>
        <StorePage.ColumnNoWrapFlexBox
          order="2"
          extensionActive={isLoaded && isExtensionInstalled}
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

          <StorePage.TermsWrapper isShow={terms} isMobile={false}>
            {parse(state ? terms : '')}
          </StorePage.TermsWrapper>
        </StorePage.ColumnNoWrapFlexBox>
        <StorePage.ColumnNoWrapFlexBox order="1">
          {isLoaded ? (
            <AdditionalInfo cashbackRates={cashbackRates} />
          ) : (
            <AdditionalInfoLoader />
          )}
          <StorePage.TermsWrapper isShow={terms} isMobile={true}>
            {parse(state ? terms : '')}
          </StorePage.TermsWrapper>
        </StorePage.ColumnNoWrapFlexBox>
      </StorePage.DesktopContent>
      {/*{isLoaded && <StoreInformation />}*/}
    </StorePage.Wrapper>
  );
};

StorePage.Wrapper = styled.div`
  display: flex;

  padding: 15px 0;
  width: 90%;
  max-width: 1140px;
  min-width: 280px;
  margin: 0 auto;

  flex-flow: row wrap;
`;

StorePage.NoWrapFlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    justify-content: space-between;

    width: 100%;
    padding: 10px 0;
  `}
`;

StorePage.NoWrapFlexBoxWithBorder = styled(StorePage.NoWrapFlexBox)`
  ${breakpoint('lg')`
      border: 1px dashed #00CBE9;
      border-radius: 5px;
      margin-left: 30px;
      padding: 8px 20px;

      height: auto;

      > * {
        padding: 0;
      }
    `}
`;

StorePage.DesktopContent = styled(StorePage.NoWrapFlexBox)`
  width: 100%;

  ${breakpoint('lg')`
    > div:first-child {
      width: calc(100% - 300px);
    }

    > div:last-child {
      width: 262px;
    }
  `}
`;

StorePage.ColumnNoWrapFlexBox = styled.div`
  ${breakpoint('xl')`
    margin-top: ${({ extensionActive }) => (extensionActive ? '-200px' : '')}
  `}

  ${breakpoint('lg')`
    display: flex;
    flex-flow: column nowrap;
    order: ${({ order }) => order};
    width: 100%;
  `}

  ${({ order }) => (order === '1' ? 'margin-right: 45px;' : '')}
`;

StorePage.PreloaderWrapper = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
