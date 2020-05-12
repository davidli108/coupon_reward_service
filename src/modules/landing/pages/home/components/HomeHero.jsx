// @flow

import React from 'react';
import { withTranslation } from 'react-i18next';

import AppConfig from '@config/AppConfig';
import styles from './HomeHero.styles';

import { type HomeHeroProps } from '../Home.types';

import Star from '../assets/star.svg';

const HomeHero = ({
    t,
    i18n,
  }: HomeHeroProps
) => {
  const langShort = i18n.language;

  /* eslint-disable global-require */
  const hero = langShort === 'de'
    ? require('../assets/de/hero-image.png')
    : require('../assets/fr/hero-image.png');
  const hero2x = langShort === 'de'
    ? require('../assets/de/hero-image@2x.png')
    : require('../assets/fr/hero-image@2x.png');
  const hero3x = langShort === 'de'
    ? require('../assets/de/hero-image@3x.png')
    : require('../assets/fr/hero-image@3x.png');
  /* eslint-enable global-require */

  return (
    <HomeHero.Wrapper>
      <div id="home-hero-v2">
        <div className="hero-block-title">
          <h1>{t('homepage.hero.title')}</h1>
        </div>
        <div className="hero-block-banner">
          <div className="floating-banner">
            <img src={hero}
                 srcSet={`
                      ${hero3x} 3x,
                      ${hero2x} 2x,
                      ${hero} 1x`
                 }
                 alt="banner" />
          </div>
        </div>
        <div className="hero-block-info">
          <p><span>{t('homepage.hero.text.first')}</span> {t('homepage.hero.text.second')}</p>
          <div className="center-it-m">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${AppConfig.extension.url}?hl=${langShort}`}
              className="btn-green-v2"
              dangerouslySetInnerHTML={{__html: t('homepage.hero.activate_extension', {browser: 'Chrome'})}}
            />
          </div>
          <div className="five-stars">
            <p className="number-users">{t('homepage.hero.number_users')}</p>
            <img className="star" src={Star} alt=""/>
            <img className="star" src={Star} alt=""/>
            <img className="star" src={Star} alt=""/>
            <img className="star" src={Star} alt=""/>
            <img className="star" src={Star} alt=""/>
          </div>
        </div>
      </div>
    </HomeHero.Wrapper>
  );
};

styles(HomeHero);

export default withTranslation()(HomeHero);
