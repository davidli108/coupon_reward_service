// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type TagListMobileProps = {
  categories: {
    title: string,
    number: number,
  }[],
};

const TagListMobile = ({ categories }: TagListMobileProps) => (
  <TagListMobile.List>
    {categories.map(({ title, number }) => (
      <TagListMobile.Item key={`tag_item_${title}`}>
        {title} <TagListMobile.Numb>{number}</TagListMobile.Numb>
      </TagListMobile.Item>
    ))}
  </TagListMobile.List>
);

TagListMobile.List = styled.ul`
  display: block;
  position: absolute;
  left: -1px;
  top: 44px;
  width: 100%;
  background: ${props => props.theme.colors.white};
  border: 0.5px solid ${props => props.theme.colors.whiteLight};
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.2);
  border-top: none;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 24px 0 32px;

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
  align-items: center;
  margin: 0 0 11px 0;

  &:last-child {
    margin: 0;
  }

  font-size: 13px;
  color: ${props => props.theme.colors.grayLight};

  padding: 0 25px;
`;

TagListMobile.Numb = styled.span`
  display: block;
  width: 50px;
  text-align: center;
  padding: 3px 0;
  border: 2px solid ${props => props.theme.colors.gray};
  border-radius: 7px;
  font-size: 13px;
  color: ${props => props.theme.colors.grayLight};
`;

export default TagListMobile;
