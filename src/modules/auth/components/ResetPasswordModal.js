// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import ModalWrapper from './ModalWrapper';
import ModalInput from './ModalInput';
import ModalFooter from './ModalFooter';

type ResetPasswordModalProps = {
  t: string => string,
  title: string,
  subTitle: string,
  submitLabel: string,
  isActive: boolean,
  closeModal: Function,
  onRoutModal: Function,
};

const ResetPasswordModal = ({
  t,
  title,
  subTitle,
  submitLabel,
  isActive,
  closeModal,
  onRoutModal,
}: ResetPasswordModalProps) => {
  const [email, setEmail] = useState('');
  const handleFormSubmit = e => {
    e.preventDefault();
    console.log({ email });
    setEmail('');
  };
  return (
    isActive && (
      <ModalWrapper
        title={title}
        subTitle={subTitle}
        isActive={isActive}
        closeModal={closeModal}
      >
        <div>
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
          </ResetPasswordModal.Form>
          <ModalFooter
            footerText={t('auth.footer.text')}
            textButton={t('auth.footer.button')}
            onRoutModal={onRoutModal}
          />
        </div>
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

export default withTranslation()(ResetPasswordModal);
