// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import ModalWrapper from './ModalWrapper';
import ModalSocial from './ModalSocial';
import ModalInput from './ModalInput';
import ModalFooter from './ModalFooter';
type SignUpModalProps = {
  title: string,
  subTitle: string,
  submitLabel: string,
  linkTerms: string,
  isActive: boolean,
  closeModal: Function,
  onRoutModal: Function,
};

const SignUpModal = ({
  title,
  subTitle,
  submitLabel,
  linkTerms,
  isActive,
  closeModal,
  onRoutModal,
}: SignUpModalProps) => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log({ email });
    setEmail('');
  };
  const onAuthGoogle = () => {
    console.log('Auth Google');
  };

  const onAuthFacebook = () => {
    console.log('Auth Facebook');
  };

  return (
    isActive && (
      <ModalWrapper
        title={title}
        subTitle={subTitle}
        isActive={isActive}
        closeModal={closeModal}
      >
        <ModalSocial
          onAuthGoogle={onAuthGoogle}
          onAuthFacebook={onAuthFacebook}
        />
        <SignUpModal.Or>
          <span>or</span>
        </SignUpModal.Or>
        <div>
          <SignUpModal.Form onSubmit={handleFormSubmit}>
            <ModalInput
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              required
            />
            <button>{submitLabel}</button>
          </SignUpModal.Form>
          <SignUpModal.PreFooter>
            By joining, I agree to be added to daily mailing list and Piggy's
            <a href={linkTerms}>terms of service</a>
          </SignUpModal.PreFooter>
          <ModalFooter
            footerText="Already A Member?"
            textButton="Login"
            onRoutModal={onRoutModal}
          />
        </div>
      </ModalWrapper>
    )
  );
};

SignUpModal.Or = styled.div`
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
    background: ${props => props.theme.colors.white};
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
    border-bottom: 1px solid ${props => props.theme.colors.blackAlpha};
  }
`;

SignUpModal.Form = styled.form`
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

SignUpModal.PreFooter = styled.span`
  display: block;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.7rem;

  ${breakpoint('xs')`
    margin-top: 1rem;
  `}

  ${breakpoint('sx')`
    margin-top: 2rem;
  `}

  a {
    color: ${props => props.theme.colors.blueExDark};
    display: block;
    margin: 0 auto;
    border: none;
    cursor: pointer;
    background: transparent;
    outline: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default SignUpModal;
