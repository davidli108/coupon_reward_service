// @flow
import React from 'react';
import styled from 'styled-components';

type ModalProps = {
  isActive: boolean,
  closeModal: Function,
  children: any,
};

const Modal = ({ isActive, closeModal, children }: ModalProps) => {
  if (!isActive) return null;
  return (
    <Modal.Wrapper>
      <Modal.Overlay onClick={closeModal} />
      <Modal.Container>
        <Modal.Content isActive={isActive}>{children}</Modal.Content>
      </Modal.Container>
    </Modal.Wrapper>
  );
};

Modal.Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
`;

Modal.Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
`;

Modal.Container = styled.div`
  max-width: 450px;
  margin: 30px auto;
`;

Modal.Content = styled.div`
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
  transition: all 4s linear;

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
  }

  > p {
    text-align: center;
    font-weight: 300;
    margin: 1.5rem 0;
  }

  > a {
    position: relative;
    display: block;
    background-color: #3b5998;
    padding: 1rem;
    border-radius: 10000px;
    text-align: center;
    color: #fff;

    img {
      position: absolute;
      left: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  > a + a {
    margin: 10px 0 0 0;
    border: 1px solid #999;
    background-color: #fff;
    color: #000;

    img {
      width: 20px;
    }
  }
`;

Modal.Or = styled.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 2rem;

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

Modal.Form = styled.div`
  > form {
    display: flex;
    flex-direction: column;

    input {
      display: block;
      margin-bottom: 1rem;
      border: 1px solid #e0dfd7;
      border-radius: 3px;
      color: #242628;
      padding: 10px 10px;
      font-size: 14px;
      transition: border-color 0.15s linear;
      outline: none;
    }

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
    }
  }

  > span {
    display: block;
    text-align: center;
    margin-top: 2rem;
    font-size: 0.8rem;

    a {
      color: #337ab7;
    }
  }

  > hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  > p {
    text-align: center;
    letter-spacing: 0.3px;
    font-size: 14px;

    a {
      color: #337ab7;
    }
  }
`;

export default Modal;
