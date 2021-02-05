// @flow
import React from 'react';
import { FaCheck } from 'react-icons/fa';

import styles from './Checkbox.styles';

type CheckboxProps = {
  checked?: boolean,
};

const Checkbox = ({ checked = false }: CheckboxProps) => (
  <Checkbox.Wrapper>
    <Checkbox.Box checked={checked}>
      <FaCheck />
    </Checkbox.Box>
  </Checkbox.Wrapper>
);

styles(Checkbox);

export default Checkbox;
