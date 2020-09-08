// @flow
import styled from 'styled-components';

const styles = (UserReview: Object) => {
  UserReview.Wrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
  `;
};

export default styles;
