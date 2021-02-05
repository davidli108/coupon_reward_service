// @flow
import styled from 'styled-components';

const styles = (CategoryFilterMobile: Object) => {
  CategoryFilterMobile.Wrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
    font-weight: bold;
    font-size: 12px;
  `;

  CategoryFilterMobile.Title = styled.h3`
    font-family: ${props => props.theme.fonts.dmSans} !important;
    color: ${props => props.theme.colors.darkGray};
    margin: 0 0 10px;
    padding: 0;
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
  `;

  CategoryFilterMobile.List = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  CategoryFilterMobile.ListItemLabel = styled.div`
    width: 100%;
    font-size: 12px;
    line-height: 18px;
    font-family: ${props => props.theme.fonts.dmSans} !important;
    color: ${({ theme }) => theme.colors.blackExLight};
  `;

  CategoryFilterMobile.ListItem = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props =>
      props.isSelected
        ? props.theme.colors.whiteLight
        : props.theme.colors.grayPill};
    border-radius: 14px;
    padding: 0 8px;
    box-sizing: border-box;
    height: 28px;
    margin: 0 3px 10px 0;
    cursor: pointer;

    img {
      display: block;
      margin: 0 0 0 10px;
    }

    ${CategoryFilterMobile.ListItemLabel} {
      color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.darkGray : theme.colors.blackExLight};
    }
  `;
};

export default styles;
