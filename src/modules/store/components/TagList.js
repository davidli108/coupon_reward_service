// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { type Categories } from '../models';
type TagListProps = {
  categories: Categories[],
  filter: string,
  onSetFilter: Function,
  toggled: boolean,
};

const TagList = ({
  categories,
  onSetFilter,
  filter,
  toggled,
  }: TagListProps) => (
  <TagList.List toggled={toggled}>
    {categories.map(({ title, number }) => (
      <TagList.Item
        key={`tag_item_${title}`}
        filterActive={filter === title}
        onClick={onSetFilter.bind(null, title)}
      >
        {title} <TagList.Numb filterActive={filter === title}>{number}</TagList.Numb>
      </TagList.Item>
    ))}
  </TagList.List>
);

TagList.List = styled.ul`
  padding: 25px 0 0 0;
  ${breakpoint('xs')`
    position: absolute;
    left: -1px;
    top: 44px;
    width: 100%;
    background: ${props => props.theme.colors.white};
    border: 0.5px solid ${props => props.theme.colors.whiteLight};
    box-shadow: 0 12px 22px ${props => props.theme.colors.blackAlpha};
    border-top: none;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 13px 0 32px;
    opacity: ${props => props.toggled ? '1' : '0'};
    z-index: ${props => props.toggled ? '1' : '-1'};
    pointer-events: ${props => props.toggled ? 'initial' : 'none'};
  `}

  ${breakpoint('sm')`
    display: block;
    position: static;
    box-shadow: none;
    border: none;
    opacity: 1;
    z-index: 1;
    pointer-events: initial;
  `}
`;

TagList.Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  padding: ${props => props.filterActive ? `5px` : `5px 0`};
  margin: 0;
  font-size: 13px;
  color: ${props => props.filterActive ? `${props.theme.colors.white}` : `${props.theme.colors.grayLight}`};
  background: ${props => props.filterActive  && `${props.theme.colors.blackLight}` };
  cursor: pointer;

  &:hover {
    background: ${props => props.filterActive ? `${props.theme.colors.blackLight}` : `${props.theme.colors.whiteExLight}`};
  }

  ${breakpoint('xs')`
    padding: 5px 25px;
  `}

  ${breakpoint('sm')`
    padding: ${props => props.filterActive ? `5px 5px` : `5px 0`};
  `}
`;

TagList.Numb = styled.span`
  display: block;
  width: 50px;
  text-align: center;
  padding: 3px 0;
  border: 2px solid ${props => props.filterActive ? `${props.theme.colors.white}` : `${props.theme.colors.gray}`};
  border-radius: 7px;
  font-size: 13px;
  color: ${props => props.filterActive ?  `${props.theme.colors.white}` : `${props.theme.colors.grayLight}`};
`;

export default TagList;
