//@flow
import * as R from 'ramda';
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';

import type { PiggyExtAdProps } from '../models/StorePage';

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

const PiggyExtAd = ({ stars, reviewsCount }: PiggyExtAdProps) => {
  return (
    <PiggyExtAd.Wrapper>
      <PiggyExtAd.Reviews>
        <div>{renderStarsReview(stars)}</div>
        <span>{reviewsCount} reviews</span>
      </PiggyExtAd.Reviews>
      <PiggyExtAd.AddExtensionButton>
        Add to Chrome
      </PiggyExtAd.AddExtensionButton>
    </PiggyExtAd.Wrapper>
  );
};

PiggyExtAd.Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;

  width: 100%;
  padding-top: 25px;

  ${breakpoint('xl')`
    width: 25%;
    max-width: 254px;
    min-width: 160px;

    flex-flow: column-reverse nowrap;
    align-items: center;
  `}
`;

PiggyExtAd.Reviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 3px;

  ${breakpoint('xl')`
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 100%;
    padding-top: 10px;
  `}

  > div {
    display: flex;
    color: #00cbe9;
  }

  > span {
    padding-top: 15px;
    color: #c2c2c2;
    font-size: 13px;
    ${breakpoint('xl')`
      padding: 0 0 0 10px;
    `}
  }
`;

PiggyExtAd.AddExtensionButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #7ed321;
  border-radius: 4px;

  font-weight: bold;
  font-size: 18px;
  color: #7ed321;

  margin-left: auto;
  padding: 17px 13px;

  cursor: pointer;

  ${breakpoint('xl')`
    width: calc(100% - 26px);
  `}
`;

export default PiggyExtAd;
