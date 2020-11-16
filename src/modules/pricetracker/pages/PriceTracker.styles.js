// @flow
import styled from 'styled-components';

const styles = (PriceTracker: Object) => {
  PriceTracker.Wrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
    margin-bottom: 100px;
  `;

  PriceTracker.Title = styled.h2`
    color: #29343c;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    align-items: center;
    text-align: center;
    letter-spacing: 0.3px;
    margin: 57px auto 40px;
    max-width: 290px;
    text-transform: capitalize;
  `;

  PriceTracker.Product = styled.div`
    text-align: center;
    box-sizing: border-box;
    padding: 23px;
  `;

  PriceTracker.Container = styled.div`
    width: 94%;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
    padding: 0 21px;

    img {
      width: 130px;
      height: 130px;
      object-fit: scale-down;
    }

    @media (min-width: 420px) {
      h2 {
        font-size: 25px;
        max-width: 307px;
      }
    }

    @media (min-width: 768px) {
      header {
        height: 105px;
      }

      h2 {
        font-size: 1.9375rem;
        max-width: 542px;
        text-transform: none;
      }

      h3 {
        max-width: 294px;
      }

      p {
        max-width: 317px;
      }

      button {
        margin-bottom: 110px;
      }
    }

    @media (max-width: 992px) {
      button {
        margin-bottom: 130px;
      }
    }

    @media (min-width: 1024px) {
      h2 {
        max-width: 640px;
      }
    }

    @media (max-width: 1680px) {
      button {
        margin: 0 10px 130px;
      }
    }
  `;

  PriceTracker.Product = styled.div`
    text-align: center;
    font-family: 'Arimo', sans-serif;
    box-sizing: border-box;

    h3 {
      font-weight: bold;
      font-size: 1.125rem;
      line-height: 20px;
      color: #374b5a;
      max-width: 300px;
      margin: 20px auto 10px;
      text-align: center;
    }

    p {
      font-size: 0.875rem;
      font-weight: normal;
      line-height: 20px;
      color: #515759;
      max-width: 300px;
      margin: 0 auto;
    }
  `;

  PriceTracker.Button = styled.div`
    cursor: pointer;
    margin-top: 50px;
  `;

  PriceTracker.Link = styled.a`
    border: 2px solid #2c9e25;
    background: #f5fff4;
    color: #2c9e25;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    font-weight: bold;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 50px 57px;
  `;

  PriceTracker.ProductAll = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 650px;

    @media (max-width: 425px) {
      display: block;
      width: 100%;
    }
  `;

  PriceTracker.ProdDetails = styled.div`
    text-align: left;
    height: 115px;
  `;

  PriceTracker.ProdDescription = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.5px;
    color: #515759;
    margin-bottom: 16px;
  `;
  PriceTracker.Date = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.4px;
    text-transform: capitalize;
    text-align: left;
    color: #374b5a;
    margin-bottom: 6px;
  `;

  PriceTracker.NewPrice = styled.div`
    font-size: 23px;
    line-height: 130%;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    color: #29343c;
  `;

  PriceTracker.OldPrice = styled.div`
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.4px;
    text-transform: capitalize;
    color: #899197;
    margin-right: 9px;

    span {
      text-decoration: line-through;
    }
  `;

  PriceTracker.Price = styled.div`
    display: flex;
    font-weight: bold;
    margin-bottom: 37px;
    align-items: baseline;
  `;

  PriceTracker.ImageProduct = styled.div`
    width: 170px;
    height: 170px;
    margin: 40px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media (max-width: 425px) {
      margin: 40px auto;
    }
  `;

  PriceTracker.Divider = styled.div`
    display: ${props => (props.show ? 'flex' : 'none')};
    width: 650px;
    margin: 0 auto;
    border: 1px dashed rgba(137, 145, 151, 0.2);

    @media (max-width: 425px) {
      margin: 40px 0;
      width: 100%;
    }
  `;
};

export default styles;
