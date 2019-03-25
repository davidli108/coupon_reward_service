// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import ModalSocial from './ModalSocial';
import ModalInput from './ModalInput';

type SignUpModalProps = {
  title: string,
  subTitle: string,
  submitLabel: string,
  isActive: boolean,
  closeModal: Function,
  onModalToSignIn: Function,
};

const SignUpModal = ({
  title,
  subTitle,
  submitLabel,
  isActive,
  closeModal,
  onModalToSignIn,
}: SignUpModalProps) =>
  isActive && (
    <SignUpModal.Wrapper>
      <SignUpModal.Overlay onClick={closeModal} />
      <SignUpModal.Container>
        <SignUpModal.Content isActive={isActive}>
          <button type="button" onClick={closeModal}>
            <span>×</span>
          </button>
          <h2>{title}</h2>
          <p>{subTitle}</p>
          <ModalSocial />
          <SignUpModal.Or>
            <span>or</span>
          </SignUpModal.Or>
          <SignUpModal.Form>
            <form>
              <ModalInput
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
              <button>{submitLabel}</button>
            </form>
            <span>
              By joining, I agree to be added to daily mailing list and Piggy's
              <button>terms of service</button>
            </span>
            <hr />
            <p>
              Already A Member? <button onClick={onModalToSignIn}>Login</button>
            </p>
          </SignUpModal.Form>
        </SignUpModal.Content>
      </SignUpModal.Container>
    </SignUpModal.Wrapper>
  );

SignUpModal.Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
`;

SignUpModal.Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
`;

SignUpModal.Container = styled.div`
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

SignUpModal.Content = styled.div`
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
    max-width: 300px;
    text-align: center;
    margin: 1rem auto;
    color: #434343;
    font-size: 1.75rem;

    ${breakpoint('xs')`
      margin: 1rem auto .5rem;
    `}

    ${breakpoint('sx')`
      margin: 1rem auto;
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

SignUpModal.Form = styled.div`
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

  > span {
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
      color: #337ab7;
      border: none;
      cursor: pointer;
      background: transparent;

      &:hover {
        text-decoration: underline;
      }
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

export default SignUpModal;
