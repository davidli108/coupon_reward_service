// @flow
import React from 'react';
import styled from 'styled-components';

type TagListProps = {
  categories: {
    title: string,
    number: string,
  }[],
};

const TagList = ({ categories }: TagListProps) => (
  <TagList.List>
    {categories.map(({ title, number }) => (
      <TagList.Item key={title}>
        {title} <TagList.Numb>{number}</TagList.Numb>
      </TagList.Item>
    ))}
  </TagList.List>
);

TagList.List = styled.ul`
  display: block;
`;

TagList.Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 0 11px 0;
  font-size: 13px;
  color: #c2c2c2;
`;

TagList.Numb = styled.span`
  display: block;
  width: 50px;
  text-align: center;
  padding: 3px 0;
  border: 2px solid #d4d4d4;
  border-radius: 7px;
  font-size: 13px;
  color: #c2c2c2;
`;

export default TagList;
