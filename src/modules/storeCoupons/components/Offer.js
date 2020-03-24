// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';

import CouponCode from './CouponCode';
import placeholder from '@modules/coupons/assets/image-placeholder.png';
import { currencyLocaleFormat } from '@modules/localization/i18n';

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
  discount_type: number,
  discount_amt: string,
  offer_name: string,
  offer_success_print: string,
  store_logo: string,
  store_name: string,
  isThisStore: boolean,
  store_page_link: string,
  isAuthenticated: boolean,
  isExtensionInstalled: boolean,
  cashback_ok: number,
  numeric_type: number,
  country: string,
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
  isAuthenticated,
  isExtensionInstalled,
  cashback_ok,
  numeric_type,
  country,
}: OfferProps) => {
  const [randomColor] = useState(Math.floor(Math.random() * 7));
  const discountAmount = cashback_ok
    ? numeric_type === 1
      ? currencyLocaleFormat(discount_print, country || i18n.language)
      : `${parseFloat(discount_print).toFixed(1)}%`
    : '';
  const cashBackMessageKey = cashback_ok
    ? 'coupons.plusCashBack'
    : 'global.instantSaving';
  return (
    <>
      <Offer.Wrapper>
        {offer_success_print && (
          <Offer.NewDeal>
            {offer_success_print.replace(
              'New Coupon',
              t('coupons.shopBy.newCoupon'),
            )}
          </Offer.NewDeal>
        )}
        <Offer.Content>
          {!isThisStore || parseFloat(discount_amt) === 0 ? (
            <Offer.Image>
              <img
                src={store_logo || placeholder}
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
                {discount_type === 1 &&
                  `${currencyLocaleFormat(
                    discount_amt,
                    country || i18n.language,
                  )}`}
                {discount_type === 2 && `${parseFloat(discount_amt)}%`}
              </span>

              {i18n.language === 'jp' ? (
                <Offer.jpSpan>{t('coupons.off')}</Offer.jpSpan>
              ) : i18n.language === 'fr' ? (
                <Offer.frSpan>{t('coupons.off')}</Offer.frSpan>
              ) : (
                <span>{t('coupons.off')}</span>
              )}
            </Offer.Discount>
          )}
          <Offer.DescriptionWrapper>
            <Offer.Description>{offer_name}</Offer.Description>
            <Offer.SxVisible>
              <Offer.AdditionalInfo>
                <span>
                  {t(cashBackMessageKey, { discount: discountAmount })}
                </span>
              </Offer.AdditionalInfo>
            </Offer.SxVisible>
          </Offer.DescriptionWrapper>
        </Offer.Content>
        <Offer.Container>
          <Offer.ButtonWrapper>
            <CouponCode
              t={t}
              i18n={i18n}
              code={coupon_code}
              link={offer_link}
              store={store_name}
              isAuthenticated={isAuthenticated}
              isExtensionInstalled={isExtensionInstalled}
              logo={store_logo || placeholder}
              isVisit={false}
            />
            <Offer.ExpDate>
              {show_exp_date === 'No Expiration!'
                ? t('global.invalidDate')
                : 'Exp. ' +
                  moment(show_exp_date.slice(5), 'MM/DD/YYYY').format(
                    i18n.language === 'en' ? 'MM/DD/YYYY' : 'DD/MM/YYYY',
                  )}
            </Offer.ExpDate>
          </Offer.ButtonWrapper>
        </Offer.Container>
        <Offer.SxNonVisible>
          <Offer.AdditionalInfo>
            <span>{t(cashBackMessageKey, { discount: discountAmount })}</span>
          </Offer.AdditionalInfo>
        </Offer.SxNonVisible>
      </Offer.Wrapper>
    </>
  );
};

Offer.jpSpan = styled.span`
  font-weight: bold;
  line-height: 46px;
  font-size: 35px !important;
  margin: 0 auto;
`;
Offer.frSpan = styled.span`
  font-size: 33px !important;
  font-weight: bold;
  line-height: 46px;
  margin: 0 auto;
`;
Offer.Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  background: #fff;
  border: 1px solid #dadde2;
  padding: 30px 20px 10px 20px;
  margin-top: 15px;

  ${breakpoint('sx')`
    width: calc(100% - 42px);
    align-items: center;
  `}

  ${breakpoint('md')`
    flex-flow: row nowrap;
    width: calc(100% - 75px);
    padding: 30px 30px 20px 40px;
    flex-flow: row nowrap;
    margin-top: 25px;
    justify-content: space-around;
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
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
  color: ${props => props.color || '#d0c000'};

  ${breakpoint('xs')`
    flex-flow: row nowrap;
    width: auto;
      > span:last-child {
        margin-left: 10px;
      }
  `}

  ${breakpoint('sx')`
    flex-flow: row nowrap;
    width: auto;

    > span:last-child {
      margin-left: 10px;
    }
  `}

  ${breakpoint('md')`
    flex-flow: column nowrap;
    width: 200px;

    > span:last-child {
      margin-left: auto;
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
  width: 300px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  img {
    width: 90px;
    height: auto;
  }
  ${breakpoint('md')`
    width: 200px;
  `}
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
  width: 100%;
  align-items: center;
  flex-flow: column nowrap;
  margin: 0 auto;

  ${breakpoint('md')`
    width: 100%;
    flex-flow: row nowrap;
    margin: 0;
    align-items: flex-start;
  `}
`;

Offer.DescriptionWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-left: 20px;
  align-items: center;

  ${breakpoint('sx')`
    margin-left: 5px;
  `}

  ${breakpoint('md')`
    align-items: justify-content;
    margin: 10px 10px 0 2%;
  `}

  @media (max-width: 375px) {
    margin: 0;
  }
`;

Offer.Description = styled.div`
  line-height: 19px;
  font-size: 15px;
  letter-spacing: 0.375px;
  font-weight: bold;
  color: #374b5a;

  ${breakpoint('sx')`
    margin: 10px 0;
    text-align: center;
  `}

  ${breakpoint('md')`
    margin: 0;
    font-size: 18px;
    max-width: 400px;
  `}

  ${breakpoint('xs')`
    margin: 10px 0;
    text-align: center;
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
  width: auto;

  ${breakpoint('md')`
    width: 30%;
    justify-content: flex-end;
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
    margin-top: 10px;
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

const mapStateToProps = ({
  app: { isExtensionInstalled },
  auth: { isAuthenticated },
}) => ({
  isAuthenticated,
  isExtensionInstalled,
});

export default connect(
  mapStateToProps,
  null,
)(withRouter(withTranslation()(Offer)));
