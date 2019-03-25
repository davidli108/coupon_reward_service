// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import googleIcon from '../assets/googleIcon.png';
import facebookIcon from '../assets/facebookIcon.png';

type ModalSocialProps = {
  onAuthGoogle: Function,
  onAuthFacebook: Function,
};

const ModalSocial = ({ onAuthFacebook, onAuthGoogle }: ModalSocialProps) => (
  <div>
    <ModalSocial.LinkFacebook onClick={onAuthFacebook}>
      <img src={facebookIcon} alt="facebook" />
      Login with Facebook
    </ModalSocial.LinkFacebook>
    <ModalSocial.LinkGoogle onClick={onAuthGoogle}>
      <img src={googleIcon} alt="google" />
      Login with Google
    </ModalSocial.LinkGoogle>
  </div>
);

ModalSocial.LinkFacebook = styled.button`
  position: relative;
  display: block;
  width: 100%;
  background-color: ${props => props.theme.colors.blueFacebook};
  padding: 1rem;
  border-radius: 10000px;
  text-align: center;
  color: ${props => props.theme.colors.white};
  outline: none;
  cursor: pointer;

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
`;

ModalSocial.LinkGoogle = styled(ModalSocial.LinkFacebook)`
  margin: 10px 0 0 0;
  border: 1px solid ${props => props.theme.colors.grayTintsDark};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};

  img {
    width: 20px;
  }
`;

export default ModalSocial;
