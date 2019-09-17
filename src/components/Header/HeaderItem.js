// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type HeaderItemProps = {
  bgColor?: string,
  children: React.Node,
  direct: boolean,
  hoverBgColor?: string,
  link?: string,
  redirect?: string,
  onClick?: () => void,
};

const HeaderItem = ({
  bgColor,
  children,
  direct,
  hoverBgColor,
  link,
  redirect,
  onClick,
}: HeaderItemProps) => (
  <HeaderItem.Wrapper
    bgColor={bgColor}
    hoverBgColor={hoverBgColor}
    onClick={onClick}
  >
    {direct && redirect && (
      <HeaderItem.Link href={redirect}>{children}</HeaderItem.Link>
    )}

    {link && <HeaderItem.NavLink to={link}>{children}</HeaderItem.NavLink>}

    {!link && !redirect && !direct && (
      <HeaderItem.Link>{children}</HeaderItem.Link>
    )}
  </HeaderItem.Wrapper>
);

HeaderItem.defaultProps = {
  direct: false,
};

HeaderItem.NavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  padding: 0 23px;
  letter-spacing: 0.6px;
  line-height: 25px;

  color: white;
  font-size: 20px;
  font-family: Roboto, Arial, sans-serif;

  cursor: pointer;

  ${breakpoint('lg')`
    font-weight: 700;
  `}
`;

HeaderItem.Link = styled.a`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  padding: 0 23px;
  letter-spacing: 0.6px;
  line-height: 25px;

  color: white;
  font-size: 20px;
  font-family: Roboto, Arial, sans-serif;

  cursor: pointer;

  ${breakpoint('lg')`
    font-weight: 700;
  `}
`;

HeaderItem.LogoLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
`;

HeaderItem.Wrapper = styled.div`
  height: 100%;
  background: ${({ bgColor }) => bgColor || '#40c8e5'};

  &:hover {
    background: ${({ hoverBgColor }) => hoverBgColor || 'inherit'};
  }
`;

export default HeaderItem;