// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (TermsModal: Object) => {
  TermsModal.Backdrop = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    background: ${p => p.theme.colors.blackAlphaDark};
    transition: all 0.3s ease;
  `;

  TermsModal.Container = styled.div`
    position: relative;
    z-index: 2;
    flex: 1 0 0;
    max-width: 1000px;
    background: ${p => p.theme.colors.white};
    padding: 32px 22px;
    box-sizing: border-box;
    border-radius: 10px;
    flex-flow: column nowrap;
    display: flex;
    max-height: 100%;
    opacity: 0;
    pointer-events: none;
    transform: translate3d(0, -50px, 0);
    transition: all 0.4s ease-in-out;

    ${breakpoint('md')`
      padding: 32px;
    `}

    * {
      font-family: ${({ theme }) => theme.fonts.dmSans} !important;
      line-height: normal;
    }

    h2 {
      text-align: center;
      font-size: 20px;
      line-height: 32px;
      font-weight: 700;
      flex: 0 0 52px;
    }

    svg {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 32px;
      padding: 3px;
      box-sizing: border-box;
      transition: opacity 0.3s ease;
      color: ${p => p.theme.colors.black};
      cursor: pointer;
      opacity: 0.2;

      &:hover {
        opacity: 1;
      }
    }

    p {
      margin: 0 0 15px;
    }
  `;

  TermsModal.Content = styled.div`
    overflow: scroll;

    ${breakpoint('lg')`
      overflow: auto;
    `}
  `;

  TermsModal.Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    box-sizing: border-box;
    padding: 32px 15px;
    pointer-events: none;

    &.active {
      pointer-events: auto;

      ${TermsModal.Backdrop} {
        opacity: 1;
        pointer-events: auto;
      }

      ${TermsModal.Container} {
        opacity: 1;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
      }
    }
  `;
};

export default styles;
