// @flow
import React from 'react';
import styled from 'styled-components';

import { type Store } from '../models';

type SearchStoreItemProps = {
  searchResult: Store[],
};

const SearchStoreItem = ({ searchResult }: SearchStoreItemProps) => {
  return (
    <SearchStoreItem.StoreWrapper>
      {searchResult
        ? searchResult.map(item => (
            <SearchStoreItem.Item key={`store_item_${item.name}`}>
              <img src={item.logo} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>+{item.offer}% Cash Back</p>
              </div>
            </SearchStoreItem.Item>
          ))
        : null}
    </SearchStoreItem.StoreWrapper>
  );
};

SearchStoreItem.defaultProps = {
  searchResult: [],
};

SearchStoreItem.StoreWrapper = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.white};
  z-index: 1;
  width: 100%;
  left: 0;
  top: 42px;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  border-radius: 5px;
`;

SearchStoreItem.Item = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.whiteExLight};
  }

  img {
    width: 80px;
    border: 1px solid ${props => props.theme.colors.whiteLight};
  }

  div {
    margin: 0 0 0 5px;

    h3 {
      margin: 0 0 5px 0;
      font-weight: bold;
    }

    p {
      font-size: 13px;
    }
  }
`;

export default SearchStoreItem;
