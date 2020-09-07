// @flow

import React from 'react';
import { withTranslation } from 'react-i18next';

import AppConfig from '@config/AppConfig';
import styles from './UserReviewHero.styles';

import { type UserReviewHeroProps } from '../UserReview.types';

import Star from '../assets/star-hero.svg';

const UserReviewHero = ({ t, i18n }: UserReviewHeroProps) => {
  const langShort = i18n.language;

  return (
    <UserReviewHero.Wrapper>
      <div className="container">
        <div id="user-hero">
          <div className="hero-block-title">
            <h1>{t('user_review.hero.title')}</h1>
          </div>
          <div className="hero-block-banner">
            <div className="floating-banner">
              <img src={Star} alt="banner" />
            </div>
          </div>
          <div className="hero-block-info">
            <p>{t('user_review.hero.content')}</p>
            <p>{t('user_review.hero.contentLink')}</p>
            <div className="center-it-m">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${AppConfig.extension.url}?hl=${langShort}`}
                className="btn-green-v2"
              >
                {t('user_review.hero.btn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </UserReviewHero.Wrapper>
  );
};

styles(UserReviewHero);

export default withTranslation()(UserReviewHero);
