// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

const getLocalTitle = (name, t) => {
  switch (name) {
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
      return t('categories.officeBusiness');
    case 'Canada':
      return t('categories.canada');
    case 'Cell Phones':
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
    case 'Gifts & Flowers':
      return t('categories.giftFlowers');
    case 'Health':
      return t('categories.health');
    case 'Hobbies and Crafts':
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
    case 'Sports & Outdoors':
      return t('categories.sportsFitness');
    case 'Toys':
      return t('categories.toysGames');
    case 'Travel':
      return t('categories.travel');
    default:
      return name;
  }
};

type CategoryItemProps = {
  t: string => string,
  history: Object,
  setOpen?: boolean => void,
  name: string,
  shortName: string,
  count: number,
  isActive: boolean,
  onActive: string => void,
  isCounter: boolean,
};

const CategoryItem = ({
  t,
  history,
  setOpen,
  name,
  shortName,
  count,
  isActive,
  onActive,
  isCounter,
}: CategoryItemProps) => (
  <CategoryItem.Wrapper
    isActive={isActive}
    onClick={() => {
      onActive(shortName);
      if (setOpen) {
        setOpen(false);
      }
    }}
  >
    <CategoryItem.Title>{getLocalTitle(name, t)}</CategoryItem.Title>
    {isCounter && count > 0 && <CategoryItem.Value>{count}</CategoryItem.Value>}
  </CategoryItem.Wrapper>
);

CategoryItem.Wrapper = styled.div`
  cursor: pointer;
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

CategoryItem.Title = styled.p`
  font-weight: 500;
  line-height: 32px;
  font-size: 13px;
  color: #c2c2c2;
`;

CategoryItem.Value = styled.div`
  width: 50px;
  text-align: center;
  padding: 3px 0;
  border: 2px solid #d4d4d4;
  border-radius: 7px;
  font-size: 13px;
  color: #c2c2c2;
`;

export default withRouter(withTranslation()(CategoryItem));
