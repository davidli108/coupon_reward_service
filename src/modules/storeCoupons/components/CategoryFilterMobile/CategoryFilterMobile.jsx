// @flow
import React from 'react';

import CloseIcon from '../../assets/close_icon.svg';
import type { CategoryFilterMobileProps } from './index';

const CategoryFilterMobile = ({
  title,
  categories = [],
  selectedCategories = [],
  onChange = (value: any) => {},
}: CategoryFilterMobileProps) => {
  const handleOnChange = value => () => {
    onChange(value);
  };

  if (categories.length === 0) {
    return null;
  }

  const isSelected = value => selectedCategories.includes(value);

  return (
    <CategoryFilterMobile.Wrapper>
      <CategoryFilterMobile.Title>{title}</CategoryFilterMobile.Title>
      <CategoryFilterMobile.List>
        {categories.map(category => (
          <CategoryFilterMobile.ListItem
            isSelected={isSelected(category.value)}
            key={`category-filter-mobile-${category.label}-${category.value || ''}`}
            onClick={handleOnChange(category.value)}
          >
            <CategoryFilterMobile.ListItemLabel>
              {category.label} ({category.count})
            </CategoryFilterMobile.ListItemLabel>
            {isSelected(category.value) && (
              <img src={CloseIcon} alt="close" />
            )}
          </CategoryFilterMobile.ListItem>
        ))}
      </CategoryFilterMobile.List>
    </CategoryFilterMobile.Wrapper>
  );
};

export default CategoryFilterMobile;
