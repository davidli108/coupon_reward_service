// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type ModalInputProps = {
  name: string,
  type: string,
  placeholder: string,
  required: boolean,
};

const ModalInput = ({ name, type, placeholder, required }: ModalInputProps) => (
  <ModalInput.Field
    name={name}
    type={type}
    placeholder={placeholder}
    required
  />
);

ModalInput.Field = styled.input`
  display: block;
  margin-bottom: 1rem;
  border: 1px solid #e0dfd7;
  border-radius: 3px;
  color: #242628;
  padding: 10px 10px;
  font-size: 14px;
  transition: border-color 0.15s linear;
  outline: none;

  ${breakpoint('xs')`
    margin-bottom: .4rem;
    padding: 7px 10px;
  `}

  ${breakpoint('sx')`
    margin-bottom: 1rem;
    padding: 10px 10px;
`}
`;

export default ModalInput;
