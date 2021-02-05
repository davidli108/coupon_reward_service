// @flow
import styled from 'styled-components';

const styles = (Checkbox: Object) => {
  Checkbox.Wrapper = styled.label`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    width: 100%;
  `;

  Checkbox.Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 14px;
    height: 14px;
    border: 1px solid
      ${({ checked, theme }) =>
        checked ? theme.colors.greenSecondary : '#acacac'};
    background-color: ${({ checked, theme }) =>
      checked ? theme.colors.greenSecondary : theme.colors.white};
    box-sizing: border-box;
    border-radius: 2px;
    transition: all 0.3s ease;

    svg {
      display: block;
      width: 10px;
      height: 10px;
      transform-origin: center;
      transform: scale3d(${({ checked }) => (checked ? `1, 1, 1` : `0, 0, 0`)});
      transition: transform 0.3s ease;
      color: #fff;
    }
  `;
};

export default styles;
