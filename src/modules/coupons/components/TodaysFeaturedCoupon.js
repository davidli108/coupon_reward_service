//@flow
import * as React from 'react';
import styled from 'styled-components';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { FiShare2 } from 'react-icons/fi';

import type { FeaturedCoupon } from '../models/CouponsPage';

const TodaysFeaturedCoupon = ({
  storeName,
  highestCashbackPercent,
  discountPercent,
  description,
  isFavorited,
}: FeaturedCoupon) => {
  const [isFeaturedCouponLiked, setFeaturedCouponLike] = React.useState(
    isFavorited,
  );

  const handleFeaturedCouponLikeToggler = () =>
    setFeaturedCouponLike(!isFeaturedCouponLiked);

  return (
    <TodaysFeaturedCoupon.Wrapper>
      <h2>Today's Featured Coupon From Macy's</h2>
      <TodaysFeaturedCoupon.Content>
        <TodaysFeaturedCoupon.LogoControlsWrapper>
          <TodaysFeaturedCoupon.Logo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1280px-Walmart_logo.svg.png"
            alt="logo"
          />
          <TodaysFeaturedCoupon.Controls isLiked={isFeaturedCouponLiked}>
            {isFeaturedCouponLiked ? (
              <IoIosHeart onClick={handleFeaturedCouponLikeToggler} />
            ) : (
              <IoIosHeartEmpty onClick={handleFeaturedCouponLikeToggler} />
            )}
            <FiShare2 />
          </TodaysFeaturedCoupon.Controls>
        </TodaysFeaturedCoupon.LogoControlsWrapper>

        <TodaysFeaturedCoupon.OfferingWrapper>
          <TodaysFeaturedCoupon.Offering>
            <span>20% OFF</span>
            <span>up to 4% Cash Back</span>
          </TodaysFeaturedCoupon.Offering>
        </TodaysFeaturedCoupon.OfferingWrapper>

        <TodaysFeaturedCoupon.DescriptionButtonWrapper>
          <TodaysFeaturedCoupon.Description>
            Sports Shoes - For all the unstoppable man looking for adventure.
          </TodaysFeaturedCoupon.Description>
          <TodaysFeaturedCoupon.Button>View Deal</TodaysFeaturedCoupon.Button>
        </TodaysFeaturedCoupon.DescriptionButtonWrapper>
      </TodaysFeaturedCoupon.Content>
    </TodaysFeaturedCoupon.Wrapper>
  );
};

TodaysFeaturedCoupon.Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  > h2 {
    font-weight: bold;
    line-height: 19px;
    font-size: 16px;

    color: #374b5a;

    margin-bottom: 15px;
  }
`;

TodaysFeaturedCoupon.Content = styled.div`
  display: flex;
  flex-flow: row wrap;

  background: #fff;
  border: 2px solid #dadde2;
  border-radius: 5px;

  width: 100%;
  padding: 15px 30px;
`;

TodaysFeaturedCoupon.LogoControlsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 50%;
  margin: 8px 20px 0 0;

  > div {
    width: 100%;
  }
`;

TodaysFeaturedCoupon.Logo = styled.img`
  width: auto;
  height: 30px;

  max-width: 100%;
  max-height: 40px;

  margin-bottom: 8px;
`;

TodaysFeaturedCoupon.Controls = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  color: #adb8c0;

  margin-right: 15px;

  > svg {
    width: 27px;
    height: 25px;
  }

  > svg:first-child {
    margin-right: 10px;
    color: ${({ isLiked }) => (isLiked ? 'red' : '#adb8c0')};
  }
`;

TodaysFeaturedCoupon.OfferingWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  width: calc(50% - 20px);
`;

TodaysFeaturedCoupon.Offering = styled.div`
  display: flex;
  flex-flow: column nowrap;

  > span {
    white-space: nowrap;
  }

  > span:first-child {
    font-weight: bold;
    line-height: 35px;
    font-size: 30px;

    color: #374b5a;
  }

  > span:last-child {
    font-weight: bold;
    line-height: 15px;
    font-size: 13px;

    color: #374b5a;
  }
`;

TodaysFeaturedCoupon.DescriptionButtonWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin-top: 20px;

  > * {
    width: 100%;
    margin-bottom: 20px;
  }
`;

TodaysFeaturedCoupon.Description = styled.p`
  line-height: 17px;
  font-size: 13px;
  color: #899197;
  text-align: center;
`;

TodaysFeaturedCoupon.Button = styled.button`
  background: #00cbe9;
  border: 1px solid #00b4cf;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.5),
    inset 0px -1px 5px rgba(0, 0, 0, 0.0584805),
    inset 0px -2px 0px rgba(255, 255, 255, 0.213315);
  border-radius: 4px;

  font-weight: bold;
  line-height: 20px;
  font-size: 17px;
  letter-spacing: 0.51px;
  color: #fff;

  padding: 13px 70px;

  transition: 0.2s;

  :hover {
    background: #00b4cf;
  }
`;

export default TodaysFeaturedCoupon;
