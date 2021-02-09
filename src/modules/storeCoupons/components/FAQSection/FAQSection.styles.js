// @flow
import styled from 'styled-components';

const styles = (FAQSection: Object) => {
  FAQSection.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  FAQSection.Question = styled.p`
    font-family: ${({ theme }) => theme.fonts.dmSans} !important;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: 0.3px;
    color: #62707b;
    margin-left: 18px;
  `;

  FAQSection.QuestionWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
  `;

  FAQSection.Answer = styled.p`
    font-family: ${({ theme }) => theme.fonts.dmSans} !important;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: 0.3px;
    color: #62707b;
    margin: 10px 0 10px 30px;

    a {
      font-weight: 500;
      text-decoration: underline;
      color: #62707b;
    }
  `;
};

export default styles;
