//@flow
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';
import Brand from '../components/Brand';
import Offers from '../components/Offers';
import AdditionalInfo from '../components/AdditionalInfo';
import StoreInformation from '../components/StoreInformation';
import type { StorePageProps } from '../models/StorePage';
import {
  getFetchingState,
  getOffers,
  getStoreSearch,
  searchIsLoading,
} from '../StoreCouponsReducer';
import * as actions from '../StoreCouponsActions';
import preloader from '../../coupons/assets/preloader.svg';

const StorePage = ({
  fetchStoreCoupons,
  match,
  state,
  offers,
  requestSearch,
  storeSearchResult,
  searchIsLoading,
}: StorePageProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [storeName, setStoreName] = useState(match.params.storeName);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    match.params.storeName &&
      // $FlowFixMe
      fetchStoreCoupons(match.params.storeName).then(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    if (match.params.storeName && match.params.storeName !== storeName) {
      setStoreName(match.params.storeName);
      setIsLoaded(false);
      // $FlowFixMe
      fetchStoreCoupons(match.params.storeName).then(() => setIsLoaded(true));
    }
  });

  const onSearchChange = e => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      requestSearch(e.target.value);
    }
  };

  return isLoaded ? (
    <StorePage.Wrapper>
      <SearchBar
        onSet={onSearchChange}
        result={searchValue ? storeSearchResult : []}
        value={searchValue}
        isLoading={searchIsLoading}
      />
      <Brand />
      <StorePage.DesktopContent>
        <StorePage.ColumnNoWrapFlexBox order="2">
          <Offers offers={offers} />
        </StorePage.ColumnNoWrapFlexBox>
        <StorePage.ColumnNoWrapFlexBox order="1">
          <AdditionalInfo />
        </StorePage.ColumnNoWrapFlexBox>
      </StorePage.DesktopContent>
      <StoreInformation />
    </StorePage.Wrapper>
  ) : (
    <StorePage.PreloaderWrapper>
      <img src={preloader} alt="" />
    </StorePage.PreloaderWrapper>
  );
};

StorePage.Wrapper = styled.div`
  display: flex;

  padding: 15px;
  width: 95%;
  max-width: 1500px;
  margin: 0 auto;

  flex-flow: row wrap;
`;

StorePage.NoWrapFlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;

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

      align-items: center;

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
    justify-content: center;
    align-items: center;
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
});

const mapDispatchToProps = {
  fetchStoreCoupons: actions.fetchStoreCoupons,
  requestSearch: actions.requestSearch,
};

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhance(StorePage);
