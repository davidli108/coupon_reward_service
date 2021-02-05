// @flow
import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

const styles = (CouponCode: Object) => {
  CouponCode.Wrapper = styled.div`
    width: 100%;
    position: relative;
    min-width: 177px;
    margin: 0 auto;

    @media (max-width: 375px) {
      width: 301px;
      max-width: auto;
    }
  `;

  CouponCode.Button = styled.div`
    font: 700 14px/18px ${({ theme }) => theme.fonts.montserrat} !important;
    display: ${props => (props.isShow === false ? 'none' : 'flex')};
    background: ${({ theme }) => theme.colors.greenMain};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 0.3px;
    align-items: center;
    justify-content: center;
    height: 39px;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.3s ease;

    p {
      font: 700 14px/18px ${({ theme }) => theme.fonts.montserrat} !important;
    }

    &:hover {
      background: ${props => props.theme.colors.greenBlank};
      border: 2px solid transparent;
    }
  `;

  CouponCode.Deal = styled(CouponCode.Button)`
    background-color: ${props => props.theme.colors.greenMain};
  `;

  CouponCode.Link = styled.a`
    font: 700 14px/18px ${({ theme }) => theme.fonts.montserrat} !important;
    display: ${props => (props.isShow === false ? 'none' : 'flex')};
    letter-spacing: 0.3px;
    align-items: center;
    justify-content: center;
    height: 39px;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.3s ease;
    background: ${props => props.theme.colors.greenMain};
    color: ${props => props.theme.colors.white};
    border: 2px solid transparent;

    p {
      font: 700 14px/17px ${({ theme }) => theme.fonts.montserrat} !important;
    }

    &:hover {
      background: ${props => props.theme.colors.greenBlank};
      border: 2px solid transparent;
    }
  `;

  CouponCode.Tooltip = styled.div`
    position: absolute;
    left: 50%;
    bottom: 100%;
    width: 177px;
    box-sizing: border-box;
    margin: 0 0 10px;
    border-radius: 5px;
    padding: 6px 10px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 11px;
    line-height: 18px;
    font-weight: 600;
    text-align: center;
    pointer-events: none;
    opacity: 0;
    transform: translate3d(-50%, -10px, 0);
    transition: all 0.3s ease;
    white-space: normal;
    font-family: ${({ theme }) => theme.fonts.montserrat} !important;

    ::after {
      content: '';
      display: block;
      left: 50%;
      position: absolute;
      top: 100%;
      margin: 0 0 0 -5px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid ${({ theme }) => theme.colors.black};
    }
  `;

  CouponCode.Code = styled.a`
    display: ${props => (props.isShow === false ? 'none' : 'flex')};
    letter-spacing: 0.3px;
    align-items: center;
    justify-content: center;
    height: 39px;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.3s ease;
    border: 2px dashed gray;
    background-color: ${({ theme }) => theme.colors.whiteEnLight};
    color: black;
    position: relative;
    font-family: ${({ theme }) => theme.fonts.montserrat} !important;
    line-height: 17px;
    font-weight: 700;
    font-size: ${({ codeLength }) =>
      codeLength > 22 ? 10 : codeLength > 20 ? 13 : 14}px;

    :hover {
      background-color: ${({ theme }) => theme.colors.whiteEnLight};
      color: black;
      border: 2px dashed gray;

      ${CouponCode.Tooltip} {
        opacity: 1;
        transform: translate3d(-50%, 0, 0);
      }
    }
  `;

  CouponCode.CashbackRate = styled(CouponCode.Link)`
    background: ${({ theme }) => theme.colors.greenMain};
  `;
};

export default styles;
