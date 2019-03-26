//@flow
import * as R from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { getStores, getStoresAll } from '@modules/coupons/CouponsReducer';
import { getCoupons } from '@modules/coupons/CouponsActions';

import SearchBar from '@modules/store/components/Search';
import TodaysFeaturedCoupon from '../components/TodaysFeaturedCoupon';
import StoreList from '../components/StoreList';
import Content from '../components/Content';

const CouponsPage = ({ stores, storesAll, onStore }) => {
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    onStore();
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
      <CouponsPage.SearchWrapper>
        <SearchBar
          onSetSearch={onSetSearch}
          searchResult={onSearch(search, storesAll)}
          search={search}
        />
      </CouponsPage.SearchWrapper>
      {Boolean(stores.length) && <TodaysFeaturedCoupon store={stores[0]} />}
      <StoreList stores={stores} />
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
  stores: getStores(state),
  storesAll: getStoresAll(state),
});

const mapDispatchToProps = {
  onStore: getCoupons,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CouponsPage);
