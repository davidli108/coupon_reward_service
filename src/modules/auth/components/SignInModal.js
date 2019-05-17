// @flow
import * as R from 'ramda';
import React, { useState } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import ErrorMessage from './ErrorMessage';
import ModalWrapper from './ModalWrapper';
import ModalSocial from './ModalSocial';
import ModalInput from './ModalInput';
import ModalFooter from './ModalFooter';

import * as actions from '../AuthActions';

type SignInModalProps = {
  t: string => string,
  history: Object,
  isActive: boolean,
  closeModal: Function,
  onRouteModal: Function,
  onRouteModalReset: Function,
  signIn: FormData => Promise<Object>,
  fetchUser: () => Promise<Object>,
};

const SignInModal = ({
  t,
  history,
  isActive,
  closeModal,
  onRouteModal,
  onRouteModalReset,
  signIn,
  fetchUser,
}: SignInModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(false);

  const handleFormSubmit = async e => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('email', email);
    payload.append('password', password);

    const response = await signIn(payload);

    if (R.equals(R.path(['payload', 'data'])(response), null)) {
      setError(true);
    } else {
      fetchUser().then(res => {
        if (res.payload) {
          setError(false);
          setEmail('');
          setPassword('');
          closeModal();
          history.push('/');
        } else {
          setError(true);
        }
      });
    }
  };

  return (
    <ModalWrapper
      title={t('auth.signIn.title')}
      subTitle={t('auth.signIn.subTitle')}
      isActive={isActive}
      closeModal={closeModal}
    >
      <ModalSocial />
      <SignInModal.Or>
        <span>{t('auth.signIn.or')}</span>
      </SignInModal.Or>
      {isError && (
        <ErrorMessage>{t('auth.signUp.messages.errorTryAgain')}</ErrorMessage>
      )}
      <div>
        <SignInModal.Form onSubmit={handleFormSubmit}>
          <ModalInput
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder={t('auth.signIn.emailAddress')}
            required
          />
          <ModalInput
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder={t('auth.signIn.password')}
            required
          />
          <button>{t('auth.signIn.button')}</button>
        </SignInModal.Form>
        <SignInModal.PreFooter>
          <button onClick={onRouteModalReset}>
            {t('auth.signIn.forgotPassword')}
          </button>
        </SignInModal.PreFooter>
        <ModalFooter
          footerText={t('auth.signIn.footer.text')}
          textButton={t('auth.signIn.footer.button')}
          onRouteModal={onRouteModal}
        />
      </div>
    </ModalWrapper>
  );
};

SignInModal.defaultProps = {
  isActive: true,
};

SignInModal.Or = styled.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: 400;
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

SignInModal.Form = styled.form`
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

  button {
    color: ${props => props.theme.colors.blueExDark};
    border: none;
    cursor: pointer;
    background: transparent;
    outline: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const mapDispatchToProps = {
  signIn: actions.signIn,
  fetchUser: actions.fetchUser,
};

const enhance = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withTranslation(),
  withRouter,
);

export default enhance(SignInModal);
