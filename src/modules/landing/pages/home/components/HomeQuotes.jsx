// @flow
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { withTranslation } from 'react-i18next';
import debounce from 'lodash.debounce';

import styles from './HomeQuotes.styles';

import { type HomeQuotesProps } from '../Home.types';

import Quote from '../assets/quote-02.svg';
import User2 from '../assets/users/user02.svg';
import User3 from '../assets/users/user03.svg';
import User4 from '../assets/users/user04.svg';
import User5 from '../assets/users/user05.svg';
import User6 from '../assets/users/user06.svg';

const user = [Quote, User2, User4, User5, User3, User6, User4];

const slider_settings = {
  centerMode: true,
  arrows: false,
  adaptiveHeight: true,
  focusOnSelect: true,
  centerPadding: '0',
  slidesToShow: 3,
  infinite: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
      },
    },
  ],
};

const HomeQuotes = ({
  t,
}: HomeQuotesProps
) => {
  const [showSlider, setShowSlider] = useState(true);

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
    <HomeQuotes.Wrapper>
      <h2 className="h2class text-center">{t('homepage.quotes.title')}</h2>
      {showSlider &&
        <Slider {...slider_settings}>
          {Array(7).fill(0).map((quote, key) => (
            <div className="quote-item" key={key}>
              <blockquote className="quote-block">
                <div className="quote-img">
                  <img src={user[key]} alt="user"/>
                </div>
                <p>
                  {t(`homepage.quotes.text0${key}`)}
                  <span className="quote-name">
                    {t(`homepage.quotes.name0${key}`)}
                  </span>
                </p>
              </blockquote>
            </div>
          ))}
        </Slider>
      }
    </HomeQuotes.Wrapper>
  );
};

styles(HomeQuotes);

export default withTranslation()(HomeQuotes);
