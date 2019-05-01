//@flow
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import moment from 'moment';

import SearchBar from '../components/SearchBar';
import Brand from '../components/Brand';
import Offers from '../components/Offers';
import AdditionalInfo from '../components/AdditionalInfo';
//import StoreInformation from '../components/StoreInformation';
import type { StorePageProps } from '../models/StorePage';
import {
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

const StorePage = ({
  fetchStoreCoupons,
  match,
  state,
  offers,
  requestSearch,
  storeSearchResult,
  searchIsLoading,
  fetchStoreCouponsByPagination,
  offersCount,
  store,
  reviews,
}: StorePageProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [storeName, setStoreName] = useState(match.params.name);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    match.params.name &&
      // $FlowFixMe
      fetchStoreCoupons(match.params.name).then(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    if (match.params.name && match.params.name !== storeName) {
      setStoreName(match.params.name);
      setIsLoaded(false);
      // $FlowFixMe
      fetchStoreCoupons(match.params.name).then(() => setIsLoaded(true));
    }
  });

  const onSearchChange = e => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      requestSearch(e.target.value);
    }
  };

  return (
    <StorePage.Wrapper>
      <Helmet
        title={`Top Online ${
          store.store_name
        } Coupons, Promo Codes and Cashback - ${moment().format(
          'MMMM',
        )} ${moment().format('YYYY')} - Piggy`}
        meta={[
          {
            name: 'description',
            content: `Never overpay again with the latest ${
              store.store_name
            } coupons and promotional codes automatically applied at checkout. Plus ${
              store.store_cashback_text
            } today when you use Piggy to shop ${store.store_name}`,
          },
          {
            name: 'keywords',
            content: `${store.store_name}`,
          },
        ]}
      />

      <SearchBar
        onSet={onSearchChange}
        result={searchValue ? storeSearchResult : []}
        value={searchValue}
        isLoading={searchIsLoading}
      />
      <Brand isLoaded={isLoaded} offersCount={offersCount} reviews={reviews} />
      <StorePage.DesktopContent>
        <StorePage.ColumnNoWrapFlexBox order="2" style={{ marginBottom: 50 }}>
          {isLoaded ? (
            <Offers
              offers={offers}
              offersCount={offersCount}
              fetchStoreCoupons={fetchStoreCouponsByPagination}
              storeName={match.params.name}
              store={store}
            />
          ) : (
            Array.apply(null, Array(3)).map((_, ind) => (
              <OffersLoader key={ind} />
            ))
          )}
          <AddSaving />
        </StorePage.ColumnNoWrapFlexBox>
        <StorePage.ColumnNoWrapFlexBox order="1">
          {isLoaded ? <AdditionalInfo /> : <AdditionalInfoLoader />}
        </StorePage.ColumnNoWrapFlexBox>
      </StorePage.DesktopContent>
      {/*{isLoaded && <StoreInformation />}*/}
    </StorePage.Wrapper>
  );
};

StorePage.Wrapper = styled.div`
  display: flex;

  padding: 15px;
  width: 95%;
  max-width: 1140px;
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
      width: 280px;
    }
  `}
`;

StorePage.ColumnNoWrapFlexBox = styled.div`
  ${breakpoint('lg')`
    display: flex;
    flex-flow: column nowrap;
    order: ${({ order }) => order};
    width: 100%;
  `}
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
});

const mapDispatchToProps = {
  fetchStoreCoupons: actions.fetchStoreCoupons,
  requestSearch: actions.requestSearch,
  fetchStoreCouponsByPagination: actions.fetchStoreCouponsByPagination,
};

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhance(StorePage);
