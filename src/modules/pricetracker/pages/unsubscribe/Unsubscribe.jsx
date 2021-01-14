// @flow
import React, {useEffect, useState} from 'react';
import {withTranslation} from 'react-i18next';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

import {
  getProducts,
} from '@modules/pricetracker/PriceTrackerReducer';
import {metaTags, openGraph} from '@config/SeoTags';
import {type UnsubscribeProps} from '../PriceTracker.types';
import styles from '../PriceTracker.styles';
import {fetchUnsubscribeTracker} from '../../PriceTrackerActions';
import ErrorPage from "../ErrorPage";
import Loader from "@modules/pricetracker/common/loader/Loader";
import placeholder from '@modules/pricetracker/assets/placeholder.svg';

const Unsubscribe = ({
 t,
 match,
 products,
 fetchUnsubscribeTracker,
}: UnsubscribeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const type = match.params.type;

  useEffect(() => {
    fetchUnsubscribeTracker(match.params.token, 'check').then((e) => {
      if (e) {
        setIsLoaded(e.payload.data.ok);
        setLoading(e.payload.data.ok);
      }
    })
  }, [])

  return isLoaded ? (
    <Unsubscribe.Wrapper>
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
      <Unsubscribe.Container>
          <Unsubscribe.Title>{type === 'product'
            ? t('price_tracker.unsubscribe_title')
            : t('price_tracker.unsubscribe_title_all')
          }</Unsubscribe.Title>

        {type === 'product'
          ? products.map((data) => {
            return (
            <Unsubscribe.Product>
              <img src={data.image_url || placeholder} alt="product-display" />
              <h3>{data.product_name}</h3>
              <p>{data.product_short_desc}</p>
            </Unsubscribe.Product>
            )
          })
          : products.map((data) => {
            return (
              <>
                <Unsubscribe.ProductAll>
                  <Unsubscribe.ImageProduct>
                    <img src={data.image_url || placeholder} alt="product-display" />
                  </Unsubscribe.ImageProduct >
                  <Unsubscribe.ProdDetails className="product-details">
                    <Unsubscribe.Date className="date">{data.date}</Unsubscribe.Date>
                    <Unsubscribe.ProdDescription className="product-description">{data.product_name}</Unsubscribe.ProdDescription>
                    <Unsubscribe.Price className="price">
                      <Unsubscribe.OldPrice className="old-price">Was: <span>{data.old_price}</span></Unsubscribe.OldPrice>
                      <Unsubscribe.NewPrice className="new-price">Now: {data.new_price}</Unsubscribe.NewPrice>
                    </Unsubscribe.Price>
                  </Unsubscribe.ProdDetails>
                </Unsubscribe.ProductAll>
                <Unsubscribe.Divider show={data.divider}/>
              </>
            )
          })
        }
        <Unsubscribe.Button>
          <Unsubscribe.Link href="/coupons">{t('price_tracker.dismiss')}</Unsubscribe.Link >
        </Unsubscribe.Button>

      </Unsubscribe.Container>
    </Unsubscribe.Wrapper>
  ) : loading ? (<Loader/>) : (<ErrorPage link={'unsubscribe'} type={type}/>);
};

styles(Unsubscribe);

const mapDispatchToProps = {
  fetchUnsubscribeTracker: fetchUnsubscribeTracker,
};

const mapStateToProps = state => ({
  products: getProducts(state),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation(),
)(Unsubscribe);
