// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (HomePage: Object) => {
  HomePage.Wrapper = styled.div`
    background-color: ${props => props.theme.colors.whitebg};
    height: ${({ visible }) => (visible ? '' : 0)};
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    overflow: hidden;
    position: ${({ visible }) => (visible ? 'static' : 'fixed')};
    top: 0;
    transition: 1s;
    padding-top: ${({ hasLp }) => (hasLp ? '150px' : 0)};

    ${breakpoint('md')`
      padding-top: ${({ isLandingMounted }) =>
        isLandingMounted ? '190px' : 0};
    `}
  `;

  HomePage.Container = styled.div`
    width: 100%;

    ::after {
      content: '';
      display: table;
    }

    ${breakpoint('md')`
      width: 690px;
      margin: 0 auto;
      padding: 0 0 100px;
    `}

    ${breakpoint('lg')`
      width: 930px;
      margin: 0 auto;
      padding: 0 0 100px;
    `}

    ${breakpoint('xl')`
      width: 1140px;
      margin: 0 auto;
      padding: 0 0 100px;
    `}
  `;

  HomePage.Title = styled.h1`
    position: absolute;
    opacity: 0;
    pointer-events: none;
  `;
};

export default styles;
