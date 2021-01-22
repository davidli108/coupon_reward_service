// @flow
import React from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import { Helmet } from 'react-helmet';

import { metaTags, openGraph } from '@config/SeoTags';
import HomeHowItWorks from '../home/components/HomeHowItWorks';
import UserReviewBlock from './components/UserReviewBlock';
import UserReviewHero from './components/UserReviewHero';
import UserReviewSlider from './components/UserReviewSlider';

import styles from './UserReview.styles.js';
import { type UserReviewProps } from './UserReview.types';
import { hreflangMetas } from '@modules/localization/i18n';

const UserReview = ({ t }: UserReviewProps) => {
  return (
    <UserReview.Wrapper>
      <Helmet
        title={t('user_review.page.title')}
        meta={[
          ...metaTags({ description: t('user_review.page.description') }),
          ...openGraph({
            title: t('user_review.page.title'),
            description: t('user_review.page.description'),
          }),
        ]}
      >
        {hreflangMetas.map(item => (
          <link
            rel="alternate"
            hreflang={item.hreflang}
            href={`${item.url}user-review`}
            key={item.hreflang}
          />
        ))}
      </Helmet>
      <UserReviewHero />
      <UserReviewSlider />
      <UserReviewBlock userContent={true} />
      <UserReviewBlock userContent={false} />
      <HomeHowItWorks />
    </UserReview.Wrapper>
  );
};

styles(UserReview);

export default compose(withTranslation())(UserReview);
