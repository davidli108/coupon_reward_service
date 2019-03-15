//@flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type HeaderItemProps = {
  bgColor?: string,
  children: React.Node,
  hoverBgColor?: string,
  link?: string,
  redirect?: string,
  onClick?: () => void,
};

const HeaderItem = ({
  bgColor,
  children,
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
    {redirect && (
      <HeaderItem.Link href={redirect} target="_blank">
        {children}
      </HeaderItem.Link>
    )}

    {link && <HeaderItem.NavLink to={link}>{children}</HeaderItem.NavLink>}

    {!link && !redirect && <HeaderItem.Link>{children}</HeaderItem.Link>}
  </HeaderItem.Wrapper>
);

HeaderItem.NavLink = styled(NavLink)`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 0 15px;

  color: white;
  font-size: 20px;
  font-family: Roboto, sans-serif;

  cursor: pointer;
`;

HeaderItem.Link = styled.a`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  padding: 0 15px;

  color: white;
  font-size: 20px;
  font-family: Roboto, sans-serif;

  cursor: pointer;
`;

HeaderItem.Wrapper = styled.div`
  height: 100%;

  font-weight: bold;
  background: ${({ bgColor }) => bgColor || '#40c8e5'};

  &:hover {
    background: ${({ hoverBgColor }) => hoverBgColor || 'inherit'};
  }
`;

export default HeaderItem;
