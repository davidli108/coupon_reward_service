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

import preloader from '../assets/preloader.svg';

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
      setLoadCount(loadCount + 20);
      setIsLoaded(false);
      loadMore(loadCount).then(() => setIsLoaded(true));
    }
  };

  const onActiveCategory = shortName => {
    history.push('/coupons/category/' + shortName);
    setActiveCategory(shortName);
    setIsLoaded(false);
    getCouponsByCategory(shortName).then(() => setIsLoaded(true));
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
              categories={categories.categories}
              title={t('categories.name')}
              activeCategory={activeCategory}
              onActiveCategory={onActiveCategory}
            />
            <Categories
              categories={categories.stores}
              title="Stores"
              activeCategory={activeCategory}
              onActiveCategory={onActiveCategory}
            />
          </Content.CategoriesWrapper>
        ) : (
          <img src={preloader} alt="" />
        )}
        <Content.CouponsWrapper>
          {isLoaded ? (
            <Coupons coupons={getFilteredDeals} />
          ) : activeCategory ? (
            <Content.Preloader src={preloader} alt="" />
          ) : (
            <>
              <Coupons coupons={getFilteredDeals} />{' '}
              <img src={preloader} alt="" />
            </>
          )}
          <Content.LoadMoreDeals onClick={onLoadMore}>
            {isLoaded &&
              (getFilteredDeals &&
              getFilteredDeals.length !== 0 &&
              !activeCategory
                ? 'Load More Deals'
                : '')}
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
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  text-align: right;
`;

export default compose(
  withTranslation(),
  withRouter,
)(Content);
