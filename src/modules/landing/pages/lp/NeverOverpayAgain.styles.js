// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (NeverOverpayAgain: Object) => {
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
    width: 930px;
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

    ${breakpoint('md')`
      font-size: 23px;
      max-width: 457px;
    `}
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
    transform: ${({ isLandingVisible }) =>
      isLandingVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)'};

    &.minimized {
      display: flex;
      height: 191px;
      padding: 10px 0;
      box-sizing: border-box;
      transition: all 0.4s ease-in-out;

      ${breakpoint('md')`
        padding: 30px 0;
      `}

      ${NeverOverpayAgain.Corner} {
        display: none;
      }

      ${NeverOverpayAgain.Content} {
        width: 1027px;
        display: block;
        align-items: center;
        justify-content: space-between;

        ${breakpoint('md')`
          display: flex;
        `}

        h1 {
          padding: 0;
          margin: 0 0 6px;
          font-size: 24px;
          line-height: 30px;

          ${breakpoint('md')`
            font-size: 40px;
            line-height: 47px;
          `}
        }

        p {
          font-size: 12px;
          line-height: 15px;

          ${breakpoint('md')`
            font-size: 14px;
            line-height: 20px;
          `}
        }

        h3 {
          margin: 6px 0 0;
          font-size: 14px;
          line-height: 20px;

          ${breakpoint('md')`
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
    }
  `;
};

export default styles;
