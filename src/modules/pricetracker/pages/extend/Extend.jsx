// @flow
import React, {useEffect, useState} from 'react';
import {withTranslation} from 'react-i18next';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

import {metaTags, openGraph} from '@config/SeoTags';
import {type ExtendProps} from '../PriceTracker.types';
import styles from './Extend.styles';
import placeholder from '@modules/coupons/assets/image-placeholder.png';
import {fetchUserTracker} from '../../PriceTrackerActions';
import NotFoundPage from "../ErrorPage";
import Loader from "../../common/loader/Loader";

const Extend = ({
  t,
  match,
  fetchUserTracker,
}: ExtendProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    'image_url': '',
    'title': '',
    'description': '',
  });

  useEffect(() => {
    fetchUserTracker(match.params.token).then((e) => {
      if (e) {
        setLoading(e.payload.data.status === 'success')
        setIsLoaded(e.payload.data.status === 'success')
        setData(e.payload.data.data)
      }
    });
  }, []);

  return isLoaded ? (
    <Extend.Wrapper>
      <Helmet
        title={t('homepage.page.title')}
        meta={[
          ...metaTags({description: t('homepage.page.title')}),
          ...openGraph({
            title: t('homepage.page.title'),
            description: t('homepage.page.description'),
          }),
        ]}
      />
      <Extend.Container>
        <h2>{t('price_tracker.extend')}</h2>
        <Extend.Product>
          <img className="product-image"
               src={data.image_url || placeholder }
               onError={e => {
                 e.target.onerror = null;
                 e.target.src = placeholder;
               }}
               alt="" />
            <h3 className="product-name">{data.title}</h3>
            <p className="product-description">{data.description}</p>
        </Extend.Product>
        <a href={"/coupons"}>
          <Extend.Dismiss>{ t('price_tracker.dismiss')}</Extend.Dismiss>
        </a>
      </Extend.Container>
    </Extend.Wrapper>
  ) : loading ? (<Loader />) : (<NotFoundPage link="extend"/>);
};

styles(Extend);

const mapDispatchToProps = {
  fetchUserTracker: fetchUserTracker,
};

export default compose(
  connect(null, mapDispatchToProps),
  withTranslation()
)(Extend);
