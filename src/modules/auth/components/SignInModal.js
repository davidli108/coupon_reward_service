// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import ModalWrapper from './ModalWrapper';
import ModalSocial from './ModalSocial';
import ModalInput from './ModalInput';
import ModalFooter from './ModalFooter';

type SignInModalProps = {
  title: string,
  subTitle: string,
  submitLabel: string,
  isActive: boolean,
  closeModal: Function,
  onModalToSignUp: Function,
  onModalToReset: Function,
};

const SignInModal = ({
  title,
  subTitle,
  submitLabel,
  isActive,
  closeModal,
  onModalToSignUp,
  onModalToReset,
}: SignInModalProps) =>
  isActive && (
    <ModalWrapper
      title={title}
      subTitle={subTitle}
      isActive={isActive}
      closeModal={closeModal}
    >
      <ModalSocial />
      <SignInModal.Or>
        <span>or</span>
      </SignInModal.Or>
      <div>
        <SignInModal.Form>
          <ModalInput
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <ModalInput
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button>{submitLabel}</button>
        </SignInModal.Form>
        <SignInModal.PreFooter>
          <button onClick={onModalToReset}>Forgot Password?</button>
        </SignInModal.PreFooter>
        <ModalFooter
          footerText="Not A Member?"
          onModalToSignUp={onModalToSignUp}
        />
      </div>
    </ModalWrapper>
  );

SignInModal.Or = styled.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 2rem;

  ${breakpoint('xs')`
    padding: 1rem;
  `}

  ${breakpoint('md')`
    padding: 2rem;
  `}

  span {
    width: 4rem;
    display: block;
    position: relative;
    margin: 0 auto;
    background: #fff;
    text-align: center;
    z-index: 3;
  }

  &::before {
    content: '';
    transform: translate(-50%, -50%);
    z-index: 0;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

SignInModal.Form = styled.form`
  display: flex;
  flex-direction: column;

  > button {
    display: block;
    padding: 1rem;
    width: 100%;
    background-color: #ef65a0;
    border-color: #ee5797;
    color: #fff;
    transition: background 0.5s ease;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: #ee5797;
    }

    ${breakpoint('xs')`
      padding: .8rem;
    `}

    ${breakpoint('sx')`
      padding: 1rem;
`}
  }
`;

SignInModal.PreFooter = styled.span`
  display: block;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;

  ${breakpoint('xs')`
    margin-top: 1rem;
  `}

  ${breakpoint('sx')`
    margin-top: 2rem;
  `}

  > button {
    color: #337ab7;
    border: none;
    cursor: pointer;
    background: transparent;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default SignInModal;
