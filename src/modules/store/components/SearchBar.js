//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { MdSearch } from 'react-icons/md';

import type { SearchBarProps } from '../models/StorePage';

const SearchBar = ({ name, placeholder }: SearchBarProps) => {
  const [searchValue, setSearchValue] = React.useState('');
  const handleSearchChange = ({ target: { value } }) => setSearchValue(value);

  return (
    <SearchBar.Wrapper>
      <input
        type="text"
        name={name}
        value={searchValue}
        onChange={handleSearchChange}
        placeholder={placeholder}
      />
      <MdSearch />
    </SearchBar.Wrapper>
  );
};

SearchBar.Wrapper = styled.div`
  position: relative;
  width: 100%;

  padding-top: 15px;

  ${breakpoint('xl')`
    width: 457px;
    margin-right: calc(100% - 457px);
    margin-bottom: 25px;
  `}

  > input {
    background: #fff;
    border: 1px solid #dadde2;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    font-size: 18px;
    padding: 11px 20px;
    outline: none;

    ::placeholder {
      color: #adb8c0;
    }
  }

  > svg {
    position: absolute;
    top: 17px;
    right: 15px;
    padding-top: 3px;
    color: #d2d2d2;
    width: 30px;
    height: 30px;
    transition: 0.2s;
    cursor: pointer;

    :hover {
      filter: brightness(35%);
    }
  }
`;

export default SearchBar;
