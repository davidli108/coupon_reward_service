// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Search from './Search';
import TagList from './TagList';

type StoreSidebarProps = {
  categories: {
    title: string,
    number: string,
  }[],
};

const StoreSidebar = ({ categories }: StoreSidebarProps) => {
  const [toggled, setToggle] = useState(false);
  return (
    <StoreSidebar.Wrapper>
      <Search />
      <StoreSidebar.Title onClick={() => setToggle(!toggled)}>
        Stores
      </StoreSidebar.Title>
      {toggled && <TagList categories={categories} />}
    </StoreSidebar.Wrapper>
  );
};

StoreSidebar.Wrapper = styled.div`
  flex-basis: 261px;
  padding: 0 30px 0 0;
  ${breakpoint('xs')`
    padding: 0 0 0 0;
    flex-basis: auto;
  `}
  ${breakpoint('sm')`
    flex-basis: 321px;
    padding: 0 30px 0 0;
  `}
  ${breakpoint('md')`
    flex-basis: 390px;
  `}
  ${breakpoint('lg')`
    flex-basis: 261px;
  `}
`;

StoreSidebar.Title = styled.h3`
  margin: 0 0 25px 0;
  line-height: 21px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.45px;
  color: #899197;
  ${breakpoint('xs')`
    position: relative;
    padding: 12px 25px;
    background: #FFFFFF;
    border: 0.5px solid #DADDE2;
    box-sizing: border-box;
    border-radius: 5px;
    &::before{
      position: absolute;
      content: '';
      right: 25px;
      top: 42%;
      border: 10px solid transparent;
      border-top: 10px solid #B1B1B1;
      border-radius: 4px;
      width: 0;
      height: 0;
    }
  `}
  ${breakpoint('sm')`
    position: relative;
    padding: 0;
    border: none;
    box-sizing: border-box;
    border-radius: 0;
    &::before{
      display: none;
    }
  `}
`;

export default StoreSidebar;
