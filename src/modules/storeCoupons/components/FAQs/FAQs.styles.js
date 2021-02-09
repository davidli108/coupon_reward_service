// @flow
import styled from 'styled-components';

const styles = (FAQs: Object) => {
  FAQs.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #f9f9f9;
    border-radius: 5px;
    padding: 32px;
    width: 100%;
  `;

  FAQs.Title = styled.p`
    font-family: ${({ theme }) => theme.fonts.montserrat} !important;
    color: #62707b;
    font-weight: bold;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: 0.2px;
    text-transform: capitalize;
  `;
};

export default styles;
