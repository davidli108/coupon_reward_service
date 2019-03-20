//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import SearchBar from '@modules/store/components/Search';
import TodaysFeaturedCoupon from '../components/TodaysFeaturedCoupon';
import StoreList from '../components/StoreList';
import Content from '../components/Content';

const CouponsPage = () => {
  const [search, setSearch] = React.useState('');

  return (
    <CouponsPage.Wrapper>
      <CouponsPage.SearchWrapper>
        <SearchBar search={search} onSetSearch={setSearch} />
      </CouponsPage.SearchWrapper>

      <TodaysFeaturedCoupon />
      <StoreList />
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

export default CouponsPage;
