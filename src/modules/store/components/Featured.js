// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { type Store } from '../models';

type FeaturedProps = {
  stores: Store[],
};

const Featured = ({ stores }: FeaturedProps) => (
  <Featured.Wrapper>
    {stores.map(({ name, offer, logo, url }) => (
      <Featured.Item key={name}>
        {logo && <Featured.Image src={logo} alt={name} />}
        <Featured.Link href={url} target="_blank">
          Visit Store
        </Featured.Link>
        <Featured.Cash>{offer}</Featured.Cash>
      </Featured.Item>
    ))}
  </Featured.Wrapper>
);

Featured.defaultProps = {
  stores: [],
};

Featured.Wrapper = styled.div`
  display: flex;

  ${breakpoint('xs')`
    padding: 11px 0;
    flex-direction: column;
  `}

  ${breakpoint('sx')`
    flex-direction: row;
    font-size: 22px;
    padding: 28px 0 20px;
  `}

  ${breakpoint('sm')`
    padding: 33px 0;
  `}

  ${breakpoint('md')`
    padding: 28px 0 20px;
  `}

  ${breakpoint('lg')`
    padding: 37px 0;
  `}

  ${breakpoint('xl')`
    padding: 37px 0 33px;
  `}
`;

Featured.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 33.33%;
  padding: 10px 32px 18px;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  border-radius: 5px;

  &:nth-child(2) {
    margin: 0 30px;
  }

  ${breakpoint('xs')`
    flex-basis: 100%;
    margin: 0 0 15px 0;
    padding: 10px 28px 18px;

    &:nth-child(2) {
      margin: 0;
    }

    &:nth-child(3) {
      display: none;
    }
  `}

  ${breakpoint('sx')`
    margin: 0;
    padding: 10px 28px 18px;

    &:nth-child(2) {
      margin: 0 0 0 30px;
    }
  `}

  ${breakpoint('sm')`
    padding: 10px 14px 18px;

    &:nth-child(2) {
      display: flex;
    }

    &:nth-child(3) {
      display: none;
    }

    &:nth-child(2) {
      margin: 0 0 0 30px;
    }

  `}

  ${breakpoint('md')`
    padding: 10px 32px 18px;
  `}

  ${breakpoint('lg')`
    &:nth-child(2) {
      margin: 0 30px;
    }

    &:nth-child(3) {
      display: flex;
    }
  `}
`;

Featured.Image = styled.img`
  display: block;
  margin: 0 0 10px 0;
`;

Featured.Link = styled.a`
  display: block;
  width: 100%;
  padding: 9px 0;
  background: ${props => props.theme.colors.blue};
  border: 1px solid ${props => props.theme.colors.blueDark};
  border-radius: 4px;
  font-weight: bold;
  line-height: 20px;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

Featured.Cash = styled.p`
  padding: 24px 0 0;
  font-weight: 500;
  line-height: 21px;
  font-size: 16px;
  color: ${props => props.theme.colors.blackLight};
`;

export default Featured;
