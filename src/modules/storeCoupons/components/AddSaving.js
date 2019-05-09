// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import DollarImg from './assets/DollarImg';
import ClockIcon from './assets/ClockIcon';

type AddSavingProps = {
  t: Function,
  i18n: Object,
};

const AddSaving = ({ t, i18n }: AddSavingProps) => (
  <AddSaving.Wrapper>
    <AddSaving.BonusLabel>
      <p>{t('cashbackStores.piggyBonus')}</p>
    </AddSaving.BonusLabel>
    <DollarImg />
    <AddSaving.InfoWrapper>
      <AddSaving.TextWrapper>
        <AddSaving.AddSavingLabel>
          {t('cashbackStores.addSaving')}
        </AddSaving.AddSavingLabel>
        <AddSaving.Description>
          {t('cashbackStores.instantlyApplyAll')}
        </AddSaving.Description>
      </AddSaving.TextWrapper>
      <AddSaving.ButtonOfferWrapper>
        <AddSaving.ActivateButton
          href={`https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba?hl=${
            i18n.language
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('cashbackStores.activateSavings')}
        </AddSaving.ActivateButton>
        <AddSaving.LimitedOffer>
          <p>{t('cashbackStores.limitedOffer')}</p>
          <ClockIcon />
        </AddSaving.LimitedOffer>
      </AddSaving.ButtonOfferWrapper>
    </AddSaving.InfoWrapper>
  </AddSaving.Wrapper>
);

AddSaving.Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed #adb8c0;
  border-radius: 5px;

  ${breakpoint('sx')`
    flex-direction: row;
  `}
`;

AddSaving.BonusLabel = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #f9fafc;

  p {
    color: #00cbe9;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
  }

  ${breakpoint('sx')`
    display: none;
  `}
`;

AddSaving.InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoint('sx')`
    width: 250px;
    margin: 20px 30px 20px auto;
  `}

  ${breakpoint('md')`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
  `}
`;

AddSaving.TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoint('sx')`
    align-items: flex-start;
  `}

  ${breakpoint('sm')`
    align-items: flex-start;
  `}
`;

AddSaving.ButtonOfferWrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoint('md')`
    min-width: auto;
    margin-left: auto;
    padding-right: 30px;
  `}
`;

AddSaving.AddSavingLabel = styled.p`
  line-height: 60px;
  font-size: 32px;
  font-weight: bold;
  color: #62707b;

  ${breakpoint('sm')`
    font-size: 35px;
  `}
`;

AddSaving.Description = styled.p`
  width: 80%;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
  color: #62707b;

  ${breakpoint('sx')`
    width: 100%;
    text-align: left;
  `}
`;

AddSaving.ActivateButton = styled.a`
  min-width: 90%;
  margin: 10px 0;
  padding: 10px 0;
  border: 2px solid #7ed321;
  box-sizing: border-box;
  border-radius: 4px;
  letter-spacing: 0.5px;
  color: #7ed321;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;

  ${breakpoint('sx')`
    min-width: 100%;
  `}

  ${breakpoint('sm')`
    padding: 10px 40px;
  `}

  ${breakpoint('md')`
    padding: 10px 18px;
    min-width: 200px;
  `}
`;

AddSaving.LimitedOffer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;

  p {
    color: #c2c2c2;
  }
`;

export default withTranslation()(AddSaving);
