// @flow
import React, { useState, useEffect } from 'react';
import ouibounce from 'ouibounce';
import { withTranslation } from 'react-i18next';
import Cookie from 'js-cookie';
import moment from 'moment';

import { updateElementClassList } from '@config/Utils';
import AppConfig from '@config/AppConfig';

import PiggyModalIcon from './assets/piggy-modal-icon.svg';
import styles from './BonusModal.styles';

type BonusModalProps = {
  data: Object,
  i18n: Function,
};

const BonusModal = ({ data, i18n }: BonusModalProps) => {
  const html: any = document && document.documentElement;
  const [exitIntent, setExitIntent] = useState(null);
  const [programIndex, setProgramIndex] = useState(0);
  const [bonusProgram, setBonusProgram] = useState(null);
  const [promiseId, setPromiseId] = useState(null);

  const handleMouseLeave = () => {
    if (programIndex < data.ApplicableBonusModals.length - 1) {
      shakeModal();
      exitIntent && exitIntent.disable();
      setExitIntent(null);
      setTimeout(() => {
        setProgramIndex(programIndex => programIndex + 1);
      }, 1340);
    }
  };

  const shakeModal = () => {
    updateElementClassList({
      element: '#modal',
      className: 'zoomShake',
      add: false,
    });

    setTimeout(() => {
      updateElementClassList({
        element: '#modal',
        className: 'zoomShake',
        add: true,
      });
    }, 20);

    updateElementClassList({
      element: '#title2',
      className: 'zoom',
      add: false,
    });

    setTimeout(() => {
      updateElementClassList({
        element: '#title2',
        className: 'zoom',
        add: true,
      });
    }, 350);
  };

  const activateExitIntentListener = delay => {
    if (!exitIntent) {
      if (html) {
        setExitIntent(
          ouibounce(html, {
            timer: delay,
            aggressive: true,
            callback: handleMouseLeave,
          }),
        );
      }
    }
  };

  const createBonusPromise = bonusProgramId => {
    const promiseData = {
      bonus_program_id: bonusProgramId,
      promise_status: 0,
    };

    window.bonus
      .createBonusPromise(promiseData)
      .then(responseBody => {
        setPromiseId(responseBody.promise_id);
      })
      .catch(error => {
        console.log('Error Creating Promise ' + error);
      });
  };

  const handleButtonClick = () => {
    const extensionUrl = `${AppConfig.extension.url}?hl=${i18n.language}`;
    window.open(extensionUrl, '_blank');

    window.bonus
      .acknowledgeBonusPromise(promiseId)
      .then(data => {
        if (data.success) {
          Cookie.set('reinstalled', false, {
            expires: moment(data.expires).toDate(),
          });
        }
      })
      .catch(error => {
        console.log('Error Acknowledgeding Promise ' + error);
      });
  };

  useEffect(() => {
    if (programIndex < data.ApplicableBonusModals.length) {
      setBonusProgram(data.ApplicableBonusModals[programIndex]);
      if (programIndex === 0) {
        shakeModal();
      }
      activateExitIntentListener(8000);
    }
  }, [programIndex]);

  useEffect(() => {
    if (bonusProgram) {
      createBonusPromise(bonusProgram.bonus_program_id);
    }
  }, [bonusProgram]);

  return (
    <>
      {bonusProgram && (
        <BonusModal.Wrapper>
          <BonusModal.Container id="modal">
            <BonusModal.Title>
              <BonusModal.TitleRegular id="title1">
                {bonusProgram.modal_header_plain + ' '}
              </BonusModal.TitleRegular>
              <BonusModal.TitleColored id="title2">
                {bonusProgram.modal_header_highlight}
              </BonusModal.TitleColored>
            </BonusModal.Title>
            <BonusModal.Image
              src={
                bonusProgram.modal_image !== ''
                  ? bonusProgram.modal_image
                  : PiggyModalIcon
              }
            ></BonusModal.Image>
            <BonusModal.BoldLine>
              {bonusProgram.modal_line1}
            </BonusModal.BoldLine>
            <BonusModal.Line>{bonusProgram.modal_line2}</BonusModal.Line>
            <BonusModal.Line addBottomMargin={true}>
              {bonusProgram.modal_line3}
            </BonusModal.Line>
            <BonusModal.Button onClick={handleButtonClick}>
              {bonusProgram.modal_main_cta}
            </BonusModal.Button>
          </BonusModal.Container>
        </BonusModal.Wrapper>
      )}
    </>
  );
};

styles(BonusModal);

export default withTranslation()(BonusModal);
