// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type TagListMobileProps = {
  categories: {
    title: string,
    number: string,
  }[],
};

const TagListMobile = ({ categories }: TagListMobileProps) => (
  <TagListMobile.List>
    {categories.map(({ title, number }) => (
      <TagListMobile.Item key={title}>
        {title} <TagListMobile.Numb>{number}</TagListMobile.Numb>
      </TagListMobile.Item>
    ))}
  </TagListMobile.List>
);

TagListMobile.List = styled.ul`
  display: block;
  margin: 24px 0 0 0;
  ${breakpoint('xs')`
    display: block;
  `}
  ${breakpoint('sm')`
    display: none;
  `}
`;

TagListMobile.Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 0 11px 0;
  font-size: 13px;
  color: #c2c2c2;
`;

TagListMobile.Numb = styled.span`
  display: block;
  width: 50px;
  text-align: center;
  padding: 3px 0;
  border: 2px solid #d4d4d4;
  border-radius: 7px;
  font-size: 13px;
  color: #c2c2c2;
`;

export default TagListMobile;
