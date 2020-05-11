// @flow
import styled from 'styled-components';

const styles = (StorePage: Object) => {
  StorePage.TermsWrapper = styled.div`
    display: ${({ isShow, isMobile }) => {
      return !isMobile ? (isShow ? 'flex' : 'none') : 'none';
    }};
    margin-top: 40px;
    flex-direction: column;
    padding: 32px;
    width: auto;
    background: #f9f9f9;
    border-radius: 5px;
    color: #899197;

    @media (max-width: 768px) {
      display: ${({ isShow, isMobile }) => {
        return isMobile ? (isShow ? 'flex' : 'none') : 'none';
      }};
    }

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
  `;
};

export default styles;
