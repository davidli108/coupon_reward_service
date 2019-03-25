// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type ModalInputProps = {
  name: string,
  type: string,
  value: string,
  onChange: Function,
  placeholder: string,
  required: boolean,
};

const ModalInput = ({
  name,
  value,
  onChange,
  type,
  placeholder,
  required,
}: ModalInputProps) => (
  <ModalInput.Field
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required
  />
);

ModalInput.Field = styled.input`
  display: block;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 3px;
  color: ${props => props.theme.colors.blackGray};
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
