// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (BrandContent: Object) => {
  BrandContent.Wrapper = styled.div`
    width: 100%;
    margin: 0 0 10px;
    color: ${props => props.theme.colors.white};
    font: 600 20px/26px ${({ theme }) => theme.fonts.dmSans} !important;

    ${breakpoint('md')`
      margin: 0;
      text-align: left;
    `}
  `;
};

export default styles;
