// @flow
import styled from 'styled-components';

const styles = (Extend: Object) => {
  Extend.Wrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
  `;

  Extend.Container = styled.div`
    width: 94%;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
    padding: 0 21px;

    h2 {
      color: #2c9e25;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.25rem;
      font-weight: bold;
      align-items: center;
      text-align: center;
      letter-spacing: 0.3px;
      text-transform: capitalize;
      margin: 57px auto 40px;
      max-width: 257px;
    }

    img {
      width: 120px;
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
        max-width: 485px;
        margin-top: 110px;
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

      h2 {
        margin-top: 130px;
      }
    }

    @media (max-width: 1680px) {
      h2 {
        margin-top: 150px;
      }

      button {
        margin: 50px 0 152px;
      }
    }
  `;

  Extend.Product = styled.div`
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

  Extend.Dismiss = styled.button`
    cursor: pointer;
    border: 2px solid #2c9e25;
    background: #f5fff4;
    color: #2c9e25;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    font-weight: bold;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 40px 57px 130px;
  `;
};

export default styles;
