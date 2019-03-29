//@flow
import * as React from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import { connect } from 'react-redux';

import type { BrandHeaderProps } from '../models/StorePage';
import { getStore, getOffers } from '../StoreCouponsReducer';

const getCouponsCount = offers =>
  offers.filter(x => x.coupon_code !== '').length;
const getDealsCount = offers => offers.filter(x => x.coupon_code === '').length;

const BrandHeader = ({
  store: { store_name, store_cashback_text },
  offers,
}: BrandHeaderProps) => {
  const [isStoreFollowed, setStoreFollowed] = React.useState(false);
  const handleStoreFollowToggler = () => setStoreFollowed(!isStoreFollowed);

  return (
    <>
      <BrandHeader.Name>{store_name} Coupon Codes & Deals</BrandHeader.Name>
      <BrandHeader.NoWrapFlexBox>
        <BrandHeader.OffersStats>
          <span>{getCouponsCount(offers)} Coupons</span>
          <span>-</span>
          <span>{getDealsCount(offers)} Deals</span>
          <span>-</span>
          <span>{store_cashback_text}</span>
        </BrandHeader.OffersStats>
        <BrandHeader.FollowStoreWrapper isStoreFollowed={isStoreFollowed}>
          <div onClick={handleStoreFollowToggler}>
            {isStoreFollowed ? <MdFavorite /> : <MdFavoriteBorder />}
            <span>Follow Store</span>
          </div>
        </BrandHeader.FollowStoreWrapper>
      </BrandHeader.NoWrapFlexBox>
    </>
  );
};

BrandHeader.Name = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #374b5a;

  text-align: center;
  padding-top: 15px;

  ${breakpoint('xl')`
    padding: 0 0 0  30px;
    width: 100%;

    text-align: start;
    line-height: 46px;
    font-size: 39px;
  `}
`;

BrandHeader.NoWrapFlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('xl')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;

    width: 100%;
    padding: 10px 0;
  `}
`;

BrandHeader.OffersStats = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 15px 0 25px 0;

  ${breakpoint('xl')`
    width: 100%;
    max-width: 500px;
    padding: 0 0 5px 30px;
  `}

  & > span {
    font-weight: bold;
    font-size: 10px;
    color: #62707b;

    ${breakpoint('xl')`
      font-size: 16px;
    `}

    &:first-child {
      margin-left: 5px;
    }

    &:last-child {
      margin-right: 5px;
    }
  }
`;

BrandHeader.FollowStoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 25px 0 10px 0;

  ${breakpoint('xl')`
    padding: 0 0 0 30px;
  `}

  > div {
    display: flex;
    align-items: center;

    width: fit-content;
    height: auto;

    cursor: pointer;

    > svg {
      width: 22px;
      height: 22px;
      color: ${({ isStoreFollowed }) => (isStoreFollowed ? 'red' : '#d2d2d2')};
    }

    > span {
      padding-left: 5px;
      font-size: 14px;
      color: ${({ isStoreFollowed }) =>
        isStoreFollowed ? 'black' : '#b1b1b1'};
    }
  }
`;

const mapStateToProps = state => ({
  store: getStore(state),
  offers: getOffers(state),
});

const enhance = connect(mapStateToProps);

export default enhance(BrandHeader);
