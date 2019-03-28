//@flow
import * as React from 'react';
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
import * as actions from '../StoreCouponsActions';

const StorePage = ({ fetchStoreCoupons, match }: StorePageProps) => {
  React.useEffect(() => {
    fetchStoreCoupons({ storeName: match.params.storeName });
  });

  return (
    <StorePage.Wrapper>
      <SearchBar name="storeSearch" placeholder="Search Stores" />
      <Brand />
      <StorePage.DesktopContent>
        <StorePage.ColumnNoWrapFlexBox order="2">
          <Offers />
        </StorePage.ColumnNoWrapFlexBox>
        <StorePage.ColumnNoWrapFlexBox order="1">
          <AdditionalInfo />
        </StorePage.ColumnNoWrapFlexBox>
      </StorePage.DesktopContent>
      <StoreInformation />
    </StorePage.Wrapper>
  );
};

StorePage.Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;

  padding: 15px;

  ${breakpoint('xl')`
    width: 80%;
    margin: 0 auto;

    flex-flow: row wrap;
  `}
`;

StorePage.NoWrapFlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('xl')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;

    width: 100%;
    padding: 10px 0;
  `}
`;

StorePage.NoWrapFlexBoxWithBorder = styled(StorePage.NoWrapFlexBox)`
  ${breakpoint('xl')`
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
  ${breakpoint('xl')`
    > div:first-child {
      width: calc(100% - 300px);
    }

    > div:last-child {
      width: 280px;
    }
  `}
`;

StorePage.ColumnNoWrapFlexBox = styled.div`
  ${breakpoint('xl')`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    order: ${({ order }) => order};
    width: 100%;
  `}
`;

const mapDispatchToProps = {
  fetchStoreCoupons: actions.fetchStoreCoupons,
};

const enhance = compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps,
  ),
);

export default enhance(StorePage);
