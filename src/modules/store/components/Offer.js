//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import type { Offer as OfferModel } from '../models/StorePage';

const formatNumberByThousands = value => {
  const thousands = Math.floor(Number(value) / 1000);
  const rest = Number(value) % 1000;
  const shortRest = String(rest).split('')[0];

  if (thousands === 0) {
    return value;
  }

  return `${thousands}.${shortRest}k`;
};

const formatWithZeroPadding = value => String(value).padStart(2, '0');

const Offer = ({
  title,
  expDate,
  discountPercent,
  cashbackPercent,
  usesToday,
  isCoupon,
  isDeal,
  isNew,
  isBonus,
  isLimited,
  value,
}: OfferModel) => {
  return (
    <>
      {/* temp key, i guess server will return ids*/}
      {(isDeal || isCoupon) && (
        <Offer.Wrapper>
          {isNew && (
            <Offer.NewDeal>
              <p>New Deal</p>
            </Offer.NewDeal>
          )}
          <Offer.Content>
            <p>
              <span>{formatWithZeroPadding(discountPercent)}%</span>
              <span>O f f</span>
            </p>
            <p>{title}</p>
          </Offer.Content>
          <Offer.ViewDeal>
            {isDeal && (
              <Offer.ViewDealButton
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Deal
              </Offer.ViewDealButton>
            )}
            {isCoupon && (
              <Offer.RevealCouponButton
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reveal Coupon
              </Offer.RevealCouponButton>
            )}
            <p>Exp. {expDate}</p>
          </Offer.ViewDeal>
          <Offer.Info>
            <p>
              Verified today · {formatNumberByThousands(usesToday)} uses today.
            </p>
            <p>+{cashbackPercent}% Cash Back</p>
          </Offer.Info>
        </Offer.Wrapper>
      )}
      {isBonus && (
        <Offer.PiggyOffer>
          <Offer.PiggyBonus>PiggyBonus</Offer.PiggyBonus>
          <Offer.PiggyContent>
            <h2>{value}</h2>
            <p>{title}</p>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Piggy
            </a>
          </Offer.PiggyContent>
        </Offer.PiggyOffer>
      )}
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

Offer.RevealCouponButton = styled.a`
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

  clip-path: polygon(92% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
`;

Offer.PiggyOffer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #fff;
  border: 1px dashed #adb8c0;
  border-radius: 5px;

  margin-top: 25px;

  ${breakpoint('lg')`
    width: 100%;
  `}
`;

Offer.PiggyBonus = styled.div`
  background: #f9fafc;
  border-radius: 5px;

  font-weight: bold;
  line-height: 15px;
  font-size: 13px;
  text-align: center;
  color: #00cbe9;
  padding: 7px;
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
