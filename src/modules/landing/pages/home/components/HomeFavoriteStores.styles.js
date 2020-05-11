// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (HomeFavoriteStores: Object) => {
  HomeFavoriteStores.Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 576px;
    background: none;

    ${breakpoint('md')`
      min-height: 485px;
    `}

    ${breakpoint('lg')`
      min-height: 768px;
      background: url(${({ bg }) => bg}) repeat center center;
    `}

    h4 {
      padding: 10px 0;
      font-weight: normal;
      letter-spacing: 0.4px;
      font-size: 17px;
      line-height: 142%;
      color: #374b5a;

      &.h4class {
        padding: 10px 15px;
      }
    }

    h6 {
      font-family: ${({ theme }) => theme.fonts.montserrat} !important;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.4px;
      color: #374b5a;
      margin: 10px 0;
    }

    div.stores {
      > div {
        min-height: 120px;

        ${breakpoint('md')`
          min-height: 180px;
        `}
      }

      img {
        ${breakpoint('lg')`
          max-height: unset;
        `}
      }
    }

    .text-center {
      text-align: center;
    }

    h2.h2class {
      font-size: 29px;
      line-height: 35px;
      font-family: ${({ theme }) => theme.fonts.montserrat} !important;
      color: #374b5a;
      font-weight: 700;
      padding: 0 15px;

      ${breakpoint('md')`
        font-size: 30px;
        line-height: 36px;
      `}

      ${breakpoint('lg')`
        font-size: 39px;
        line-height: 47px;
      `}
    }

    .stores {
      padding-left: 10px;
      padding-right: 10px;
      max-width: 1130px;
      width: 100%;
      margin: 35px auto;
      margin-bottom: 75px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      box-sizing: border-box;

      .store-item {
        flex: 1 0 50%;
        max-width: 50%;
        padding: 0 15px;
        min-height: 180px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 36px;

        ${breakpoint('md')`
          flex: 1 0 33.33333333%;
          max-width: 33.33333333%;
        `}

        ${breakpoint('xl')`
          flex: 0 0 16.66666667%;
          max-width: 16.66666667%;
          margin: 0;
        `}

        a {
          display: block;
        }

        img {
          max-width: 130px;
          max-height: 52px;

          ${breakpoint('lg')`
            max-width: 100%;
            max-height: none;
          `}
        }
      }
    }

    .activateCashback {
      display: flex;
      justify-content: center;
    }

    .btn-green-v2 {
      display: inline-block;
      align-items: center;
      background: #00ba4a;
      border-radius: 5px;
      line-height: 50px;
      color: #fff;
      text-decoration: none !important;
      text-align: center;
      border: 1px solid #00ba4a;
      cursor: pointer;
      box-shadow: 0 10px 44px rgba(0, 0, 0, 0.17);
      transition: all 0.4s ease;
      font-weight: 400;

      ${breakpoint('xs')`
        margin: 5px 15px;
        font-size: 14px;
        padding: 0 15px;
      `}

      ${breakpoint('md')`
        padding: 0 50px;
        font-size: 20px;
        margin: 5px auto;
      `}

      strong {
        font-weight: 700;
      }

      &::after {
        content: '';
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 6px solid #fff;
        display: inline-block;
        margin: 0 0 0 10px;
        position: relative;
        top: 1px;
      }

      &:hover {
        background: #fff;
        color: #00ba4a;

        &::after {
          border-left-color: #00ba4a;
        }
      }
    }
  `;
};

export default styles;
