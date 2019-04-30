//@flow
import * as React from 'react';
import styled from 'styled-components';

type ErrorMessageProps = {
  children: React.Node,
};

const ErrorMessage = ({ children }: ErrorMessageProps) => (
  <ErrorMessage.Wrapper>{children}</ErrorMessage.Wrapper>
);

ErrorMessage.Wrapper = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
  font-size: 15px;
  text-align: center;
`;

export default ErrorMessage;
