// @flow
import styled from 'styled-components';

const styles = (Home: Object) => {
  Home.Wrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
  `;
};

export default styles;
