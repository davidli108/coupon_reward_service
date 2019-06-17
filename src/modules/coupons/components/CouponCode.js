// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import ModalActivateCoupons from '@components/ModalActivateCoupons/ModalActivateCoupons';

type CouponCodeProps = {
  t: Function,
  code: string,
  link: string,
  store: string,
  logo: string,
  isAuthenticated: boolean,
};

const CouponCode = ({
  t,
  code,
  link,
  store,
  logo,
  isAuthenticated,
}: CouponCodeProps) => {
  const [isShowCode, setIsShowCode] = useState(false);
  const [showActivateModal, setShowActivateModal] = useState(false);

  useEffect(() => {
    setIsShowCode(isAuthenticated && code);
  }, [isAuthenticated]);

  const handleClick = () => {
    setShowActivateModal(true);
  };

  const modalCallback = () => {
    setShowActivateModal(false);
    if (code && !isShowCode) {
      setIsShowCode(true);
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <>
      <CouponCode.Wrapper>
        <CouponCode.Button onClick={handleClick} isShow={!isShowCode}>
          {code
            ? t('coupons.buttons.viewCoupon')
            : t('coupons.buttons.viewDeal')}
        </CouponCode.Button>
        <CouponCode.Code onClick={handleClick} isShow={isShowCode}>
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
  background: #00cbe9;
  border: 1px solid #00b4cf;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.5),
    inset 0px -1px 5px rgba(0, 0, 0, 0.0584805),
    inset 0px -2px 0px rgba(255, 255, 255, 0.213315);
  border-radius: 4px;
  font-weight: 500;
  line-height: 20px;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;
  cursor: pointer;
`;

CouponCode.Code = styled.div`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  cursor: pointer;
  width: 100%;
  height: 46px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border: 2px dashed gray;
  background-color: #fefff4;
  color: black;
  text-align: center;
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
  background-color: #000;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  pointer-events: none;
  opacity: 0;
  transform: translate3d(0, -10px, 0);
  transition: all 0.3s ease;

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

export default withTranslation()(CouponCode);
