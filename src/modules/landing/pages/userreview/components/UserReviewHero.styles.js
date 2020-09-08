// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (UserReviewHero: Object) => {
  UserReviewHero.Wrapper = styled.div`
    background: ${props => props.theme.colors.blueBg};
    padding: 50px 0;

    .container {
      max-width: 950px;
      margin: 0 auto;
      padding: 0 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
      box-sizing: border-box;

      .floating-banner {
        width: 83px;
        height: 110px;
        margin: 0 auto 20px;
        ${breakpoint('sm')`
          width: 80%;
          height: auto;
          margin: 0 auto;
        `}
        ${breakpoint('md')`
          width: 207px;
          height: 274px;
          margin:  0;
        `}
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      h1 {
        font-family: ${({ theme }) => theme.fonts.montserrat} !important;
        font-size: 22px;
        line-height: 130%;
        color: ${props => props.theme.colors.blueBlanknew};
        font-weight: 700;
        margin: 0;
        text-align: center;
        padding: 0 10px;

        ${breakpoint('sm')`
          padding: 0;
          font-size: 29px;
          line-height: 42px;
          text-align: left;
        `}

        ${breakpoint('lg')`
          font-size: 39px;
          line-height: 130%;
        `}
      }

      p {
        font-size: 14px;
        line-height: 20px;
        color: ${props => props.theme.colors.blueBlanknew};
        margin: 15px 0;
        letter-spacing: 0.5px;
        padding: 0 10px;
        text-align: center;
        ${breakpoint('sm')`
          text-align: left;
          padding: 0;
        `}
      }

      .center-it-m {
        text-align: center;

        ${breakpoint('sm')`
          text-align: left;
        `}
      }
    }

    #user-hero {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 100%;
      grid-template-areas:
        "banner"
        "title"
        "info";

      ${breakpoint('sm')`
        grid-template-columns: 32% 66%;
        grid-template-areas:
          "banner title"
          "banner info";
      `}

      .hero-block-title {
        grid-area: title;
      }

      .hero-block-banner {
        grid-area: banner;
      }

      .hero-block-info {
        grid-area: info;

        a {
          display: inline-block;
          align-items: center;
          background: ${props => props.theme.colors.greenBlank};
          border-radius: 5px;
          line-height: 50px;
          color: ${props => props.theme.colors.white};
          text-decoration: none !important;
          text-align: center;
          border: 1px solid ${props => props.theme.colors.greenBlank};
          cursor: pointer;
          box-shadow: 0 10px 44px rgba(0, 0, 0, .17);
          transition: all .4s ease;
          margin: 5px 0;
          font-family: ${({ theme }) => theme.fonts.montserrat} !important;
          text-transform: capitalize;
          font-weight: 700;

          ${breakpoint('xs')`
            font-size: 14px;
            padding: 0 7px;
          `}

          ${breakpoint('sx')`
            padding: 0 15px;
          `}

          ${breakpoint('md')`
            padding: 0 50px;
            font-size: 20px;
          `}

          strong {
            font-weight: 700;

            ${breakpoint('lg')`
              display: block;
            `}

            ${breakpoint('xl')`
              display: inline;
            `}
          }

          &:hover {
            background: ${props => props.theme.colors.white};
            color: ${props => props.theme.colors.greenBlank};

            &::after {
              border-left-color: ${props => props.theme.colors.greenBlank};
            }
          }
        }
      }
    }
  `;
};

export default styles;
