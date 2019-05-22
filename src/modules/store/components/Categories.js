// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import CategoryItem from '../../coupons/components/CategoryItem';
import CategoriesLoader from './loaders/CategoriesLoader';

type CategoriesProps = {
  title: string,
  categories: Object,
  activeCategory: ?string,
  onActiveCategory: string => void,
  isLoaded: boolean,
};

const Categories = ({
  title,
  categories,
  activeCategory,
  onActiveCategory,
  isLoaded,
}: CategoriesProps) => (
  <Categories.Wrapper>
    {isLoaded && categories ? (
      <>
        <h2>{title}</h2>
        {categories.map(category => (
          <CategoryItem
            key={`key_${category.short_name}`}
            name={category.name}
            shortName={category.short_name}
            count={category.offers_count}
            isActive={activeCategory === category.short_name}
            onActive={onActiveCategory}
            isCounter={true}
          />
        ))}
      </>
    ) : (
      <CategoriesLoader />
    )}
  </Categories.Wrapper>
);

Categories.Wrapper = styled.div`
  display: none;

  ${breakpoint('sm')`
    display: flex;
    flex-flow: column nowrap;

    padding-bottom: 30px;

    > h2 {
      font-weight: bold;
      line-height: 24px;
      font-size: 20px;
      letter-spacing: 0.5px;
      color: #899197;

      margin: 10px 0;
      padding: 5px;
    }
  `}
`;

Categories.Link = styled(Link)`
  color: #899197;
`;

export default Categories;
