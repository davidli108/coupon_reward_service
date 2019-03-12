// @flow
import React from 'react';
import styled from 'styled-components';

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
`;

StoreSearch.Input = styled.input`
  display: block;
  border: none;
  width: 100%;
  padding: 11px 10px 11px 20px;
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
  padding: 0 20px 0 0;
`;

export default StoreSearch;
