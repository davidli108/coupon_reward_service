// @flow
import React, { useEffect } from 'react';
import styled from 'styled-components';
import leftRoundArrow from './leftRoundArrow.svg';
import Cookie from 'js-cookie';
import moment from 'moment';
import AppConfig from '@config/AppConfig';
import { withTranslation } from 'react-i18next';
import { getLocale } from '@modules/localization/i18n';

type InstallOverlayProps = {
  t: Function,
  isActive: boolean,
  callback: Function,
};

const headerHeight = window.outerHeight - window.innerHeight + 'px';
const top =
  navigator.platform === 'Win32'
    ? `calc(260px - ${headerHeight})`
    : `calc(210px - ${headerHeight})`;

const InstallOverlay = ({ t, isActive, callback }: InstallOverlayProps) => {
  useEffect(() => {
    if (isActive) {
      const popupUrl = `${AppConfig.extension.url}?hl=${getLocale()}`;
      const popup = window.open(popupUrl, 'extensionWindow');

      const focusInterval = setInterval(() => {
        if (popup.closed) {
          clearInterval(focusInterval);
          Cookie.set('installProcessed', true, {
            expires: moment()
              .add(1, 'days')
              .toDate(),
          });

          callback();
        }
      }, 100);
    }
  }, [isActive]);

  return (
    <InstallOverlay.Wrapper>
      <InstallOverlay.Container top={top}>
        <img src={leftRoundArrow} alt={t('coupons.installExtension.action')} />
        <InstallOverlay.Step>
          <h3>{t('coupons.installExtension.step1')}</h3>
          <p>{t('coupons.installExtension.step1text')}</p>
        </InstallOverlay.Step>

        <InstallOverlay.Step>
          <h3>{t('coupons.installExtension.step2')}</h3>
          <p>{t('coupons.installExtension.step2text')}</p>
        </InstallOverlay.Step>
      </InstallOverlay.Container>
    </InstallOverlay.Wrapper>
  );
};

InstallOverlay.Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
`;

InstallOverlay.Container = styled.div`
  position: absolute;
  right: 200px;
  top: ${({ top }) => top};
  width: 320px;

  > img {
    display: block;
    width: 75px;
    height: auto;
    position: relative;
    margin: 0 0 17px;
  }
`;

InstallOverlay.Step = styled.div`
  padding: 0 0 0 36px;
  margin: 0 0 30px;

  h3 {
    margin: 0 0 5px;
    font-weight: bold;
    font-size: 28px;
  }

  p {
    margin: 0;
    font-size: 24px;
  }
`;

export default withTranslation()(InstallOverlay);
