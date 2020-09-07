// @flow
import React from 'react';
import { MdArrowDownward } from 'react-icons/md';

import { updateElementClassList, ScriptLoader } from '@config/Utils';
import { getDomainAttrs } from '@modules/localization/i18n';
import PiggyCorner from './assets/piggy-corner-new.png';
import styles from './NeverOverpayAgain.styles';

const { tld } = getDomainAttrs();

type NeverOverpayAgainProps = {
  isLandingMinimized: boolean,
  minimizeLanding: Function,
  unmountLanding: Function,
};

const NeverOverpayAgain = ({
  isLandingMinimized,
  minimizeLanding,
  unmountLanding,
}: NeverOverpayAgainProps) => {
  const lpMap = {
    'com': '-usa',
    'co.uk': '',
    'de': '-de',
    'fr': '-fr',
  };
  const extensionLandingUrl = `/lp/noa-wait${lpMap[tld] || '-usa'}`;

  const clickHandler = () => {
    unmountLanding();
    updateElementClassList({
      element: 'body',
      className: 'landing-minimized',
      add: false,
    });
  };

  const js = {
    jquery: '/shared-assets/js/jquery-1.11.3.min.js',
    createJs: '/shared-assets/js/hero-loader/createjs-2015.11.26.min.js',
    animLibrary: '/shared-assets/js/hero-loader/animate-02-new.js',
    animation: '/shared-assets/js/hero-loader/animate-02-new-fn.js',
  };

  const jQuery = new ScriptLoader({src: js.jquery, global: 'jQuery'});
  const createJs = new ScriptLoader({src: js.createJs, global: 'cjs'});
  const animLibrary = new ScriptLoader({src: js.animLibrary, global: 'al'});
  const animation = new ScriptLoader({src: js.animation, global: 'animation'});

  Promise.all([jQuery.load(), createJs.load()]).then(() => {
    animLibrary.load();
    animation.load();
  });

  return (
    <NeverOverpayAgain.Wrapper
      className={isLandingMinimized ? 'minimized' : ''}
    >
      <div className="animate">
        <div id="animation_container">
          <canvas id="canvas" width="350" height="350" />
          <div id="dom_overlay_container" />
        </div>
      </div>

      <NeverOverpayAgain.Content>
        <div>
          <h1>NEVER OVERPAY AGAIN</h1>
          <p>Save time and money with Piggy's free Google Chrome Coupon App!</p>
          <p>Piggy appears at checkout and automatically applies the best coupon code</p>
          <h3>We find the coupons. You just shop.</h3>
        </div>
        <NeverOverpayAgain.Button
          href={extensionLandingUrl}
          onClick={clickHandler}
          target="_blank"
        >
          + Add extension to chrome
        </NeverOverpayAgain.Button>
      </NeverOverpayAgain.Content>
      <NeverOverpayAgain.Action onClick={minimizeLanding}>
        <MdArrowDownward/>
      </NeverOverpayAgain.Action>
      <NeverOverpayAgain.Corner src={PiggyCorner} alt="JoinPiggy"/>
    </NeverOverpayAgain.Wrapper>
  );
};

styles(NeverOverpayAgain);

export default NeverOverpayAgain;
