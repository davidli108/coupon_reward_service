//@flow
import * as React from 'react';
import styled from 'styled-components';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { FiShare2 } from 'react-icons/fi';
import breakpoint from 'styled-components-breakpoint';

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
      <h2>Today's Featured Coupon From {storeName}'s</h2>
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
            <span>{discountPercent}% OFF</span>
            <span>up to {highestCashbackPercent}% Cash Back</span>
          </TodaysFeaturedCoupon.Offering>
        </TodaysFeaturedCoupon.OfferingWrapper>

        <TodaysFeaturedCoupon.DescriptionButtonWrapper>
          <TodaysFeaturedCoupon.Description>
            {description}
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

    ${breakpoint('sx')`
      line-height: 24px;
      font-size: 20px;
      font-weight: bold;
    `}

    ${breakpoint('md')`
      font-weight: bold;
      line-height: 29px;
      font-size: 25px;
    `}
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

  ${breakpoint('sx')`
    flex-flow: column nowrap;
    align-items: center;
  `}

  ${breakpoint('md')`
    height: 235px;
    flex-flow: column wrap;
    justify-content: flex-end;
    padding: 20px 48px 30px 48px;

    > div {
      width: 50%;
    }
  `}

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    padding: 0;

    > div {
      width: calc(33% - 20px) !important;
    }
  `}

  ${breakpoint('xl')`
    justify-content: space-between;
    padding: 0 67px;

    > div {
      width: calc(33% - 20px) !important;
    }
  `}
`;

TodaysFeaturedCoupon.LogoControlsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 50%;
  margin: 8px 20px 0 0;

  > div {
    width: 100%;
  }

  ${breakpoint('sx')`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 0 50px 0;
  `}

  ${breakpoint('md')`
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content !important;
    height: 100%;
    margin: 0 100px 0 0;
  `}

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    margin: 0 30px 0 0;
  `}
`;

TodaysFeaturedCoupon.Logo = styled.img`
  width: auto;
  height: 30px;
  max-width: 100%;

  margin-bottom: 8px;

  ${breakpoint('sx')`
    order: 2;
  `}

  ${breakpoint('md')`
    order: 0;
    height: 48px;
    margin: 50px 0;
  `}

  ${breakpoint('lg')`
    height: 40px;
    margin: 0;
  `}
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

  ${breakpoint('sx')`
    align-items: center;
    justify-content: flex-end;
    margin-right: 0;
  `}

  ${breakpoint('md')`
    justify-content: center;
  `}

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    margin: 0;
  `}
`;

TodaysFeaturedCoupon.OfferingWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  width: calc(50% - 20px);

  ${breakpoint('sx')`
    width: 100%;
  `}

  ${breakpoint('xl')`
    width: fit-content;
  `}
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

    ${breakpoint('sx')`
      line-height: 41px;
      font-size: 35px;

      margin-right: 15px;
    `}

    ${breakpoint('md')`
      line-height: 57px;
      font-size: 48px;
    `}
  }

  > span:last-child {
    font-weight: bold;
    line-height: 15px;
    font-size: 13px;

    color: #374b5a;

    ${breakpoint('sx')`
      font-weight: bold;
      line-height: 31px;
      font-size: 18px;
      letter-spacing: 0.45px;
    `}

    ${breakpoint('md')`
      line-height: 21px;
      font-size: 18px;
    `}
  }

  ${breakpoint('sx')`
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
  `}

  ${breakpoint('md')`
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
  `}
`;

TodaysFeaturedCoupon.DescriptionButtonWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin-top: 20px;

  > * {
    width: 100%;
    margin-bottom: 20px;
  }

  ${breakpoint('md')`
    width: 100%;
  `}

  ${breakpoint('lg')`
    max-width: 300px;
  `}

  ${breakpoint('xl')`
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 100%;

    flex: 2 1 50%;
  `}
`;

TodaysFeaturedCoupon.Description = styled.p`
  line-height: 17px;
  font-size: 13px;
  color: #899197;
  text-align: center;

  ${breakpoint('xs')`
    font-weight: normal;
    line-height: 23px;
    font-size: 16px;
    letter-spacing: 0.4px;
    white-space: wrap;
  `}

  ${breakpoint('md')`
    flex: 1 1 360px;
    text-align: start;
  `}

  ${breakpoint('xl')`
    flex: 1 1 50%;
    margin-right: 25%;
  `}
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
  cursor: pointer;

  :hover {
    background: #00b4cf;
  }

  ${breakpoint('md')`
    flex: 1 1 360px;
    margin: 0;
  `}

  ${breakpoint('xl')`
    flex: 1 1 220px;
    white-space: nowrap;
    height: 60px;
  `}
`;

export default TodaysFeaturedCoupon;
