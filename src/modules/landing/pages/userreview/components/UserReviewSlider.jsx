// @flow
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { withTranslation } from 'react-i18next';
import debounce from 'lodash.debounce';
import AppConfig from '@config/AppConfig';

import styles from './UserReviewSlider.styles';

import { type UserReviewSliderProps } from '../UserReview.types';

import User1 from '../assets/users/user-01.svg';
import User2 from '../assets/users/user-02.svg';
import User3 from '../assets/users/user-03.svg';
import User4 from '../assets/users/user-04.svg';
import User5 from '../assets/users/user-05.svg';
import User6 from '../assets/users/user-06.svg';
import Star from '../assets/star.svg';

const user = [User3, User2, User4, User5, User6, User1];

const sliderSettings = {
  arrows: false,
  slidesToShow: 6,
  infinite: false,
  variableWidth: false,
  swipe: false,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
      },
    },
  ],
};

const UserReviewSlider = ({ t, i18n }: UserReviewSliderProps) => {
  const [showSlider, setShowSlider] = useState(true);
  const langShort = i18n.language;
  useEffect(() => {
    window.addEventListener('resize', refreshSlider);

    return () => {
      window.removeEventListener('resize', refreshSlider);
    };
  }, []);

  const refreshSlider = debounce(() => {
    setShowSlider(false);
    setTimeout(() => {
      setShowSlider(true);
    });
  }, 300);

  return (
    <UserReviewSlider.Wrapper>
      <div className="container">
        {showSlider && (
          <Slider {...sliderSettings}>
            {user.map((quote, key) => (
              <div className="quote-item" key={key}>
                <div className="quote-block">
                  <div className="quote-img">
                    <img src={user[key]} alt="user" />
                  </div>
                  <p>
                    <span className="quote-name">
                      {t(`user_review.review.name0${key}`)}
                    </span>
                  </p>
                  <div className="reviews">
                    <div className="star-rate">
                      <img src={Star} alt="star-rate" />
                      <img src={Star} alt="star-rate" />
                      <img src={Star} alt="star-rate" />
                      <img src={Star} alt="star-rate" />
                      <img src={Star} alt="star-rate" />
                    </div>
                    <span>{t(`user_review.review.rate`)}</span>
                  </div>
                  <p className="quote-content">
                    {t(`user_review.review.text0${key}`)}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        )}
        <div className="center-it">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${AppConfig.extension.url}?hl=${langShort}`}
            className="btn-green-v2"
          >
            {t('user_review.review.btn')}
          </a>
        </div>
      </div>
    </UserReviewSlider.Wrapper>
  );
};

styles(UserReviewSlider);

export default withTranslation()(UserReviewSlider);
