// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

type CategoryItemProps = {
  setOpen?: boolean => void,
  name: string,
  shortName: string,
  count: number,
  isActive: boolean,
  onActive: string => void,
  isCounter: boolean,
};

const CategoryItem = ({
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
    <CategoryItem.Title>{name}</CategoryItem.Title>
    {isCounter && count > 0 && <CategoryItem.Value>{count}</CategoryItem.Value>}
  </CategoryItem.Wrapper>
);

CategoryItem.Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  background: ${({ isActive }) => (isActive ? '#f5f5f5' : 'white')};

  > p {
    flex: 1;
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

export default withRouter(CategoryItem);
