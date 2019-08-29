// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';
import ModalWrapper from './ModalWrapper';
import ModalInput from './ModalInput';
import ModalFooter from './ModalFooter';

import * as actions from '../AuthActions';

type ResetPasswordModalProps = {
  t: string => string,
  isActive: boolean,
  closeModal: Function,
  onRouteModal: Function,
  resetPassword: FormData => Promise<Object>,
};

const ResetPasswordModal = ({
  t,
  isActive,
  closeModal,
  onRouteModal,
  resetPassword,
}: ResetPasswordModalProps) => {
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [stage, setStage] = useState(1);

  const locationMap = {
    com: 'us',
    uk: 'gb',
    de: 'de',
    fr: 'fr',
  };
  const location = document.location.host.split('.');
  const country = locationMap[location[location.length - 1]] || 'us';

  const handleFormSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('country', country);

    await resetPassword(formData).then(response => {
      const { ok = false, msg } = response.payload.data;
      if (ok) {
        setEmailErrorMessage('');
        setStage(2);
      } else {
        setEmailErrorMessage(msg);
      }
    });
  };
  return (
    isActive && (
      <ModalWrapper
        title={t('auth.forgotPassword.title')}
        subTitle={t('auth.forgotPassword.subTitle')}
        isActive={isActive}
        closeModal={closeModal}
      >
        {stage === 1 && (
          <div>
            {emailErrorMessage && (
              <ErrorMessage>{emailErrorMessage}</ErrorMessage>
            )}
            <ResetPasswordModal.Form onSubmit={handleFormSubmit} noValidate>
              <ModalInput
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder={t('auth.forgotPassword.emailAddress')}
                required
              />
              <button>{t('auth.forgotPassword.button')}</button>
            </ResetPasswordModal.Form>
            <ModalFooter
              footerText={t('auth.forgotPassword.footer.text')}
              textButton={t('auth.forgotPassword.footer.button')}
              onRouteModal={onRouteModal}
            />
          </div>
        )}
        {stage === 2 && (
          <div>
            <SuccessMessage>
              {t('auth.forgotPassword.messages.sendPassword')}
            </SuccessMessage>
          </div>
        )}
      </ModalWrapper>
    )
  );
};

ResetPasswordModal.defaultProps = {
  isActive: true,
};

ResetPasswordModal.Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    display: block;
    padding: 1rem;
    width: 100%;
    background-color: ${props => props.theme.colors.pink};
    border-color: ${props => props.theme.colors.pinkDark};
    color: ${props => props.theme.colors.white};
    transition: background 0.5s ease;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: ${props => props.theme.colors.pinkDark};
    }

    ${breakpoint('xs')`
      padding: .8rem;
    `}

    ${breakpoint('sx')`
      padding: 1rem;
  `}
  }
`;

const mapDispatchToProps = {
  resetPassword: actions.resetPassword,
};

const enhance = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withTranslation(),
);

export default enhance(ResetPasswordModal);
