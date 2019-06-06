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
  padding: .75rem 0;
  text-align: left;

  ${breakpoint('xs')`
    flex: 1 0 100%;
    max-width: 100%;
  `}

  ${breakpoint('sm')`
    flex: 1 0 50%;
    max-width: 50%;
  `}

  ${breakpoint('md')`
    flex: 1 0 33.3333%;
    max-width: 33.3333%;
  `}

  ${breakpoint('lg')`
    flex: 1 0 25%;
    max-width: 25%;
  `}

  ${breakpoint('xl')`
    flex: 1 0 20%;
    max-width: 20%;
  `}
`;

FooterLink.NavLink = styled.a`
  color: #fff;
  font-weight: 400;

  :hover {
    text-decoration: underline;
  }
`;

export default FooterLink;
