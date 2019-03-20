//@flow
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
    x => x.storeName === camelize(title) || x.category === camelize(title),
  ).length;

const isCheckedAlready = (title, filters) => filters.includes(camelize(title));

const CategoriesItem = ({
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
      <CategoriesItem.Title>{title}</CategoriesItem.Title>
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

const enhance = connect(mapStateToProps);

export default enhance(CategoriesItem);
