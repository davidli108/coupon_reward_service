// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { type Categories } from '../models';
type TagListProps = {
  categories: Categories[],
};

const TagList = ({ categories }: TagListProps) => (
  <TagList.List>
    {categories.map(({ title, number }) => (
      <TagList.Item key={`tag_item_${title}`}>
        {title} <TagList.Numb>{number}</TagList.Numb>
      </TagList.Item>
    ))}
  </TagList.List>
);

TagList.List = styled.ul`
  display: block;

  ${breakpoint('xs')`
    display: none;
  `}

  ${breakpoint('sm')`
    display: block;
  `}
`;

TagList.Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 11px 0;
  font-size: 13px;
  color: ${props => props.theme.colors.grayLight};
  cursor: pointer;
`;

TagList.Numb = styled.span`
  display: block;
  width: 50px;
  text-align: center;
  padding: 3px 0;
  border: 2px solid ${props => props.theme.colors.gray};
  border-radius: 7px;
  font-size: 13px;
  color: ${props => props.theme.colors.grayLight};
`;

export default TagList;
