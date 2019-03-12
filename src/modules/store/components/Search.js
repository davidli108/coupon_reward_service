// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import IconSearch from '../assets/icon-search.png';

const StoreSearch = () => (
  <StoreSearch.Wrapper>
    <StoreSearch.Input type="text" placeholder="Search" />
    <StoreSearch.Icon src={IconSearch} alt="search" />
  </StoreSearch.Wrapper>
);

StoreSearch.Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 89%;
  border: 1px solid #dadde2;
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

StoreSearch.Input = styled.input`
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
    color: #adb8c0;
  }
`;

StoreSearch.Icon = styled.img`
  display: block;

  ${breakpoint('xs')`
    padding: 0 28px 0 0;
  `}

  ${breakpoint('sm')`
    padding: 0 20px 0 0;
  `}
`;

export default StoreSearch;
