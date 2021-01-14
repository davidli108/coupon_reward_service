// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (StorePage: Object) => {
  StorePage.Wrapper = styled.div`
    display: flex;

    padding: 15px 0;
    width: 90%;
    max-width: 1140px;
    min-width: 280px;
    margin: 0 auto;

    flex-flow: row wrap;
  `;

  StorePage.NoWrapFlexBox = styled.div`
    display: flex;
    flex-flow: column nowrap;

    ${breakpoint('lg')`
      flex-flow: row nowrap;
      justify-content: space-between;

      width: 100%;
      padding: 10px 0;
    `}
  `;

  StorePage.NoWrapFlexBoxWithBorder = styled(StorePage.NoWrapFlexBox)`
    ${breakpoint('lg')`
        border: 1px dashed #00CBE9;
        border-radius: 5px;
        margin-left: 30px;
        padding: 8px 20px;

        height: auto;

        > * {
          padding: 0;
        }
      `}
  `;

  StorePage.DesktopContent = styled(StorePage.NoWrapFlexBox)`
    width: 100%;

    ${breakpoint('lg')`
      > div:first-child {
        width: calc(100% - 300px);
      }

      > div:last-child {
        width: 262px;
      }
    `}
  `;

  StorePage.ColumnNoWrapFlexBox = styled.div`
    ${breakpoint('xl')`
      margin-top: ${({ extensionActive, hasTracker }) => (!hasTracker ? (extensionActive ? '-200px' : '') : '')}
    `}

    ${breakpoint('lg')`
      display: flex;
      flex-flow: column nowrap;
      order: ${({ order }) => order};
      width: 100%;
    `}
  `;

  StorePage.PreloaderWrapper = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  StorePage.TermsWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    padding: 32px;
    width: auto;
    background: #f9f9f9;
    border-radius: 5px;
    color: #899197;

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

    @media (max-width: 768px) {
      margin-top: 20px;
    }

    @media (max-width: 425px) {
      margin-top: 30px;
    }

    @media (max-width: 375px) {
      margin-top: 10px;
    }
  `;
};

export default styles;
