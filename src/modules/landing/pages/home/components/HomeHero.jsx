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
  const assets = () => {
    switch (langShort) {
      case 'de':
        return {
          hero: require('../assets/de/hero-image.png'),
          hero2: require('../assets/de/hero-image@2x.png'),
          hero3: require('../assets/de/hero-image@3x.png'),
        };
      case 'fr':
        return {
          hero: require('../assets/fr/hero-image.png'),
          hero2: require('../assets/fr/hero-image@2x.png'),
          hero3: require('../assets/fr/hero-image@3x.png'),
        };
      case 'gb':
        return {
          hero: require('../assets/gb/hero-image.png'),
          hero2: require('../assets/gb/hero-image@2x.png'),
          hero3: require('../assets/gb/hero-image@3x.png'),
        };
      default:
        return {
          hero: require('../assets/en/hero-image.png'),
          hero2: require('../assets/en/hero-image@2x.png'),
          hero3: require('../assets/en/hero-image@3x.png'),
        };
    }
  };
  /* eslint-enable global-require */

  return (
    <HomeHero.Wrapper>
      <div id="home-hero-v2">
        <div className="hero-block-title">
          <h1>{t('homepage.hero.title')}</h1>
        </div>
        <div className="hero-block-banner">
          <div className="floating-banner">
            <img src={assets().hero}
                 srcSet={`
                      ${assets().hero3} 3x,
                      ${assets().hero2} 2x,
                      ${assets().hero} 1x`
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
