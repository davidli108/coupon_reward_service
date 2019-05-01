//@flow
import React, { useState } from 'react';
import Offer from './Offer';
import type { OffersProps } from '../models/StorePage';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import OffersLoader from '../components/loaders/OffersLoader';

const Offers = ({
  t,
  offers,
  offersCount,
  fetchStoreCoupons,
  storeName,
  store,
}: OffersProps) => {
  const [pages, setPages] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);

  const onLoadMore = () => {
    if (isLoaded) {
      setIsLoaded(false);
      fetchStoreCoupons(storeName, pages + 20).then(() => {
        setIsLoaded(true);
        setPages(pages + 20);
      });
    }
  };

  return (
    <>
      {offersCount === 0 && (
        <Offers.NoData>
          No Coupons or Deals Found for {store.store_name}. Take a look at our
          top offers and deals below.
        </Offers.NoData>
      )}
      {offers.map(x => (
        <Offer
          key={`offer_${x.offer_id}`}
          {...x}
          isThisStore={offersCount !== 0}
        />
      ))}
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

Offers.LoadMoreDeals = styled.button`
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

export default withTranslation()(Offers);
