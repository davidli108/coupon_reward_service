// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import verificationIcon from '../assets/verif.png';

type StoreListProps = {
  stores: {
    name: string,
    newStore: boolean,
    deals: string,
    offer: string,
    logo: string,
    url: string,
  }[],
};

const StoreList = ({ stores }: StoreListProps) => (
  <StoreList.Wrapper>
    <StoreList.StoreContainer>
      {stores.map(({ name, offer, newStore, deals, logo, url }) => (
        <StoreList.StoreItem key={name}>
          {newStore && <StoreList.StoreNew>New Store</StoreList.StoreNew>}
          <StoreList.Image src={logo} alt={name} />
          <StoreList.ContentWrap>
            <StoreList.Content>
              <StoreList.Info>
                <StoreList.Brand>
                  <StoreList.BrandName>{name}</StoreList.BrandName>
                  <StoreList.BranDeals>{deals}</StoreList.BranDeals>
                </StoreList.Brand>
                <StoreList.Cash>{offer}</StoreList.Cash>
              </StoreList.Info>
              <StoreList.Coupons>
                <img src={verificationIcon} alt="verify" />
                coupons activated
              </StoreList.Coupons>
            </StoreList.Content>
            <StoreList.Link href={url} target="_blank">
              Visit Store
            </StoreList.Link>
          </StoreList.ContentWrap>
        </StoreList.StoreItem>
      ))}
    </StoreList.StoreContainer>
    <StoreList.LoadMoreButton href="#!">
      Load more deals
    </StoreList.LoadMoreButton>
  </StoreList.Wrapper>
);

StoreList.Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

StoreList.ContentWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${breakpoint('xs')`
    flex-direction: column;
  `}
  ${breakpoint('sm')`
    flex-direction: row;
  `}
`;

StoreList.StoreContainer = styled.div`
  margin: 0 0 50px 0;
`;

StoreList.StoreItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-bottom: none;

  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  &:last-child {
    border-bottom: 1px solid #ccc;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  ${breakpoint('xs')`
    padding: 30px 28px 30px 35px;
  `}
  ${breakpoint('sm')`
    padding: 10px 7px 10px 10px;
  `}
  ${breakpoint('md')`
    padding: 23px 24px 23px 18px;
  `}
  ${breakpoint('lg')`
    padding: 23px 42px 23px 35px;
  `}
`;

StoreList.StoreNew = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: 3px 10px;
  background: #f9fafc;
  border-radius: 4px;
  font-weight: 500;
  line-height: 15px;
  font-size: 13px;
  text-align: center;
  color: ${props => props.theme.colors.blue};
`;

StoreList.Image = styled.img`
  display: block;
  margin: 0 37px 0 0;
  ${breakpoint('sm')`
    margin: 0 23px 0 0;
  `}
  ${breakpoint('md')`
    margin: 0 26px 0 0;
  `}
  ${breakpoint('lg')`
    margin: 0 37px 0 0;
  `}
`;

StoreList.Content = styled.div`
  display: flex;
  flex-basis: 100%;
  ${breakpoint('xs')`
    flex-direction: column;
    width: 100%;
    margin: 0 0 11px 0;
  `}
  ${breakpoint('sm')`
    flex-direction: column;
    width: auto;
    flex-basis: auto;
  `}
  ${breakpoint('md')`
    flex-direction: row;
    align-items: flex-end;
    flex-basis: 100%;
  `}
  ${breakpoint('lg')`
    flex-basis: auto;
  `}
`;

StoreList.Info = styled.div`
  display: flex;
  ${breakpoint('xs')`
    margin: 0 0 11px 0;
  `}
  ${breakpoint('sm')`
    flex-direction: column;
    margin: 0 0 0 0;
  `}
  ${breakpoint('md')`
    flex-basis: 160px;
  `}
  ${breakpoint('lg')`
    flex-direction: row;
    flex-basis: auto;
  `}
`;

StoreList.Brand = styled.div`
  margin: 0 30px 0 0;
  ${breakpoint('xs')`
    margin: 0 21px 0 0;
  `}
  ${breakpoint('sm')`
    display: flex;
    margin: 0 0 5px 0;
  `}
  ${breakpoint('md')`
    margin: 0 0 0 0;
  `}
  ${breakpoint('lg')`
    display: block;
    margin: 0 30px 0 0;
  `}
`;

StoreList.BrandName = styled.span`
  display: block;
  margin: 0 0 5px 0;
  font-weight: 500;
  line-height: 23px;
  font-size: 13px;
  color: #c2c2c2;
  ${breakpoint('sm')`
    margin: 0 11px 0 0;
  `}
  ${breakpoint('md')`
    margin: 0 5px 0 0;
  `}
  ${breakpoint('lg')`
    margin: 0 0 5px 0;
  `}
`;

StoreList.BranDeals = styled.p`
  font-weight: bold;
  line-height: 21px;
  font-size: 16px;
  color: #374b5a;
`;

StoreList.Cash = styled.p`
  margin: 30px 30px 0 0;
  font-weight: 500;
  line-height: 23px;
  font-size: 13px;
  color: #374b5a;
  ${breakpoint('xs')`
    margin: 28px 0 0 0;
  `}
  ${breakpoint('sm')`
    margin: 0 0 5px 0;
  `}
  ${breakpoint('md')`
    margin: 0 0 0 0;
  `}
  ${breakpoint('lg')`
    margin: 30px 30px 0 0;
  `}
`;

StoreList.Coupons = styled.p`
  margin: 30px 57px 0 0;
  font-weight: 500;
  line-height: 23px;
  font-size: 13px;
  color: #7f7f7f;
  ${breakpoint('xs')`
    margin: 0 0 0 0;
  `}
  ${breakpoint('sm')`
    margin: 0 0 0 0;
  `}
  ${breakpoint('md')`
    margin: 0 0 0 0;
  `}
  ${breakpoint('lg')`
    margin: 30px 57px 0 0;
  `}
`;

StoreList.Link = styled.a`
  display: flex;
  justify-content: center;
  flex-basis: 184px;
  margin: 2px 0 0 0;
  padding: 9px 0;
  font-weight: bold;
  background: ${props => props.theme.colors.blue};
  border: 1px solid #00b4cf;
  border-radius: 4px;
  line-height: 20px;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  ${breakpoint('xs')`
    flex-basis: auto;
    width: 100%;
  `}
  ${breakpoint('sm')`
    flex-basis: 148px;
    margin-left: auto;
  `}
  ${breakpoint('md')`
    flex-basis: 242px;
    margin-left: auto;
  `}
  ${breakpoint('lg')`
    flex-basis: 184px;
  `}
`;

StoreList.LoadMoreButton = styled.button`
  display: flex;
  margin: 0 auto;
  font-weight: bold;
  line-height: 21px;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.45px;
  color: #adb8c0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default StoreList;
