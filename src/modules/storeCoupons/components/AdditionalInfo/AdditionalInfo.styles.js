// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (AdditionalInfo: Object) => {
  AdditionalInfo.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.blackExLight};
    line-height: 20px;

    * {
      font-family: ${({ theme }) => theme.fonts.dmSans} !important;
    }

    h2 {
      margin: 0 0 30px;
      font-size: 20px;
      line-height: 26px;
      font-weight: 700;
      letter-spacing: 0.2px;
    }

    .content-info {
      margin-right: 20px;
    }

    h2,
    h5,
    p {
      color: ${props => props.theme.colors.blackExLight} !important;
      line-height: 20px;
    }

    ${breakpoint('sm')`
      margin-top: 0;
    `}

    ${breakpoint('lg')`
      margin-top: 0;
    `}

    @media (max-width: 768px) {
      .categories {
        display: none;
      }
    }
  `;

  AdditionalInfo.ContentLink = styled.a`
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.5px;
    font-weight: bold;
    text-decoration: underline;
    color: ${props => props.theme.colors.blackExLight};

    &:hover {
      text-decoration: none;
    }
  `;

  AdditionalInfo.Content = styled.div`
    margin-bottom: 30px;

    h5 {
      margin-top: 20px;
      font-size: 16px;
      font-weight: 600;
    }

    p {
      margin: 0 0 10px;
      font-weight: 300;
    }

    ol,
    ul {
      list-style: disc;
      margin-block-start: 1em;
      margin-block-end: 1em;
      padding-inline-start: 40px;
    }

    ol {
      list-style: decimal;
    }
  `;

  AdditionalInfo.Separator = styled.div`
    ${breakpoint('lg')`
      width: 60%;
      margin-bottom: 30px;
      display: ${props => (props.isShow ? 'flex' : 'none')};
      border-bottom: 2px solid ${props => props.theme.colors.darkBlueBlank};
    `}
  `;

  AdditionalInfo.ContentWrapper = styled.div`
    width: 100%;
    margin: 0;
    flex-grow: 1;
    display: ${props => (props.isShow ? 'flex' : 'none')};
    flex-direction: column;

    iframe {
      width: 95%;
    }
  `;

  AdditionalInfo.CashBackLi = styled.li`
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
      color: ${props => props.theme.colors.darkGrayBlank};
    }

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 32px;
      text-align: right;
      text-decoration-line: underline;
    }
  `;

  AdditionalInfo.CashBackUl = styled.ul`
    list-style: none;
    width: 262px;
    margin-bottom: 30px;

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.5px;
      color: ${props => props.theme.colors.blackExLight};
    }

    @media (max-width: 768px) {
      display: none;
    }
  `;
};

export default styles;
