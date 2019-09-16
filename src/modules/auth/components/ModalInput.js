// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type ModalInputProps = {
  name: string,
  type: string,
  value: string,
  placeholder: string,
  required?: boolean,
  onChange?: Function | string,
  onInvalid?: Function | string,
  onInput?: Function | string,
};

const customValidity = (
  event: Object,
  validity?: Function | string,
  defaultMessage: string = '',
) => {
  switch (typeof validity) {
    case 'function':
      validity(event);
      break;

    case 'string':
      event.target.setCustomValidity(validity);
      break;

    default:
      event.target.setCustomValidity(defaultMessage);
  }
};

const ModalInput = ({
  name,
  value,
  type,
  placeholder,
  required = false,
  onChange,
  onInvalid,
  onInput,
}: ModalInputProps) => (
  <ModalInput.Field
    name={name}
    type={type}
    onInvalid={e => customValidity(e, onInvalid, 'Please fill in this field.')}
    onInput={e => customValidity(e, onInput)}
    onChange={e => customValidity(e, onChange)}
    tooltipMessageOnEmptyField
    value={value}
    placeholder={placeholder}
    required={required}
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
