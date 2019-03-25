// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type ModalFooterProps = {
  footerText: string,
  textButton: string,
  onRoutModal: Function,
};

const ModalFooter = ({
  footerText,
  onRoutModal,
  textButton,
}: ModalFooterProps) => (
  <Fragment>
    <ModalFooter.Border />
    <ModalFooter.Content>
      <ModalFooter.Text>{footerText}</ModalFooter.Text>
      <ModalFooter.Button onClick={onRoutModal}>
        {textButton}
      </ModalFooter.Button>
    </ModalFooter.Content>
  </Fragment>
);

ModalFooter.Border = styled.hr`
  border: 0;
  border-top: 1px solid ${props => props.theme.colors.blackAlpha};

  ${breakpoint('xs')`
    margin-top: 10px;
    margin-bottom: 10px;
  `}

  ${breakpoint('sx')`
    margin-top: 20px;
    margin-bottom: 20px;
  `}
`;

ModalFooter.Content = styled.div`
  display: flex;
  justify-content: center;
`;

ModalFooter.Text = styled.p`
  text-align: center;
  letter-spacing: 0.3px;
  font-size: 14px;
`;

ModalFooter.Button = styled.button`
  color: ${props => props.theme.colors.blueExDark};
  border: none;
  cursor: pointer;
  background: transparent;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default ModalFooter;
