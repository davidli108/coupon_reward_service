// @flow
import React from 'react';
import {withTranslation} from 'react-i18next';
import type {HomePageFeaturedDealProps} from '../HomePage.types';
import styles from './HomePageFeaturedDeal.styles';
import amazonImage from '../../../../../assets/homepage/amazon.jpg';

const HomePageFeaturedDeal = ({
  t,
  stores,
  isLoaded,
  handler,
}: HomePageFeaturedDealProps) => {

  return isLoaded && stores && (
    <HomePageFeaturedDeal.Wrapper>
      <HomePageFeaturedDeal.Deal>
        <HomePageFeaturedDeal.Brand>
          <img src={amazonImage} alt=""/>
        </HomePageFeaturedDeal.Brand>
        <HomePageFeaturedDeal.ProductWrapper>
          <HomePageFeaturedDeal.Product>
            <img src={stores.img} alt=""/>
          </HomePageFeaturedDeal.Product>
          <HomePageFeaturedDeal.Details>
            <h3>{stores.text_override}</h3>
            <p>{stores.secondary_text}</p>
            <span>
              <button onClick={() => handler(stores.img, stores.link, 'asdsadsa')}>
                {t('homepage.matd')}
              </button>
            </span>
          </HomePageFeaturedDeal.Details>
        </HomePageFeaturedDeal.ProductWrapper>
      </HomePageFeaturedDeal.Deal>
    </HomePageFeaturedDeal.Wrapper>
  );
};

styles(HomePageFeaturedDeal);

export default withTranslation()(HomePageFeaturedDeal);
