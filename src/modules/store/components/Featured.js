// @flow
import React from 'react';
import styled from 'styled-components';

import targetIcon from '../assets/target.png';
import walmartIcon from '../assets/walmart.png';
import macysIcon from '../assets/macys.png';

const Featured = () => (
  <Featured.Wrapper>
    <Featured.Item>
      <Featured.Image src={targetIcon} alt="title" />
      <Featured.Link>Visit Store</Featured.Link>
      <Featured.Cash>5.0% Cash Back</Featured.Cash>
    </Featured.Item>
    <Featured.Item>
      <Featured.Image src={walmartIcon} alt="title" />
      <Featured.Link>Visit Store</Featured.Link>
      <Featured.Cash>5.0% Cash Back</Featured.Cash>
    </Featured.Item>
    <Featured.Item>
      <Featured.Image src={macysIcon} alt="title" />
      <Featured.Link>Visit Store</Featured.Link>
      <Featured.Cash>5.0% Cash Back</Featured.Cash>
    </Featured.Item>
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
    margin: 0 15px;
  }
`;

Featured.Image = styled.img`
  display: block;
  margin: 0 0 10px 0;
`;

Featured.Link = styled.a`
  display: block;
  width: 100%;
  padding: 9px 0;
  background: #00cbe9;
  border: 1px solid #00b4cf;
  border-radius: 4px;
  line-height: 20px;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;
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
