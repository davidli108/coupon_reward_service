//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import CategoriesItem from './CategoriesItem';

import type { CategoriesMobileProps } from '../models/CouponsPage';

const Categories = ({ title, categories }: CategoriesMobileProps) => {
  return (
    <Categories.Wrapper>
      <h2>{title}</h2>
      {categories.map<React.Node>((category, index) => (
        <CategoriesItem
          key={`category_${category.title}_${index}`}
          {...category}
        />
      ))}
    </Categories.Wrapper>
  );
};

Categories.Wrapper = styled.div`
  display: none;

  ${breakpoint('md')`
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
