// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type StoreFeaturedProps = {
  stores: {
    name: string,
    newStore: boolean,
    deals: string,
    offer: string,
    logo: string,
    url: string,
  }[],
};

const Featured = ({ stores }: StoreFeaturedProps) => (
  <Featured.Wrapper>
    {stores.map(({ name, offer, logo, url }) => (
      <Featured.Item key={name}>
        <Featured.Image src={logo} alt={name} />
        <Featured.Link href={url} target="_blank">
          Visit Store
        </Featured.Link>
        <Featured.Cash>{offer}</Featured.Cash>
      </Featured.Item>
    ))}
  </Featured.Wrapper>
);

Featured.Wrapper = styled.div`
  display: flex;
  padding: 33px 0;
`;

Featured.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 33.33%;
  padding: 10px 32px 18px;
  border: 1px solid #dadde2;
  border-radius: 5px;

  &:nth-child(2) {
    margin: 0 30px;
  }
  ${breakpoint('xs')`
    flex-basis: 100%;
    padding: 10px 18px 18px;
    &:nth-child(2) {
      margin: 0 0 0 30px;
    }
    &:nth-child(3) {
      display: none;
    }
  `}
  ${breakpoint('sm')`
    padding: 10px 32px 18px;
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
  border: 1px solid #00b4cf;
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
  color: #374b5a;
`;

export default Featured;
