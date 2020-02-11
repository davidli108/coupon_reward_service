// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalActivateCoupons from '@components/ModalActivateCoupons/ModalActivateCoupons';
import Cookie from 'js-cookie';
import { isMobile } from 'react-device-detect';
import { withRouter } from 'react-router-dom';

type CouponCodeProps = {
  t: Function,
  match: Object,
  i18n: Object,
  code: string,
  link: string,
  store: string,
  logo: string,
  isAuthenticated: boolean,
  isExtensionInstalled: boolean,
};

const CouponCode = ({
  t,
  match,
  i18n,
  code,
  link,
  store,
  logo,
  isAuthenticated,
  isExtensionInstalled,
}: CouponCodeProps) => {
  const [isShowCode, setIsShowCode] = useState(false);
  const [showActivateModal, setShowActivateModal] = useState(false);

  useEffect(() => {
    setIsShowCode((isAuthenticated && code) || (isExtensionInstalled && code));
  }, [isAuthenticated, isExtensionInstalled]);

  const handleClick = () => {
    setShowActivateModal(true);
  };

  const modalCallback = (dismiss: boolean) => {
    setShowActivateModal(false);
    if (code && !isShowCode) {
      setIsShowCode(true);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        pageCategory: 'Store Pages',
        event: 'coupon_reveal',
        label: match.url,
      });
    } else if (!dismiss) {
      window.open(link, '_blank');
    }
  };

  const triggerDealEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      pageCategory: 'Store Pages',
      event: 'deal_reveal',
      label: match.url,
    });
  };

  const renderCouponButton = () => {
    const isChrome = !!window.chrome;
    const isInstallProcessed = Boolean(Cookie.get('installProcessed'));

    return code ? (
      <>
        <CouponCode.Button onClick={handleClick} isShow={!isShowCode}>
          {i18n.language === 'jp' ? (
            <CouponCode.p>{t('global.revealCoupon')}</CouponCode.p>
          ) : (
            <p>{t('global.revealCoupon')}</p>
          )}
          <CouponCode.Rectangle isShow={!!code} />
        </CouponCode.Button>
        <CouponCode.Code isShow={isShowCode} href={link} target={'_blank'}>
          {code}
          <CouponCode.Tooltip>
            {t('coupons.buttons.tooltip')}
          </CouponCode.Tooltip>
        </CouponCode.Code>
      </>
    ) : isChrome &&
      !isMobile &&
      !isShowCode &&
      !isAuthenticated &&
      !isInstallProcessed ? (
      <CouponCode.Button onClick={handleClick} isShow={!isShowCode}>
        <p>{t('coupons.buttons.viewDeal')}</p>
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

CouponCode.Wrapper = styled.div`
  width: 100%;
`;

CouponCode.p = styled.p`
  font-size: 95%;
`;
CouponCode.Button = styled.div`
  margin-bottom: 10px;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  width: 100%;
  height: 45px;
  background: #00cbe9;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;
  cursor: pointer;

  p {
    width: 100%;
  }
`;

CouponCode.Link = styled.a`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  width: 100%;
  height: 45px;
  background: #00cbe9;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;
  cursor: pointer;

  p {
    width: 100%;
  }
`;

CouponCode.Code = styled.a`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  width: 100%;
  height: 45px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border: 2px dashed gray;
  background-color: #fefff4;
  color: black;
  text-align: center;
  position: relative;
  box-sizing: border-box;

  :hover {
    > div {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

CouponCode.Tooltip = styled.div`
  position: absolute;
  left: 50%;
  bottom: 100%;
  width: 200px;
  box-sizing: border-box;
  margin: 0 0 10px -100px;
  border-radius: 5px;
  padding: 6px 10px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  pointer-events: none;
  opacity: 0;
  transform: translate3d(0, -10px, 0);
  transition: all 0.3s ease;
  white-space: normal;

  ::after {
    content: '';
    display: block;
    left: 50%;
    position: absolute;
    top: 100%;
    margin: 0 0 0 -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000;
  }
`;

CouponCode.Rectangle = styled.div`
  width: 30px;
  height: 25px;
  margin-left: auto;
  margin-bottom: auto;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-image: linear-gradient(45deg, #00a2ba 50%, #f1f1f1 50%);
  background-position: 0 0;
`;

export default withRouter(CouponCode);
