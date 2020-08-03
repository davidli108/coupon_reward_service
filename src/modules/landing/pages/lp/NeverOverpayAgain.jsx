// @flow
import React from 'react';

import AppConfig from '@config/AppConfig';
import { updateElementClassList } from '@config/Utils';
import PiggyCorner from './assets/piggy-corner-new.png';
import styles from './NeverOverpayAgain.styles';

type NeverOverpayAgainProps = {
  isLandingVisible: boolean,
  isLandingMinimized: boolean,
  setIsLandingVisible: Function,
  setIsLandingMounted: Function,
};

const NeverOverpayAgain = ({
  isLandingVisible,
  isLandingMinimized,
  setIsLandingVisible,
  setIsLandingMounted,
}: NeverOverpayAgainProps) => {
  const clickHandler = () => {
    setIsLandingVisible(false);
    updateElementClassList({
      element: 'body',
      className: 'landing-minimized',
      add: false,
    });

    setTimeout(() => {
      setIsLandingMounted(false);
    }, 400);
  };

  return (
    <NeverOverpayAgain.Wrapper
      className={isLandingMinimized ? 'minimized' : ''}
      isLandingVisible={isLandingVisible}
    >
      <NeverOverpayAgain.Content>
        <div>
          <h1>NEVER OVERPAY AGAIN</h1>
          <p>Save time and money with Piggy's free Google Chrome Coupon App!</p>
          <p>Piggy appears at checkout and automatically applies the best coupon code</p>
          <h3>We find the coupons. You just shop.</h3>
        </div>
        <NeverOverpayAgain.Button
          href={AppConfig.extension.url}
          onClick={clickHandler}
          target="_blank"
        >
          + Add extension to chrome
        </NeverOverpayAgain.Button>
      </NeverOverpayAgain.Content>
      <NeverOverpayAgain.Corner src={PiggyCorner} alt="JoinPiggy"/>
    </NeverOverpayAgain.Wrapper>
  );
};

styles(NeverOverpayAgain);

export default NeverOverpayAgain;
