// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Search from './Search';
import TagList from './TagList';
import TagListMobile from './TagListMobile';

type StoreSidebarProps = {
  categories: {
    title: string,
    number: number,
  }[],
};

const StoreSidebar = ({ categories }: StoreSidebarProps) => {
  const [toggled, setToggle] = useState(false);
  return (
    <StoreSidebar.Wrapper>
      <Search />
      <StoreSidebar.Mobile active={toggled}>
        <StoreSidebar.Title rotateIcon={toggled} onClick={() => setToggle(!toggled)}>
          Stores
        </StoreSidebar.Title >
        {toggled && <TagListMobile categories={categories} />}
      </StoreSidebar.Mobile>
      <TagList categories={categories}/>
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

StoreSidebar.Mobile = styled.div`
  background: #fff;
  position: relative;

  ${breakpoint('xs')`
    margin: 0;
    border: 0.5px solid #dadde2;
    border-radius: 5px;
    padding: 12px 25px;
    box-shadow: ${props => props.active && '2px 3px 22px rgba(0, 0, 0, 0.2)'};
    border-bottom: ${props => props.active && 'none'};
    border-bottom-left-radius: ${props => props.active && '0'};
    border-bottom-right-radius: ${props => props.active && '0'};
  `}

  ${breakpoint('sm')`
    margin: 0 0 25px 0;
    border: none;
    border-radius: none;
    padding: 0;
    box-shadow: none;
  `}
`;

StoreSidebar.Title = styled.h3`
  line-height: 21px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.45px;
  color: #899197;

  ${breakpoint('xs')`
    position: relative;
    box-sizing: border-box;
    border-radius: 5px;
    &::before{
      position: absolute;
      content: '';
      right: 0;
      top: 28%;
      border-radius: 10px;
      transition: transform 250ms linear;
      ${props => props.rotateIcon && 'transform: rotate(180deg)'};
      width: 0;
      height: 0;
      border-top: 11px solid #b1b1b1;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  `}

  ${breakpoint('sm')`
    position: relative;
    border: none;
    box-sizing: border-box;
    border-radius: 0;
    &::before{
      display: none;
    }
  `}
`;

export default StoreSidebar;
