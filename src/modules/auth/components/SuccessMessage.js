// @flow
import * as React from 'react';
import styled from 'styled-components';

type SuccessMessageProps = {
  children: React.Node,
};

const SuccessMessage = ({ children }: SuccessMessageProps) => (
  <SuccessMessage.Wrapper>{children}</SuccessMessage.Wrapper>
);

SuccessMessage.Wrapper = styled.div`
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
`;

export default SuccessMessage;
