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
import preloader from '../../coupons/assets/preloader.svg';

import * as actions from '../AuthActions';
import { getUserID, getUserPW } from '../AuthReducer';
import { getOrigin, isMainSite, setAuthCookie } from '../AuthHelper';
import { validateEmail } from '@modules/helpers/FormHelper';

type SignUpModalProps = {
  t: Function,
  linkTerms: string,
  isActive: boolean,
  closeModal: Function,
  onRouteModal: Function,
  signUp: Function,
  fetchUser: Function,
  userID: number,
  userPW: string,
  authenticate: Function,
  checkEmailAvailable: Function,
  history: Object,
};

const SignUpModal = ({
  t,
  linkTerms,
  isActive,
  closeModal,
  onRouteModal,
  signUp,
  userID,
  userPW,
  checkEmailAvailable,
  history,
  fetchUser,
  authenticate,
}: SignUpModalProps) => {
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [stage, setStage] = useState(1);
  const [isReq, setIsReq] = useState(false);
  const country = getOrigin();

  const [password, setPassword] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleFormSubmit = async e => {
    e.preventDefault();

    setEmailErrorMessage('');

    if (stage === 1) {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('country', country);

      setIsReq(true);
      const response = await checkEmailAvailable(formData);
      if (response) setIsReq(false);

      if (response.error) {
        setEmailErrorMessage(t('auth.signUp.messages.errorTryAgain'));
        return;
      }

      if (!R.path(['payload', 'data', 'ok'])(response)) {
        setEmailErrorMessage(R.path(['payload', 'data', 'msg'])(response));
      } else {
        setStage(2);
      }
    }

    if (stage === 2) {
      if (password.password !== password.confirmPassword) {
        return setPasswordErrorMessage(
          t('auth.signUp.messages.passwordNotMatch'),
        );
      }

      if (password.password.length < 8) {
        return setPasswordErrorMessage(t('auth.signUp.messages.shortPassword'));
      }

      setPasswordErrorMessage('');

      const formData = new FormData();
      formData.append('password', password.password);
      formData.append('password2', password.confirmPassword);
      formData.append('country', country);
      formData.append('email', email);

      signUp(formData)
        .then(response => {
          const { ok = false, nonce } = response.payload.data;

          if (ok) {
            if (nonce && !isMainSite()) {
              const redirectPath =
                document.location.pathname + document.location.search;
              setAuthCookie(nonce, redirectPath, country);
            } else {
              fetchUser().then(() => {
                closeModal();
                authenticate();
              });
            }
          } else {
            setPasswordErrorMessage(t('auth.signUp.messages.errorTryAgain'));
          }
        })
        .catch(() => {
          setPasswordErrorMessage(t('auth.signUp.messages.errorTryAgain'));
        });
    }
  };

  const handlePasswordChange = e => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const onEmailChange = e => {
    const email = e.target.value;
    setEmail(email);
    validateEmail(e, t);
  };

  return (
    isActive && (
      <ModalWrapper
        title={t('auth.signUp.title')}
        subTitle={t('auth.signUp.subTitle')}
        isActive={isActive}
        closeModal={closeModal}
      >
        <ModalSocial />
        <SignUpModal.Or>
          <span>{t('auth.signUp.or')}</span>
        </SignUpModal.Or>
        {emailErrorMessage && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
        {passwordErrorMessage && (
          <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
        )}
        <div>
          <SignUpModal.Form onSubmit={handleFormSubmit}>
            {stage === 1 && (
              <ModalInput
                name="email"
                value={email}
                onInvalid={onEmailChange}
                onInput={onEmailChange}
                onChange={onEmailChange}
                type="email"
                placeholder={t('auth.signUp.emailAddress')}
                required
              />
            )}
            {stage === 2 && (
              <div style={{ width: '100%' }}>
                <ModalInput
                  name="password"
                  value={password.password}
                  onInvalid={t('auth.signIn.messages.inputEmpty')}
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder={t('auth.signUp.password')}
                  required
                />
                <ModalInput
                  name="confirmPassword"
                  value={password.confirmPassword}
                  onInvalid={t('auth.signIn.messages.inputEmpty')}
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder={t('auth.signUp.confirmPassword')}
                  required
                />
              </div>
            )}
            {isReq ? (
              <img src={preloader} alt="" />
            ) : (
              <button>{t('auth.signUp.button')}</button>
            )}
          </SignUpModal.Form>
          <SignUpModal.PreFooter>
            {t('auth.signUp.preFooter.label')}{' '}
            <a href="/terms">{t('auth.signUp.preFooter.terms')}</a>{' '}
            {t('auth.signUp.preFooter.and')}{' '}
            <a href="/privacy">{t('auth.signUp.preFooter.privacy')}</a>{' '}
            {t('auth.signUp.preFooter.suffix')}
          </SignUpModal.PreFooter>
          <ModalFooter
            footerText={t('auth.signUp.footer.text')}
            textButton={t('auth.signUp.footer.button')}
            onRouteModal={onRouteModal}
          />
        </div>
      </ModalWrapper>
    )
  );
};

SignUpModal.defaultProps = {
  isActive: true,
};

SignUpModal.Or = styled.div`
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

SignUpModal.Form = styled.form`
  display: flex;
  flex-direction: column;

  > div > input {
    width: calc(100% - 22px);
  }

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
  font-size: 13px;
  line-height: 17px;

  ${breakpoint('xs')`
    margin-top: 1rem;
  `}

  ${breakpoint('sx')`
    margin-top: 2rem;
  `}

  a {
    color: ${props => props.theme.colors.blueExDark};
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

const mapStateToProps = state => ({
  userID: getUserID(state),
  userPW: getUserPW(state),
});

const mapDispatchToProps = {
  authenticate: actions.authenticate,
  fetchUser: actions.fetchUser,
  signUp: actions.signUp,
  checkEmailAvailable: actions.checkEmailAvailable,
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation(),
);

export default enhance(SignUpModal);
