//@flow
import * as React from 'react';
import styled from 'styled-components';

import type { CategoriesItemProps } from '../models/CouponsPage';

const CategoriesItem = ({ title, value, setOpen }: CategoriesItemProps) => {
  return (
    <CategoriesItem.Wrapper
      onClick={() =>
        console.log(`clicked on ${title}`) || (setOpen && setOpen(false))
      }
    >
      <CategoriesItem.Title>{title}</CategoriesItem.Title>
      <CategoriesItem.Value>{value}</CategoriesItem.Value>
    </CategoriesItem.Wrapper>
  );
};

CategoriesItem.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;

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

export default CategoriesItem;
