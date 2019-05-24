// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import ModalActivateCoupons from '../components/ModalActivateCoupons';

type CouponCodeProps = {
  t: Function,
  code: string,
  link: string,
  store: string,
  logo: string,
};

const CouponCode = ({ t, code, link, store, logo }: CouponCodeProps) => {
  const [isShowCode, setIsShowCode] = useState(false);
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [modalMounted, setModalMounted] = useState(false);

  const toggleActivateModal = () => {
    if (modalMounted === true) {
      setShowActivateModal(!showActivateModal);
      setTimeout(() => {
        setModalMounted(!modalMounted);
      }, 300);
    } else {
      setModalMounted(!modalMounted);
      setTimeout(() => {
        setShowActivateModal(!showActivateModal);
      });
    }
  };

  const handleClick = () => {
    if (code) {
      toggleActivateModal();
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
        <CouponCode.Code href={link} target="_blank" isShow={isShowCode}>
          {code}
        </CouponCode.Code>
      </CouponCode.Wrapper>

      {modalMounted && (
        <ModalActivateCoupons
          isActive={showActivateModal}
          closeModal={toggleActivateModal}
          title={store}
          logo={logo}
          subTitle={'test'}
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

CouponCode.Code = styled.a`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  width: 100%;
  height: 46px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border: 2px dashed gray;
  background-color: #fefff4;
  color: black;
  text-align: center;
`;

export default withTranslation()(CouponCode);
