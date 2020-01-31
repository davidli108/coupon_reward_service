//@flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { NavLink } from 'react-router-dom';

type LinkProps = {
  url: string,
  text: string,
  target?: string,
  link?: boolean,
};

const FooterLink = ({ url, text, target, link }: LinkProps) => (
  <FooterLink.Wrapper>
    {link ? (
      <FooterLink.NavLink to={url}>{text}</FooterLink.NavLink>
    ) : (
      <FooterLink.Link href={url} target={target}>
        {text}
      </FooterLink.Link>
    )}
  </FooterLink.Wrapper>
);

FooterLink.Wrapper = styled.li`
  ${breakpoint('xs')`
    flex: 1 0 100%;
    max-width: 100%;
    text-align: center;
    padding: 5px 0;
  `}

  ${breakpoint('ss')`
    flex: 1 0 50%;
    max-width: 50%;
    text-align: center;
  `}

  ${breakpoint('md')`
    flex: 1 0 33.3333%;
    max-width: 33.3333%;
    text-align: left;
  `}

  ${breakpoint('lg')`
    flex: 1 0 20%;
    max-width: 20%;
  `}
`;

FooterLink.Link = styled.a`
  color: #a0a7b0;
  font-weight: 400;
  transition: color 0.3s ease;
  text-decoration: underline;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.3px;

  :hover {
    color: #374b5a;
    text-decoration: underline;
  }
`;

FooterLink.NavLink = styled(NavLink)`
  color: #a0a7b0;
  font-weight: 400;
  transition: color 0.3s ease;
  text-decoration: underline;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.3px;

  :hover {
    color: #374b5a;
    text-decoration: underline;
  }
`;

export default FooterLink;
