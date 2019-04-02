//@flow
import * as React from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import type { CategoriesItemProps } from '../models/CouponsPage';
import {
  getDeals,
  getCategoryFilter,
  getStoresFilter,
} from '../CouponsReducer';

const camelize = str => {
  return str
    .replace(/[^a-zA-Z0-9]+/, '')
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (String(match) === 0) return '';
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
};

const getQuantity = (deals, title) =>
  deals.filter(
    x => x.store_name === camelize(title) || x.category === camelize(title),
  ).length;

const isCheckedAlready = (title, filters) => filters.includes(camelize(title));

const CategoriesItem = ({
  t,
  deals,
  title,
  value,
  setOpen,
  onClick,
  sectionTitle,
  filters,
  isActive,
  setCheckedItem,
}: CategoriesItemProps) => {
  const getLocalTitle = title => {
    switch (title) {
      case 'Accessories':
        return t('categories.accessories');
      case 'Automotive':
        return t('categories.automotive');
      case 'Baby':
        return t('categories.baby');
      case 'Beauty':
        return t('categories.beauty');
      case 'Books & Media':
        return t('categories.booksMedia');
      case 'Office & Business':
        return t('categories.officeBuiness');
      case 'Canada':
        return t('categories.canada');
      case 'Cellphones':
        return t('categories.cellphones');
      case 'Clothing':
        return t('categories.clothing');
      case 'Computers':
        return t('categories.computers');
      case 'Department Stores':
        return t('categories.departmentStores');
      case 'Electronics':
        return t('categories.electronics');
      case 'Dining and Entertainment':
        return t('categories.diningEntertainment');
      case 'Gift & Flowers':
        return t('categories.electronics');
      case 'Health':
        return t('categories.health');
      case 'Hobbies & Crafts':
        return t('categories.hobbiesCrafts');
      case 'Home & Garden':
        return t('categories.HomeGarden');
      case 'Jewelry':
        return t('categories.jewelry');
      case 'Music & Instruments':
        return t('categories.musicInstruments');
      case 'Party Supplies':
        return t('categories.partySupplies');
      case 'Pets':
        return t('categories.pets');
      case 'Services':
        return t('categories.services');
      case 'Shoes':
        return t('categories.shoes');
      case 'Sports & Fitness':
        return t('categories.sportsFitness');
      case 'Toys & Games':
        return t('categories.toysGames');
      case 'Travel':
        return t('categories.travel');
      default:
        return title;
    }
  };

  return (
    <CategoriesItem.Wrapper
      isActive={isActive}
      onClick={() => {
        setCheckedItem(isActive ? '' : title);
        onClick(
          `${camelize(sectionTitle)}_${
            isCheckedAlready(title, filters) ? '' : camelize(title)
          }`,
        );
      }}
    >
      <CategoriesItem.Title>{getLocalTitle(title)}</CategoriesItem.Title>
      <CategoriesItem.Value>{getQuantity(deals, title)}</CategoriesItem.Value>
    </CategoriesItem.Wrapper>
  );
};

CategoriesItem.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  background: ${({ isActive }) => (isActive ? '#f5f5f5' : 'white')};

  > p {
    color: ${({ isActive }) => (isActive ? 'rgba(0, 0, 0, 0.7);' : '')};
  }

  &:hover {
    background: #eee;

    > p {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

CategoriesItem.Title = styled.p`
  font-weight: 500;
  line-height: 32px;
  font-size: 13px;

  color: #c2c2c2;
`;

CategoriesItem.Value = styled.div`
  width: 50px;
  text-align: center;
  padding: 3px 0;
  border: 2px solid #d4d4d4;
  border-radius: 7px;
  font-size: 13px;
  color: #c2c2c2;
`;

const mapStateToProps = state => ({
  deals: getDeals(state),
  filters: [getCategoryFilter(state), getStoresFilter(state)],
});

export default compose(
  connect(mapStateToProps),
  withTranslation(),
)(CategoriesItem);
