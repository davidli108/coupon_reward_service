// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Search from './Search';
import TagList from './TagList';

type StoreSidebarProps = {
  categories: {
    title: string,
    number: number,
  }[],
  title: string,
  filter: string,
  search: string,
  onSetFilter: Function,
  onSetFilterClear: Function,
  onSetSearch: Function,
  onSetSearchClear: Function,
};

const StoreSidebar = ({
  title,
  categories,
  filter,
  search,
  onSetFilter,
  onSetFilterClear,
  onSetSearchClear,
  onSetSearch,
}: StoreSidebarProps) => {
  const [toggled, setToggle] = useState(false);

  const handleClick = () => {
    onSetFilterClear();
    onSetSearchClear();
  };

  return (
    <StoreSidebar.Wrapper>
      <Search onSetSearch={onSetSearch} search={search} />
      <StoreSidebar.Content active={toggled}>
        <StoreSidebar.Title
          rotateIcon={toggled}
          onClick={() => setToggle(!toggled)}
        >
          {title}
        </StoreSidebar.Title>
        {filter && (
          <StoreSidebar.ClearFilter onClick={handleClick}>
            clear
          </StoreSidebar.ClearFilter>
        )}
        <TagList
          categories={categories}
          onSetFilter={onSetFilter}
          toggled={toggled}
          filter={filter}
          search={search}
        />
      </StoreSidebar.Content>
    </StoreSidebar.Wrapper>
  );
};

StoreSidebar.defaultProps = {
  categories: [],
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

StoreSidebar.Content = styled.div`
  background: ${props => props.theme.colors.white};
  position: relative;

  ${breakpoint('xs')`
    margin: 0;
    border: 0.5px solid ${props => props.theme.colors.whiteLight};
    border-radius: 5px;
    padding: 12px 25px;
    box-shadow: ${props =>
      props.active && `2px 3px 22px ${props.theme.colors.blackAlpha}`};
    border-bottom: ${props => props.active && 'none'};
    border-bottom-left-radius: ${props => props.active && '0'};
    border-bottom-right-radius: ${props => props.active && '0'};
  `}

  ${breakpoint('sm')`
    margin: 0 0 25px 0;
    border: none;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
  `}
`;

StoreSidebar.Title = styled.h3`
  line-height: 21px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.45px;
  color: ${props => props.theme.colors.blackExLight};

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
      border-top: 11px solid ${props => props.theme.colors.grayTintsDark};
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  `}

  ${breakpoint('sm')`
    pointer-events: none;
    position: relative;
    border: none;
    box-sizing: border-box;
    border-radius: 0;
    &::before{
      display: none;
    }
  `}
`;

StoreSidebar.ClearFilter = styled.button`
  position: absolute;
  font-size: 13px;
  padding: 3px 5px;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.blueDark};
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  ${breakpoint('xs')`
    top: 12px;
    right: 70px;
  `}
  ${breakpoint('sm')`
    top: 3px;
    right: 0;
  `}
`;

export default StoreSidebar;
