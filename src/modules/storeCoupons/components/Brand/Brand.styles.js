// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (Brand: Object) => {
  Brand.Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding-top: 15px;

    ${breakpoint('md')`
      flex-flow: row nowrap;
    `}

    @media (max-width: 768px) {
      flex-flow: column;
    }
  `;

  Brand.BrandImageWrapperLink = styled.a`
    display: flex;
    flex: 1 0 auto;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      width: auto;
    }

    @media (max-width: 375px) {
      max-width: 175px;
      padding: 0;
    }
  `;

  Brand.Info = styled.div`
    @media (max-width: 768px) {
      width: 100%;
      margin-right: 35px;
    }
  `;

  Brand.RightContent = styled.div`
    width: 90%;

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      margin-right: 30px;
    }

    @media (max-width: 375px) {
      max-width: 162px;
      margin: 0;
    }
  `;

  Brand.MobileVisitStore = styled.div`
    display: none;
    padding: 20px 22px;
    width: 100%;
    justify-content: center;

    @media (max-width: 375px) {
      display: flex;

      > div[class*='CouponCode__Wrapper'] {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;

        > div[class*='CouponCode__Button'] {
          width: 100%;
        }
      }
    }
  `;

  Brand.DesktopVisitStore = styled.div`
    @media (min-width: 375px) {
      display: none;
    }
  `;

  Brand.BrandImageWrapper = styled.div`
    width: 100%;
    margin-right: 30px;
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    border-radius: 5px;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 20px;

    ${breakpoint('lg')`
      width: 263px;
      min-height: 343px;
    `}

    @media (max-width: 992px) {
      width: 211px;
      min-height: 333px;
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      width: 100%;
      min-height: 189px;
      padding: 0;
    }

    @media (max-width: 375px) {
      flex-wrap: wrap;
    }

    > div > div[class*='CouponCode__Wrapper'] {
      max-width: 220px;
      height: 40px;
      margin: 20px auto;

      ${breakpoint('lg')`
        height: 45px;
        font-size: 16px;
      `}

      @media (max-width: 768px) {
        margin: inherit !important;
        max-width: 177px;
        font-size: 14px;
      }

      @media (max-width: 375px) {
        display: none;
      }
    }
  `;

  Brand.BrandImageWrapperHolder = styled.img`
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 169px;

    @media (max-width: 375px) {
      max-height: 120px;
    }
  `;

  Brand.NoWrapFlexBox = styled.div`
    display: flex;
    width: 100%;
    background-color: ${props => props.theme.colors.greenSecondary};
    border-radius: 5px;
    padding: 20px 30px;
    align-items: center;
    flex-direction: row;

    @media (max-width: 425px) {
      flex-direction: column;
      text-align: center;
      padding: 20px 22px;
    }
  `;

  Brand.XlWrapper = styled.div`
    width: 100%;
    display: flex;
  `;

  Brand.MdWrapper = styled.div`
    margin-top: 10px;
    display: none;

    ${breakpoint('sm')`
      margin-top: 30px;
    `}

    ${breakpoint('xl')`
      display: none;
    `}
  `;

  Brand.WrapFlexBox = styled.div`
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

  Brand.ShopNow = styled.a`
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

  Brand.CashBackActivate = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    letter-spacing: -0.188889px;
    color: ${props => props.theme.colors.greenSecondary};
  `;

  Brand.CashBackActivateButton = styled.div`
    height: auto;
    width: 100%;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-direction: row-reverse;
    }

    > div > div[class*='CouponCode__Button'] {
      width: 220px;
      height: 40px;
      margin: 20px auto;

      ${breakpoint('md')`
        width: 140px;
      `}

      ${breakpoint('lg')`
        width: 100%;
        height: 45px;
        font-size: 16px;
        margin: 0 auto 20px!important;
      `}
    }
  `;

  Brand.ShopNowImgArrow = styled.img`
    padding-left: 11px;
  `;
};

export default styles;
