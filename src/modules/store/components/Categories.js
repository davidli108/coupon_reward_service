// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import CategoryItem from '../../coupons/components/CategoryItem';

type CategoriesProps = {
  title: string,
  categories: Object,
  activeCategory: ?string,
  onActiveCategory: string => void,
};

const Categories = ({
  title,
  categories,
  activeCategory,
  onActiveCategory,
}: CategoriesProps) => (
  <Categories.Wrapper>
    <h2>{title}</h2>
    {categories &&
      categories.map(category => (
        <CategoryItem
          key={`key_${category.shortName}`}
          name={category.name}
          shortName={category.shortName}
          isActive={activeCategory === category.shortName}
          onActive={onActiveCategory}
        />
      ))}
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

export default Categories;
