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

  return (
    <HomeHero.Wrapper>
      <div id="home-hero-v2">
        <div className="hero-block-title">
          <h1>{t('homepage.hero.title')}</h1>
        </div>
        <div className="hero-block-banner">
          <div className="floating-banner">
            <img src={`img/${langShort}/hero-image.png`}
                 srcSet={`
                      img/${langShort}/hero-image@3x.png 3x,
                      img/${langShort}/hero-image@2x.png 2x,
                      img/${langShort}/hero-image.png 1x`
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
