// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { MdClose } from 'react-icons/md';
import piggy from './piggy.svg';
import icon from './piggy-icon.svg';

type ModalActivateCouponsProps = {
  title: string,
  subTitle: string,
  isActive: boolean,
  closeModal: Function,
  logo: string,
  callback: Function,
};

const ModalActivateCoupons = ({
  title,
  subTitle,
  isActive,
  closeModal,
  logo,
  callback,
}: ModalActivateCouponsProps) => {
  return (
    <ModalActivateCoupons.Wrapper isActive={isActive}>
      <ModalActivateCoupons.Overlay onClick={closeModal} isActive={isActive} />
      <ModalActivateCoupons.Container isActive={isActive}>
        <ModalActivateCoupons.Content>
          <MdClose onClick={closeModal} />
          <ModalActivateCoupons.Icon src={icon} />
          <h2>NEVER OVERPAY AGAIN AT</h2>
          <ModalActivateCoupons.Store>
            <img src={logo} alt={title} />
          </ModalActivateCoupons.Store>
          <div>
            Save time and money with automatic coupons. Piggy appears at
            checkout and automatically applies the best discount.
          </div>
          <p>We find the {title} coupons, you just shop!</p>
          <button onClick={callback}>Activate Coupons Now</button>
          <ModalActivateCoupons.Piggy src={piggy} />
        </ModalActivateCoupons.Content>
      </ModalActivateCoupons.Container>
    </ModalActivateCoupons.Wrapper>
  );
};

ModalActivateCoupons.Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: flex;
  justify-content: center;
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
`;

ModalActivateCoupons.Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: ${props => props.theme.colors.modalOverlayBg};
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: ${({ isActive }) => Number(Boolean(isActive))};
`;

ModalActivateCoupons.Piggy = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  padding: 0 !important;
`;

ModalActivateCoupons.Icon = styled.img`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 12px;
  height: 15px;
`;

ModalActivateCoupons.Container = styled.div`
  max-width: 600px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  transform: translate3d(
    0,
    ${({ isActive }) => (isActive ? '135px' : '-100vh')},
    0
  );

  ${breakpoint('xs')`
    max-width: 100%;
  `}

  ${breakpoint('md')`
    max-width: 600px;
    margin: 30px auto;
  `}
`;

ModalActivateCoupons.Store = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 50px !important;
  width: 160px;
  height: 30px;
  padding: 0 !important;

  > img {
    padding: 0 !important;
    display: block;
    max-width: 160px;
    max-height: 130px;
  }
`;

ModalActivateCoupons.Content = styled.div`
  position: relative;
  padding: 58px 0 67px;
  box-shadow: 0 30px 60px ${props => props.theme.colors.blackAlphaDark};
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  overflow: hidden;
  outline: 0;
  width: 600px;
  max-width: none;
  box-sizing: border-box;

  ${breakpoint('xs')`

  `}

  ${breakpoint('sx')`

  `}

  > svg {
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    color: ${props => props.theme.colors.whiteDark};
    transition: color .3s ease;

    &:hover {
      color: ${props => props.theme.colors.blackGray};
    }
  }

  > div {
    max-width: 360px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    letter-spacing: .2px;
    margin: 0 auto 26px;
    color: ${props => props.theme.colors.darkGray};
  }

  > h2 {
    padding: 0 0 50px;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    position: relative;
    z-index: 1;
    color: ${props => props.theme.colors.blackLight};

    ${breakpoint('xs')`

    `}

    ${breakpoint('sx')`

    `}

    ${breakpoint('xl')`

    `}
  }

  > p {
    padding: 0 70px;
    font-weight: bold;
    font-size: 17px;
    line-height: 26px;
    text-align: center;
    margin: 0 0 17px;
    letter-spacing: .44;
    color: ${props => props.theme.colors.blackLight};

    ${breakpoint('xs')`
      
    `}

    ${breakpoint('sx')`
      
    `}
  }

  > button {
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    font-size: 22px;
    cursor: pointer;
    line-height: 30px;
    color: ${props => props.theme.colors.white};
    margin: 0 auto;
    box-shadow: 0px 10px 14px ${props => props.theme.colors.blackAlpha};
    background-color: ${props => props.theme.colors.pinkLight};
    transition: background .3s ease;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${props => props.theme.colors.pinkDark};
    }
  }
`;

export default ModalActivateCoupons;
