// @flow
import styled from 'styled-components';

const styles = (Home: Object) => {
  Home.Wrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
    height: ${({ visible }) => (visible ? 'auto' : 0)};
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    position: ${({ visible }) => (visible ? 'static' : 'fixed')};
    overflow: hidden;
    top: 0;
  `;
};

export default styles;
