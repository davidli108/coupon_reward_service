// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import IconSearch from '../assets/icon-search.png';

import SearchStoreItem from './SearchStoreItem';

import { type Store } from '../models';

type StoreSearch = {
  onSetSearch: Function,
  searchResult: Store[],
  search: string,
};

const Search = ({ search, onSetSearch, searchResult }: StoreSearch) => {
  return (
    <Search.Wrapper>
      <Search.Input
        type="text"
        name="search"
        value={search}
        onChange={e => onSetSearch(e.target.value)}
        placeholder="Search"
      />
      <Search.Icon src={IconSearch} alt="search" />
      {searchResult && <SearchStoreItem searchResult={searchResult} />}
    </Search.Wrapper>
  );
};

Search.Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 89%;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  margin: 0 0 33px 0;
  border-radius: 5px;

  ${breakpoint('xs')`
    width: calc(100% - 2px);
    margin: 0 0 15px 0;
  `}

  ${breakpoint('sm')`
    margin: 0 0 33px 0;
  `}

  ${breakpoint('lg')`
    width: 89%;
  `}
`;

Search.Input = styled.input`
  display: block;
  border: none;
  width: 100%;
  padding: 11px 10px 11px 20px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  line-height: 19px;
  font-size: 16px;
  letter-spacing: 0.571428px;
  outline: none;

  &::placeholder {
    color: ${props => props.theme.colors.whiteDark};
  }
`;

Search.Icon = styled.img`
  display: block;

  ${breakpoint('xs')`
    padding: 0 28px 0 0;
  `}

  ${breakpoint('sm')`
    padding: 0 20px 0 0;
  `}
`;

Search.StoreWrapper = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.white};
  z-index: 1;
  width: 100%;
  left: 0;
  top: 42px;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  border-radius: 5px;
`;

Search.Item = styled.div`
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

export default Search;
