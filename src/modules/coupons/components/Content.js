//@flow
import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import Controls from './Controls';
import CategoriesMobile from './CategoriesMobile';
import Categories from './Categories';
import Coupons from '../components/Coupons';

import CategoriesLoader from '../components/loaders/CategoriesLoader';
import CouponLoader from '../components/loaders/CouponLoader';

type ContentProps = {
  t: string => string,
  history: Object,
  match: Object,
  categories: Object,
  getFilteredDeals: Object,
  loadMore: Function,
  fetchCategories: () => Promise<number>,
  getCouponsByCategory: string => Promise<number>,
  getDealsFilter: Object,
  setDealsFilter: Object,
  resetCoupons: Function,
  offersCount: number,
};

const Content = ({
  t,
  history,
  match,
  categories,
  getFilteredDeals,
  loadMore,
  fetchCategories,
  getCouponsByCategory,
  getDealsFilter,
  setDealsFilter,
  resetCoupons,
  offersCount,
}: ContentProps) => {
  const [loadCount, setLoadCount] = useState(20);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isLoadedCategories, setIsLoadedCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(match.params.name);

  useEffect(() => {
    fetchCategories().then(() => setIsLoadedCategories(true));
    setIsLoaded(false);
    getCouponsByCategory(match.params.name).then(() => setIsLoaded(true));
  }, []);

  const onLoadMore = () => {
    if (isLoaded) {
      setIsLoaded(false);
      loadMore(
        match.params.name ? `${match.params.name}/${loadCount}` : loadCount,
      ).then(() => {
        setIsLoaded(true);
        setLoadCount(loadCount + 20);
      });
    }
  };

  const onActiveCategory = shortName => {
    resetCoupons();
    if (match.params.name !== shortName) {
      history.push('/coupons/' + shortName);
      setActiveCategory(shortName);
      setIsLoaded(false);
      getCouponsByCategory(shortName).then(() => setIsLoaded(true));
      setLoadCount(20);
    } else {
      history.push('/coupons/');
      setActiveCategory('');
      setIsLoaded(false);
      getCouponsByCategory('').then(() => setIsLoaded(true));
      setLoadCount(20);
    }
  };

  return (
    <div>
      <Controls
        getDealsFilter={getDealsFilter}
        setDealsFilter={setDealsFilter}
      />
      <CategoriesMobile
        categories={categories}
        activeCategory={activeCategory}
        onActiveCategory={onActiveCategory}
      />
      <Content.Grid>
        {isLoadedCategories ? (
          <Content.CategoriesWrapper>
            <Categories
              type="categories"
              categories={categories.categories}
              title={t('categories.name')}
              activeCategory={activeCategory}
              onActiveCategory={onActiveCategory}
            />
            <Categories
              type="stores"
              categories={categories.stores}
              title={t('header.stores')}
              activeCategory={activeCategory}
              onActiveCategory={onActiveCategory}
            />
          </Content.CategoriesWrapper>
        ) : (
          <Content.CategoriesWrapper>
            <CategoriesLoader />
          </Content.CategoriesWrapper>
        )}
        <Content.CouponsWrapper>
          {isLoaded ? (
            <Coupons coupons={getFilteredDeals} />
          ) : activeCategory ? (
            <Content.Coupons>
              {Array.apply(null, Array(20)).map(() => (
                <CouponLoader />
              ))}
            </Content.Coupons>
          ) : (
            <>
              <Coupons
                coupons={getFilteredDeals}
                isLoad={getFilteredDeals.length !== 0}
              />
            </>
          )}
          <Content.LoadMoreDeals onClick={onLoadMore}>
            {isLoaded &&
            getFilteredDeals &&
            getFilteredDeals.length !== 0 &&
            offersCount > getFilteredDeals.length
              ? t('global.loadMoreDeals')
              : ''}
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

  img {
    padding-right: 60px;
  }
`;

Content.Coupons = styled.div`
  min-height: 400px;
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('sx')`
    flex-flow: row wrap;
    justify-content: flex-start;

    > div {
      width: calc(50% - 16px);
      margin-right: 16px;
    }
  `}

  ${breakpoint('lg')`
    > div {
      width: calc(50% - 30px);
    }
  `}

  ${breakpoint('xl')`
    > div {
      width: calc(33% - 30px);
    }
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

  ${breakpoint('lg')`
    width: 95%;
  `}
`;

Content.Preloader = styled.img`
  line-height: 21px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  text-align: center;
`;

export default compose(
  withTranslation(),
  withRouter,
)(Content);
