// @flow
import React from 'react';
import { withTranslation } from 'react-i18next';
import { FaExternalLinkAlt } from 'react-icons/fa';
import type { HomePageFeaturedCashBackProps } from '../HomePage.types';
import styles from './HomePageFeaturedCashBack.styles';
import FeaturedCashbackLoader from '../loader/FeaturedCashbackLoader';
import { compose } from 'recompose';

const HomePageFeaturedCashBack = ({
  t,
  stores,
  isLoaded,
  handler,
}: HomePageFeaturedCashBackProps) => {
  return (
    <HomePageFeaturedCashBack.Wrapper>
      <HomePageFeaturedCashBack.Title>{t('homepage.featuredCashBack')}</HomePageFeaturedCashBack.Title>
      { isLoaded ? (
        <HomePageFeaturedCashBack.List>
          {stores && stores.map((item, key) => (
            <HomePageFeaturedCashBack.Item key={key}>
              <span onClick={() => handler(item.offer_img, item.link, item.store_name)}>
                <div className="wrapper">
                  <FaExternalLinkAlt />
                  <figure>
                    <img src={item.offer_img} alt=""/>
                  </figure>
                  {item.was_price && <div className="details"><p>{t('homepage.was', {price: item.was_price})}</p></div>}
                  <div className="price">
                    <b>{t('homepage.uptoCashback', {cashback: item.cashback})}</b>
                  </div>
                  <small>{t('homepage.seeAllDeals', {storeName: item.store_name})}</small>
                </div>
              </span>
            </HomePageFeaturedCashBack.Item>
          ))}
        </HomePageFeaturedCashBack.List>
      ) : (
        <FeaturedCashbackLoader/>
      )}
    </HomePageFeaturedCashBack.Wrapper>
  );
};

styles(HomePageFeaturedCashBack);

export default compose(
  withTranslation(),
)(HomePageFeaturedCashBack);
