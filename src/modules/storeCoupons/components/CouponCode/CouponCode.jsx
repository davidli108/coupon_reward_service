// @flow
import React, { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import { isMobile } from 'react-device-detect';

import { fireGTMEvent } from '@config/Utils';
import ModalActivateCoupons from '@components/ModalActivateCoupons/ModalActivateCoupons';
import type { CouponCodeProps } from './index';

const CouponCode = ({
  t,
  match = {},
  i18n,
  code,
  link,
  store,
  logo,
  isAuthenticated,
  isExtensionInstalled,
  isVisit,
  isCashbackRate,
}: CouponCodeProps) => {
  const [isShowCode, setIsShowCode] = useState(false);
  const [showActivateModal, setShowActivateModal] = useState(false);

  useEffect(() => {
    setIsShowCode((isAuthenticated && code) || (isExtensionInstalled && code));
  }, [isAuthenticated, isExtensionInstalled]);

  const handleClick = () => {
    setShowActivateModal(true);

    if (showActivateModal && code) {
      setIsShowCode(true);
    }

    if (showActivateModal && !code) {
      window.open(link, '_blank');
    }

    if (code && !isShowCode) {
      fireGTMEvent({
        pageCategory: 'Store Pages',
        event: 'coupon_reveal',
        label: match.url,
      });
    }
  };

  const triggerDealEvent = () => {
    fireGTMEvent({
      pageCategory: 'Store Pages',
      event: 'deal_reveal',
      label: match.url,
    });
  };

  const modalCallback = (dismiss: boolean) => {
    setShowActivateModal(false);
    if (code && !isShowCode) {
      setIsShowCode(true);
    } else if (!dismiss) {
      window.open(link, '_blank');
    }
  };

  const renderCouponButton = () => {
    const isChrome = !!window.chrome;
    const isInstallProcessed = Boolean(Cookie.get('installProcessed'));

    if (isCashbackRate) {
      return (
        <CouponCode.CashbackRate
          href={link}
          target={'_blank'}
          onClick={triggerDealEvent}
        >
          {t('cashbackStores.shopBy.shopNow')}
        </CouponCode.CashbackRate>
      );
    }

    return code ? (
      <>
        <CouponCode.Button onClick={handleClick} isShow={!isShowCode}>
          {i18n.language === 'jp' ? (
            <CouponCode.p>{t('coupons.shopBy.getCoupon')}</CouponCode.p>
          ) : (
            <p>{t('coupons.shopBy.getCoupon')}</p>
          )}
        </CouponCode.Button>
        <CouponCode.Code
          isShow={isShowCode}
          href={link}
          target={'_blank'}
          codeLength={code && code.length}
        >
          {code}
          <CouponCode.Tooltip>
            {t('coupons.buttons.tooltip')}
          </CouponCode.Tooltip>
        </CouponCode.Code>
      </>
    ) : isChrome &&
      !isMobile &&
      !isShowCode &&
      !isVisit &&
      !isAuthenticated &&
      !isInstallProcessed ? (
      <CouponCode.Deal onClick={handleClick} isShow={!isShowCode}>
        <p>{t('coupons.buttons.viewDeal')}</p>
      </CouponCode.Deal>
    ) : isVisit ? (
      <CouponCode.Button onClick={handleClick} isShow={!isShowCode}>
        <p> {t('build.visitStore')}</p>
      </CouponCode.Button>
    ) : (
      <CouponCode.Link href={link} target={'_blank'} onClick={triggerDealEvent}>
        <p>{t('coupons.buttons.viewDeal')}</p>
      </CouponCode.Link>
    );
  };

  return (
    <>
      <CouponCode.Wrapper>{renderCouponButton()}</CouponCode.Wrapper>

      {showActivateModal && (
        <ModalActivateCoupons
          isActive={showActivateModal}
          callback={modalCallback}
          title={store}
          logo={logo}
          code={code}
        />
      )}
    </>
  );
};

export default CouponCode;
