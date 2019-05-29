// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import ModalActivateCoupons from '@components/ModalActivateCoupons/ModalActivateCoupons';
import InstallOverlay from '@components/InstallOverlay/InstallOverlay';
import axios from 'axios';
import Cookie from 'js-cookie';
import moment from 'moment';

type CouponCodeProps = {
  t: Function,
  code: string,
  link: string,
  store: string,
  logo: string,
  getIsAuthenticated: boolean,
};

const isChrome = !!window.chrome;

const CouponCode = ({
  t,
  code,
  link,
  store,
  logo,
  getIsAuthenticated,
}: CouponCodeProps) => {
  const [isShowCode, setIsShowCode] = useState(false);
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [modalMounted, setModalMounted] = useState(false);
  const [isInstallActive, setIsInstallActive] = useState(false);

  const toggleActivateModal = () => {
    if (modalMounted === true) {
      setShowActivateModal(!showActivateModal);
      setTimeout(() => {
        setModalMounted(!modalMounted);
        Cookie.set('installProcessed', true, {
          expires: moment()
            .add(1, 'days')
            .toDate(),
        });

        if (!isInstallActive && !isShowCode && code) {
          setIsShowCode(true);
        } else {
          window.open(link, '_blank');
        }
      }, 300);
    } else {
      setModalMounted(!modalMounted);
      setTimeout(() => {
        setShowActivateModal(!showActivateModal);
      });
    }
  };

  const handleClick = () => {
    const installProcessed = Cookie.get('installProcessed');

    getExtension().then(
      response => {
        if (response.data.version) {
          if (code) {
            setIsShowCode(true);
          } else {
            window.open(link, '_blank');
          }
        }
      },
      () => {
        if (code && !isShowCode) {
          if (getIsAuthenticated) {
            setIsShowCode(true);
          } else {
            if (isChrome && !installProcessed) {
              toggleActivateModal();
            } else {
              setIsShowCode(true);
              Cookie.set('installProcessed', true, {
                expires: moment()
                  .add(1, 'days')
                  .toDate(),
              });
            }
          }
        } else {
          if (isChrome && !installProcessed && !getIsAuthenticated) {
            toggleActivateModal();
          } else {
            window.open(link, '_blank');
          }
        }
      },
    );
  };

  const getExtension = () => {
    return axios.get(
      'chrome-extension://hfapbcheiepjppjbnkphkmegjlipojba/manifest.json',
    );
  };

  const modalCallback = () => {
    const left = window.screenX;
    const top = 0;

    const popup = window.open(
      'https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba?hl=en',
      'extensionWindow',
      `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=1100,height=700,left=${left},top=${top}`,
    );

    setIsInstallActive(true);
    setShowActivateModal(false);
    setModalMounted(false);

    const focusInterval = setInterval(() => {
      popup.focus();

      if (popup.closed) {
        clearInterval(focusInterval);
        setIsInstallActive(false);
        Cookie.set('installProcessed', true, {
          expires: moment()
            .add(1, 'days')
            .toDate(),
        });

        if (!isShowCode && code) {
          setIsShowCode(true);
        } else {
          window.open(link, '_blank');
        }
      }
    }, 100);
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
        </CouponCode.Code>
      </CouponCode.Wrapper>

      {modalMounted && (
        <ModalActivateCoupons
          isActive={showActivateModal}
          closeModal={toggleActivateModal}
          callback={modalCallback}
          title={store}
          logo={logo}
          subTitle={'test'}
        />
      )}

      {isInstallActive && <InstallOverlay isActive={isInstallActive} />}
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
`;

export default withTranslation()(CouponCode);
