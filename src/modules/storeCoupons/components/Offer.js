//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import type { Offer as OfferModel } from '../models/StorePage';

const Offer = ({
  coupon_code,
  show_exp_date,
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
        {offer_success_print && (
          <Offer.NewDeal>
            <p>{offer_success_print}</p>
          </Offer.NewDeal>
        )}
        <Offer.Content>
          <p>
            <span>{Number(discount.replace('%', '')) * 10}%</span>
            <span>O f f</span>
          </p>
          <p>{offer_name}</p>
        </Offer.Content>
        <Offer.ViewDeal>
          {false && (
            <Offer.ViewDealButton
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Deal
            </Offer.ViewDealButton>
          )}
          <Offer.RevealCouponButton
            isRevealed={isCouponRevealed}
            onClick={couponRevealedToggler}
          >
            <p>Reveal Coupon</p>
            <p>{coupon_code}</p>
          </Offer.RevealCouponButton>
          <p>{show_exp_date}</p>
        </Offer.ViewDeal>
        <Offer.Info>
          <p>Verified today · XXX uses today.</p>
          <p>{discount_print}</p>
        </Offer.Info>
      </Offer.Wrapper>
    </>
  );
};

Offer.Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  background: #fff;
  border: 1px solid #dadde2;
  border-radius: 5px;

  margin-top: 25px;

  ${breakpoint('xl')`
    width: 100%;

    display: grid;

    grid-template-columns: 55px auto auto;
    grid-template-rows: auto;

    grid-template-areas:
      "newDeal . ."
      ". content viewDeal"
      ". info .";
  `}
`;

Offer.NewDeal = styled.div`
  display: flex;

  width: 100%;
  height: 20px;
  padding: 2px 0 0 5px;

  > p {
    color: #00cbe9;
    font-size: 13px;
    font-weight: bold;
  }

  ${breakpoint('xl')`
    grid-area: newDeal;
  `}
`;

Offer.Content = styled.div`
  display: flex;

  padding: 25px;

  ${breakpoint('xl')`
    justify-content: space-between;
    align-items: flex-start;
    grid-area: content;

    justify-self: center;
  `}

  > p:first-child {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-right: 15px;

    color: #7ed321;
    font-weight: bold;
    line-height: 46px;
    font-size: 39px;

    ${breakpoint('xl')`
      width: fit-content;
      margin-top: -3px;
    `}

    > span {
      width: 100%;

      &:nth-child(2) {
        letter-spacing: -1.5px;
      }
    }
  }

  > p:nth-child(2) {
    line-height: 19px;
    font-size: 15px;
    letter-spacing: 0.375px;
    font-weight: bold;
    color: #374b5a;

    ${breakpoint('xl')`
      font-size: 18px;
      max-width: 400px;
    `}
  }
`;

Offer.ViewDealButton = styled.a`
  width: 80%;
  max-width: 300px;
  padding: 15px;

  background: #00cbe9;
  border-radius: 4px;

  font-weight: bold;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;

  ${breakpoint('xl')`
    width: calc(100% - 30px);
  `}
`;

Offer.RevealCouponButton = styled.div`
  width: 100%;
  max-width: 300px;
  height: 47px;
  font-weight: bold;
  font-size: 17px;
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

Offer.ViewDeal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  ${breakpoint('xl')`
    width: calc(100% - 17px);
    max-width: 254px;
    min-width: 160px;
    margin-right: 17px;
    grid-area: viewDeal;
    justify-self: end;

  `}

  > p {
    font-weight: bold;
    line-height: 23px;
    font-size: 13px;
    color: #c2c2c2;
    margin-top: 15px;
  }
`;

Offer.Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  margin-bottom: 25px;

  ${breakpoint('xl')`
    flex-flow: row wrap;
    align-items: center;
    margin-top: -50px;
    margin-left: 22%;
    width: fit-content;

    grid-area: info;
    justify-self: center;
  `}

  > p {
    width: 100%;
    text-align: center;
    font-weight: bold;
    line-height: 23px;
    font-size: 13px;

    color: #c2c2c2;
    ${breakpoint('xl')`
      white-space: nowrap;
      width: fit-content;
      margin: 0 15px;
    `}
  }
`;

Offer.PiggyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 10px;

  > h2 {
    font-weight: bold;
    line-height: 40px;
    font-size: 34px;
    text-align: center;
    color: #62707b;
  }

  > p {
    width: 80%;
    text-align: center;

    line-height: 20px;
    font-size: 13px;
    color: #62707b;
  }

  > a {
    background: #fff;
    border: 2px solid #7ed321;
    border-radius: 5px;

    text-align: center;
    width: 80%;
    margin-top: 15px;
    max-width: 330px;
    padding: 10px 0;

    font-weight: bold;
    line-height: 20px;
    font-size: 17px;
    letter-spacing: -0.188889px;

    color: #7ed321;
  }
`;

export default Offer;
