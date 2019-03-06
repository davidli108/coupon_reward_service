//@flow
import * as React from 'react';
import styled from 'styled-components';

type BurgerButtonProps = {
  isOpen: boolean,
  onClick: () => void,
};

const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => (
  <BurgerButton.Wrapper isOpen={isOpen} onClick={onClick}>
    <span />
    <span />
    <span />
  </BurgerButton.Wrapper>
);

BurgerButton.Wrapper = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  transform: rotate(0deg) scale(0.5);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 4px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: 18px;
      transform-origin: left center;
    }

    &:nth-child(3) {
      top: 36px;
      transform-origin: left center;
    }

    ${({ isOpen }) =>
      !isOpen ||
      `
      &:nth-child(1) {
        transform : rotate(45deg);
        top       : -3px;
        left      : 8px;
      }

      &:nth-child(2) {
        width   : 0%;
        opacity : 0;
      }

      &:nth-child(3) {
        transform : rotate(-45deg);
        top       : 39px;
        left      : 8px;
      }
    `}
  }
`;

export default BurgerButton;
