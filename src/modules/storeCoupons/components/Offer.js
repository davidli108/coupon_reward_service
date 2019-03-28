//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import type { Offer as OfferModel } from '../models/StorePage';

const Offer = ({
  coupon_code,
  show_exp_date,
  ref_link,
  discount,
  discount_print,
  offer_name,
  offer_success_print,
}: OfferModel) => {
  const [isCouponRevealed, setCouponRevealed] = React.useState(false);
  const couponRevealedToggler = () => setCouponRevealed(!isCouponRevealed);

  return (
    <>
      <Offer.Wrapper>
        {offer_success_print && <Offer.NewDeal>NewDeal</Offer.NewDeal>}
        <Offer.Content>
          <Offer.Discount>
            <span>{discount}</span>
            <span>Off</span>
          </Offer.Discount>
          <Offer.DescriptionWrapper>
            <Offer.Description>{offer_name}</Offer.Description>
            <Offer.AdditionalInfo>
              <span>Verified today · XXX uses today.</span>
              <span>{discount_print}</span>
            </Offer.AdditionalInfo>
          </Offer.DescriptionWrapper>
        </Offer.Content>
        <Offer.Container>
          <Offer.ButtonWrapper>
            {coupon_code === '' ? (
              <Offer.ViewDealButton href={ref_link} target="_blank">
                View Deal
              </Offer.ViewDealButton>
            ) : (
              <Offer.RevealCouponButton
                isRevealed={isCouponRevealed}
                onClick={couponRevealedToggler}
              >
                <p>Reveal Coupon</p>
                <p>{coupon_code}</p>
              </Offer.RevealCouponButton>
            )}
            <Offer.ExpDate>{show_exp_date}</Offer.ExpDate>
          </Offer.ButtonWrapper>
        </Offer.Container>
      </Offer.Wrapper>
    </>
  );
};

Offer.Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  width: calc(100% - 42px);
  background: #fff;
  border: 1px solid #dadde2;
  border-radius: 5px;
  margin-top: 25px;
  padding: 30px 20px;

  ${breakpoint('md')`
    width: calc(100% - 60px);
    padding: 30px 30px;
  `}

  ${breakpoint('xl')`
    padding: 30px 20px;
    width: calc(100% - 40px);
  `}
`;

Offer.NewDeal = styled.div`
  position: absolute;
  top: 0;
  left: 3px;
  height: 20px;
  padding: 2px 0 0 5px;
  color: #00cbe9;
  font-size: 13px;
  font-weight: bold;
`;

Offer.Discount = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 15px;

  ${breakpoint('md')`
    flex-flow: column nowrap;

    > span:last-child {
      letter-spacing: 4px;
    }
  `}

  > span {
    color: #7ed321;
    font-weight: bold;
    line-height: 46px;
    font-size: 39px;
  }
`;

Offer.Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: calc(50% - 10px);
  margin-right: 10px;

  ${breakpoint('md')`
    width: 100%;
    flex-flow: row nowrap;
  `}
`;

Offer.DescriptionWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  ${breakpoint('md')`
    align-items: justify-content;
    margin: 10px 10px 0 8%;
  `}
`;

Offer.Description = styled.div`
  line-height: 19px;
  font-size: 15px;
  letter-spacing: 0.375px;
  font-weight: bold;
  color: #374b5a;

  ${breakpoint('md')`
    font-size: 18px;
    max-width: 400px;
  `}
`;

Offer.AdditionalInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 40px);
  text-align: center;
  font-weight: bold;
  line-height: 23px;
  font-size: 13px;
  color: #c2c2c2;

  ${breakpoint('md')`
      margin-top: 15px;
      position: static;
      width: 100%;
      text-align: left;

      > span {
        width: 100%;
      }
    `}

  > span:first-child {
    margin-right: 10px;
  }
`;

Offer.Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(50% - 10px);
  margin-left: 10px;

  ${breakpoint('md')`
    width: 30%;
  `}
`;

Offer.ButtonWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  min-width: 150px;

  ${breakpoint('md')`
    min-width: 160px;
  `}
`;

Offer.ViewDealButton = styled.a`
  width: calc(100% - 30px);
  max-width: 150px;
  padding: 15px;
  background: #00cbe9;
  border-radius: 4px;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;

  ${breakpoint('md')`
    max-width: 100%;
  `}
  ${breakpoint('xl')`
    width: 230px;
  `}
`;

Offer.ExpDate = styled.p`
  font-weight: bold;
  line-height: 23px;
  font-size: 13px;
  color: #c2c2c2;
  margin-top: 15px;
  text-align: center;
`;

Offer.RevealCouponButton = styled.div`
  width: calc(100% - 30px);
  min-width: 177px;
  height: 47px;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;
  cursor: pointer;

  > p:first-child {
    display: ${({ isRevealed }) => (isRevealed ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    background: #00cbe9;
    clip-path: polygon(92% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
  }

  > p:last-child {
    ${({ isRevealed }) =>
      isRevealed
        ? `
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    color: black;
    background: white;
  `
        : 'display: none'};
  }
`;

export default Offer;
