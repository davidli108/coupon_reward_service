// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (DropdownFilter: Object) => {
  DropdownFilter.Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 18px;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.darkGray};
  `;

  DropdownFilter.Left = styled.div`
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    font-family: ${({ theme }) => theme.fonts.dmSans} !important;

    ${breakpoint('xs')`
      width: 100%;
    `}

    ${breakpoint('sm')`
      width: auto;
    `}
  `;

  DropdownFilter.Right = styled.div`
    ${breakpoint('xs')`
      margin: 10px 0;
    `}

    ${breakpoint('sm')`
      margin-left: 10px;
    `}
  `;

  DropdownFilter.SelectedFilter = styled.div`
    display: flex;
    align-items: center;
    position: relative;
  `;

  DropdownFilter.SelectedFilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    img {
      position: relative;
      top: 1px;
    }
  `;

  DropdownFilter.SelectedFilterLabel = styled.div`
    font-weight: 700;
    margin: 0 10px 0 0;
    font-size: 13px;
    line-height: 18px;
    font-family: ${({ theme }) => theme.fonts.montserrat} !important;
  `;

  DropdownFilter.Menu = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 15px 30px;
    border-radius: 5px;
    box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.2);
    right: -170px;
    top: -18px;
    z-index: 100;

    &::before {
      content: '';
      z-index: 1;
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 5px solid ${({ theme }) => theme.colors.white};
      left: -5px;
      top: 6px;
    }
  `;

  DropdownFilter.MenuItem = styled.div`
    padding: 15px 0;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.whiteLight};
    font-family: ${({ theme }) => theme.fonts.roboto} !important;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.53125px;
    cursor: pointer;

    &:last-child {
      border: 0;
    }
  `;
};

export default styles;
