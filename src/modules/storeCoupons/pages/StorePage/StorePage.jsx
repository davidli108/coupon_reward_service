// @flow
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import xor from 'lodash/xor';
import get from 'lodash/get';
import { MdClose } from 'react-icons/md';
import { Organization } from 'schema-dts';
import { helmetJsonLdProp } from 'react-schemaorg';

import BrandImageLoader from '../../components/loaders/BrandImageLoader';
import BrandXlLoader from '../../components/loaders/BrandXlLoader';
import BrandHeader from '../../components/BrandHeader';
import BrandContent from '../../components/BrandContent';
import CouponCode from '../../components/CouponCode/CouponCode';
import AppConfig from '@config/AppConfig';
import Offers from '../../components/Offers';
import FAQs from '../../components/FAQs';
import AdditionalInfo from '../../components/AdditionalInfo';
import type { StorePageProps } from '../../models/StorePage';
import placeholder from '@modules/coupons/assets/image-placeholder.png';
import AdditionalInfoLoader from '../../components/loaders/AdditionalInfoLoader';
import OffersLoader from '../../components/loaders/OffersLoader';
import OffersMenu, { OfferTypes } from '../../components/OffersMenu';
import AddSaving from '../../components/AddSaving';
import CategoryFilterDesktop from '../../components/CategoryFilterDesktop';
import CategoryFilterMobile from '../../components/CategoryFilterMobile';
import OurCouponExperts from '../../components/OurCouponExperts';
import {
  currencyLocaleFormat,
  getCurrencySymbol,
} from '@modules/localization/i18n';
import { month, year, metaTags, openGraph } from '@config/SeoTags';
import {
  isAmazonStore,
  fireGTMEvent,
  getFilePathExtension,
} from '@config/Utils';
import ScrollToTopArrow from '@components/ScrollToTopArrow';
import DropdownFilter from '@components/DropdownFilter';
import PriceTrackerProduct from '../../../pricetracker/components/PriceTrackerProduct/PriceTrackerProduct';
import TermsModal from '@components/TermsModal';

const StorePage = ({
  t = (value: string, options: Object) => '',
  i18n,
  store,
  offers,
  fetchStoreCoupons,
  match,
  fetchStoreCouponsByPagination,
  offersCount,
  isExtensionInstalled,
  cashbackRates,
  terms,
  priceTrackerProduct,
}: StorePageProps) => {
  const codesSortValues = [
    {
      value: 'trending',
      label: t('storeCoupons.codesFilter.trending'),
    },
    {
      value: 'expiration',
      label: t('storeCoupons.codesFilter.expiration'),
    },
    {
      value: 'recent',
      label: t('storeCoupons.codesFilter.recent'),
    },
  ];

  const categories = store.categories
    ? store.categories.map(category => ({
        label: category.name,
        value: category.cat_id,
        count: category.offers_count,
      }))
    : [];

  const cashBackCategories = cashbackRates
    ? cashbackRates.map(cashbackRate => ({
        label: cashbackRate.category_name,
        amount: cashbackRate.cashback_rate,
        link: cashbackRate.int_url,
      }))
    : [];

  const [storeName, setStoreName] = useState(match.params.name);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOffersLoading, setIsOffersLoading] = useState(false);
  const [isAmazon, setIsAmazon] = useState(false);
  const [selectedOfferType, setSelectedOfferType] = useState(OfferTypes.BROWSE);
  const [nrOfOffers, setNrOfOffers] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMobileCategories, setSelectedMobileCategories] = useState([]);
  const [isMobileFiltersVisible, setIsMobileFiltersVisible] = useState(false);
  const [sort, setSort] = useState(codesSortValues[0]);
  const [isTermsVisible, setIsTermsVisible] = useState(false);

  const showSaving = false;
  const discount = store.store_cashback_ok
    ? store.store_numeric_type === 1
      ? store.store_discount
      : `${store.store_discount.replace('%', '')}%`
    : '';

  useEffect(() => {
    if (isAmazonStore(store.store_name)) {
      setIsAmazon(true);
    }
  }, [store]);

  const VisitStore = () => (
    <CouponCode
      t={t}
      i18n={i18n}
      link={store.store_info_link}
      store={store.store_name}
      isExtensionInstalled={isExtensionInstalled || isAmazon}
      logo={
        store.store_logo_image_path
          ? `${AppConfig.cloudUrl}${store.store_logo_image_path}`
          : placeholder
      }
      isVisit={true}
    />
  );

  const triggerGTMEvent = () => {
    fireGTMEvent({
      pageCategory: 'Store Pages',
      event: 'visit_store',
      label: match.url,
    });
  };

  useEffect(() => {
    if (isAmazonStore(storeName)) {
      setIsAmazon(true);
    } else {
      setIsAmazon(false);
    }
  }, [storeName]);

  useEffect(() => {
    if (store && store.store_name) {
      if (store.store_name !== storeName) {
        setStoreName(store.store_name);
      }

      if (store.offers_count) {
        setNrOfOffers(`${store.offers_count} `);
      }
    }
  }, [store]);

  useEffect(() => {
    const { name } = match.params;

    if (name && name !== storeName) {
      setStoreName(name);
      setIsLoaded(false);
      setSelectedCategories([]);
      setSelectedMobileCategories([]);
      setSelectedOfferType(OfferTypes.BROWSE);
      // $FlowFixMe
      fetchStoreCoupons(
        name,
        OfferTypes.BROWSE,
        undefined,
        match.params.token,
      ).then(() => setIsLoaded(true));
    }

    if (name) {
      fireGTMEvent({
        pageCategory: 'Store Pages',
        event: isExtensionInstalled
          ? 'store_page_load_extension_installed'
          : 'store_page_load_no_extension',
        label: document.location.href,
      });
    }
  }, [match]);

  const isDynamicallyLoaded = [
    OfferTypes.COUPONS,
    OfferTypes.DEALS,
    OfferTypes.BROWSE,
  ].includes(selectedOfferType);

  const handleOfferMenuChange = key => {
    setSelectedOfferType(key);
    setSelectedCategories([]);
    setSelectedMobileCategories([]);
  };

  const fetchCoupons = () => {
    const { name } = match.params;
    setIsOffersLoading(true);
    // $FlowFixMe
    fetchStoreCoupons(
      name,
      sort,
      selectedCategories,
      selectedOfferType,
      match.params.token,
    ).then(() => {
      setIsOffersLoading(false);
      setIsLoaded(true);
    });
  };

  const handleOnCategoryFilterDesktopChange = value => {
    const categories = xor(selectedCategories, [value]);
    setSelectedCategories(categories);
    setSelectedMobileCategories(categories);
  };

  const toggleSelectCategory = value => {
    setSelectedMobileCategories(xor(selectedMobileCategories, [value]));
  };

  const handleApplyMobileFilters = () => {
    setSelectedCategories(selectedMobileCategories);
    setIsMobileFiltersVisible(false);
  };

  const handleSortChange = selectedSort => {
    setSort(selectedSort);
  };

  useEffect(() => {
    if (isDynamicallyLoaded) {
      fetchCoupons();
    }
  }, [sort, selectedCategories, selectedOfferType]);

  const averageSavings = currencyLocaleFormat(
    store.store_average_savings || '',
  );

  const totalSavings = currencyLocaleFormat(store.store_total_savings || '');

  const counterList = [
    {
      value: store.store_total_offers_count,
      label: t('storeCoupons.counterList.totalCoupons'),
    },
    {
      value: averageSavings,
      label: t('storeCoupons.counterList.averageSavings'),
    },
    {
      value: totalSavings,
      label: t('storeCoupons.counterList.totalSavings'),
    },
    {
      value: store.store_total_favorites,
      label: t('storeCoupons.counterList.totalStoreSaves'),
    },
    {
      value: store.store_total_uses,
      label: t('storeCoupons.counterList.totalCouponsUses'),
    },
  ];

  const couponExperts = [
    {
      label: t('storeCoupons.ourCouponExperts.addedToday'),
      value: get(store, 'offer_updates.coupons_today', 0),
    },
    {
      label: t('storeCoupons.ourCouponExperts.addedYesterday'),
      value: get(store, 'offer_updates.coupons_yesterday', 0),
    },
    {
      label: t('storeCoupons.ourCouponExperts.addedThisWeek'),
      value: get(store, 'offer_updates.coupons_week', 0),
    },
    {
      label: t('storeCoupons.ourCouponExperts.addedThisMonth'),
      value: get(store, 'offer_updates.coupons_month', 0),
    },
  ];

  const toggleMobileFilters = () => {
    setIsMobileFiltersVisible(!isMobileFiltersVisible);
  };

  const getDiscount = (offer) => {
    if (offer.discount_type === 1) {
      return currencyLocaleFormat(offer.discount_amt, offer.country);
    }

    if (offer.discount_type === 2) {
      return `${parseFloat(offer.discount_amt)}%`;
    }

    return '';
  };

  const getTitle = offer => {
    if (
      offer.discount_amt &&
      +offer.discount_amt === 0 &&
      offer.offer_type === 'free-shipping'
    ) {
      return t('coupons.freeShipping');
    }

    if (offer.coupon_code) {
      return `${t('coupons.type.coupon')} ${getDiscount(offer)} ${t(
        'coupons.cashBack',
      )}`;
    }

    const offerType = offer.offer_type
      ? offer.offer_type.replace(/-/g, ' ')
      : '';
    const discount = getDiscount(offer) || '';

    return `${offerType} ${
      discount !== '0%' ? `${discount} ${t('coupons.cashBack')}` : ''
    }`;
  };

  const getOffersSchema = () => {
    const offersSchema = offers.map(offer => ({
      '@type': 'Offer',
      '@id': offer.offer_id,
      name: offer.offer_type === 'image' ? 'Free Gift' : getTitle(offer),
      description: offer.offer_name.replace(/\$/g, getCurrencySymbol() || '$'),
      priceCurrency: getCurrencySymbol(),
      priceValidUntil: offer.end_date,
    }));

    return [
      helmetJsonLdProp<Organization>({
        '@context': 'https://schema.org',
        '@type': 'Store',
        id: AppConfig.apiUrl + document.location.pathname,
        name: store.store_name,
        description: t('description.storeCoupons', {
          storeName: store.store_name,
          nrOfOffers,
        }),
        url: document.location.href,
        image: `${AppConfig.apiUrl}/${store.store_logo_image_path}`,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          numberOfItems: store.offers_count,
          itemListElement: [...offersSchema],
        },
      }),
    ];
  };

  const openTerms = () => {
    setIsTermsVisible(true);
  };

  const closeTerms = () => {
    setIsTermsVisible(false);
  };

  const OffersOrFAQsView = () => {
    if (!isLoaded) {
      return (
        <>
          {
            Array.apply(null, Array(3)).map((_, ind) => (
              <OffersLoader key={ind} />
            ))
          }
          <AdditionalInfoLoader />
        </>
      )
    }

    const isFAQs = selectedOfferType === OfferTypes.FAQS;

    return (
      <>
        {isFAQs ? (
          <FAQs store={store} />
        ) : (
          <>
            <Offers
              openTerms={openTerms}
              offers={offers}
              cashbackRates={cashbackRates}
              offersCount={offersCount}
              randomOffers={store.random_offers}
              fetchStoreCoupons={fetchStoreCouponsByPagination}
              selectedSort={sort}
              storeName={match.params.name}
              match={match}
              store={store}
              isOffersLoading={isOffersLoading}
              selectedCategories={selectedCategories}
              selectedOfferType={selectedOfferType}
            />
            <StorePage.AdditionalInfoWrapper>
              <AdditionalInfo
                cashbackRates={cashbackRates}
                terms={terms}
              />
            </StorePage.AdditionalInfoWrapper>
          </>
        )}
      </>
    )
  }

  return (
    <StorePage.Container>
      <ScrollToTopArrow />
      <StorePage.Wrapper>
        <Helmet
          title={t('titles.storeCoupons', { storeName, month, year })}
          meta={[
            ...metaTags({
              description: t('description.storeCoupons', {
                storeName,
                nrOfOffers,
              }),
              keywords: store.store_name,
            }),
            ...openGraph({
              title: t('titles.storeCoupons', { storeName, month, year }),
              description: t('description.storeCoupons', {
                storeName,
                nrOfOffers,
              }),
              image: `${AppConfig.apiUrl}${store.store_logo_image_path}`,
              imageAlt: `${store.store_name} logo`,
              imageType: getFilePathExtension(store.store_logo_image_path),
            }),
          ]}
          script={getOffersSchema()}
        />

        <>
          <StorePage.MainWrapper>
            {isLoaded ? (
              <StorePage.LeftContent>
                <StorePage.Brand>
                  <StorePage.BrandLogoLink
                    href={store.store_info_link}
                    target="_blank"
                  >
                    <StorePage.BrandLogo
                      src={
                        store.store_logo_image_path
                          ? `${AppConfig.cloudUrl}${store.store_logo_image_path}`
                          : placeholder
                      }
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = placeholder;
                      }}
                      alt={`${store.store_name ||
                        ''} Coupon Codes ${moment().format(
                        'MMMM',
                      )} | ${moment().format('YYYY')}`}
                    />
                  </StorePage.BrandLogoLink>

                  <StorePage.BrandInfo>
                    <StorePage.BrandCashBackActivateButton
                      onClick={triggerGTMEvent}
                    >
                      <StorePage.BrandCashBackActivate>
                        {isAmazon && t('global.noCashBack')}
                        {!isAmazon &&
                          (discount
                            ? t('global.activateCashback', { discount })
                            : t('global.instantSaving'))}
                      </StorePage.BrandCashBackActivate>
                    </StorePage.BrandCashBackActivateButton>
                    <StorePage.BrandHowCashBackWorks>
                      <StorePage.BrandHowCashBackWorksLink
                        href={`/about-cashback`}
                        target="_blank"
                      >
                        {t('global.howCashBackWorks')}
                      </StorePage.BrandHowCashBackWorksLink>
                    </StorePage.BrandHowCashBackWorks>
                  </StorePage.BrandInfo>

                  <StorePage.BrandVisitStore>
                    <VisitStore />
                  </StorePage.BrandVisitStore>
                </StorePage.Brand>
                {![OfferTypes.CASHBACK, OfferTypes.OVERVIEW].includes(
                  selectedOfferType,
                ) && (
                  <CategoryFilterDesktop
                    title={t('storeCoupons.filterByCategory')}
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onChange={handleOnCategoryFilterDesktopChange}
                  />
                )}
                <CategoryFilterDesktop
                  title={t('storeCoupons.cashBackCategories')}
                  categories={cashBackCategories}
                />
                <StorePage.BrandFiltersMobileBackdrop
                  onClick={toggleMobileFilters}
                  isVisible={isMobileFiltersVisible}
                />
                <OurCouponExperts list={couponExperts} />
                {categories.length > 0 &&
                  ![OfferTypes.CASHBACK, OfferTypes.OVERVIEW].includes(
                    selectedOfferType,
                  ) && (
                    <StorePage.BrandFiltersMobile
                      isVisible={isMobileFiltersVisible}
                    >
                      <StorePage.BrandFiltersMobileHeader>
                        <StorePage.BrandFiltersMobileTitle>
                          {t('storeCoupons.categories')}
                        </StorePage.BrandFiltersMobileTitle>
                        <StorePage.BrandFiltersMobileActions>
                          <StorePage.BrandFiltersMobileActionButton
                            onClick={() => {
                              setSelectedMobileCategories([]);
                              setSelectedCategories([]);
                            }}
                          >
                            {t('storeCoupons.clear')}
                          </StorePage.BrandFiltersMobileActionButton>
                          {(selectedMobileCategories.toString() ===
                            selectedCategories.toString() ||
                            !isMobileFiltersVisible) && (
                            <StorePage.BrandFiltersMobileActionButton
                              onClick={toggleMobileFilters}
                            >
                              {t('storeCoupons.editFilter')}
                            </StorePage.BrandFiltersMobileActionButton>
                          )}
                          {selectedMobileCategories.toString() !==
                            selectedCategories.toString() &&
                            isMobileFiltersVisible && (
                              <StorePage.BrandFiltersMobileActionButton
                                onClick={handleApplyMobileFilters}
                                isFilled
                              >
                                {t('storeCoupons.apply')}
                              </StorePage.BrandFiltersMobileActionButton>
                            )}
                          {isMobileFiltersVisible && (
                            <MdClose onClick={toggleMobileFilters} />
                          )}
                        </StorePage.BrandFiltersMobileActions>
                      </StorePage.BrandFiltersMobileHeader>
                      <StorePage.BrandFiltersMobileFilters>
                        <CategoryFilterMobile
                          title={t('storeCoupons.filterByCategory')}
                          categories={categories}
                          selectedCategories={selectedMobileCategories}
                          onChange={toggleSelectCategory}
                        />
                      </StorePage.BrandFiltersMobileFilters>
                    </StorePage.BrandFiltersMobile>
                  )}
              </StorePage.LeftContent>
            ) : (
              <BrandImageLoader />
            )}
            <StorePage.RightContent>
              {isLoaded ? (
                <>
                  <BrandHeader counterList={counterList} />
                  {priceTrackerProduct && priceTrackerProduct.has_tracker && (
                    <StorePage.BrandXlWrapper>
                      <PriceTrackerProduct
                        match={match}
                        priceTrackerProduct={priceTrackerProduct}
                      />
                    </StorePage.BrandXlWrapper>
                  )}
                  {!isExtensionInstalled && !isAmazon && (
                    <StorePage.BrandXlWrapper>
                      <StorePage.BrandNoWrapFlexBox>
                        <BrandContent
                          offersCount={+store.store_total_offers_count}
                        />
                      </StorePage.BrandNoWrapFlexBox>
                    </StorePage.BrandXlWrapper>
                  )}
                  <OffersMenu
                    storeName={storeName}
                    activeItem={selectedOfferType}
                    hideCashBackRate={cashbackRates.length === 0}
                    onChange={handleOfferMenuChange}
                  />
                  <StorePage.Separator />
                  {isDynamicallyLoaded && offersCount > 0 && (
                    <DropdownFilter
                      label={t('storeCoupons.sortPromoCodesBy', {
                        storeName,
                      })}
                      filters={codesSortValues}
                      selectedFilter={sort}
                      onChange={handleSortChange}
                    />
                  )}
                  <OffersOrFAQsView />
                  {!isExtensionInstalled && !isAmazon && showSaving && (
                    <AddSaving />
                  )}
                </>
              ) : (
                <BrandXlLoader />
              )}
            </StorePage.RightContent>
          </StorePage.MainWrapper>
        </>
      </StorePage.Wrapper>
      <TermsModal
        isVisible={isTermsVisible}
        terms={store.terms}
        onClose={closeTerms}
      />
    </StorePage.Container>
  );
};

export default StorePage;
