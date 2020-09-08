// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (UserReviewBlock: Object) => {
  UserReviewBlock.Wrapper = styled.div`
    max-width: 950px;
    margin: 0 auto;
    padding: 0 15px;
    min-height: 423px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 80px;
    margin-top: 80px;

    ${breakpoint('md')`
      margin-top: 100px;
    `}
    .hero-block-title {
      width: 90%;
      text-align: center;
      margin: 0 auto 30px;

      ${breakpoint('md')`
        width: calc( 100% - 492px);
        text-align: left;
        margin: 0;
      `}
    }

    h5 {
      font: bold 18px/130% ${({ theme }) => theme.fonts.montserrat} !important;
      letter-spacing: 0.4px;
      color: ${({ theme }) => theme.colors.blackGrey};
      padding: 10px 0;
    }

    h3 {
      font: bold 31px/130% ${({ theme }) => theme.fonts.montserrat} !important;
      letter-spacing: 0.3px;
      color: ${({ theme }) => theme.colors.blackGrey};
      padding: 0 0 10px;
    }

    p {
      font: 400 14px/20px ${({ theme }) => theme.fonts.roboto};
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.colors.blackGrey};
    }

    .floating-banner {
      width: 90%;
      height: auto;
      margin: 20px auto;

      ${breakpoint('md')`
        width: 457px;
        height: 425px;
        margin: 0;
      `}

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  `;

  UserReviewBlock.UserHero = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    ${breakpoint('md')`
      flex-direction: row;
    `}

    &.right {
      flex-direction: column;
      ${breakpoint('md')`
        flex-direction: row-reverse;
      `}
    }
  `;
};

export default styles;
