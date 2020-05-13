// @flow
import React, { useState } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import Offer from './Offer';
import type { OffersProps } from '../models/StorePage';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import OffersLoader from '../components/loaders/OffersLoader';
import dropDownArrow from '../assets/category_dropdown_arrow.svg';
import dropDownArrowUp from '../assets/category_dropdown_arrow_up.svg';
import CashbackContents from './CashbackContents';
import { getSortedCashbackRate } from './constant';

const Offers = ({
  t,
  match,
  offers,
  offersCount,
  fetchStoreCoupons,
  storeName,
  store,
  cashbackRates,
}: OffersProps) => {
  const [pages, setPages] = useState(0);
  const [cashBackCollapse, setCashBackCollapse] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  const onLoadMore = () => {
    if (isLoaded) {
      setIsLoaded(false);
      fetchStoreCoupons(storeName, pages + 20).then(() => {
        setIsLoaded(true);
        setPages(pages + 20);
      });
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      pageCategory: 'Store Pages',
      event: 'load_more_deals',
      label: match.url,
    });
  };

  const togglePanel = () => {
    setCashBackCollapse(!cashBackCollapse);
  };

  return (
    <>
      {cashbackRates !== [] ? (
        <>
          <Offers.CashBackCatDiv isCollapse={cashBackCollapse}>
            <div
              onClick={() => {
                togglePanel();
              }}
            >
              <h2>
                {t('storeCoupons.cashBackCategories')}
                <Offers.CollapseArrow
                  src={cashBackCollapse ? dropDownArrowUp : dropDownArrow}
                />
              </h2>
            </div>
            {cashBackCollapse ? (
              <Offers.CashBackCatListDiv>
                <Offers.CashBackUl>
                  {getSortedCashbackRate(cashbackRates, false).map(v => (
                    <Offers.CashBackLi>
                      <a href={v.int_url}>{v.category_name}</a>
                      <span>
                        <a href={v.int_url}>{v.cashback_rate}</a>
                      </span>
                    </Offers.CashBackLi>
                  ))}
                </Offers.CashBackUl>
              </Offers.CashBackCatListDiv>
            ) : null}
          </Offers.CashBackCatDiv>
          <CashbackContents
            t={t}
            wZero={false}
            store={store}
            cashbackRates={cashbackRates}
          />
        </>
      ) : null}

      {offersCount === 0 && (
        <Offers.NoData>
          {t('storeCoupons.noCouponsAndDeal', { storeName: store.store_name })}
        </Offers.NoData>
      )}
      {offers.map(x => (
        <Offer
          key={`offer_${x.offer_id}`}
          {...x}
          isThisStore={offersCount !== 0}
        />
      ))}
      {cashbackRates.length !== 0 && (
        <CashbackContents
          t={t}
          wZero={true}
          store={store}
          cashbackRates={cashbackRates}
        />
      )}
      {!isLoaded &&
        Array.apply(null, Array(3)).map((_, ind) => <OffersLoader key={ind} />)}
      {offersCount > offers.length && isLoaded && (
        <Offers.LoadMoreDeals onClick={onLoadMore}>
          {t('global.loadMoreDeals')}
        </Offers.LoadMoreDeals>
      )}
    </>
  );
};

Offers.LoadMoreDeals = styled.p`
  z-index: 2;
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.45px;
  color: ${props => props.theme.colors.whiteDark};
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  transition: color 205ms linear;

  p {
    line-height: 80px;
  }

  &:hover {
    color: ${props => props.theme.colors.grayDark};
    text-decoration: underline;
  }
`;

Offers.NoData = styled.p`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  line-height: 21px;
  font-size: 18px;
  letter-spacing: 0.45px;
  color: #adb8c0;

  ${breakpoint('lg')`
    width: 95%;
  `}
`;

Offers.CashBackCatListDiv = styled.div`
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

Offers.CashBackCatDiv = styled.div`
  @media (min-width: 992px) {
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

Offers.CashBackLi = styled.li`
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

Offers.CashBackUl = styled.ul`
  @media (max-width: 768px) {
    display: block;
  }

  width: 100%;
  list-style: none;
  display: none;
`;

Offers.CollapseArrow = styled.img`
  float: right;
  padding-top: 10px;
`;

export default compose(withTranslation(), withRouter)(Offers);
