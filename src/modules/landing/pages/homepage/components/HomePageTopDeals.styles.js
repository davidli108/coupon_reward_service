// @flow
import styled from 'styled-components';

const styles = (HomePageTopDeals: Object) => {
  HomePageTopDeals.Wrapper = styled.div`
    padding: 0 0 15px;
    border-bottom: 1px solid ${props => props.theme.colors.whiteLight};
    margin: 0 0 30px;

    @media (max-width: 767px) {
      padding: 0 15px;
    }
  `;

  HomePageTopDeals.Title = styled.h2`
    margin: 0 0 20px;
    font: 700 20px/24px ${({ theme }) => theme.fonts.montserrat} !important;
    color: ${({ theme }) => theme.colors.blackGrey};
  `;

  HomePageTopDeals.List = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 0 -15px;

    @media (max-width: 991px) {
      flex-flow: row nowrap;
      overflow: scroll;
      padding: 15px 0 0;
      margin: -15px -15px 0;
    }
  `;

  HomePageTopDeals.Item = styled.div`
    padding: 0 15px;
    margin: 0 0 20px;
    flex: 1 0 20%;
    max-width: 20%;
    box-sizing: border-box;

    svg {
      width: 32px;
      height: 32px;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.greenMain};
      color: ${({ theme }) => theme.colors.white};
      padding: 7px;
      position: absolute;
      transition: all 0.3s ease;
      left: 50%;
      top: 0;
      opacity: 0;
      transform: translate3d(-50%, 0, 0);
    }

    .wrapper {
      height: 288px;
      border-radius: 5px;
      padding: 20px 10px;
      background-color: ${({ theme }) => theme.colors.white};
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      box-sizing: border-box;
      border: 1px solid transparent;
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        border-color: ${({ theme }) => theme.colors.darkGray};
        box-shadow: 0px 14px 21px rgba(0, 0, 0, 0.25);

        svg {
          opacity: 1;
          transform: translate3d(-50%, -50%, 0);
        }
      }
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 15px;
      padding: 0;
      width: 106px;
      height: 106px;

      img {
        display: block;
        max-width: 100%;
        max-height: 100%;
      }
    }

    .details {
      margin: 0 0 15px;
      max-width: 100%;

      small {
        display: block;
        text-align: center;
        font: 400 12px/15px ${({ theme }) => theme.fonts.montserrat} !important;
        color: ${({ theme }) => theme.colors.blackExLight};
        margin: 0 0 3px;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        height: 60px;
        font: 400 14px/20px ${({ theme }) => theme.fonts.roboto};
        color: ${({ theme }) => theme.colors.blackGrey};
        text-align: center;
        word-break: break-word;
      }
    }

    .price {
      display: flex;
      align-items: flex-end;
      font: 700 23px/34px ${({ theme }) => theme.fonts.montserrat} !important;
      color: ${({ theme }) => theme.colors.blackGrey};
      max-width: 100%;

      span {
        font: 400 12px/24px ${({ theme }) => theme.fonts.montserrat} !important;
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.red};
        margin: 0 4px 0 0;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      b {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    @media (max-width: 1199px) {
      padding: 0 10px;

      .price {
        font: 700 21px/30px ${({ theme }) => theme.fonts.montserrat} !important;
        flex-flow: column nowrap;
        align-items: center;
      }
    }

    @media (max-width: 991px) {
      min-width: 170px;

      .price {
        font: 700 18px/27px ${({ theme }) => theme.fonts.montserrat} !important;
      }

      .wrapper {
        padding: 20px 10px;
      }
    }
  `;
};

export default styles;
