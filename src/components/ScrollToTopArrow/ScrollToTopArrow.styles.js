// @flow
import styled from 'styled-components';

const styles = (ScrollToTopArrow: Object) => {
  ScrollToTopArrow.Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.greenSecondary};
    border-radius: 5px;
    padding: 3px 5px;

    @media (max-width: 375px) {
      margin-bottom: 25px;
    }
  `;
};

export default styles;
