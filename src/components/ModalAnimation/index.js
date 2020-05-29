// @flow
import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { withTranslation } from 'react-i18next';

// Assets
import FlyPiggy from './assets/fly-piggy.svg';
import Arrow from './assets/arrow.svg';
import Icon from './assets/piggy-icon.svg';
import Piggy from './assets/piggy.svg';

// Styles
import styles from './ModalAnimation.styles';

type ModalAnimationProps = {
  t: Function,
  storeName: string,
  storeLogo: string,
  handleClick: Function,
  dismissModal: Function,
};

const ModalAnimation = ({
  t,
  storeName,
  storeLogo,
  handleClick,
  dismissModal,
}: ModalAnimationProps) => {
  const [renderedComponent, setRenderedComponent] = useState(1);

  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  useEffect(() => {
    setRenderedComponent(randomIntFromInterval(1, 3));
  }, []);

  return renderedComponent !== 3 ? (
    <ModalAnimation.Wrapper>
      <MdClose onClick={dismissModal} />
      <ModalAnimation.AnimateModalLogo src={Icon} />
      <ModalAnimation.FirstAnimateModal>
        {renderedComponent === 1 && <h1>{t('coupons.animateModal.title')}</h1>}
        {renderedComponent === 2 && <ModalAnimation.TitleElement t={t} />}
        <div className="animation-modal-block">
          <div className="animate-modal-flying-piggy">
            <img src={FlyPiggy} alt={storeName} />
          </div>
          <div className="progress-modal-circle">
            <div className="element" />
            <div className="animate-modal-circle">
              <div className="mask full">
                <div className="fill" />
              </div>
              <div className="mask half">
                <div className="fill" />
              </div>
              <div className="inside-circle" />
            </div>
          </div>
          <div className="animate-modal-clouds" />
        </div>
        <p>{t('coupons.animateModal.hangon')}</p>
      </ModalAnimation.FirstAnimateModal>
      <ModalAnimation.SecondAnimateModal>
        <h2>{t(`coupons.animateModal${renderedComponent}.subTitle`)}</h2>
        <h4
          dangerouslySetInnerHTML={{
            __html: t(`coupons.animateModal${renderedComponent}.addPiggy`),
          }}
        />
        <h5>{t('coupons.animateModal.save')}</h5>
        <button onClick={handleClick} className="btn-animate-modal">
          {t(`coupons.animateModal${renderedComponent}.btnFree`)}
          <img src={Arrow} alt={storeName} />
        </button>
      </ModalAnimation.SecondAnimateModal>
    </ModalAnimation.Wrapper>
  ) : (
    <ModalAnimation.Content>
      <MdClose onClick={dismissModal} />
      <ModalAnimation.Icon src={Icon} />
      <h2>{t('coupons.activateModal.title')}</h2>
      <ModalAnimation.Store>
        <img src={storeLogo} alt={storeName} />
      </ModalAnimation.Store>
      <div>{t('coupons.activateModal.content')}</div>
      <p>{t('coupons.activateModal.couponAbout', { storeName })}</p>
      <button onClick={handleClick}>{t('coupons.activateModal.button')}</button>
      <ModalAnimation.Piggy src={Piggy} />
    </ModalAnimation.Content>
  );
};

styles(ModalAnimation);

export default withTranslation()(ModalAnimation);
