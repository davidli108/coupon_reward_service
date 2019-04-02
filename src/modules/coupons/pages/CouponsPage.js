//@flow
import * as R from 'ramda';
import * as React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  getStores,
  getCategories,
  getStoresAll,
} from '@modules/coupons/CouponsReducer';
import { getCoupons } from '@modules/coupons/CouponsActions';

import DownloadPiggy from '../components/DownloadPiggy';
import SearchBar from '@modules/store/components/Search';
import TodaysFeaturedCoupon from '../components/TodaysFeaturedCoupon';
import StoreList from '../components/StoreList';
import Content from '../components/Content';

const CouponsPage = ({ match, stores, categories, storesAll, onStore }) => {
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    if (!match.params.name) {
      onStore();
    }
  }, []);
  const onSetSearch = tern => {
    setSearch(tern);
  };
  const onSearch = (search, stores) => {
    if (search === '') return [];
    return R.compose(
      R.slice(0, 6),
      R.filter(({ store_name }) =>
        R.includes(R.toLower(search), R.toLower(store_name)),
      ),
    )(stores);
  };

  return (
    <CouponsPage.Wrapper>
      <DownloadPiggy />
      <CouponsPage.SearchWrapper>
        <SearchBar
          onSetSearch={onSetSearch}
          searchResult={onSearch(search, storesAll)}
          search={search}
        />
      </CouponsPage.SearchWrapper>
      {Boolean(stores.length) && <TodaysFeaturedCoupon store={stores[0]} />}
      <StoreList stores={categories.stores} />
      <Content />
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
  margin-top: 50px;
  width: inherit;

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
});

const mapDispatchToProps = {
  onStore: getCoupons,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(CouponsPage);
