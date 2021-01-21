// @flow
import React, { useState, useEffect, memo } from 'react';

import {
  updateElementClassList,
  ScriptLoader,
  getWaitUrl,
} from '@config/Utils';
import PiggyCorner from './assets/piggy-corner-new.png';
import styles from './NeverOverpayAgain.styles';

type NeverOverpayAgainProps = {
  isLandingMinimized: boolean,
  maximizeLanding: Function,
  minimizeLanding: Function,
  unmountLanding: Function,
  bonusesFetched: boolean,
};

const NeverOverpayAgain = ({
  isLandingMinimized,
  maximizeLanding,
  minimizeLanding,
  unmountLanding,
  bonusesFetched,
}: NeverOverpayAgainProps) => {
  const [overFlag, setOverFlag] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const onMouseEnter = () => {
    if (!overFlag) {
      setOverFlag(
        setTimeout(function() {
          setOverFlag(0);
          maximizeLanding();
        }, 2000),
      );
    }
  };

  const onMouseLeave = () => {
    if (overFlag) {
      clearTimeout(overFlag);
      setOverFlag(0);
    }
  };

  useEffect(() => {
    const onHandleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        minimizeLanding();
      }
    };

    if (document.body) {
      document.body.addEventListener('wheel', onHandleWheel);
    }

    return () => {
      if (document.body) {
        document.body.removeEventListener('wheel', onHandleWheel);
      }
    };
  }, []);

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

  const jQuery = new ScriptLoader({ src: js.jquery, global: 'jQuery' });
  const createJs = new ScriptLoader({ src: js.createJs, global: 'cjs' });
  const animLibrary = new ScriptLoader({ src: js.animLibrary, global: 'al' });
  const animation = new ScriptLoader({
    src: js.animation,
    global: 'animation',
  });

  Promise.all([jQuery.load(), createJs.load()]).then(() => {
    animLibrary.load().then(() => {
      setAssetsLoaded(true);
    });
  });

  useEffect(() => {
    if (assetsLoaded) {
      animation.load();
    }
  }, [bonusesFetched, assetsLoaded]);

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
          <p>
            Save time and money with Piggy's free Google Chrome Coupon App!
          </p>
          {!isLandingMinimized && (
            <>
              <p>
                Piggy appears at checkout and automatically applies the best
                coupon code
              </p>
              <h3>We find the coupons. You just shop.</h3>
            </>
          )}
        </div>
        <NeverOverpayAgain.Button
          href={getWaitUrl()}
          onClick={clickHandler}
          target="_blank"
        >
          + ACTIVATE NOW
        </NeverOverpayAgain.Button>
        <NeverOverpayAgain.Overlay
          id="mouse-over"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </NeverOverpayAgain.Content>
      <NeverOverpayAgain.Corner src={PiggyCorner} alt="JoinPiggy" />
    </NeverOverpayAgain.Wrapper>
  );
};

styles(NeverOverpayAgain);

const shouldNotRerender = (prevProps, nextProps) =>
  prevProps.isLandingMinimized === nextProps.isLandingMinimized;

export default memo<NeverOverpayAgainProps, () => boolean>(
  NeverOverpayAgain,
  shouldNotRerender,
);
