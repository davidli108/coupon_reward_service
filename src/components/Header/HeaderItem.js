// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type HeaderItemProps = {
  children: React.Node,
  direct: boolean,
  hoverBgColor?: string,
  link?: string,
  redirect?: string,
  onClick?: () => void,
  border?: string,
  separator?: boolean,
  activeClass?: string,
};

const HeaderItem = ({
  children,
  direct,
  hoverBgColor,
  link,
  redirect,
  onClick,
  border,
  separator,
  activeClass,
}: HeaderItemProps) => (
  <>
    {separator && <HeaderItem.Separator />}
    <HeaderItem.Wrapper
      hoverBgColor={hoverBgColor}
      onClick={onClick}
      border={border}
    >
      {direct && redirect && (
        <HeaderItem.LogoLink href={redirect}>{children}</HeaderItem.LogoLink>
      )}

      {link && (
        <HeaderItem.NavLink className={activeClass} to={link}>
          {children}
        </HeaderItem.NavLink>
      )}

      {!link && !redirect && !direct && (
        <HeaderItem.Link border={border} separator={separator}>
          {children}
        </HeaderItem.Link>
      )}
    </HeaderItem.Wrapper>
  </>
);

HeaderItem.defaultProps = {
  direct: false,
};

HeaderItem.NavLink = styled(NavLink)`
  font-size: 16px;
  line-height: 19px;
  padding: 8px 10px;
  color: #899197;
  letter-spacing: 0.53px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid transparent;
  position: relative;
  background: 0 0;
  transition: all 0.3s ease;
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
    
    &.active,
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
  line-height: 19px;
  padding: 8px 35px;
  color: #00ba4a;
  letter-spacing: 0.53px;
  margin: ${({ separator }) => (separator ? '0' : '0 8px')};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  background: 0 0;
  transition: all 0.3s ease;
  cursor: pointer;
  border: ${({ border }) => (border ? '2px solid #00ba4a' : '')};

  svg {
    ${({ border }) => (border ? 'display: none;' : 'display: block;')}
  }

  ${breakpoint('lg')`
    margin: 0;  
  
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

  img {
    height: 38px;
  }

  ${breakpoint('ss')`
    img {
      margin: 10px 0 0;
      height: 46px;
    }
  `}

  ${breakpoint('md')`
    img {
      margin: 15px 0 0;
      height: 57px;
    }
  `}

  ${breakpoint('lg')`
    img {
      margin: 0;
    }
  `}
`;

HeaderItem.Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;

  ${breakpoint('lg')`
    margin: 0 10px;
    
    &:last-of-type {
      margin: 0 0 0 10px;
    }
  `}
`;

HeaderItem.Separator = styled.div`
  display: none;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #000;
  position: relative;
  right: -6px;

  ${breakpoint('lg')`
    display: block;
  `}
`;

export default HeaderItem;