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
      return name;
  }
};

type CategoryItemProps = {
  t: string => string,
  history: Object,
  setOpen?: boolean => void,
  type: string,
  name: string,
  shortName: string,
  isActive: boolean,
  onActive: string => void,
};

const CategoryItem = ({
  t,
  history,
  setOpen,
  type,
  name,
  shortName,
  isActive,
  onActive,
}: CategoryItemProps) => (
  <CategoryItem.Wrapper
    isActive={isActive}
    onClick={() => {
      if (type === 'categories') {
        onActive(shortName);
        if (setOpen) {
          setOpen(false);
        }
      } else {
        history.push(`/coupons/${shortName}`);
      }
    }}
  >
    <CategoryItem.Title>{getLocalTitle(name, t)}</CategoryItem.Title>
    {/*<CategoryItem.Value>0</CategoryItem.Value>*/}
  </CategoryItem.Wrapper>
);

CategoryItem.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
