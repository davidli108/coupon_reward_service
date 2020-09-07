// @flow

import React from 'react';
import { withTranslation } from 'react-i18next';

import User01 from '../assets/users/user-01.svg';
import User02 from '../assets/users/user-02.svg';
import styles from './UserReviewBlock.styles';

import { type UserReviewBlockProps } from '../UserReview.types';

const UserReviewBlock = ({ t, i18n, userContent }: UserReviewBlockProps) => {
  const langShort = i18n.language;

  /* eslint-disable global-require */
  const banner = number => {
    switch (langShort) {
      case 'de':
        return number === 1
          ? require('../assets/de/hero-01.svg')
          : require('../assets/de/hero-02.svg');
      case 'fr':
        return number === 1
          ? require('../assets/fr/hero-01.svg')
          : require('../assets/fr/hero-02.svg');
      case 'gb':
        return number === 1
          ? require('../assets/gb/hero-01.svg')
          : require('../assets/gb/hero-02.svg');
      default:
        return number === 1
          ? require('../assets/en/hero-01.svg')
          : require('../assets/en/hero-02.svg');
    }
  };
  /* eslint-enable global-require */

  const userContentCase = () => {
    switch (userContent) {
      case true:
        return {
          user_info: User01,
          banner: banner(1),
          name: t('user_review.firstblock.name'),
          description: t('user_review.firstblock.description'),
          content: t('user_review.firstblock.content'),
          flow_block: 'left',
        };
      default:
        return {
          user_info: User02,
          banner: banner(2),
          name: t('user_review.secondblock.name'),
          description: t('user_review.secondblock.description'),
          content: t('user_review.secondblock.content'),
          flow_block: 'right',
        };
    }
  };

  return (
    <UserReviewBlock.Wrapper>
      <UserReviewBlock.UserHero className={userContentCase().flow_block}>
        <div className="hero-block-title">
          <img src={userContentCase().user_info} alt={userContentCase().name} />
          <h5>{userContentCase().name}</h5>
          <h3>{userContentCase().description}</h3>
          <p>{userContentCase().content}</p>
        </div>
        <div className="floating-banner">
          <img
            src={userContentCase().banner}
            alt={userContentCase().description}
          />
        </div>
      </UserReviewBlock.UserHero>
    </UserReviewBlock.Wrapper>
  );
};

styles(UserReviewBlock);

export default withTranslation()(UserReviewBlock);
