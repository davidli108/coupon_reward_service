// @flow
import React from 'react';
import { withTranslation } from 'react-i18next';
import { FaExternalLinkAlt } from 'react-icons/fa';

import type { HomePageFeaturedCashBackProps } from '../HomePage.types';
import styles from './HomePageFeaturedCashBack.styles';
import FeaturedCashbackLoader from '../loader/FeaturedCashbackLoader';
import { fireGTMEvent } from '@config/Utils';
import { currencyLocaleFormat } from '@modules/localization/i18n';

const HomePageFeaturedCashBack = ({
  t,
  stores,
  isLoaded,
  handler,
}: HomePageFeaturedCashBackProps) => {
  const clickHandler = (img: string, link: string, storeName: string) => () => {
    handler(img, link, storeName);
    fireGTMEvent({
      pageCategory: 'Homepage',
      event: 'cash_back_deal_click',
      label: storeName,
    });
  };

  const getCashBack = item => {
    return !item.cashback.includes('%')
      ? currencyLocaleFormat(item.cashback)
      : item.cashback;
  };

  return (
    <HomePageFeaturedCashBack.Wrapper>
      <HomePageFeaturedCashBack.Title>{t('homepage.featuredCashBack')}</HomePageFeaturedCashBack.Title>
      { isLoaded ? (
        <HomePageFeaturedCashBack.List>
          {stores && stores.map((item, key) => (
            <HomePageFeaturedCashBack.Item key={key}>
              <span onClick={clickHandler(item.offer_img, item.link, item.store_name)}>
                <div className="wrapper">
                  <FaExternalLinkAlt />
                  <figure>
                    <img src={item.offer_img} alt=""/>
                  </figure>
                  {item.was_price && <div className="details"><p>{t('homepage.was', {price: item.was_price})}</p></div>}
                  <div className="price">
                    <b>{t('homepage.uptoCashback', {cashback: getCashBack(item)})}</b>
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

export default withTranslation()(HomePageFeaturedCashBack);
