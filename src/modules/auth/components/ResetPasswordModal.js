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
  title: string,
  subTitle: string,
  submitLabel: string,
  isActive: boolean,
  closeModal: Function,
  onRoutModal: Function,
  resetPassword: FormData => Promise<Object>,
};

const ResetPasswordModal = ({
  t,
  title,
  subTitle,
  submitLabel,
  isActive,
  closeModal,
  onRoutModal,
  resetPassword,
}: ResetPasswordModalProps) => {
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [stage, setStage] = useState(1);

  const handleFormSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);

    await resetPassword(formData);
    // if (R.path(['payload', 'data'])(response).includes('Invalid')) {
    // return setEmailErrorMessage('Email address doesn\'t exist in our database.');
    // }

    setEmailErrorMessage('');
    setStage(2);
  };
  return (
    isActive && (
      <ModalWrapper
        title={title}
        subTitle={subTitle}
        isActive={isActive}
        closeModal={closeModal}
      >
        {stage === 1 && (
          <div>
            {emailErrorMessage && (
              <ErrorMessage>{emailErrorMessage}</ErrorMessage>
            )}
            <ResetPasswordModal.Form onSubmit={handleFormSubmit}>
              <ModalInput
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder={t('auth.forgotPassword.emailAddress')}
                required
              />
              <button>{submitLabel}</button>

              <ModalFooter
                footerText={t('auth.footer.text')}
                textButton={t('auth.footer.button')}
                onRoutModal={onRoutModal}
              />
              <button>{submitLabel}</button>
            </ResetPasswordModal.Form>
            <ModalFooter
              footerText={t('auth.forgotPassword.footer.text')}
              textButton={t('auth.forgotPassword.footer.button')}
              onRoutModal={onRoutModal}
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
