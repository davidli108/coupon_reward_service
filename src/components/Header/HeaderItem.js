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
  border?: string,
  separator?: boolean,
};

const HeaderItem = ({
  bgColor,
  children,
  direct,
  hoverBgColor,
  link,
  redirect,
  onClick,
  border,
  separator,
}: HeaderItemProps) => (
  <HeaderItem.Wrapper
    bgColor={bgColor}
    hoverBgColor={hoverBgColor}
    onClick={onClick}
    border={border}
  >
    {direct && redirect && (
      <HeaderItem.LogoLink href={redirect}>{children}</HeaderItem.LogoLink>
    )}

    {separator && <HeaderItem.Separator />}

    {link && <HeaderItem.NavLink to={link}>{children}</HeaderItem.NavLink>}

    {!link && !redirect && !direct && (
      <HeaderItem.Link border={border} separator={separator}>
        {children}
      </HeaderItem.Link>
    )}
  </HeaderItem.Wrapper>
);

HeaderItem.defaultProps = {
  direct: false,
};

HeaderItem.NavLink = styled(NavLink)`
  font-size: 16px;
  padding: 0 10px;
  color: #899197;
  letter-spacing: 0.53px;
  margin: 0 0 0 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  border-radius: 5px;
  border: 2px solid transparent;
  position: relative;
  background: 0 0;
  transition: all 0.3s ease;
  box-sizing: border-box;
  cursor: pointer;

  svg {
    display: block;
  }

  ${breakpoint('lg')`
    &::before,
    &::after {
      content: '';
      background: #899197;
      position: absolute;
      z-index: -1;
      border-radius: 5px;
    }
  
    &::after {
      content: '';
      transition: all 0.3s ease;
      height: 0;
      left: 50%;
      top: 50%;
      width: 0;
    }
    
    &:hover {
      background: 0 0;
      color: #fff;
  
      &::after {
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
      }
    }
    
    svg {
      display: none;
    }
  `}
`;

HeaderItem.Link = styled.a`
  font-size: 16px;
  padding: 0 10px;
  color: #00ba4a;
  letter-spacing: 0.53px;
  margin: ${({ separator }) => (separator ? '0' : '0 8px')};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 35px;
  border-radius: 5px;
  position: relative;
  background: 0 0;
  transition: all 0.3s ease;
  box-sizing: border-box;
  cursor: pointer;
  border: ${({ border }) => (border ? '2px solid #00ba4a' : '')};

  svg {
    ${({ border }) => (border ? 'display: none;' : 'display: block;')}
  }

  ${breakpoint('lg')`
    &::before,
    &::after {
      content: '';
      background: #00dc58;
      position: absolute;
      z-index: -1;
      border-radius: 5px;
    }
  
    &::after {
      content: '';
      transition: all 0.3s ease;
      height: 0;
      left: 50%;
      top: 50%;
      width: 0;
    }
  
    &:hover {
      background: 0 0;
      color: #fff;
      border: ${({ border }) => (border ? '2px solid transparent' : '')};
  
      &::after {
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
      }
    }
    
    svg {
      display: none;
    }
  `}
`;

HeaderItem.LogoLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

HeaderItem.Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:last-child {
    a {
      margin: 0 0 0 8px;
    }
  }
`;

HeaderItem.Separator = styled.div`
  display: none;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #000;
  margin: 0 5px 0 18px;

  ${breakpoint('lg')`
    display: block;
  `}
`;

export default HeaderItem;
