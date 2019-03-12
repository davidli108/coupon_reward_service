// @flow
import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import TagList from './TagList';

type StoreSidebarProps = {
  categories: {
    title: string,
    number: string,
  }[],
};

const StoreSidebar = ({ categories }: StoreSidebarProps) => (
  <StoreSidebar.Wrapper>
    <Search />
    <StoreSidebar.Title>Stores</StoreSidebar.Title>
    <TagList categories={categories} />
  </StoreSidebar.Wrapper>
);

StoreSidebar.Wrapper = styled.div`
  flex-basis: 30%;
  padding: 0 15px;
`;

StoreSidebar.Title = styled.h3`
  margin: 0 0 25px 0;
  line-height: 21px;
  font-size: 18px;
  letter-spacing: 0.45px;
  color: #899197;
`;

export default StoreSidebar;
