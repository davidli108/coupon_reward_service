//@flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type LinkProps = {
  url: string,
  text: string,
  target?: string,
};

const FooterLink = ({ url, text, target }: LinkProps) => (
  <FooterLink.Wrapper>
    <FooterLink.NavLink href={url} target={target}>
      {text}
    </FooterLink.NavLink>
  </FooterLink.Wrapper>
);

FooterLink.Wrapper = styled.li`
  ${breakpoint('xs')`
    flex: 1 0 100%;
    max-width: 100%;
    text-align: center;
    margin: 0 0 24px;
  `}

  ${breakpoint('md')`
    flex: 1 0 33.3333%;
    max-width: 33.3333%;
    margin: 0 0 35px;
    text-align: left;
  `}

  ${breakpoint('lg')`
    flex: 1 0 20%;
    max-width: 20%;
  `}
`;

FooterLink.NavLink = styled.a`
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
