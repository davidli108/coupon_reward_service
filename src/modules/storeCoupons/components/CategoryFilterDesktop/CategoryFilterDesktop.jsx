// @flow
import React from 'react';

import Arrow from '../assets/Arrow';
import Checkbox from '@components/Checkbox';
import type { CategoryFilterDesktopProps } from './index';

const MAX_CATEGORIES_SHOW_LIMIT = 5;

const CategoryFilterDesktop = ({
  t = (value: string, options: Object) => '',
  title,
  categories = [],
  selectedCategories = [],
  onChange = (value?: any) => {},
}: CategoryFilterDesktopProps) => {
  const [hide, setHide] = React.useState(false);
  const handleOnChange = value => () => {
    onChange(value);
  };

  if (categories.length === 0) {
    return null;
  }

  const filteredCategories = categories.slice(
    0,
    hide ? MAX_CATEGORIES_SHOW_LIMIT - 1 : categories.length,
  );

  return (
    <CategoryFilterDesktop.Wrapper>
      <CategoryFilterDesktop.Title>{title}:</CategoryFilterDesktop.Title>
      <CategoryFilterDesktop.List>
        {filteredCategories.map((category, key) => {
          const isSelected = selectedCategories.includes(category.value);
          const ListItem = () => (
            <CategoryFilterDesktop.ListItem
              onClick={handleOnChange(category.value)}
            >
              <CategoryFilterDesktop.ListItemLabel isSelected={isSelected}>
                {category.label}{' '}
                {category.count && +category.count > 0 && `(${category.count})`}
              </CategoryFilterDesktop.ListItemLabel>
              <CategoryFilterDesktop.ListItemCheckbox>
                {category.amount ? (
                  <CategoryFilterDesktop.ListItemAmount>
                    {category.amount}
                  </CategoryFilterDesktop.ListItemAmount>
                ) : (
                  <Checkbox checked={isSelected} />
                )}
              </CategoryFilterDesktop.ListItemCheckbox>
            </CategoryFilterDesktop.ListItem>
          );
          if (category.link) {
            return (
              <a
                href={category.link}
                target={'_blank'}
                key={`category-filter-desktop-${key}`}
              >
                <ListItem />
              </a>
            );
          }

          return (
            <ListItem
              key={`category-filter-desktop-${key}`}
            />
          );
        })}
      </CategoryFilterDesktop.List>
      {categories.length >= MAX_CATEGORIES_SHOW_LIMIT && (
        <CategoryFilterDesktop.HideWrapper onClick={() => setHide(!hide)}>
          <span>{t(`storeCoupons.${hide ? 'show' : 'hide'}`)}</span>
          <Arrow
            style={{
              transform: `rotate(${hide ? 180 : 0}deg)`,
            }}
          />
        </CategoryFilterDesktop.HideWrapper>
      )}
    </CategoryFilterDesktop.Wrapper>
  );
};

export default CategoryFilterDesktop;
