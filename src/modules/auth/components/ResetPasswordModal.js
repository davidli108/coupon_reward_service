// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import ModalInput from './ModalInput';

type ResetPasswordModalProps = {
  title: string,
  subTitle: string,
  submitLabel: string,
  isActive: boolean,
  closeModal: Function,
  onModalToSignUp: Function,
};

const ResetPasswordModal = ({
  title,
  subTitle,
  submitLabel,
  isActive,
  closeModal,
  onModalToSignUp,
}: ResetPasswordModalProps) =>
  isActive && (
    <ResetPasswordModal.Wrapper>
      <ResetPasswordModal.Overlay onClick={closeModal} />
      <ResetPasswordModal.Container>
        <ResetPasswordModal.Content isActive={isActive}>
          <button type="button" onClick={closeModal}>
            <span>×</span>
          </button>
          <h2>{title}</h2>
          <p>{subTitle}</p>
          <ResetPasswordModal.Form>
            <form>
              <ModalInput
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
              <button>{submitLabel}</button>
            </form>
            <hr />
            <p>
              Send Reset Email{' '}
              <button onClick={onModalToSignUp}>Join Piggy</button>
            </p>
          </ResetPasswordModal.Form>
        </ResetPasswordModal.Content>
      </ResetPasswordModal.Container>
    </ResetPasswordModal.Wrapper>
  );

ResetPasswordModal.Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
`;

ResetPasswordModal.Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
`;

ResetPasswordModal.Container = styled.div`
  max-width: 450px;
  margin: 30px auto;
  ${breakpoint('xs')`
    max-width: 100%;
    margin: 30px 0 0 0;
  `}
  ${breakpoint('md')`
    max-width: 450px;
    margin: 30px auto;
  `}
`;

ResetPasswordModal.Content = styled.div`
  position: relative;
  top: ${props => (props.isActive ? '0px' : '-100vh')};
  padding: 2rem 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  outline: 0;

  ${breakpoint('xs')`
    margin: 0 15px;
    padding: 1rem;
  `}

  ${breakpoint('sx')`
    padding: 2rem 3rem;
  `}

  > button {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    font-size: 2rem;
    border: none;
    background: transparent;
    outline: none;
    opacity: 0.2;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  > h2 {
    text-align: center;
    margin: 1rem 0;
    color: #434343;
    font-size: 1.75rem;

    ${breakpoint('xs')`
      margin: 1rem 0 .5rem;
    `}

    ${breakpoint('sx')`
      margin: 1rem 0;
    `}
  }

  > p {
    text-align: center;
    font-weight: 300;
    margin: 1.5rem 0;

    ${breakpoint('xs')`
      margin: 0.5rem 0 1rem;
    `}

    ${breakpoint('sx')`
      margin: 1.5rem 0;
    `}
  }
`;

ResetPasswordModal.Form = styled.div`
  > form {
    display: flex;
    flex-direction: column;

    button {
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
  }

  > hr {
    border: 0;
    border-top: 1px solid #eee;

    ${breakpoint('xs')`
      margin-top: 10px;
      margin-bottom: 10px;
    `}

    ${breakpoint('sx')`
      margin-top: 20px;
      margin-bottom: 20px;
`}
  }

  > p {
    text-align: center;
    letter-spacing: 0.3px;
    font-size: 14px;

    button {
      color: #337ab7;
      border: none;
      cursor: pointer;
      background: transparent;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default ResetPasswordModal;
