// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (Offer: Object) => {
  Offer.Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    padding: 20px 22.5px;
    margin: 0 0 15px;
    width: 100%;
    box-sizing: border-box;

    ${breakpoint('md')`
      flex-flow: row nowrap;
      padding: 20px 30px;
      margin: 0 0 20px;
    `}
  `;

  Offer.Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;

    ${breakpoint('md')`
      flex: 0 1 433px;
    `}
  `;

  Offer.Title = styled.div`
    margin: 0 0 ${({ isCashbackRate }) => (isCashbackRate ? 10 : 20)}px;
    font: 700 25px/32px ${({ theme }) => theme.fonts.dmSans} !important;
    color: ${({ theme }) => theme.colors.blackGrey};
    letter-spacing: 0.5px;

    div {
      display: flex;
      font: 700 25px/32px ${({ theme }) => theme.fonts.dmSans} !important;
    }
  `;

  Offer.Description = styled.div`
    font-family: ${({ theme }) => theme.fonts.dmSans} !important;
    font-size: 20px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.blackExLight};
    letter-spacing: 0.2px;
    text-transform: capitalize;
    margin: 0 0 15px;

    &:last-child {
      margin: 0;
    }
  `;

  Offer.SubDescription = styled.div`
    font-family: ${({ theme }) => theme.fonts.dmSans} !important;
    font-size: 11px;
    line-height: 17px;
    margin: 0 0 15px;
    color: ${({ theme }) => theme.colors.blackExLight};
    letter-spacing: 0.2px;
    text-transform: capitalize;

    ${breakpoint('md')`
      margin: 0;
    `}
  `;

  Offer.ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    position: relative;
    flex-flow: column nowrap;

    > div {
      max-width: none;
    }

    ${breakpoint('md')`
      flex: 0 0 237px;
      padding: 0 30px;
      width: auto;

      > div {
        max-width: 177px;
      }
    `}
  `;

  Offer.TermsLink = styled.p`
    font-family: ${({ theme }) => theme.fonts.dmSans} !important;
    margin: 10px 0 0;
    font-size: 14px;
    line-height: 18px;
    color: #7d7d7d;
    cursor: pointer;

    ${breakpoint('md')`
      margin: 10px 0 -28px;
    `}
  `;

  Offer.ExpirationDate = styled.div`
    padding: 0 5px;
    box-sizing: border-box;
    height: 16px;
    background-color: #f3f3f4;
    font-size: 10px;
    line-height: 16px;
    color: #62707b;
    font-weight: 500;
    letter-spacing: 0.3px;
    border-radius: 4px;
  `;

  Offer.DetailsWrapper = styled.div`
    display: flex;
  `;
};

export default styles;
