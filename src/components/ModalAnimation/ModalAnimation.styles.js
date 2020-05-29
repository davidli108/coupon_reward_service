// @flow
import styled from 'styled-components';
import Cloud from './assets/cloud.svg';

const styles = (ModalAnimation: Object) => {
  ModalAnimation.Wrapper = styled.div`
    position: relative;
    width: 600px;
    height: 496px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    overflow: hidden;

    > svg {
      position: absolute;
      top: 3px;
      right: 3px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      padding: 10px;
      box-sizing: border-box;
      color: ${({ theme }) => theme.colors.whiteDark};
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.blackGray};
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      padding: 0;
      margin: 0;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0.3px;
    }

    h1 {
      padding: 0 70px;
      font-weight: 700;
      font-size: 31px;
      line-height: 135%;
      text-align: center;
      color: ${({ theme }) => theme.colors.blackLight};
    }

    h2 {
      font-weight: 700;
      font-size: 31px;
      line-height: 135%;
      text-align: center;
      color: ${({ theme }) => theme.colors.blackLight};
      padding: 15px 65px 35px;

      &:lang(fr),
      &:lang(de) {
        padding: 15px 50px 35px;
      }
    }

    h4 {
      font-size: 18px;
      line-height: 150%;
      text-align: center;
      color: ${({ theme }) => theme.colors.darkGray};
      letter-spacing: 0;

      &:lang(fr),
      &:lang(de) {
        padding: 0 60px;
      }
    }

    h5 {
      padding: 35px 0;
      font-size: 18px;
      line-height: 139.7%;
      text-align: center;
      color: ${({ theme }) => theme.colors.blackLight};

      letter-spacing: 0;
    }

    p {
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: ${({ theme }) => theme.colors.lightDark};
    }

    .animation-modal-block {
      position: relative;
      width: 345px;
      height: 247px;
      margin: 35px auto 0;
    }

    .animate-modal-flying-piggy {
      width: 100px;
      height: 99px;
      display: block;
      margin: 0 auto;
      position: absolute;
      left: 105px;
      top: 70px;
      z-index: 3;
      animation: 1s linear infinite alternate slide;
    }

    @keyframes slide {
      from {
        left: 105px;
      }

      to {
        left: 125px;
      }
    }

    .progress-modal-circle {
      position: absolute;
      left: 50%;
      width: 200px;
      height: 176px;
      display: block;
      margin: 0 auto;
      margin-left: -100px;
      z-index: 1;

      .element {
        position: absolute;
        top: 7px;
        left: 86px;
        z-index: 5;
        padding: 25px 0 35px;

        &::after {
          animation: changeLetter ease-in-out 3.5s;
          display: block;
          content: '100%';
          font-weight: 700;
          font-size: 20px;
          line-height: 135%;
          text-align: center;
          text-transform: capitalize;
          color: ${({ theme }) => theme.colors.darkBlank};
        }
      }

      @keyframes changeLetter {
        0% {
          content: '0%';
        }

        33% {
          content: '22%';
        }

        66% {
          content: '51%';
        }

        100% {
          content: '73%';
        }
      }

      .animate-modal-circle {
        margin: 0 auto;
        width: 192px;
        height: 192px;
        background: ${({ theme }) => theme.colors.grayBlank};
        border-radius: 50%;
        transform: rotate(230deg);
        transform-style: flat;
        overflow: hidden;

        .mask,
        .fill {
          width: 192px;
          height: 192px;
          position: absolute;
          border-radius: 50%;
        }

        .mask {
          clip: rect(0px, 192px, 192px, 96px);

          .fill {
            clip: rect(0px, 96px, 192px, 0px);
            background-color: ${({ theme }) => theme.colors.greenMain};
          }
        }

        .mask.full,
        .fill {
          animation: fill ease-in-out 4s;
          transform: rotate(126deg);
        }

        @keyframes fill {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(126deg);
          }
        }

        .inside-circle {
          width: 176px;
          height: 176px;
          border-radius: 50%;
          background: ${({ theme }) => theme.colors.white};
          margin-top: 8px;
          margin-left: 8px;
          position: absolute;
          z-index: 4;
        }
      }
    }

    .animate-modal-clouds {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 345px;
      height: 130px;
      display: block;
      margin: 0 auto;
      margin-left: -172px;
      z-index: 2;
      background: url(${Cloud}) center center;
      overflow: hidden;
    }
  `;

  ModalAnimation.AnimateModalLogo = styled.img`
    margin: 26px 0 0 20px;
    float: left;
  `;

  ModalAnimation.FirstAnimateModal = styled.div`
    margin-top: 50px;
    height: 389px;
    width: 100%;
    animation: cssHide 0s ease-in 4s forwards;
    animation-fill-mode: forwards;
    position: relative;

    @keyframes cssHide {
      to {
        width: 0;
        height: 0;
        overflow: hidden;
      }
    }
  `;

  ModalAnimation.SecondAnimateModal = styled.div`
    position: relative;
    height: 389px;
    opacity: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    animation: cssShow 2s 4s forwards;
    animation-fill-mode: forwards;

    h4 {
      padding: 0 100px;
    }

    .btn-animate-modal {
      display: block;
      width: 466px;
      height: 60px;
      background-color: ${({ theme }) => theme.colors.pinkLight};
      border-radius: 5px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      margin: 0 auto;
      border: 0;
      line-height: 60px;
      text-align: center;
      font-weight: 700;
      font-size: 22px;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      transition: background-color 0.5s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.bloodRed};
      }

      img {
        margin-left: 10px;
        margin-bottom: 2px;
      }
    }

    @keyframes cssShow {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `;

  ModalAnimation.TitleElement = styled.h1`
    min-height: 84px;
    padding: 0 30px !important;
  
    &::after {
      animation: changeTitle ease-in-out 3.5s;
      display: block;
      content: "${({ t }) => t('coupons.animateModal2.animatedTitle04')}";
      padding: 0 60px;
      font-weight: 700;
      font-size: 31px;
      line-height: 135%;
      text-align: center;
      color: ${({ theme }) => theme.colors.blackLight};
    }

    @keyframes changeTitle {
      0% {
        content: "${({ t }) => t('coupons.animateModal2.animatedTitle01')}";
      }

      33% {
        content: "${({ t }) => t('coupons.animateModal2.animatedTitle02')}";
      }

      66% {
        content: "${({ t }) => t('coupons.animateModal2.animatedTitle03')}";
      }

      100% {
        content: "${({ t }) => t('coupons.animateModal2.animatedTitle04')}";
      }
    }
  `;

  ModalAnimation.Piggy = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    padding: 0 !important;
  `;

  ModalAnimation.Icon = styled.img`
    position: absolute;
    top: 17px;
    left: 15px;
    display: block;
    width: 12px;
    height: 15px;
  `;

  ModalAnimation.Store = styled.div`
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

  ModalAnimation.Content = styled.div`
    position: relative;
    padding: 58px 0 67px;
    box-shadow: 0 30px 60px ${({ theme }) => theme.colors.blackAlphaDark};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    overflow: hidden;
    outline: 0;
    width: 600px;
    max-width: none;
    box-sizing: border-box;

    > svg {
      position: absolute;
      top: 3px;
      right: 3px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      padding: 10px;
      box-sizing: border-box;
      color: ${({ theme }) => theme.colors.whiteDark};
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.blackGray};
      }
    }

    > div {
      max-width: 360px;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      letter-spacing: 0.2px;
      margin: 0 auto 26px;
      color: ${({ theme }) => theme.colors.darkGray};
    }

    > h2 {
      padding: 0 0 50px;
      font-size: 35px;
      font-weight: bold;
      text-align: center;
      position: relative;
      z-index: 1;
      color: ${({ theme }) => theme.colors.blackLight};
    }

    > p {
      padding: 0 70px;
      font-weight: bold;
      font-size: 17px;
      line-height: 26px;
      text-align: center;
      margin: 0 0 17px;
      letter-spacing: 0.44;
      color: ${({ theme }) => theme.colors.blackLight};
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
      color: ${({ theme }) => theme.colors.white};
      margin: 0 auto;
      box-shadow: 0px 10px 14px ${({ theme }) => theme.colors.blackAlpha};
      background-color: ${({ theme }) => theme.colors.pinkLight};
      transition: background 0.3s ease;

      &:focus {
        outline: none;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.pinkDark};
      }
    }
  `;

  ModalAnimation.AnimateModalLogo = styled.img`
    margin: 26px 0 0 20px;
    float: left;
  `;
};

export default styles;
