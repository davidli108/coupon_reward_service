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
import HintMessage from './HintMessage';
import ModalWrapper from './ModalWrapper';
import ModalSocial from './ModalSocial';
import ModalInput from './ModalInput';
import ModalFooter from './ModalFooter';
import preloader from '../../coupons/assets/preloader.svg';

import * as actions from '../AuthActions';
import { getUserID, getUserPW } from '../AuthReducer';

type SignUpModalProps = {
  t: string => string,
  title: string,
  subTitle: string,
  submitLabel: string,
  linkTerms: string,
  isActive: boolean,
  closeModal: Function,
  onRoutModal: Function,
  signUp: Function,
  fetchUser: Function,
  insertPassword: Function,
  userID: number,
  userPW: string,
  history: Object,
};

const SignUpModal = ({
  t,
  title,
  subTitle,
  submitLabel,
  linkTerms,
  isActive,
  closeModal,
  onRoutModal,
  signUp,
  userID,
  userPW,
  insertPassword,
  history,
  fetchUser,
}: SignUpModalProps) => {
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [stage, setStage] = useState(1);
  const [isReq, setIsReq] = useState(false);

  const [password, setPassword] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleFormSubmit = async e => {
    e.preventDefault();

    if (stage === 1) {
      const formData = new FormData();
      formData.append('email', email);

      setIsReq(true);
      const response = await signUp(formData);
      if (response) setIsReq(false);

      if (R.path(['payload', 'data', 'user_pw'])(response) === 0) {
        setEmailErrorMessage(t('auth.signUp.messages.existAccount'));
      } else {
        setEmailErrorMessage('');
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
      formData.append('newpass1', password.password);
      formData.append('newpass2', password.confirmPassword);
      formData.append('user_id', String(userID));
      formData.append('user_pw', userPW);

      insertPassword(formData).then(() => {
        fetchUser().then(res => {
          closeModal();
          history.push('/welcome');
        });
      });
    }
  };

  const handlePasswordChange = e => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  return (
    isActive && (
      <ModalWrapper
        title={title}
        subTitle={subTitle}
        isActive={isActive}
        closeModal={closeModal}
      >
        <ModalSocial />
        <SignUpModal.Or>
          <span>{t('auth.signUp.or')}</span>
        </SignUpModal.Or>
        {emailErrorMessage && <HintMessage>{emailErrorMessage}</HintMessage>}
        {passwordErrorMessage && (
          <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
        )}
        <div>
          <SignUpModal.Form onSubmit={handleFormSubmit}>
            {stage === 1 && (
              <ModalInput
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder={t('auth.signUp.password')}
                  required
                />
                <ModalInput
                  name="confirmPassword"
                  value={password.confirmPassword}
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
              <button>{submitLabel}</button>
            )}
          </SignUpModal.Form>
          <SignUpModal.PreFooter>
            {t('auth.signUp.preFooter.label')}
            <a href={linkTerms}>{t('auth.signUp.preFooter.terms')}</a>
          </SignUpModal.PreFooter>
          <ModalFooter
            footerText={t('auth.signUp.footer.text')}
            textButton={t('auth.signUp.footer.button')}
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
  font-size: 14px;

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

const mapStateToProps = state => ({
  userID: getUserID(state),
  userPW: getUserPW(state),
});

const mapDispatchToProps = {
  fetchUser: actions.fetchUser,
  insertPassword: actions.password,
  signUp: actions.signUp,
};

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation(),
);

export default enhance(SignUpModal);
