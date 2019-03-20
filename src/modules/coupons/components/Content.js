//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { connect } from 'react-redux';

import Controls from './Controls';
import CategoriesMobile from './CategoriesMobile';
import Categories from './Categories';
import Coupons from '../components/Coupons';

import * as actions from '../CouponsActions';
import type { ContentProps } from '../models/CouponsPage';

const Content = ({ categories, stores, coupons, loadMore }: ContentProps) => {
  const [filterBy, setFilter] = React.useState('allDeals');

  return (
    <div>
      <Controls filterBy={filterBy} setFilter={setFilter} />
      <CategoriesMobile categories={categories} title="Categories" />
      <CategoriesMobile categories={stores} title="Stores" />
      <Content.Grid>
        <Content.CategoriesWrapper>
          <Categories categories={categories} title="Categories" />
          <Categories categories={categories} title="Stores" />
        </Content.CategoriesWrapper>
        <Coupons coupons={coupons} />
      </Content.Grid>
      <Content.LoadMoreDeals onClick={() => loadMore(5)}>
        Load More Deals
      </Content.LoadMoreDeals>
    </div>
  );
};

Content.Grid = styled.div`
  ${breakpoint('md')`
    display: flex;
    justify-content: space-between;
    width: 100%;

    > div:last-child {
      width: calc(100% - 247px) !important;
    }
  `}
`;

Content.CategoriesWrapper = styled.div`
  display: none;

  ${breakpoint('md')`
    width: 217px;
    margin-right: 30px;
    display: flex;
    flex-flow: column nowrap;

    > :not(:first-child) {
      border-top: 3px solid #D8D8D8;
    }
  `}

  ${breakpoint('lg')`
    width: 24%;
  `}
`;

Content.LoadMoreDeals = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  line-height: 21px;
  font-size: 18px;
  letter-spacing: 0.45px;

  color: #adb8c0;
  cursor: pointer;

  margin: 40px 0;
`;

const mapDispatchToProps = {
  loadMore: actions.loadMore,
};

const enhance = connect(
  null,
  mapDispatchToProps,
);

export default enhance(Content);
