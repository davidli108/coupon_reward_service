// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

type NotFoundProps = {
  t: Function,
};

const NotFoundPage = ({ t }: NotFoundProps) => (
  <NotFoundPage.Wrapper>
    <Helmet>
      <title>{t('404.title')}</title>
    </Helmet>
    <NotFoundPage.Title>{t('404.subtitle')}</NotFoundPage.Title>
    <NotFoundPage.Section>{t('404.text')}</NotFoundPage.Section>
    <NotFoundPage.Link href="/">{t('404.action')}</NotFoundPage.Link>
  </NotFoundPage.Wrapper>
);

NotFoundPage.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1240px;
  height: calc(100vh - 60px);
  margin: 0 auto;
  padding: 15% 15px 0;
  text-align: center;
`;

NotFoundPage.Title = styled.h2`
  margin-bottom  : 20px;
  color          : black;
  font-size      : 32px;
  font-weight    : 700;
  line-height    : 1.4;
  letter-spacing : 0;

  ${breakpoint('sm')`
    font-size: 38px;
  `}

  ${breakpoint('md')`
    font-size: 45px;
  `}

  ${breakpoint('lg')`
    font-size: 50px;
  `}
`;

NotFoundPage.Section = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
  color: black;
  font-size: 16px;
  letter-spacing: 0;
`;

NotFoundPage.Link = styled.a`
  color: ${props => props.theme.colors.darkBlue};
  font-size: 16px;
  line-height: 1.5;

  &:hover {
    color: ${props => props.theme.colors.darkBlue};
  }
`;

export default withTranslation()(NotFoundPage);
