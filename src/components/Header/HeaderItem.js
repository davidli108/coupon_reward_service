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
        <HeaderItem.LogoLink to={redirect}>{children}</HeaderItem.LogoLink>
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
  padding: 8px 5px;
  color: #899197;
  letter-spacing: 0.53px;
  font-weight: 700;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid transparent;
  position: relative;
  background: ${({ border, theme }) => (border ? theme.colors.greenLight : 0)} 0;
  text-decoration: ${({ border }) => (border ? 'none' : 'inherit')};
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    display: block;
  }

  ${breakpoint('lg')`
    display: flex;
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
  padding: 0 10px;
  height: 37px;
  box-sizing: border-box;
  color: #00ba4a;
  letter-spacing: 0.53px;
  margin: 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  background: ${({ border, theme }) => (border ? theme.colors.greenLight : 0)} 0;
  text-decoration: ${({ border }) => (border ? 'none' : 'underline')};
  transition: all 0.3s ease;
  cursor: pointer;
  border: ${({ border }) => (border ? '2px solid #00ba4a' : '')};

  svg {
    display: none !important;
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

  ${breakpoint('xl')`
    padding: 0 15px;
    margin: 0 0 0 20px;
  `}

  @media (max-width: 320px) {
    span {
      width: 105px;
      text-align: center;
    }
  }
`;

HeaderItem.LogoLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  img {
    height: 38px;
  }

  ${breakpoint('xs')`
    position: relative;
    z-index: 7;
  `}

  ${breakpoint('ss')`
    img {
      margin: 2px 0 0;
      height: 46px;
    }
  `}

  ${breakpoint('md')`
    position: static;

    img {
      margin: 3px 0 0;
      height: 47px;
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
  margin: 0 20px 0 0;

  ${breakpoint('md')`
    &:last-of-type {
      margin: 0;
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
  right: 0;

  ${breakpoint('lg')`
    display: block;
  `}

  ${breakpoint('xl')`
    right: -6px;
  `}
`;

export default HeaderItem;
