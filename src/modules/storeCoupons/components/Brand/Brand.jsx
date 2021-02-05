// @flow
import React, { useEffect, useState } from 'react';
import moment from 'moment';

import BrandHeader from '../BrandHeader';
import BrandContent from '../BrandContent';
import placeholder from '@modules/coupons/assets/image-placeholder.png';
import BrandImageLoader from '../loaders/BrandImageLoader';
import BrandXlLoader from '../loaders/BrandXlLoader';
import type { BrandProps } from '../../models/StorePage';
import AppConfig from '@config/AppConfig';
import { isAmazonStore, fireGTMEvent } from '@config/Utils';
import CouponCode from '../CouponCode';
import {
  currencyLocaleFormat,
  setDecimalFormat,
} from '@modules/localization/i18n';
import PriceTrackerProduct from '../../../pricetracker/components/PriceTrackerProduct/PriceTrackerProduct';

const Brand = ({
  t,
  match,
  store,
  i18n,
  coupon_code,
  isAuthenticated,
  isExtensionInstalled,
  isLoaded,
  offersCount,
  extensionActive,
  offersMenu,
  priceTracker,
}: BrandProps) => {
  const [isAmazon, setIsAmazon] = useState(false);
  const discount = store.store_cashback_ok
    ? store.store_numeric_type === 1
      ? currencyLocaleFormat(
          store.store_discount.replace(/[$£€]/, ''),
          store.store_country_code,
        )
      : `${store.store_discount.replace('%', '')}%`
    : '';

  useEffect(() => {
    if (isAmazonStore(store.store_name)) {
      setIsAmazon(true);
    } else {
      setIsAmazon(false);
    }
  }, [store]);

  const VisitStore = () => (
    <CouponCode
      t={t}
      i18n={i18n}
      code={coupon_code}
      link={store.store_info_link}
      store={store.store_name}
      isAuthenticated={isAuthenticated}
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
      label: document.location.href,
    });
  };

  return (
    <>
      <Brand.Wrapper>
        {isLoaded ? (
          <Brand.BrandImageWrapper>
            <Brand.BrandImageWrapperLink
              href={store.store_info_link}
              target="_blank"
            >
              <Brand.BrandImageWrapperHolder
                src={
                  store.store_logo_image_path
                    ? `${AppConfig.cloudUrl}${store.store_logo_image_path}`
                    : placeholder
                }
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
                alt={`
                  ${store.store_name || ''}
                  ${t('storeCoupons.codes')}
                  ${moment().format('MMMM')} | ${moment().format('YYYY')}
                `}
              />
            </Brand.BrandImageWrapperLink>
            <Brand.RightContent>
              <VisitStore />
              <Brand.Info>
                <Brand.CashBackActivateButton onClick={triggerGTMEvent}>
                  <Brand.DesktopVisitStore>
                    <CouponCode
                      t={t}
                      i18n={i18n}
                      code={coupon_code}
                      link={store.store_info_link}
                      store={store.store_name}
                      isAuthenticated={isAuthenticated}
                      isExtensionInstalled={isExtensionInstalled || isAmazon}
                      logo={
                        store.store_logo_image_path
                          ? `${AppConfig.cloudUrl}${store.store_logo_image_path}`
                          : placeholder
                      }
                      isVisit={true}
                    />
                  </Brand.DesktopVisitStore>
                  <Brand.CashBackActivate>
                    {isAmazon && t('global.noCashBack')}
                    {!isAmazon &&
                      (discount
                        ? t('global.activateCashback', {
                            discount: setDecimalFormat(discount),
                          })
                        : t('global.instantSaving'))}
                  </Brand.CashBackActivate>
                </Brand.CashBackActivateButton>
              </Brand.Info>
            </Brand.RightContent>
            <Brand.MobileVisitStore>
              <VisitStore />
            </Brand.MobileVisitStore>
          </Brand.BrandImageWrapper>
        ) : (
          <BrandImageLoader />
        )}

        <Brand.WrapFlexBox>
          {isLoaded ? (
            <>
              <BrandHeader />
              {priceTracker.has_tracker ? (
                <PriceTrackerProduct
                  match={match}
                  priceTrackerProduct={priceTracker}
                />
              ) : (
                !extensionActive && (
                  <Brand.XlWrapper>
                    <Brand.NoWrapFlexBox>
                      <BrandContent offersCount={offersCount} />
                    </Brand.NoWrapFlexBox>
                  </Brand.XlWrapper>
                )
              )}
              {offersMenu}
            </>
          ) : (
            <BrandXlLoader />
          )}
        </Brand.WrapFlexBox>
      </Brand.Wrapper>
      {!extensionActive && (
        <Brand.MdWrapper>
          <Brand.NoWrapFlexBox>
            <BrandContent offersCount={offersCount} />
          </Brand.NoWrapFlexBox>
        </Brand.MdWrapper>
      )}
    </>
  );
};

export default Brand;
