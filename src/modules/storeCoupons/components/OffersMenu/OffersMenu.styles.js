// @flow
import styled from 'styled-components';

const styles = (OffersMenu: Object) => {
  OffersMenu.Wrapper = styled.div`
    display: flex;
    flex-direction: row nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  `;

  OffersMenu.Item = styled.div`
    position: relative;
    flex: 0 0 auto;
    margin: 18px 0;
    padding: 0 18px;
    border-right: 1px solid ${props => props.theme.colors.lightDark};
    cursor: pointer;
    text-transform: capitalize;
    color: ${props => props.theme.colors.blackExLight};
    font-family: ${({ theme }) => theme.fonts.montserrat} !important;
    font-size: 14px;

    &:last-child {
      border: none;
    }

    &.active {
      font-weight: 700;
      color: ${props => props.theme.colors.darkGray};
    }

    &:hover,
    &.active {
      &::before {
        content: '';
        position: absolute;
        border-bottom: 2px solid ${props => props.theme.colors.greenSecondary};
        width: 30px;
        margin-left: auto;
        margin-right: auto;
        bottom: -14px;
        left: 0;
        right: 0;
      }
    }
  `;
};

export default styles;
