// @flow
import * as React from 'react';
import styled from 'styled-components';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import type { CashBackContentProps } from '../models/StorePage';
import moment from 'moment';

const CashbackContent = ({ t, item, store }: CashBackContentProps) => (
  <>
    <CashbackContent.CashBackRectangleContainer>
      <CashbackContent.CashbackImgDiv>
        <CashbackContent.CashbackImg
          src={item.image ? `${item.image}` : placeholder}
          onError={e => {
            e.target.onerror = null;
            e.target.src = placeholder;
          }}
          alt={`${store.store_name || ''} Coupon Codes ${moment().format(
            'MMMM',
          )} | ${moment().format('YYYY')}`}
        />
      </CashbackContent.CashbackImgDiv>
      <CashbackContent.CashbackTextDiv>
        <CashbackContent.CategoryName>
          <h2>{item.category_name}</h2>
          <CashbackContent.ShopNowTop>
            <CashbackContent.ShopNowSpan>
              <CashbackContent.ShopNow href={item.int_url} target={'_blank'}>
                {t('cashbackStores.shopBy.shopNow')}
              </CashbackContent.ShopNow>
            </CashbackContent.ShopNowSpan>
          </CashbackContent.ShopNowTop>
        </CashbackContent.CategoryName>
        <h3>{t('global.amCashBack', { discount: item.cashback_rate })}</h3>
        <p>{item.category_description}</p>
        <CashbackContent.ShopNowBottom>
          <CashbackContent.ShopNowSpan>
            <CashbackContent.ShopNow href={item.int_url}>
              {t('cashbackStores.shopBy.shopNow')}
            </CashbackContent.ShopNow>
          </CashbackContent.ShopNowSpan>
        </CashbackContent.ShopNowBottom>
      </CashbackContent.CashbackTextDiv>
    </CashbackContent.CashBackRectangleContainer>
  </>
);

CashbackContent.CashBackRectangleContainer = styled.div`
  height: auto;
  padding-bottom: 20px;
  margin-top: 30px;
  background: #fff;
  border: 1px solid #dadde2;
  border-radius: 5px;
  display: inline-flex;
  width: 100%;

  @media (max-width: 1024px) {
    padding-bottom: 0;
  }

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

CashbackContent.CashbackImgDiv = styled.div`
  margin: 0 auto;
  float: left;
`;

CashbackContent.ShopNowSpan = styled.span`
  margin-bottom: -22px;
  margin-top: 16px;

  @media (max-width: 992px) {
    a {
      margin-right: 10px;
    }
  }

  @media (min-width: 768px) {
    padding: 13px;
    font-size: 17px;
  }
`;

CashbackContent.CategoryName = styled.div`
  width: 550px;
  justify-content: space-between;
  display: inline-flex;
  margin-top: 12px;

  h2 {
    width: 800px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    h2 {
      width: 300px;
    }
  }

  @media (max-width: 425px) {
    width: 228px;
  }

  @media (max-width: 375px) {
    width: 185px;
  }

  @media (max-width: 320px) {
    width: 262px;
  }
`;

CashbackContent.CashbackTextDiv = styled.div`
  @media (max-width: 1024px) {
    width: 372px;
    margin: 0 15px 15px 20px;

    p {
      font-size: 12px;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 768px) {
    width: 467px;
    margin: 0 15px 15px 20px;

    p {
      font-size: 12px;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 425px) {
    width: 228px;
    margin: 0 15px 15px 10px;

    p {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 375px) {
    width: 182px;
    margin: 0 15px 15px 10px;

    p {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 320px) {
    width: 262px;
    margin: -15px 15px 15px 15px;

    p {
      margin-bottom: 15px;
    }
  }

  float: right;
  margin: 0px 25px;
  font-style: normal;

  h2 {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.5px;
    color: #374b5a;
    margin: 16px 0;
  }

  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.5px;
    color: #00c8e5;
    margin-bottom: 13px;
    margin-top: -7px;
  }

  p {
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: 0.3px;
    color: #62707b;
  }
`;

CashbackContent.CashbackImg = styled.img`
  width: 230px;
  height: 200px;
  object-fit: contain;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 425px) {
    width: 115px;
    height: 100px;
    border-radius: 5px;
    margin-top: 15px;
    margin-left: 15px;
  }
`;

CashbackContent.ShopNow = styled.a`
  @media (min-width: 1024px) {
    margin-top: 20px;
    font-size: 16px;
    width: 174px;
  }

  @media (max-width: 425px) {
    padding: 10px 25px;
    font-size: 17px;
    float: left;
  }

  @media (max-width: 320px) {
    padding: 13px 40px;
    width: 100%;
  }

  text-decoration: none;
  box-sizing: border-box;
  letter-spacing: 0.51px;
  color: ${props => props.theme.colors.greenLight};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding: 13px 45px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.greenMain};
  box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.5),
    inset 0px -1px 5px rgba(0, 0, 0, 0.0584805),
    inset 0px -2px 0px rgba(255, 255, 255, 0.213315);
  float: right;
`;

CashbackContent.ShopNowTop = styled.div`
  width: 100%;

  @media (max-width: 425px) {
    display: none;
  }

  display: block;
`;

CashbackContent.ShopNowBottom = styled.div`
  margin-top: 10px;

  @media (max-width: 425px) {
    display: block;
  }

  display: none;
`;

CashbackContent.CashBackCatListDiv = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }

  box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  background: #fff;
  border: 1px solid #dadde2;
  box-sizing: border-box;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 20px;
  margin-left: -26px;
  width: 90%;
  border-top: none;
  max-height: 450px;
  overflow: auto;
`;

CashbackContent.CashBackCatDiv = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }

  box-shadow: ${({ isCollapse }) =>
    isCollapse ? `0px 12px 22px rgba(0, 0, 0, 0.2)` : 'none'};
  width: 100%;
  background: #fff;
  border: 1px solid #dadde2;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px 25px;
  margin-top: 30px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.45px;
    color: #899197;
  }
`;

CashbackContent.CashBackLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 32px;
    text-decoration-line: underline;
    color: #a7a7a7;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 32px;
    text-align: right;
    text-decoration-line: underline;
    color: #374b5a;
  }
`;

CashbackContent.CashBackUl = styled.ul`
  @media (max-width: 768px) {
    display: block;
  }

  width: 100%;
  list-style: none;
  display: none;
`;

CashbackContent.CollapseArrow = styled.img`
  float: right;
  padding-top: 10px;
`;

export default CashbackContent;
