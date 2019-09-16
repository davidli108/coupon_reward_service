// @flow
import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import preloader from '../../coupons/assets/preloader.svg';

import ErrorMessage from './ErrorMessage';
import ModalWrapper from './ModalWrapper';
import ModalSocial from './ModalSocial';
import ModalInput from './ModalInput';
import ModalFooter from './ModalFooter';
import { getIsAuthenticated } from '../AuthReducer';
import { getOrigin, isMainSite, setAuthCookie } from '../AuthHelper';
import { validateEmail } from '@modules/helpers/FormHelper';

import * as actions from '../AuthActions';

type SignInModalProps = {
  t: Function,
  isActive: boolean,
  closeModal: Function,
  onRouteModal: Function,
  onRouteModalReset: Function,
  signIn: FormData => Promise<Object>,
  authenticate: Function,
  isAuthenticated: boolean,
};

const SignInModal = ({
  t,
  isActive,
  closeModal,
  onRouteModal,
  onRouteModalReset,
  signIn,
  authenticate,
  isAuthenticated,
}: SignInModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setError] = useState(false);
  const [submitHandled, setSubmitHandled] = useState(false);
  const [isReq, setIsReq] = useState(false);
  const country = getOrigin();

  const handleFormSubmit = async e => {
    e.preventDefault();
    setError(false);
    setErrorMessage('');
    setIsReq(true);

    const payload = new FormData();
    payload.append('email', email);
    payload.append('password', password);
    payload.append('country', country);
    await signIn(payload)
      .then(response => {
        const { ok = false, msg, nonce } = response.payload.data;
        if (ok) {
          if (nonce && !isMainSite()) {
            const redirectPath =
              document.location.pathname + document.location.search;
            setAuthCookie(nonce, redirectPath, country);
          } else {
            setIsReq(false);
            authenticate();
            setSubmitHandled(true);
          }
        } else {
          setIsReq(false);
          setError(true);
          setErrorMessage(msg);
        }
      })
      .catch(() => {
        setIsReq(false);
        setError(true);
        setErrorMessage(t('auth.signUp.messages.errorTryAgain'));
      });
  };

  const onEmailChange = e => {
    const email = e.target.value;
    setEmail(email);
    validateEmail(e, t);
  };

  useEffect(() => {
    if (submitHandled) {
      if (isAuthenticated) {
        setError(false);
        setErrorMessage('');
        setEmail('');
        setPassword('');
        closeModal();
      } else {
        setError(true);
      }
    }
  }, [isAuthenticated, submitHandled]);

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
        <ErrorMessage>
          {errorMessage || t('auth.signUp.messages.errorTryAgain')}
        </ErrorMessage>
      )}
      <div>
        <SignInModal.Form onSubmit={handleFormSubmit}>
          <ModalInput
            name="email"
            value={email}
            onInvalid={onEmailChange}
            onInput={onEmailChange}
            onChange={onEmailChange}
            type="email"
            placeholder={t('auth.signIn.emailAddress')}
            required
          />
          <ModalInput
            name="password"
            value={password}
            onInvalid={t('auth.signIn.messages.inputEmpty')}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder={t('auth.signIn.password')}
            required
          />
          {isReq ? (
            <img src={preloader} alt="" />
          ) : (
            <button>{t('auth.signIn.button')}</button>
          )}
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

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  signIn: actions.signIn,
  authenticate: actions.authenticate,
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation(),
  withRouter,
);

export default enhance(SignInModal);
