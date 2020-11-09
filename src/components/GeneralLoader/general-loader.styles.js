// @flow
import styled, { keyframes } from 'styled-components';

const styles = (GeneralLoader: Object) => {
  const RippleAnimation = keyframes`
    from {
      width: 0;
      height: 0;
      opacity: 1;
    }

    to {
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  `;

  GeneralLoader.Wrapper = styled.div`
    padding: 95px 0 0;
    background-color: ${({ theme }) => theme.colors.white};
    min-height: 100vh;
    margin: 0;
    text-align: center;
  `;

  GeneralLoader.Ripple = styled.div`
    margin: 0 auto;
    position: relative;
    width: 64px;
    height: 64px;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border: 4px solid #b3b3b3;
      opacity: 1;
      border-radius: 50%;
      animation: ${RippleAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    &::after {
      animation-delay: -0.5s;
    }
  `;
};

export default styles;
