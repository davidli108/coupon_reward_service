// @flow
import styled, { keyframes } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (NeverOverpayAgain: Object) => {
  const showAnimation = keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  `;

  NeverOverpayAgain.Corner = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 80px;
    height: auto;

    ${breakpoint('md')`
      width: 180px;
    `}

    ${breakpoint('lg')`
      width: 218px;
    `}
  `;

  NeverOverpayAgain.Content = styled.div`
    width: 1024px;
    padding: 0 15px;
    box-sizing: border-box;

    h1 {
      font-weight: 600;
      text-transform: uppercase;
      margin: 40px 0 30px;
      padding: 0;
      font-size: 30px;

      ${breakpoint('md')`
        font-size: 62px;
        margin: 12vh 0 54px;
        padding: 25px 0 0;
      `}

      ${breakpoint('lg')`
        font-size: 82px;
      `}
    }

    p {
      margin: 0;
      font-size: 17px;
      line-height: 30px;

      ${breakpoint('md')`
        font-size: 23px;
        line-height: 37px;
      `}
    }

    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      margin: 30px 0 40px;

      ${breakpoint('md')`
        font-size: 23px;
        line-height: 37px;
        margin: 40px 0 64px;
      `}
    }
  `;

  NeverOverpayAgain.Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    text-transform: uppercase;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    max-width: none;
    position: relative;
    z-index: 2;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGreenHover};
    }

    ${breakpoint('md')`
      font-size: 23px;
      max-width: 457px;
    `}
  `;

  NeverOverpayAgain.Overlay = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
  `;

  NeverOverpayAgain.Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 20;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.4s ease-in-out;

    &.minimized {
      display: flex;
      height: 150px;
      padding: 10px 0;
      box-sizing: border-box;
      margin: 85px auto;
      z-index: 5;

      ${breakpoint('md')`
        padding: 30px 0;
        margin: 125px auto;
      `}

      ${breakpoint('xl')`
        width: 1140px;
        border-radius: 10px;
      `}

      ${NeverOverpayAgain.Corner} {
        display: none;
      }

      ${NeverOverpayAgain.Content} {
        width: 1090px;
        display: block;
        align-items: center;
        justify-content: space-between;

        ${breakpoint('lg')`
          display: flex;
        `}

        h1 {
          padding: 0;
          margin: 0 0 10px;
          font-size: 24px;
          line-height: 30px;

          ${breakpoint('md')`
            font-size: 50px;
            line-height: 59px;
          `}
        }

        p {
          font-size: 12px;
          line-height: 15px;

          ${breakpoint('md')`
            font-size: 17px;
            line-height: 20px;
          `}
        }

        h3 {
          margin: 6px 0 0;
          font-size: 17px;
          line-height: 20px;

          ${breakpoint('md')`
            font-size: 20px;
            line-height: 32px;
          `}
        }
      }

      ${NeverOverpayAgain.Button} {
        width: 100%;
        height: 40px;
        font-size: 16px;
        margin: 10px 0 0;

        ${breakpoint('md')`
          width: 250px;
          height: 50px;
          margin: 0;
        `}

        ${breakpoint('lg')`
          width: 397px;
          height: 62px;
          font-size: 23px;
        `}
      }

      ${NeverOverpayAgain.Overlay} {
        display: block;
      }
    }

    .animate {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.darkBlue};

      #animation_container {
        opacity: 0;
        animation: ${showAnimation} 0s linear 2s forwards;
      }
    }

    #animation_container {
      background-color: 'rgba(0, 0, 0, 0)';
      width: 350px;
      height: 350px;
    }

    canvas {
      position: absolute;
      display: block;
      background-color: rgba(0, 0, 51, 0);
    }

    #dom_overlay_container {
      pointer-events: none;
      overflow: hidden;
      width: 350px;
      height: 350px;
      position: absolute;
      left: 0;
      top: 0;
      display: block;
    }
  `;
};

export default styles;
