// @flow
import React, { useEffect } from 'react';
import styled from 'styled-components';
import leftRoundArrow from './leftRoundArrow.svg';
import Cookie from 'js-cookie';
import moment from 'moment';
import AppConfig from '@config/AppConfig';

type InstallOverlayProps = {
  isActive: boolean,
  callback: Function,
};

const headerHeight = window.outerHeight - window.innerHeight + 'px';
const top =
  navigator.platform === 'Win32'
    ? `calc(260px - ${headerHeight})`
    : `calc(210px - ${headerHeight})`;

const InstallOverlay = ({ isActive, callback }: InstallOverlayProps) => {
  const windowProps = {
    toolbar: 'no',
    location: 'no',
    directories: 'no',
    status: 'no',
    menubar: 'no',
    scrollbars: 'no',
    resizable: 'no',
    width: '1100',
    height: '700',
    left: window.screenX,
    top: 0,
  };

  const parsedWindowProps = () => {
    const data = [];
    Object.keys(windowProps).forEach(key => {
      data.push(`${key}=${windowProps[key]}`);
    });

    return data.join(',');
  };

  useEffect(() => {
    if (isActive) {
      const popup = window.open(
        AppConfig.extension.url,
        'extensionWindow',
        parsedWindowProps(),
      );

      const focusInterval = setInterval(() => {
        popup.focus();

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
    <InstallOverlay.Wrapper isActive={isActive}>
      <InstallOverlay.Container top={top}>
        <img src={leftRoundArrow} alt="Add to Chrome" />

        <InstallOverlay.Step>
          <h3>Step 1</h3>
          <p>Click the "Add to Chrome" Button</p>
        </InstallOverlay.Step>

        <InstallOverlay.Step>
          <h3>Step 2</h3>
          <p>Then click "Add extension"</p>
        </InstallOverlay.Step>
      </InstallOverlay.Container>
    </InstallOverlay.Wrapper>
  );
};

export default InstallOverlay;

InstallOverlay.Wrapper = styled.div`
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
  left: 1130px;
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
