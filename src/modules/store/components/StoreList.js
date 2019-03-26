// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

// import verificationIcon from '../assets/verif.png';

import { type Store } from '../models';

type StoreListProps = {
  stores: Store[],
  storesAll: Store[],
  loadState: number,
  loadToState: number,
  onLoadMore: Function,
};

const StoreList = ({
  stores,
  onLoadMore,
  loadState,
  loadToState,
  storesAll,
}: StoreListProps) => (
  <div>
    <StoreList.StoreContainer>
      {stores.length === 0
        ? null
        : stores.map(
            ({
              store_name,
              discount_print,
              offer_id,
              store_logo,
              store_page_link,
            }) => (
              <StoreList.StoreItem key={`list_item_${store_name}_${offer_id}`}>
                {/* {offer_success_print && <StoreList.StoreNew>New Store</StoreList.StoreNew>} */}
                <StoreList.Box>
                  <StoreList.Image
                    src={`http://d2umvgb8hls1bt.cloudfront.net${store_logo}`}
                    alt={store_name}
                  />
                  <StoreList.ContentWrap>
                    <StoreList.Content>
                      <StoreList.Info>
                        <StoreList.Brand>
                          <StoreList.BrandName>
                            {store_name}
                          </StoreList.BrandName>
                          <StoreList.BranDeals>Deals</StoreList.BranDeals>
                        </StoreList.Brand>
                        <StoreList.Cash>{discount_print}</StoreList.Cash>
                      </StoreList.Info>
                      {/* {couponActive && (
                    <StoreList.Coupons>
                      <img src={verificationIcon} alt="verify" />
                      coupons activated
                    </StoreList.Coupons>
                  )} */}
                    </StoreList.Content>
                    <StoreList.Link to={store_page_link}>
                      Visit Store
                    </StoreList.Link>
                  </StoreList.ContentWrap>
                </StoreList.Box>
                <StoreList.LinkMobile to={store_page_link}>
                  Visit Store
                </StoreList.LinkMobile>
              </StoreList.StoreItem>
            ),
          )}
    </StoreList.StoreContainer>
    {loadState <= stores.length && storesAll.length > loadState && (
      <StoreList.LoadMoreButton
        onClick={onLoadMore.bind(null, (loadState += loadToState))}
      >
        Load more deals
      </StoreList.LoadMoreButton>
    )}
  </div>
);

StoreList.defaultProps = {
  stores: [],
  storesAll: [],
};

StoreList.Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

StoreList.ContentWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${breakpoint('xs')`
    flex-direction: column;
  `}

  ${breakpoint('md')`
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
  border: 1px solid ${props => props.theme.colors.whiteLight};
  border-bottom: none;

  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  &:last-child {
    border-bottom: 1px solid ${props => props.theme.colors.whiteLight};
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  ${breakpoint('xs')`
    padding: 30px 28px 30px 28px;
    flex-direction: column;
  `}

  ${breakpoint('sx')`
    padding: 30px 28px 30px 35px;
    flex-direction: row;
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
  background: ${props => props.theme.colors.whiteExLight};
  border-radius: 4px;
  font-weight: 500;
  line-height: 15px;
  font-size: 13px;
  text-align: center;
  color: ${props => props.theme.colors.blue};
`;

StoreList.Image = styled.img`
  display: block;
  ${breakpoint('xs')`
    width: 88px;
    height: 88px;
    object-fit: contain;
    margin: 0 17px 0 0;
  `}

  ${breakpoint('sx')`
    margin: 0 33px 0 0;
  `}

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
    flex-basis: auto;
  `}

  ${breakpoint('md')`
    align-items: flex-start;
    flex-basis: 100%;
    margin: 0;
  `}

  ${breakpoint('lg')`
    flex-basis: auto;
    flex-direction: row;
    align-items: flex-end;
  `}
`;

StoreList.Info = styled.div`
  display: flex;

  ${breakpoint('xs')`
    margin: 0 0 11px 0;
    flex-direction: column;
  `}

  ${breakpoint('sx')`
    flex-direction: row;
  `}

  ${breakpoint('sm')`
    margin: 0;
    flex-direction: column;
  `}

  ${breakpoint('md')`
    flex-basis: auto;
    margin: 0 0 5px 0;
  `}

  ${breakpoint('lg')`
    flex-direction: column;
    margin: 0;
    flex-basis: auto;
  `}

  ${breakpoint('xl')`
    flex-direction: row;
    align-items: flex-end;
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
    margin: 0 0 2px 0;
  `}

  ${breakpoint('lg')`
    display: flex;
    margin: 0 30px 14px 0;
  `}

  ${breakpoint('xl')`
    flex-direction: column;
    margin: 0 30px 0 0;
  `}
`;

StoreList.BrandName = styled.span`
  display: block;
  font-weight: 500;
  line-height: 23px;
  font-size: 13px;
  color: ${props => props.theme.colors.grayLight};

  ${breakpoint('sm')`
    margin: 0 11px 0 0;
  `}
`;

StoreList.BranDeals = styled.p`
  font-weight: bold;
  line-height: 21px;
  color: ${props => props.theme.colors.blackLight};

  ${breakpoint('xs')`
    font-size: 13px;
    margin: 5px 0 0 0;
  `}

  ${breakpoint('sm')`
    font-size: 16px;
    margin: 0;
  `}

  ${breakpoint('md')`
    font-size: 16px;
  `}

  ${breakpoint('lg')`
    font-size: 16px;
    margin: 0;
  `}
`;

StoreList.Cash = styled.p`
  font-weight: 500;
  line-height: 23px;
  font-size: 13px;
  color: ${props => props.theme.colors.blackLight};

  ${breakpoint('xs')`
    margin: 12px 0 0 0;
  `}

  ${breakpoint('sx')`
    margin: 28px 0 0 0;
  `}

  ${breakpoint('sm')`
    margin: 0 0 5px 0;
  `}

  ${breakpoint('md')`
    margin: 0;
  `}

  ${breakpoint('xl')`
    margin: 0 30px 0 0;
  `}
`;

StoreList.Coupons = styled.p`
  margin: 30px 57px 0 0;
  font-weight: 500;
  line-height: 23px;
  color: ${props => props.theme.colors.grayDark};

  ${breakpoint('xs')`
    margin: 0 0 0 0;
    font-size: 12px;
  `}

  ${breakpoint('sm')`
    margin: 0 0 0 0;
    font-size: 13px;
  `}

  ${breakpoint('md')`
    margin: 0 0 0 0;
  `}

  ${breakpoint('lg')`
    margin: 30px 39px 0 0;
  `}
`;

StoreList.Link = styled(Link)`
  display: flex;
  justify-content: center;
  flex-basis: 184px;
  padding: 9px 0;
  font-weight: bold;
  background: ${props => props.theme.colors.blue};
  border: 1px solid ${props => props.theme.colors.blueDark};
  border-radius: 4px;
  line-height: 20px;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  transition: background 205ms linear;

  &:hover {
    background: ${props => props.theme.colors.blueDark};
  }

  ${breakpoint('xs')`
    display: none;
  `}

  ${breakpoint('sx')`
    display: block;
    flex-basis: auto;
    width: 100%;
  `}

  ${breakpoint('md')`
    flex-basis: 242px;
    margin-left: auto;
  `}

  ${breakpoint('lg')`
    flex-basis: 188px;
  `}

  ${breakpoint('xl')`
    flex-basis: 255px;
  `}
`;

StoreList.LinkMobile = styled(StoreList.Link)`
  ${breakpoint('xs')`
    display: block;
    flex-basis: auto;
    width: 100%;
  `}

  ${breakpoint('sx')`
    display: none;
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
  color: ${props => props.theme.colors.whiteDark};
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  transition: color 205ms linear;

  &:hover {
    color: ${props => props.theme.colors.grayDark};
  }
`;

export default StoreList;
