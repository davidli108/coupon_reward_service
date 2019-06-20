// @flow
import * as R from 'ramda';
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';
import { withTranslation } from 'react-i18next';

import type { PiggyExtAdProps } from '../models/StorePage';

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

const PiggyExtAd = ({ t, i18n, stars, reviewsCount }: PiggyExtAdProps) => {
  return (
    <PiggyExtAd.Wrapper>
      <PiggyExtAd.AddExtensionButton
        onClick={() => {
          window.open(
            `https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba?hl=${
              i18n.language
            }`,
            '_blank',
          );
        }}
      >
        {t('global.addToChrome')}
      </PiggyExtAd.AddExtensionButton>
      <PiggyExtAd.Reviews>
        <div>{renderStarsReview(stars)}</div>
        <span>
          {reviewsCount} {t('global.reviews')}
        </span>
      </PiggyExtAd.Reviews>
    </PiggyExtAd.Wrapper>
  );
};

PiggyExtAd.Wrapper = styled.div`
  width: 100%;
  margin-right: 20px;
  display: flex;
  flex-direction: row-reverse;
  padding-top: 25px;

  ${breakpoint('md')`
    width: 300px;
    flex-direction: column;
  `}
`;

PiggyExtAd.AddExtensionButton = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #7ed321;
  border-radius: 4px;
  font-weight: 500;
  font-size: 18px;
  color: #7ed321;
  cursor: pointer;

  ${breakpoint('sm')`
    width: 100%;
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
    color: #00cbe9;
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
`;

export default withTranslation()(PiggyExtAd);
