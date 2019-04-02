//@flow
import React, { useState } from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

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
  t,
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
          <Categories
            categories={categories.categories}
            title={t('categories.name')}
          />
          <Categories categories={categories.stores} title="Stores" />
        </Content.CategoriesWrapper>
        <Content.CouponsWrapper>
          <Coupons />
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
        </Content.CouponsWrapper>
      </Content.Grid>
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

Content.CouponsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

Content.LoadMoreDeals = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  line-height: 21px;
  font-size: 18px;
  letter-spacing: 0.45px;
  color: #adb8c0;
  cursor: pointer;

  ${breakpoint('lg')`
    width: 95%;
  `}
`;

/*
  xs: 0,
  sx: 413,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
*/

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

export default compose(
  enhance,
  withTranslation(),
)(Content);
