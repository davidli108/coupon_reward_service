// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import targetIcon from '../assets/target.png';
import verificationIcon from '../assets/verif.png';

type StoreListProps = {
  stores: {
    name: string,
    offer: string,
    logo: string,
    url: string,
  }[],
};

const StoreList = ({ stores }: StoreListProps) => (
  <StoreList.Wrapper>
    {stores.map(({ name, offer }) => (
      <StoreList.StoreItem key={name}>
        <StoreList.Image src={targetIcon} alt="icon" />
        <StoreList.Brand>
          <StoreList.BrandName>Target</StoreList.BrandName>
          <StoreList.BranDeals>258456 Deals</StoreList.BranDeals>
        </StoreList.Brand>
        <StoreList.Cash>+12% Cash Back</StoreList.Cash>
        <p>
          <img src={verificationIcon} alt="verify" />
          coupons activated
        </p>
        <StoreList.Link>Visit Store</StoreList.Link>
      </StoreList.StoreItem>
    ))}
  </StoreList.Wrapper>
);

StoreList.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

StoreList.StoreItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #ccc;
  border-bottom: none;

  &:last-child {
    border: 1px solid #ccc;
  }

  ${breakpoint('md')`
    padding: 30px;
  `}
`;

StoreList.Image = styled.img`
  display: block;
  margin: 0 20px 0 0;
`;

StoreList.Brand = styled.div`
  margin-right: 30px;
`;

StoreList.BrandName = styled.span`
  display: block;
  margin: 0 0 5px 0;
  font-weight: 500;
  line-height: 23px;
  font-size: 13px;
  color: #c2c2c2;
`;

StoreList.BranDeals = styled.p`
  font-weight: bold;
  line-height: 21px;
  font-size: 16px;
  color: #374b5a;
`;

StoreList.Cash = styled.p`
  font-weight: 500;
  line-height: 23px;
  font-size: 13px;
  color: #374b5a;
`;

StoreList.Link = styled.a`
  display: block;
  width: 184px;
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

export default StoreList;
