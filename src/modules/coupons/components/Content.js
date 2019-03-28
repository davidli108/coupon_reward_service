//@flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { connect } from 'react-redux';

import Controls from './Controls';
import CategoriesMobile from './CategoriesMobile';
import Categories from './Categories';
import Coupons from '../components/Coupons';
import preloader from '../assets/preloader.svg';

import * as actions from '../CouponsActions';
import {
  getCategories,
  getStoresAll,
  getFilteredDeals,
} from '../CouponsReducer';
import type { ContentProps } from '../models/CouponsPage';

const Content = ({
  categories,
  loadMore,
  storeAll,
  getFilteredDeals,
}: ContentProps) => {
  const [loadCount, setLoadCount] = useState(20);
  const [isLoaded, setIsLoaded] = useState(true);

  const onLoadMore = () => {
    if (isLoaded) {
      setLoadCount(loadCount + 20);
      setIsLoaded(false);
      loadMore(loadCount).then(() => setIsLoaded(true));
    }
  };

  return (
    <div>
      <Controls />
      <CategoriesMobile />
      <Content.Grid>
        <Content.CategoriesWrapper>
          <Categories categories={categories.categories} title="Categories" />
          <Categories categories={categories.stores} title="Stores" />
        </Content.CategoriesWrapper>
        <Coupons />
      </Content.Grid>
      <Content.LoadMoreDeals onClick={onLoadMore}>
        {isLoaded ? (
          getFilteredDeals && getFilteredDeals.length !== 0 ? (
            'Load More Deals'
          ) : (
            ''
          )
        ) : (
          <img src={preloader} alt="" />
        )}
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
      border-top: 1px solid #D8D8D8;
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

const mapStateToProps = state => ({
  categories: getCategories(state),
  storeAll: getStoresAll(state),
  getFilteredDeals: getFilteredDeals(state),
});

const mapDispatchToProps = {
  loadMore: actions.loadMore,
};

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhance(Content);
