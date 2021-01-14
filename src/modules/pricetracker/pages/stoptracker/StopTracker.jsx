// @flow
import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { getProducts } from '@modules/pricetracker/PriceTrackerReducer';
import { metaTags, openGraph } from '@config/SeoTags';
import { type StopTrackerProps } from '../PriceTracker.types';
import styles from '../PriceTracker.styles';
import { fetchStopTracker } from '../../PriceTrackerActions';
import ErrorPage from '../ErrorPage';
import Loader from '@modules/pricetracker/common/loader/Loader';
import placeholder from '@modules/pricetracker/assets/placeholder.svg';

const StopTracker = ({
  t,
  match,
  products,
  fetchStopTracker,
}: StopTrackerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const type = match.params.type;

  useEffect(() => {
    fetchStopTracker(match.params.token, 'check').then(e => {
      if (e) {
        setIsLoaded(e.payload.data.ok);
        setLoading(e.payload.data.ok);
      }
    });
  }, []);

  return isLoaded ? (
    <StopTracker.Wrapper>
      <Helmet
        title={t('homepage.page.title')}
        meta={[
          ...metaTags({ description: t('homepage.page.title') }),
          ...openGraph({
            title: t('homepage.page.title'),
            description: t('homepage.page.description'),
          }),
        ]}
      />
      <StopTracker.Container>
        <StopTracker.Title>
          {type === 'product'
            ? t('price_tracker.delete_title')
            : t('price_tracker.delete_title_all')}
        </StopTracker.Title>

        {type === 'product'
          ? products.map(data => {
              return (
                <StopTracker.Product>
                  <img
                    src={data.image_url || placeholder}
                    alt="product-display"
                  />
                  <h3>{data.product_name}</h3>
                  <p>{data.product_short_desc}</p>
                </StopTracker.Product>
              );
            })
          : products.map(data => {
              return (
                <>
                  <StopTracker.ProductAll>
                    <StopTracker.ImageProduct>
                      <img
                        src={data.image_url || placeholder}
                        alt="product-display"
                      />
                    </StopTracker.ImageProduct>
                    <StopTracker.ProdDetails className="product-details">
                      <StopTracker.Date className="date">
                        {data.date}
                      </StopTracker.Date>
                      <StopTracker.ProdDescription className="product-description">
                        {data.product_name}
                      </StopTracker.ProdDescription>
                      <StopTracker.Price className="price">
                        <StopTracker.OldPrice className="old-price">
                          {t('homepage.was')}: <span>{data.old_price}</span>
                        </StopTracker.OldPrice>
                        <StopTracker.NewPrice className="new-price">
                          {t('homepage.now')}: {data.new_price}
                        </StopTracker.NewPrice>
                      </StopTracker.Price>
                    </StopTracker.ProdDetails>
                  </StopTracker.ProductAll>
                  <StopTracker.Divider show={data.divider} />
                </>
              );
            })}
        <StopTracker.Button>
          <StopTracker.Link href="/coupons">
            {t('price_tracker.dismiss')}
          </StopTracker.Link>
        </StopTracker.Button>
      </StopTracker.Container>
    </StopTracker.Wrapper>
  ) : loading ? (
    <Loader />
  ) : (
    <ErrorPage link={'stoptracker'} type={type} />
  );
};

styles(StopTracker);

const mapDispatchToProps = {
  fetchStopTracker: fetchStopTracker,
};

const mapStateToProps = state => ({
  products: getProducts(state),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation(),
)(StopTracker);
