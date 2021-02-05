// @flow
import styled from 'styled-components';

const styles = (Product: Object) => {
  Product.Wrapper = styled.div`
    display: block;
  `;

  Product.BrandHeaderBox = styled.div`
    overflow: hidden;
    background: #fff;
    border: 1px solid #dadde2;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: auto;
    height: 290px;
    margin: 0 auto 30px;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);

    @media (min-width: 320px) {
      padding-bottom: 40px;
    }

    @media (min-width: 768px) {
      padding-bottom: 0px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 152px;
    }

    @media (min-width: 1024px) {
      height: 184px;
    }
  `;

  Product.BrandHeaderBoxImg = styled.div`
    margin: -4px;

    img {
      margin-top: 60px;
      width: 100%;
      height: 120px;
      padding: 10px 0px;
      object-fit: contain;
    }

    @media (min-width: 768px) {
      height: 100%;

      img {
        margin: 0;
      }
    }

    @media (min-width: 1024px) {
      width: 100%;

      img {
        height: 160px;
      }
    }
  `;

  Product.BrandHeaderBoxContent = styled.div`
    display: flex;
    border-radius: 5px;
    border-bottom-right-radius: 3.9313px;
    border-bottom-left-radius: 3.9313px;
    flex-direction: column;
    justify-content: center;
    width: 263px;
    height: 283px;
    background: ${`
      linear-gradient(126.04deg, #f29d39 -0.01%, rgba(255, 255, 255, 0.4) 47.95%),
      linear-gradient(300.71deg, #f90 0.95%, #ffb800 37.97%)
    `};
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);
    padding: 10px;

    @media (min-width: 320px) {
      padding: 20px 100%;
      width: 80%;
    }

    @media (min-width: 768px) {
      width: 230px;
      height: 151px;
      border-bottom-left-radius: 0px;
      border-top-right-radius: 3.9313px;
      border-top-left-radius: 0;
      padding: 10px;
      clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%);
      padding-left: 50px;
    }

    @media (min-width: 1024px) {
      height: 184px;
      width: 309px;
      padding: 20px 0 0 70px;
      background: ${`
        linear-gradient(126.04deg, #f29d39 -0.01%, rgba(255, 255, 255, 0.4) 47.95%),
        linear-gradient(300.71deg, #f90 0.95%, #ffb800 37.97%)
      `};
      box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);
      clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%);
    }

    @media (min-width: 1440px) {
      height: 184px;
      padding: 20px 0 0 70px;
      width: 360px;
    }
  `;

  Product.BrandHeaderBoxContentBoxLabel = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 120%;
    display: block;
    letter-spacing: 0.4px;
    text-transform: capitalize;
    color: #141920;
    width: 204px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 320px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 90%;
    }
  `;

  Product.BrandHeaderPrice = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    padding-bottom: 10px;
  `;

  Product.OldPrice = styled.div`
    display: ${({ isZero }) => (isZero ? 'block' : 'none')};
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.4px;
    text-decoration-line: line-through;
    text-transform: capitalize;
    color: #6c6c6c;
    margin-right: 5px;
  `;

  Product.NewPrice = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.4px;
    text-transform: capitalize;
    color: #141920;
  `;

  Product.BrandHeaderDescription = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    display: block;
    align-items: center;
    letter-spacing: 0.4px;
    text-transform: capitalize;
    color: #141920;
    margin-bottom: 10px;

    @media (min-width: 320px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 90%;
    }
  `;

  Product.Button = styled.button`
    cursor: pointer;
    background: #fff;
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.3px;
    text-transform: capitalize;
    color: #2c9e25;
    border: none;
    width: 137px;
    height: 39px;
    margin: 0 auto;

    @media (min-width: 768px) {
      margin: 0;
    }
  `;

  Product.a = styled.a`
    width: 137px;
  `;
};

export default styles;
