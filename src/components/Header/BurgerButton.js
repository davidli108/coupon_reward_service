// @flow
import * as React from 'react';
import styled from 'styled-components';

type BurgerButtonProps = {
  isOpen: boolean,
};

const BurgerButton = ({ isOpen }: BurgerButtonProps) => (
  <BurgerButton.Wrapper isOpen={isOpen}>
    <span />
    <span />
    <span />
  </BurgerButton.Wrapper>
);

BurgerButton.Wrapper = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  transform: rotate(0deg) scale(0.5);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #374b5a;
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
      top: 12px;
      transform-origin: left center;
    }

    &:nth-child(3) {
      top: 24px;
      transform-origin: left center;
    }

    ${({ isOpen }) =>
      !isOpen ||
      `
      &:nth-child(1) {
        transform : rotate(45deg);
        top       : 11px;
        left      : 13px;
        width     : 20px;
        background-color: #899197;
      }

      &:nth-child(2) {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 4px solid #899197;
        background-color: transparent;
        top: 0;
        left: 0;
        box-sizing: border-box;
      }

      &:nth-child(3) {
        transform : rotate(-45deg);
        top       : 25px;
        left      : 13px;
        width     : 20px;
        background-color: #899197;
      }
    `}
  }
`;

export default BurgerButton;