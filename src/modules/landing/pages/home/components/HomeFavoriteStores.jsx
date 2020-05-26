// @flow

import React from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import AppConfig from '@config/AppConfig';
import { getHomeFeaturedStores } from '../../../LandingReducer';

import styles from './HomeFavoriteStores.styles';

import { type HomeFavoriteStoresProps } from '../Home.types';

const HomeFavoriteStores = ({
  t,
  i18n,
  featuredStores,
}: HomeFavoriteStoresProps
) => {
  const langShort = i18n.language;
  const day = '';
  const today = moment().format('dddd');

  /* eslint-disable global-require */
  const bg = () => {
    switch (langShort) {
      case 'de':
        return require('../assets/de/stores-bg.svg');
      case 'fr':
        return require('../assets/fr/stores-bg.svg');
      case 'gb':
        return require('../assets/gb/stores-bg.svg');
      default:
        return require('../assets/en/stores-bg.svg');
    }
  };
  /* eslint-enable global-require */

  return (
    <HomeFavoriteStores.Wrapper bg={bg()}>
      <div>
        <h2 className="h2class text-center">{t('homepage.worksWithStores')}</h2>
        <h4 className="h4class text-center" dangerouslySetInnerHTML={{__html: t('homepage.worksWithStoresInfo')}} />
        <h6 className="h6class text-center">{t(day)} {t('homepage.worksWithStoresTop', {today})}</h6>
        <div className="stores placements">
          {featuredStores && featuredStores.map((store, key) => (
            <div key={key} className="store-item">
              <Link to={`/coupon/${store.short_name}`}>
                <img src={store.offer_img} alt={store.store_name}/>
              </Link>
            </div>
          ))}
        </div>
        <div className="activateCashback">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${AppConfig.extension.url}?hl=${langShort}`}
            className="btn-green-v2"
          >
            {t('homepage.worksWithStoresActivate')}
          </a>
        </div>
      </div>
    </HomeFavoriteStores.Wrapper>
  );
};

styles(HomeFavoriteStores);

const mapStateToProps = (state) => ({
  featuredStores: getHomeFeaturedStores(state),
});

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(HomeFavoriteStores);
