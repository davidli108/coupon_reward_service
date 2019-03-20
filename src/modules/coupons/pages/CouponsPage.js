//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import SearchBar from '@modules/store/components/Search';
import TodaysFeaturedCoupon from '../components/TodaysFeaturedCoupon';
import StoreList from '../components/StoreList';
import Content from '../components/Content';

import type { CouponsPageProps } from '../models/CouponsPage';
import {
  getFeaturedCoupon,
  getCategories,
  getCoupons,
  getStores,
} from '../CouponsReducer';

const CouponsPage = ({
  featuredCoupon,
  categories,
  stores,
  coupons,
}: CouponsPageProps) => {
  const [search, setSearch] = React.useState('');

  return (
    <CouponsPage.Wrapper>
      <CouponsPage.SearchWrapper>
        <SearchBar search={search} onSetSearch={setSearch} />
      </CouponsPage.SearchWrapper>

      <TodaysFeaturedCoupon {...featuredCoupon} />
      <StoreList stores={stores} />
      <Content categories={categories} coupons={coupons} />
    </CouponsPage.Wrapper>
  );
};

CouponsPage.Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  padding: 10px;

  ${breakpoint('xl')`
    width: 80%;
    margin: 0 auto;
  `}
`;

CouponsPage.SearchWrapper = styled.div`
  width: inherit;

  ${breakpoint('md')`
    width: 80%;
    max-width: 617px;
    margin: 0 auto;

    > div {
      width: 100%;
    }
  `}
`;

const mapStateToProps = state => ({
  featuredCoupon: getFeaturedCoupon(state),
  categories: getCategories(state),
  coupons: getCoupons(state),
  stores: getStores(state),
});

const withState = connect(mapStateToProps);

export default withState(CouponsPage);
