// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (CategoryFilterDesktop: Object) => {
  CategoryFilterDesktop.Wrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 15px;
    padding: 20px 11px;
    border-radius: 5px;
    display: none;

    & .Checkbox {
      top: 0 !important;
    }

    ${breakpoint('lg')`
      display: block;
    `}

    ${breakpoint('xl')`
      padding: 20px 21px;
    `}
  `;

  CategoryFilterDesktop.Title = styled.h2`
    color: ${props => props.theme.colors.darkGray};
    font-family: ${props => props.theme.fonts.dmSans} !important;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 13px;
  `;

  CategoryFilterDesktop.ListItem = styled.div`
    display: flex;
    cursor: pointer;
    margin: 0 0 16px;
    padding: 3px 5px 3px 0;

    &:last-child {
      margin: 0;
    }

    ${breakpoint('xl')`
      margin: 0 0 21px;
    `}
  `;

  CategoryFilterDesktop.ListItemLabel = styled.div`
    width: 100%;
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    padding: 0 15px 0 0;
    text-transform: capitalize;
    font-family: ${props => props.theme.fonts.dmSans} !important;
    color: ${props =>
      props.isSelected
        ? props.theme.colors.greenSecondary
        : props.theme.colors.blackExLight};
  `;

  CategoryFilterDesktop.ListItemCheckbox = styled.div`
    flex: 1 0 14px;
    padding: 2px 0 0;
  `;

  CategoryFilterDesktop.List = styled.div`
    a {
      display: block;
      margin: 0 0 10px;

      ${CategoryFilterDesktop.ListItem} {
        padding: 0;
      }

      ${CategoryFilterDesktop.ListItemCheckbox} {
        padding: 0;
      }

      &:last-child {
        margin: 0;
      }
    }
  `;

  CategoryFilterDesktop.ListItemAmount = styled.div`
    font-family: ${props => props.theme.fonts.dmSans} !important;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.greenSecondary};
  `;

  CategoryFilterDesktop.HideWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${props => props.theme.colors.greenSecondary};
    padding: 10px 0 0;
    cursor: pointer;

    span {
      font-family: ${props => props.theme.fonts.dmSans} !important;
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      margin: 0 10px 0 0;
    }
  `;
};

export default styles;
