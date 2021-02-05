// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import error from '@modules/pricetracker/assets/error.svg';

type NotFoundProps = {
  t: Function,
  link: string,
  type: string,
};

const ErrorPage = ({ t, link, type }: NotFoundProps) => (
  <ErrorPage.Wrapper>
    <Helmet>
      <title>{t('404.title')}</title>
    </Helmet>
    {link === 'unsubscribe' ? (
      <ErrorPage.Title>
        {type === 'product'
          ? t('price_tracker.done_unsubscribe')
          : t('price_tracker.done_unsubscribe_all')}
      </ErrorPage.Title>
    ) : link === 'extend' ? (
      <>
        <ErrorPage.Title>{t('price_tracker.extend_done')}</ErrorPage.Title>
        <ErrorPage.Title>{t('price_tracker.extend_try')}</ErrorPage.Title>
      </>
    ) : (
      <ErrorPage.Title>
        {type === 'product'
          ? t('price_tracker.done_delete')
          : t('price_tracker.done_delete_all')}
      </ErrorPage.Title>
    )}
    <img className="product-image" src={error} alt="error-display" />
    <ErrorPage.Link href="/coupons">
      {t('price_tracker.dismiss')}
    </ErrorPage.Link>
  </ErrorPage.Wrapper>
);

ErrorPage.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1240px;
  height: calc(100vh - 60px);
  margin: 0 auto;
  text-align: center;

  @media (min-width: 550px) {
    h2 {
      font-size: 25px;
      max-width: 445px;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.9375rem;
      max-width: 542px;
    }
  }

  @media (min-width: 992px) {
    h2 {
      max-width: 612px;
    }
  }
`;

ErrorPage.Title = styled.h2`
  color: #29343c;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  align-items: center;
  text-align: center;

  margin: 57px auto 40px;
  max-width: 290px;
`;

ErrorPage.Section = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
  color: black;
  font-size: 16px;
  letter-spacing: 0;
`;

ErrorPage.Link = styled.a`
  border: 2px solid #2c9e25;
  background: #f5fff4;
  color: #2c9e25;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 50px 57px;
`;

export default withTranslation()(ErrorPage);
