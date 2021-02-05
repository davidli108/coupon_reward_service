// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (BrandHeader: Object) => {
  BrandHeader.CounterList = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    margin: 0 -7px 5px;

    * {
      font-family: ${({ theme }) => theme.fonts.dmSans} !important;
    }

    ${breakpoint('md')`
      margin: 0 -10px 5px;
    `}
  `;

  BrandHeader.CounterListItem = styled.div`
    padding: 0 7px 10px;
    font-size: 14px;
    line-height: 19px;

    ${breakpoint('md')`
      padding: 0 10px 20px;
    `}
  `;

  BrandHeader.CounterListItemValue = styled.span`
    font-weight: 700;
    margin: 0 4px 0 0;
    color: ${props => props.theme.colors.greenSecondary};
  `;

  BrandHeader.CounterListItemLabel = styled.span`
    font-size: 14px;
    color: ${props => props.theme.colors.blackGrey};
  `;

  BrandHeader.Name = styled.h1`
    font-size: 21px;
    line-height: 27px;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.dmSans} !important;
    color: ${({ theme }) => theme.colors.blackGrey};
    letter-spacing: 0.3px;
    margin: 0 0 5px;

    ${breakpoint('md')`
      font-size: 31px;
      line-height: 41px;
    `}
  `;
};

export default styles;
