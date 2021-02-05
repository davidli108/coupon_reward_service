// @flow
import styled from 'styled-components';

const styles = (Offers: Object) => {
  Offers.LoadMoreDeals = styled.p`
    z-index: 2;
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.45px;
    color: ${props => props.theme.colors.whiteDark};
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    transition: color 205ms linear;

    p {
      line-height: 80px;
    }

    &:hover {
      color: ${props => props.theme.colors.grayDark};
      text-decoration: underline;
    }
  `;

  Offers.NoData = styled.p`
    width: 100%;
    margin: 50px 0 40px;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    line-height: 21px;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.montserrat} !important;
    color: #adb8c0;
    text-align: center;
  `;

  Offers.CashBackCatListDiv = styled.div`
    @media (min-width: 1024px) {
      display: none;
    }

    box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.2);
    position: absolute;
    background: #fff;
    border: 1px solid #dadde2;
    box-sizing: border-box;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 20px;
    margin-left: -26px;
    width: 90%;
    border-top: none;
    max-height: 450px;
    overflow: auto;
  `;

  Offers.CashBackCatDiv = styled.div`
    @media (min-width: 992px) {
      display: none;
    }

    box-shadow: ${({ isCollapse }) =>
      isCollapse ? `0px 12px 22px rgba(0, 0, 0, 0.2)` : 'none'};
    width: 100%;
    background: #fff;
    border: 1px solid #dadde2;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 12px 25px;
    margin-top: 30px;

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.45px;
      color: #899197;
    }
  `;

  Offers.CashBackLi = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5em;

    a {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 32px;
      text-decoration-line: underline;
      color: #a7a7a7;
    }

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 32px;
      text-align: right;
      text-decoration-line: underline;
      color: #374b5a;
    }
  `;

  Offers.CashBackUl = styled.ul`
    @media (max-width: 768px) {
      display: block;
    }

    width: 100%;
    list-style: none;
    display: none;
  `;

  Offers.CollapseArrow = styled.img`
    float: right;
    padding-top: 10px;
  `;
};

export default styles;
