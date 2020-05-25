// @flow
import React from 'react';
import Slider from 'react-slick';
import {withTranslation} from 'react-i18next';
import { compose } from 'recompose';
import {slider_settings} from '../HomePage.constants';
import {type HomePageCarouselProps} from '../HomePage.types';
import HomepageFeatureLoader from '../loader/HompageFeatureLoader';
import styles from './HomePageCarousel.styles';
import TextFit  from 'react-textfit'

import placeholder from '@modules/coupons/assets/image-placeholder.png';

const StoreName = (storeName: string) => {
  return (storeName.length < 15)
    ? (<h1>{storeName}</h1>)
    : (<TextFit mode="single" className="storeName">{storeName}</TextFit>)
}
const HomePageCarousel = ({
  t,
  storesData,
  isLoaded,
  handler,
}: HomePageCarouselProps) => {
  const {homePageFeaturedStore, featuredStore} = storesData;

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
                    <h3>{item.override_text}</h3>
                    <p>{item.cashback ? t('homepage.plusCashback', {cashback: item.cashback}) : ''}</p>
                    <button onClick={() => handler(item.img, item.link, item.store_name)}>{t('homepage.gtdn')}</button>
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
              <span onClick={() => handler(item.offer_img, '/coupons/' + item.short_name, item.short_name)} key={key} >
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

export default compose( withTranslation())(HomePageCarousel);

