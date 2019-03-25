// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import googleIcon from '../assets/googleIcon.png';
import facebookIcon from '../assets/facebookIcon.png';

const ModalSocial = () => (
  <ModalSocial.Wrapper>
    <a href="#!">
      <img src={facebookIcon} alt="facebook" />
      Login with Facebook
    </a>
    <a href="#!">
      <img src={googleIcon} alt="google" />
      Login with Google
    </a>
  </ModalSocial.Wrapper>
);

ModalSocial.Wrapper = styled.div`
  > a {
    position: relative;
    display: block;
    background-color: #3b5998;
    padding: 1rem;
    border-radius: 10000px;
    text-align: center;
    color: #fff;

    ${breakpoint('xs')`
      padding: .5rem;
    `}

    ${breakpoint('sx')`
      padding: 1rem;
  `}

    img {
      position: absolute;
      left: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  > a + a {
    margin: 10px 0 0 0;
    border: 1px solid #999;
    background-color: #fff;
    color: #000;

    img {
      width: 20px;
    }
  }
`;

export default ModalSocial;
