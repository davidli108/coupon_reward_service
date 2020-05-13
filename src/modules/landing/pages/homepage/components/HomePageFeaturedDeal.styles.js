// @flow
import styled from 'styled-components';

const styles = (HomePageFeaturedDeal: Object) => {
  HomePageFeaturedDeal.Wrapper = styled.div`
    padding: 0 0 30px;
    border-bottom: 1px solid ${props => props.theme.colors.whiteLight};
    margin: 0 0 30px;

    @media (max-width: 767px) {
      padding: 0 15px 30px;
    }
  `;

  HomePageFeaturedDeal.Deal = styled.div`
    height: 250px;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    transition: all 0.3s ease;
    border: 1px solid transparent;

    &:hover {
      border-color: ${({ theme }) => theme.colors.darkGray};
      box-shadow: 0px 14px 21px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 991px) {
      height: auto;
      align-items: normal;
    }

    @media (max-width: 767px) {
      flex-flow: column nowrap;
    }
  `;

  HomePageFeaturedDeal.Brand = styled.figure`
    padding: 0;
    margin: 0;
    flex: 0 0 274px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;

    img {
      display: block;
      object-fit: scale-down;
      height: 100%;
      width: 100%;
    }

    @media (max-width: 991px) {
      height: auto;
    }

    @media (max-width: 767px) {
      height: 125px;
      flex: 0;
      padding: 15px;
      box-sizing: border-box;
    }
  `;

  HomePageFeaturedDeal.ProductWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 991px) {
      flex-flow: column nowrap;
      padding: 68px 40px 40px;
      text-align: center;
    }

    @media (max-width: 767px) {
      padding: 60px 15px 30px;
    }
  `;

  HomePageFeaturedDeal.Product = styled.figure`
    flex: 0 0 374px;
    box-sizing: border-box;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: scale-down;
    }

    @media (max-width: 1199px) {
      flex: 0 0 294px;
    }

    @media (max-width: 991px) {
      flex: 1 0 auto;
      margin: 0 0 38px;
      padding: 0 10px;

      img {
        max-height: 113px;
      }
    }
  `;

  HomePageFeaturedDeal.Details = styled.div`
    flex: 0 0 360px;

    h3 {
      font: 700 18px/24px ${({ theme }) => theme.fonts.montserrat} !important;
      color: ${({ theme }) => theme.colors.black};
      margin: 0 0 20px;
      letter-spacing: 0.4px;
    }

    p {
      font: 400 14px/20px ${({ theme }) => theme.fonts.roboto};
      color: ${({ theme }) => theme.colors.black};
      margin: 0 0 20px;
    }

    button {
      height: 40px;
      padding: 0 20px;
      border-radius: 5px;
      border: 0;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.greenMain};
      color: ${({ theme }) => theme.colors.white};
      font: 700 14px/17px ${({ theme }) => theme.fonts.montserrat} !important;
      transition: background 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.greenBlank};
      }

      &:focus {
        outline: none;
      }
    }

    @media (max-width: 1199px) {
      flex: 0 0 334px;
    }

    @media (max-width: 991px) {
      flex: 0;
    }
  `;
};

export default styles;
