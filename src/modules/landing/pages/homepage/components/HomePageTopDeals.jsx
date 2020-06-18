// @flow
import React from 'react';
import {withTranslation} from 'react-i18next';
import {FaExternalLinkAlt} from 'react-icons/fa';
import type {HomePageTopDealsProps} from '../HomePage.types';
import { compose } from 'recompose';
import styles from './HomePageTopDeals.styles';
import TopDealsLoader from '../loader/TopDealsLoader';

const HomePageTopDeals = ({
  t,
  stores,
  isLoaded,
  handler,
}: HomePageTopDealsProps) => {

  return (
    <HomePageTopDeals.Wrapper>
      <HomePageTopDeals.Title>{t('homepage.topDeals')}</HomePageTopDeals.Title>
      { isLoaded ? (
        <HomePageTopDeals.List>
          {stores && stores.map((item, key) => (
            <HomePageTopDeals.Item key={key}>
            <span onClick={() => handler(item.img, item.link, item.store_name)}>
              <div className="wrapper">
                <FaExternalLinkAlt/>
                <figure>
                  <img src={item.img} alt=""/>
                </figure>
                <div className="details">
                  <small>{item.store_name}</small>
                  <p>{item.override_text}</p>
                </div>
                <div className="price">
                  {item.was_price && <span>{item.was_price}</span>}
                  {item.secondary_text && <b>{item.secondary_text}</b>}
                </div>
              </div>
            </span>
            </HomePageTopDeals.Item>
          ))}
        </HomePageTopDeals.List>
      ): (
        <TopDealsLoader/>
      )}
    </HomePageTopDeals.Wrapper>
  )
};

styles(HomePageTopDeals);

export default compose(
  withTranslation(),
)(HomePageTopDeals);
