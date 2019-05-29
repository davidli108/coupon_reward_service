// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
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
          <p>
            {code ? t('global.revealCoupon') : t('coupons.buttons.viewDeal')}
          </p>
          <CouponCode.Rectangle isShow={!!code} />
        </CouponCode.Button>
        <CouponCode.Code href={link} target="_blank" isShow={isShowCode}>
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
  width: 100%;
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

CouponCode.Code = styled.a`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  width: 100%;
  height: 41px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border: 2px dashed gray;
  background-color: #fefff4;
  color: black;
  text-align: center;
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

export default CouponCode;
