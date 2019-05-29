// @flow
import React from 'react';
import styled from 'styled-components';
import leftRoundArrow from './leftRoundArrow.svg';

type InstallOverlayProps = {
  isActive: boolean,
};

const InstallOverlay = ({ isActive }: InstallOverlayProps) => {
  const headerHeight = window.outerHeight - window.innerHeight + 'px';
  const top =
    navigator.platform === 'Win32'
      ? `calc(260px - ${headerHeight})`
      : `calc(210px - ${headerHeight})`;

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
