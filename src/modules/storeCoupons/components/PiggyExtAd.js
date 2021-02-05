// @flow
import * as R from 'ramda';
import * as React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';
import { withTranslation } from 'react-i18next';

import type { PiggyExtAdProps } from '../models/StorePage';
import AppConfig from '@config/AppConfig';
import { fireGTMEvent } from '@config/Utils';

// eslint-disable-next-line no-unused-vars
const renderStarsReview = rating => {
  const fullStarsCount = R.repeat('full', Math.floor(rating));
  const halfStarsCount = R.repeat('half', Math.ceil(rating % 1));
  const emptyStarsCount = R.repeat(
    'empty',
    5 - (fullStarsCount.length + halfStarsCount.length),
  );

  if (rating > 5) {
    return (
      <>
        {R.repeat('empty', 5).map((_, index) => (
          <MdStar key={`empty_${index}`} />
        ))}
      </>
    );
  }

  // since i need at least one source of dynamic information to create keys
  // and we are not allowed to use for loops - i looped it like this

  return (
    <>
      {fullStarsCount.map((x, index) => (
        <MdStar key={`${x}_${index}`} />
      ))}
      {halfStarsCount.map((x, index) => (
        <MdStarHalf key={`${x}_${index}`} />
      ))}
      {emptyStarsCount.map((x, index) => (
        <MdStarBorder key={`${x}_${index}`} />
      ))}
    </>
  );
};

const PiggyExtAd = ({
  t,
  match,
  i18n,
  stars,
  reviewsCount,
}: PiggyExtAdProps) => {
  const triggerEvent = () => {
    fireGTMEvent({
      pageCategory: 'Store Pages',
      event: 'click_to_add_extension',
      label: document.location.href,
    });
  };

  return (
    <PiggyExtAd.Wrapper>
      <PiggyExtAd.AddExtensionButton
        onClick={() => {
          triggerEvent();
          window.open(
            `${AppConfig.extension.url}?hl=${i18n.language}`,
            '_blank',
          );
        }}
      >
        {t('global.addToChrome')}
      </PiggyExtAd.AddExtensionButton>
      {reviewsCount && (
        <PiggyExtAd.Reviews>
          <div>{renderStarsReview(stars)}</div>
          <span>
            {reviewsCount} {t('global.reviews')}
          </span>
        </PiggyExtAd.Reviews>
      )}
    </PiggyExtAd.Wrapper>
  );
};

PiggyExtAd.Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${breakpoint('md')`
    width: auto;
    padding: 0 24px;
    flex-flow: row nowrap;
    flex: 1 0 auto;
    box-sizing: border-box;
  `}
`;

PiggyExtAd.AddExtensionButton = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  color: ${props => props.theme.colors.greenMain};
  background: ${props => props.theme.colors.white};
  padding: 0 20px;
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.montserrat} !important;

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.greenMain};
  }

  ${breakpoint('md')`
    letter-spacing: 0.2px;
    font-size: 16px;
    line-height: 20px;
  `}
`;

PiggyExtAd.Reviews = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  > div {
    display: flex;
    color: ${props => props.theme.colors.orangeDark};
  }

  > span {
    min-width: 100px;
    padding-top: 0;
    color: #c2c2c2;
    font-size: 13px;
    text-align: center;

    ${breakpoint('sx')`
      padding: 0 0 0 10px;
      text-align: left;
    `}
  }

  ${breakpoint('sm')`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  `}

  ${breakpoint('md')`
    margin-top: 20px;
    justify-content: center;
    padding: 0 0 0 10px;
  `}

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default compose(withTranslation(), withRouter)(PiggyExtAd);
