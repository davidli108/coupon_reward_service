// @flow
import * as React from 'react';
import styled from 'styled-components';

type HintMessageProps = {
  children: React.Node,
};

const HintMessage = ({ children }: HintMessageProps) => (
  <HintMessage.Wrapper>{children}</HintMessage.Wrapper>
);

HintMessage.Wrapper = styled.div`
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
`;

export default HintMessage;
