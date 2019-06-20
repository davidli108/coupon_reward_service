// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type ModalWrapperProps = {
  title: string,
  subTitle: string,
  isActive: boolean,
  children: any,
  closeModal: Function,
};

const ModalWrapper = ({
  title,
  subTitle,
  isActive,
  closeModal,
  children,
}: ModalWrapperProps) => (
  <ModalWrapper.Wrapper>
    <ModalWrapper.Overlay onClick={closeModal} />
    <ModalWrapper.Container>
      <ModalWrapper.Content isActive={isActive}>
        <button type="button" onClick={closeModal}>
          <span>×</span>
        </button>
        <h2>{title}</h2>
        <p>{subTitle}</p>
        {children}
      </ModalWrapper.Content>
    </ModalWrapper.Container>
  </ModalWrapper.Wrapper>
);

ModalWrapper.Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
`;

ModalWrapper.Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: ${props => props.theme.colors.blackAlphaDark};
  height: 100%;
  width: 100%;
`;

ModalWrapper.Container = styled.div`
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

ModalWrapper.Content = styled.div`
  position: relative;
  top: ${props => (props.isActive ? '0px' : '-100vh')};
  padding: 2rem 3rem;
  box-shadow: 0 5px 15px ${props => props.theme.colors.blackAlphaDark};
  background-color: ${props => props.theme.colors.white};
  background-clip: padding-box;
  border: 1px solid ${props => props.theme.colors.blackAlpha};
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
    color: ${props => props.theme.colors.black};
    outline: none;
    opacity: 0.2;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  > h2 {
    text-align: center;
    max-width: 310px;
    margin: 1rem auto;
    color: ${props => props.theme.colors.blackGray};
    font-size: 1.75rem;

    ${breakpoint('xs')`
      margin: 1rem 0 .5rem;
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

export default ModalWrapper;
