// @flow

import React from 'react';
import { withTranslation } from 'react-i18next';

import AppConfig from '@config/AppConfig';
import styles from './HomeHowItWorks.styles';

import { type HomeHowItWorksProps } from '../Home.types';

const HomeHowItWorks = ({
    t,
    i18n,
  }: HomeHowItWorksProps
) => {
  const langShort = i18n.language;

  /* eslint-disable global-require */
  const assets = () => {
    switch (langShort) {
      case 'de':
        return {
          install: require('../assets/de/install.svg'),
          laptop: require('../assets/de/laptop.svg'),
          wallet: require('../assets/de/wallet.svg'),
        };
      case 'fr':
        return {
          install: require('../assets/fr/install.svg'),
          laptop: require('../assets/fr/laptop.svg'),
          wallet: require('../assets/fr/wallet.svg'),
        };
      default:
        return {
          install: require('../assets/en/install.svg'),
          laptop: require('../assets/en/laptop.svg'),
          wallet: require('../assets/en/wallet.svg'),
        };
    }
  };
  /* eslint-enable global-require */

  return (
    <HomeHowItWorks.Wrapper>
      <div className="row">
        <div className="col-xs-12">
          <h2 className="h2class text-center">{t('homepage.howItWorks.title')}</h2>
        </div>
        <div className="col-xs-12 col-sm-4">
          <img src={assets().install}
               alt="Click Install"
               className="img-responsive center-block" />
            <h3 className="h3class text-center">{t('homepage.howItWorks.subHeader1')}</h3>
            <p className="pclass text-center">
              <a
                className="block-link"
                target="_blank"
                rel="noopener noreferrer"
                href={`${AppConfig.extension.url}?hl=${langShort}`}
              >
                {t('homepage.howItWorks.subText1Link')}
              </a> {t('homepage.howItWorks.subText1')}
            </p>
        </div>
        <div className="col-xs-12 col-sm-4">
          <img src={assets().laptop}
               alt="You just shop"
               className="img-responsive center-block" />
            <h3 className="h3class text-center">{t('homepage.howItWorks.subHeader2')}</h3>
            <p className="pclass text-center">{t('homepage.howItWorks.subText2')}</p>
        </div>
        <div className="col-xs-12 col-sm-4">
          <img src={assets().wallet} alt="Save Instantly"
               className="img-responsive center-block" />
            <h3 className="h3class text-center">{t('homepage.howItWorks.subHeader3')}</h3>
            <p className="pclass text-center">{t('homepage.howItWorks.subText3')}</p>
        </div>
        <div className="col-xs-12">
          <div className="text-center center-it">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${AppConfig.extension.url}?hl=${langShort}`}
              className="btn-green-v2"
            >
              {t('homepage.howItWorks.buttonAll')}
            </a>
          </div>
        </div>
      </div>
    </HomeHowItWorks.Wrapper>
  );
};

styles(HomeHowItWorks);

export default withTranslation()(HomeHowItWorks);
