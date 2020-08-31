// @flow
import React from 'react';
import Slider from 'react-slick';
import {withTranslation} from 'react-i18next';
import TextFit  from 'react-textfit'

import {slider_settings} from '../HomePage.constants';
import {type HomePageCarouselProps} from '../HomePage.types';
import HomepageFeatureLoader from '../loader/HompageFeatureLoader';
import styles from './HomePageCarousel.styles';
import placeholder from '@modules/coupons/assets/image-placeholder.png';
import { fireGTMEvent } from '@config/Utils';
import { currencyLocaleFormat } from '@modules/localization/i18n';

const StoreName = (storeName: string) => {
  return (storeName.length < 15)
    ? (<div className="storeName">{storeName}</div>)
    : (<TextFit mode="single" max="30" className="storeName">{storeName}</TextFit>);
}
const OverrideText = (overrideText: string) => {
  return (overrideText.length < 45)
    ? (<h3>{overrideText}</h3>)
    : (<TextFit mode="multi" className="overrideText">{overrideText}</TextFit>)
}
const HomePageCarousel = ({
  t,
  storesData,
  isLoaded,
  handler,
}: HomePageCarouselProps) => {
  const {homePageFeaturedStore, featuredStore} = storesData;

  const clickHandler = (img: string, link: string, storeName: string) => () => {
    handler(img, link, storeName);
    fireGTMEvent({
      pageCategory: 'Homepage',
      event: 'featured_deal_click',
      label: storeName,
    });
  };

  const getCashBack = item =>
    item.cashback_type === '1'
      ? currencyLocaleFormat(item.cashback)
      : item.cashback;

  return isLoaded ? (
    <HomePageCarousel.Wrapper>
      <HomePageCarousel.SliderWrapper className={"sliderCarousel"}>
        <Slider {...slider_settings}>
          {homePageFeaturedStore && homePageFeaturedStore.map((item, key) => {
            return (
              <HomePageCarousel.Slide key={key}>
                  <div className="img-content">
                    <img src={item.img} alt=""/>
                  </div>
                  <div className="content">
                    {StoreName(item.store_name)}
                    {OverrideText(item.override_text)}
                    <p>{item.cashback ? t('homepage.plusCashback', {cashback: getCashBack(item)}) : ''}</p>
                    <button onClick={clickHandler(item.img, item.link, item.store_name)}>{t('homepage.gtdn')}</button>
                  </div>
              </HomePageCarousel.Slide>
            )
          })}
        </Slider>
      </HomePageCarousel.SliderWrapper>
      <HomePageCarousel.TopStores>
        {
          featuredStore && featuredStore.map((item, key) => {
            return (
              <span
                onClick={clickHandler(item.offer_img, `/coupons/${item.short_name}`, item.short_name)}
                key={key}
              >
                <img src={item.offer_img}
                     onError={e => {
                       e.target.onerror = null;
                       e.target.src = placeholder;
                     }} alt={item.short_name}/>
              </span>
            )
          })
        }
      </HomePageCarousel.TopStores>

    </HomePageCarousel.Wrapper>
  ) : (<HomepageFeatureLoader/>);
};

styles(HomePageCarousel);

export default withTranslation()(HomePageCarousel);

