// @flow
import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import ModalActivateCoupons from '@components/ModalActivateCoupons/ModalActivateCoupons';
import { isAmazonStore, setDirectTrue } from '@config/Utils';

type CouponCodeProps = {
  t: Function,
  match: Object,
  code: string,
  link: string,
  store: string,
  logo: string,
  isAuthenticated: boolean,
  isExtensionInstalled: boolean,
  featured?: boolean,
};

const CouponCode = ({
  t,
  match,
  code,
  link,
  store,
  logo,
  isAuthenticated,
  isExtensionInstalled,
  featured,
}: CouponCodeProps) => {
  const [isShowCode, setIsShowCode] = useState(false);
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [isAmazon, setIsAmazon] = useState(false);

  useEffect(() => {
    setIsShowCode((isAuthenticated && code) || (isExtensionInstalled && code));
  }, [isAuthenticated, isExtensionInstalled]);

  useEffect(() => {
    if (isAmazonStore(store)) {
      setIsAmazon(true);
    }
  }, [store]);

  const handleClick = () => {
    setShowActivateModal(true);

    if (showActivateModal && code) {
      setIsShowCode(true);
    }

    if (showActivateModal && !code) {
      window.open(isAmazon ? setDirectTrue(link) : link, '_blank');
    }

    if (code) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        pageCategory: 'Coupons by Category',
        event: featured ? 'feature_coupon_reveal' : 'secondary_coupon_reveal',
        label: match.url,
      });
    }
  };

  const modalCallback = () => {
    setShowActivateModal(false);
    if (code && !isShowCode) {
      setIsShowCode(true);
    } else {
      window.open(isAmazon ? setDirectTrue(link) : link, '_blank');
    }
  };

  return (
    <>
      <CouponCode.Wrapper>
        <CouponCode.Button
          onClick={handleClick}
          isShow={!isShowCode && isAmazon}
        >
          {code
            ? t('coupons.buttons.viewCoupon')
            : t('coupons.buttons.viewDeal')}
        </CouponCode.Button>
        <CouponCode.Code
          isShow={isShowCode}
          href={isAmazon ? setDirectTrue(link) : link}
          target={'_blank'}
        >
          {code}
          <CouponCode.Tooltip>
            {t('coupons.buttons.tooltip')}
          </CouponCode.Tooltip>
        </CouponCode.Code>
      </CouponCode.Wrapper>

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
  width: 90%;
`;

CouponCode.Button = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.blueDark};
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 500;
  line-height: 20px;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.blueDark} !important;
    color: ${props => props.theme.colors.white} !important;
    border: 1px solid ${props => props.theme.colors.blueDark} !important;
  }
`;

CouponCode.Code = styled.a`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  cursor: pointer;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border: 2px dashed gray;
  background-color: ${props => props.theme.colors.whiteEnLight};
  color: black;
  text-align: center;
  box-sizing: border-box;
  position: relative;

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
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
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
    border-top: 5px solid ${props => props.theme.colors.black};
  }
`;

export default compose(withTranslation(), withRouter)(CouponCode);
