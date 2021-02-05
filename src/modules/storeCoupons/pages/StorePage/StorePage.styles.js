// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (StorePage: Object) => {
  StorePage.Container = styled.div`
    padding: 21px 15px;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.graySecondary};
  `;

  StorePage.Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    flex-flow: row wrap;

    ${breakpoint('md')`
      max-width: 690px;
    `}

    ${breakpoint('lg')`
      max-width: 932px;
    `}

    ${breakpoint('xl')`
      max-width: 1145px;
    `}
  `;

  StorePage.Separator = styled.hr`
    display: flex;
    width: 100%;
    border: 0;
    border-top: 1px solid ${props => props.theme.colors.whiteLight};
  `;

  StorePage.NoWrapFlexBox = styled.div`
    display: flex;
    flex-flow: column nowrap;

    ${breakpoint('lg')`
      flex-flow: row nowrap;
      justify-content: space-between;

      width: 100%;
      padding: 10px 0;
    `}
  `;

  StorePage.NoWrapFlexBoxWithBorder = styled(StorePage.NoWrapFlexBox)`
    ${breakpoint('lg')`
        border: 1px dashed #00CBE9;
        border-radius: 5px;
        margin-left: 30px;
        padding: 8px 20px;

        height: auto;

        > * {
          padding: 0;
        }
      `}
  `;

  StorePage.DesktopContent = styled(StorePage.NoWrapFlexBox)`
    width: 100%;

    ${breakpoint('lg')`
      > div:first-child {
        width: calc(100% - 281px);
      }

      > div:last-child {
        width: 262px;
      }
    `}
  `;

  StorePage.ColumnNoWrapFlexBox = styled.div`
    width: 100%;
  `;

  StorePage.PreloaderWrapper = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  StorePage.MainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;

    ${breakpoint('lg')`
      align-items: flex-start;
      flex-flow: row nowrap;
    `}

    @media (max-width: 768px) {
      flex-flow: column;
    }
  `;

  StorePage.BrandLogoLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 120px;
    height: 120px;

    ${breakpoint('md')`
      flex: 0 0 169px;
      height: 169px;
    `}

    ${breakpoint('md')`
      margin: 0 0 10px;
    `}
  `;

  StorePage.BrandInfo = styled.div`
    flex: 1 0 auto;
    text-align: center;
  `;

  StorePage.BrandVisitStore = styled.div`
    font-family: ${props => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    margin: 0;
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 20px;

    > div {
      width: auto;
      min-width: 176px;
      max-width: 100%;
      text-align: center;

      > div {
        height: 44px;

        p {
          font-size: 18px !important;
          letter-spacing: 0.3px;
          font-family: ${({ theme }) => theme.fonts.dmSans} !important;
        }

        &:hover {
          min-width: 176px;
          border: 0;
        }
      }
    }

    ${breakpoint('md')`
      position: static;

      > div {
        > div {
          padding: 0 20px;
          min-width: 176px;
        }
      }
    `}

    ${breakpoint('lg')`
      > div {
        > div {
          padding: 0 29px;
          min-width: 0;

          p {
            letter-spacing: .2px;
          }
        }
      }
    `}
  `;

  StorePage.LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    max-width: 100%;

    ${breakpoint('lg')`
      max-width: 211px;
      margin: 0 30px 0 0;
    `}

    ${breakpoint('xl')`
      max-width: 263px;
    `}
  `;

  StorePage.Brand = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.white};
    border-radius: 5px;
    box-sizing: border-box;
    padding: 20px 22px 74px;
    margin: 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${breakpoint('md')`
      padding: 10px 30px;
      margin: 0 0 20px;
    `}

    ${breakpoint('lg')`
      padding: 20px 21px 71px;
      flex-flow: column nowrap;
    `}
  `;

  StorePage.BrandLogo = styled.img`
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 169px;

    @media (max-width: 375px) {
      max-height: 120px;
    }
  `;

  StorePage.BrandNoWrapFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 20px 22px;
    background-color: ${props => props.theme.colors.greenSecondary};
    border-radius: 5px;

    ${breakpoint('md')`
      padding: 20px 30px;
      flex-flow: row nowrap;
    `}
  `;

  StorePage.BrandXlWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 0 0 25px;

    ${breakpoint('md')`
      margin: 0 0 20px;
    `}
  `;

  StorePage.BrandMdWrapper = styled.div`
    margin-top: 10px;
    display: none;

    ${breakpoint('sm')`
      margin-top: 30px;
    `}

    ${breakpoint('xl')`
      display: none;
    `}
  `;

  StorePage.RightContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    ${breakpoint('xl')`
      display: block;
    `}

    ${breakpoint('md')`
      flex-flow: row wrap;
      align-items: center;
      width: 100%
    `}

    ${breakpoint('lg')`
      width: calc(100% - 245px);
    `}
  `;

  StorePage.BrandShopNow = styled.a`
    @media (max-width: 425px) {
      padding: 13px 140px;
    }

    @media (max-width: 375px) {
      padding: 13px 110px;
    }

    @media (max-width: 320px) {
      padding: 13px 80px;
    }

    text-decoration: none;
    box-sizing: border-box;
    letter-spacing: 0.5px;
    color: ${props => props.theme.colors.greenLight};
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    padding: 13px 60px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.greenMain};
    box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.5),
      inset 0px -1px 5px rgba(0, 0, 0, 0.0584805),
      inset 0px -2px 0px rgba(255, 255, 255, 0.213315);
    float: right;
    margin-bottom: 11px;
  `;

  StorePage.BrandCashBackActivate = styled.p`
    font-family: ${({ theme }) => theme.fonts.dmSans} !important;
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
    color: ${props => props.theme.colors.greenSecondary};

    ${breakpoint('md')`
      font-size: 16px;
      line-height: 21px;
      margin: 0 0 10px;
    `}

    ${breakpoint('lg')`
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      height: 31px;
      margin: 0;
      letter-spacing: -.1px;
    `}
  `;

  StorePage.BrandHowCashBackWorks = styled.div`
    display: none;

    ${breakpoint('md')`
      display: block;
    `}

    ${breakpoint('lg')`
      display: none;
    `}
  `;

  StorePage.BrandHowCashBackWorksLink = styled.a`
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-decoration: underline;
    font-family: ${({ theme }) => theme.fonts.montserrat} !important;
    color: ${props => props.theme.colors.blackSecondary} !important;
  `;

  StorePage.BrandCashBackActivateButton = styled.div`
    height: auto;
    width: 100%;
  `;

  StorePage.BrandShopNowImgArrow = styled.img`
    padding-left: 11px;
  `;

  StorePage.AdditionalInfoWrapper = styled.div`
    margin-top: 35px;
    margin-bottom: 30px;
    padding: 32px 22px;
    background-color: ${props => props.theme.colors.grayContrast};

    ${breakpoint('md')`
      padding: 32px;
    `}
  `;

  StorePage.BrandFiltersMobileBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  `;

  StorePage.BrandFiltersMobile = styled.div`
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 13px 15px 0;
    box-sizing: border-box;
    border-radius: 5px 5px 0 0;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 74px rgba(0, 0, 0, 0.2);
    z-index: 101;
    max-height: calc(100% - 110px);
    transform: translate3d(
      0,
      ${({ isVisible }) => (isVisible ? 0 : 'calc(100% - 50px)')},
      0
    );
    transition: transform 0.3s ease-in-out;

    ${breakpoint('md')`
      display: none;
    `}
  `;

  StorePage.BrandFiltersMobileHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 0 17px;
  `;

  StorePage.BrandFiltersMobileTitle = styled.h2`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-right: auto;
    font-family: ${props => props.theme.fonts.dmSans} !important;
    color: ${props => props.theme.colors.darkGray};
  `;

  StorePage.BrandFiltersMobileActions = styled.div`
    display: flex;

    svg {
      width: 24px;
      height: 24px;
      fill: #acacac;
      padding: 3px;
      box-sizing: border-box;
      margin: 0 -5px 0 5px;
    }
  `;

  StorePage.BrandFiltersMobileActionButton = styled.div`
    font-family: ${props => props.theme.fonts.dmSans} !important;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    position: relative;
    height: 24px;
    margin: 0 0 0 10px;
    background: ${props =>
      props.isFilled ? props.theme.colors.greenMain : props.theme.colors.white};
    transition: all 0.3s ease;
    cursor: pointer;
    color: ${props =>
      props.isFilled ? props.theme.colors.white : props.theme.colors.greenMain};
    border: 1px solid ${props => props.theme.colors.greenMain};
  `;

  StorePage.BrandFiltersMobileFilters = styled.div`
    height: 100%;
    overflow: auto;
  `;

  StorePage.NoWrapFlexBox = styled.div`
    display: flex;
    flex-flow: column nowrap;

    ${breakpoint('lg')`
      flex-flow: row nowrap;
      justify-content: space-between;

      width: 100%;
      padding: 10px 0;
    `}
  `;

  StorePage.NoWrapFlexBoxWithBorder = styled(StorePage.NoWrapFlexBox)`
    ${breakpoint('lg')`
        border: 1px dashed #00CBE9;
        border-radius: 5px;
        margin-left: 30px;
        padding: 8px 20px;

        height: auto;

        > * {
          padding: 0;
        }
      `}
  `;

  StorePage.ColumnNoWrapFlexBox = styled.div`
    ${breakpoint('xl')`
      margin-top: ${({ extensionActive, hasTracker }) =>
        !hasTracker ? (extensionActive ? '-200px' : '') : ''}
    `}

    ${breakpoint('lg')`
      display: flex;
      flex-flow: column nowrap;
      order: ${({ order }) => order};
      width: 100%;
    `}
  `;

  StorePage.PreloaderWrapper = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  StorePage.TermsWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    padding: 32px;
    width: auto;
    background: #f9f9f9;
    border-radius: 5px;
    color: #899197;

    body {
      display: block;
      margin: 8px;
    }

    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

    h1 {
      display: block;
      font-size: 2em;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }

    h2 {
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }

    h3 {
      display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }

    h4 {
      display: block;
      margin-block-start: 1.33em;
      margin-block-end: 1.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }

    h5 {
      display: block;
      font-size: 0.83em;
      margin-block-start: 1.67em;
      margin-block-end: 1.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }

    h6 {
      display: block;
      font-size: 0.67em;
      margin-block-start: 2.33em;
      margin-block-end: 2.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }

    b {
      font-weight: bold;
    }

    strong {
      font-weight: bold;
    }

    i {
      font-style: italic;
    }

    u {
      text-decoration: underline;
    }

    small {
      font-size: smaller;
    }

    @media (max-width: 768px) {
      margin-top: 20px;
    }

    @media (max-width: 425px) {
      margin-top: 30px;
    }

    @media (max-width: 375px) {
      margin-top: 10px;
    }
  `;
};

export default styles;
