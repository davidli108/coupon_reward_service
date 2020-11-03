// @flow
import styled, { keyframes } from 'styled-components';

const zoomShakeAnimation = keyframes`
  10% {
    transform: scale(0.99);
  }

  20% {
    transform: scale(1.03);
  }

  30% {
    transform: scale(0.98);
  }

  40% {
    transform: scale(1.05);
  }

  50% {
    transform: scale(0.98);
  }

  60% {
    transform: scale(1.05);
  }

  70% {
    transform: scale(0.98);
  }

  80% {
    transform: scale(1.03);
  }

  90% {
    transform: scale(0.99);
  }
`;

const zoomAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }
`;

const styles = (BonusModal: Object) => {
  BonusModal.Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
  `;

  BonusModal.Container = styled.div`
    margin: 50px auto 0 auto;
    width: 372px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.zoomShake {
      animation: ${zoomShakeAnimation} 1s cubic-bezier(0.36, 0.07, 0.19, 0.97)
        both;
    }
  `;

  BonusModal.Title = styled.div`
    margin-bottom: 20px;
  `;

  BonusModal.TitleRegular = styled.span`
    font: 700 25px/130% ${({ theme }) => theme.fonts.montserrat} !important;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.black};
  `;

  BonusModal.TitleColored = styled.span`
    font: 700 25px/130% ${({ theme }) => theme.fonts.montserrat} !important;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.lightGreen};
    position: relative;
    display: inline-block;

    &.zoom {
      animation: ${zoomAnimation} 0.82s ease-in-out both;
      animation-delay: 0.82s;
    }
  `;

  BonusModal.Image = styled.img`
    margin-bottom: 20px;
    height: 80px;
    width: 100px;
  `;

  BonusModal.BoldLine = styled.div`
    font: 700 16px/130% ${({ theme }) => theme.fonts.montserrat} !important;
    color: ${({ theme }) => theme.colors.blackGrey};
    letter-spacing: 0.4px;
  `;

  BonusModal.Line = styled.div`
    font: 600 16px/130% ${({ theme }) => theme.fonts.montserrat} !important;
    color: ${({ theme }) => theme.colors.blackGrey};
    letter-spacing: 0.4px;
    margin-bottom: ${({ addBottomMargin }) => (addBottomMargin ? '20px' : '')};
  `;

  BonusModal.Button = styled.button`
    padding: 13px 50px;
    background: ${({ theme }) => theme.colors.greenMain};
    border-radius: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font: 700 16px/130% ${({ theme }) => theme.fonts.montserrat} !important;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGreen};
    }
  `;
};

export default styles;
