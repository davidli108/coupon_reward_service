//@flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import CouponCode from './CouponCode';
import placeholder from '@modules/coupons/assets/image-placeholder.png';

const discountColors = [
  '#d0c000',
  '#ff7b82',
  '#aa85cd',
  '#43b0cb',
  '#61d84e',
  '#979797',
  '#eca83a',
];

type OfferProps = {
  t: Function,
  i18n: Object,
  history: Object,
  coupon_code: string,
  show_exp_date: string,
  offer_link: string,
  discount: string,
  discount_print: string,
  discount_type: string,
  discount_amt: string,
  offer_name: string,
  offer_success_print: string,
  store_logo: string,
  store_name: string,
  isThisStore: boolean,
  store_page_link: string,
};

const Offer = ({
  t,
  i18n,
  history,
  coupon_code,
  show_exp_date,
  offer_link,
  discount,
  discount_print,
  discount_type,
  discount_amt,
  offer_name,
  offer_success_print,
  store_logo,
  store_name,
  store_page_link,
  isThisStore,
}: OfferProps) => {
  const [randomColor] = useState(Math.floor(Math.random() * 7));

  return (
    <>
      <Offer.Wrapper>
        {offer_success_print && (
          <Offer.NewDeal>{offer_success_print}</Offer.NewDeal>
        )}
        <Offer.Content>
          {!isThisStore || discount_amt === '0.00' ? (
            <Offer.Image>
              <img
                src={
                  store_logo
                    ? `https://d2umvgb8hls1bt.cloudfront.net${store_logo}`
                    : placeholder
                }
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
                alt={`${store_name || ''} Coupon Codes ${moment().format(
                  'MMMM',
                )} | ${moment().format('YYYY')}`}
                onClick={() => !isThisStore && history.push(store_page_link)}
              />
            </Offer.Image>
          ) : (
            <Offer.Discount color={discountColors[randomColor]}>
              <span>
                {discount_type === '1' &&
                  `$${Number.parseFloat(discount_amt).toFixed()}`}
                {discount_type === '2' &&
                  `${Number.parseFloat(discount_amt).toFixed()}%`}
              </span>
              <span>Off</span>
            </Offer.Discount>
          )}
          <Offer.DescriptionWrapper>
            <Offer.Description>{offer_name}</Offer.Description>
            <Offer.SxVisible>
              <Offer.AdditionalInfo>
                <span>{discount_print}</span>
              </Offer.AdditionalInfo>
            </Offer.SxVisible>
          </Offer.DescriptionWrapper>
        </Offer.Content>
        <Offer.Container>
          <Offer.ButtonWrapper>
            <CouponCode t={t} code={coupon_code} link={offer_link} />
            <Offer.ExpDate>
              Exp.{' '}
              {moment(show_exp_date.slice(5), 'MM/DD/YYYY').format(
                i18n.language === 'en' ? 'MM/DD/YYYY' : 'DD/MM/YYYY',
              )}
            </Offer.ExpDate>
          </Offer.ButtonWrapper>
        </Offer.Container>
        <Offer.SxNonVisible>
          <Offer.AdditionalInfo>
            <span>{discount_print}</span>
          </Offer.AdditionalInfo>
        </Offer.SxNonVisible>
      </Offer.Wrapper>
    </>
  );
};

Offer.Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  background: #fff;
  border: 1px solid #dadde2;
  padding: 30px 20px 10px 20px;
  margin-top: 25px;

  ${breakpoint('sx')`
    width: calc(100% - 42px);
    flex-flow: row nowrap;
  `}

  ${breakpoint('md')`
    width: calc(100% - 75px);
    padding: 30px 30px 20px 40px;
  `}
`;

Offer.NewDeal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px 6px 4px 6px;
  border-radius: 3px;
  color: #00cbe9;
  font-size: 13px;
  font-weight: 400;
  background-color: ghostwhite;
`;

Offer.Discount = styled.div`
  width: 110px;
  display: flex;
  flex-flow: column nowrap;
  color: ${props => props.color || '#d0c000'};

  ${breakpoint('sx')`
    flex-flow: row nowrap;
  `}

  ${breakpoint('md')`
    flex-flow: column nowrap;

    > span:last-child {
      letter-spacing: 4px;
    }
  `}

  > span {
    font-weight: bold;
    line-height: 46px;
    font-size: 39px;
    margin: 0 auto;
  }
`;

Offer.Image = styled.div`
  width: 110px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  img {
    width: 90px;
    height: auto;
  }
`;

Offer.SxVisible = styled.div`
  display: none;

  ${breakpoint('sx')`
    display: flex;
  `}
`;

Offer.SxNonVisible = styled.div`
  display: flex;

  ${breakpoint('sx')`
    display: none;
  `}
`;

Offer.Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  padding-right: 20px;

  ${breakpoint('sx')`
    width: calc(50% - 10px);
    align-items: flex-start;
    flex-flow: column nowrap;
    margin: 0 30px 0 0;
  `}

  ${breakpoint('md')`
    width: 100%;
    flex-flow: row nowrap;
    margin: 0;
  `}
`;

Offer.DescriptionWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-left: 20px;

  ${breakpoint('sx')`
    margin-left: 5px;
  `}

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

  ${breakpoint('sx')`
    margin: 10px 0;
  `}

  ${breakpoint('md')`
    margin: 0;
    font-size: 18px;
    max-width: 400px;
  `}
`;

Offer.AdditionalInfo = styled.div`
  min-width: 120px;
  bottom: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  font-weight: bold;
  line-height: 40px;
  font-size: 13px;
  color: #62707b;

  ${breakpoint('sx')`
    text-align: left;
    width: calc(100% - 40px);
  `}

  ${breakpoint('md')`
    position: absolute;
    line-height: 23px;
    margin: 15px 0 0 0;
    position: static;
    width: 100%;

    > span {
      width: 100%;
    }
  `}
`;

Offer.Container = styled.div`
  display: flex;
  justify-content: center;

  ${breakpoint('sx')`
    width: calc(50% - 10px);
    justify-content: flex-end;
    margin-left: 10px;
  `}

  ${breakpoint('md')`
    width: 30%;
  `}
`;

Offer.ButtonWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  min-width: 100%;
  margin-top: 10px;

  ${breakpoint('sx')`
    margin-top: 0;
  `}

  ${breakpoint('sm')`
    width: 160px;
  `}

  ${breakpoint('lg')`
    width: 150px;
  `}

  ${breakpoint('xs')`
    width: 190px;
  `}
`;

Offer.ViewDealButton = styled.a`
  width: 100%;
  height: 45px;
  padding: 15px;
  background: #00cbe9;
  border-radius: 4px;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;
`;

Offer.ExpDate = styled.p`
  font-weight: bold;
  line-height: 23px;
  font-size: 13px;
  color: #c2c2c2;
  margin-top: 10px;
  text-align: center;

  ${breakpoint('sx')`
    margin-top: 15px;
  `}
`;

Offer.RevealCouponButton = styled.div`
  width: 100%;
  padding: 15px;
  background: #00cbe9;
  border-radius: 4px;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;
`;

export default withRouter(withTranslation()(Offer));
