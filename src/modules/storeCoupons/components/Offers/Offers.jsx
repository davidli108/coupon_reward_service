// @flow
import React, { useState, useEffect } from 'react';

import Offer from '../Offer';
import type { OffersProps } from '../../models/StorePage';
import OffersLoader from '../../components/loaders/OffersLoader';
import { OfferTypes } from '../OffersMenu';
import { fireGTMEvent } from '@config/Utils';

const Offers = ({
  t,
  offers,
  offersCount,
  randomOffers = [],
  fetchStoreCoupons,
  storeName,
  store,
  cashbackRates,
  selectedCategories = [],
  selectedOfferType = '',
  selectedSort = null,
  isOffersLoading = false,
  openTerms,
}: OffersProps) => {
  const [pages, setPages] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);
  const fetchOffersType = [OfferTypes.COUPONS, OfferTypes.DEALS].includes(
    selectedOfferType,
  )
    ? selectedOfferType
    : undefined;

  useEffect(() => {
    setPages(0);
  }, [selectedSort, storeName, selectedCategories, fetchOffersType]);

  const hideOffers = selectedOfferType === OfferTypes.OVERVIEW;

  if (hideOffers) {
    return null;
  }

  const onLoadMore = () => {
    if (isLoaded) {
      setIsLoaded(false);
      fetchStoreCoupons(
        storeName,
        pages + 20,
        selectedSort,
        selectedCategories,
        fetchOffersType,
      ).then(() => {
        setIsLoaded(true);
        setPages(pages + 20);
      });
    }

    fireGTMEvent({
      pageCategory: 'Store Pages',
      event: 'load_more_deals',
      label: document.location.href,
    });
  };

  const renderNoData = () => {
    switch (selectedOfferType) {
      case OfferTypes.COUPONS:
        return t('storeCoupons.noCoupons', {
          storeName: store.store_name,
        });
      case OfferTypes.DEALS:
        return t('storeCoupons.noDeals', {
          storeName: store.store_name,
        });
      case OfferTypes.CASHBACK:
        return t('storeCoupons.noCashback', {
          storeName: store.store_name,
        });
      default:
        return t('storeCoupons.noCouponsAndDeal', {
          storeName: store.store_name,
        });
    }
  };

  const showOnlyCashBackRate = selectedOfferType === OfferTypes.CASHBACK;
  const hideCashBackRate = [
    OfferTypes.DEALS,
    OfferTypes.COUPONS,
    OfferTypes.OVERVIEW,
  ].includes(selectedOfferType);

  const CashBackRatesView = ({
    weight,
    primary,
  }: {
    weight: number,
    primary?: boolean,
  }) =>
    cashbackRates
      .filter(cashbackRate => (primary ? cashbackRate.weight >= weight : cashbackRate.weight < weight))
      .map((cashbackRate, key) => (
        <Offer
          isCashbackRate
          openTerms={openTerms}
          key={`cashback_${cashbackRate.weight}-${key}`}
          offer_type={cashbackRate.cashback_rate}
          offer_name={cashbackRate.category_name}
          offer_description={cashbackRate.category_description}
          offer_link={cashbackRate.int_url}
        />
      ));

  if (showOnlyCashBackRate) {
    return cashbackRates.length === 0 && showOnlyCashBackRate ? (
      <Offers.NoData>{renderNoData()}</Offers.NoData>
    ) : (
      <>
        <CashBackRatesView primary weight={5}/>
        <CashBackRatesView weight={5} />
      </>
    );
  }

  const Loading: any = () =>
    Array.apply(null, Array(3)).map((_, ind) => <OffersLoader key={ind} />);

  if (isOffersLoading) {
    return <Loading />;
  }

  const showRandomStoreDeals = () => {
    return (
      offersCount === 0 && (
        !cashbackRates.length ||
        selectedOfferType === OfferTypes.COUPONS ||
        selectedOfferType === OfferTypes.DEALS
      )
    );
  };

  return (
    <>
      {showRandomStoreDeals() && (
        <Offers.NoData>{renderNoData()}</Offers.NoData>
      )}
      {!hideCashBackRate && <CashBackRatesView primary weight={5}/>}
      {offers.map(x => (
        <Offer key={`offer_${x.offer_id}`} {...x} />
      ))}
      {!isLoaded && <Loading />}
      {offersCount > offers.length && isLoaded && (
        <Offers.LoadMoreDeals onClick={onLoadMore}>
          {t('global.loadMoreDeals')}
        </Offers.LoadMoreDeals>
      )}
      {!hideCashBackRate && <CashBackRatesView weight={5} />}
      {showRandomStoreDeals() && randomOffers && randomOffers.map(x => (
          <Offer key={`offer_${x.offer_id}`} randomOffer {...x} />
        ))}
    </>
  );
};

export default Offers;
