// @flow
import { memo } from 'react';

import DropdownFilter from './DropdownFilter';
import styles from './DropdownFilter.styles';

styles(DropdownFilter);

export type DropdownFilterType = {
  value: string,
  label: string,
};

export type DropdownFilterProps = {
  label: string,
  filters: DropdownFilterType[],
  selectedFilter?: DropdownFilterType,
  onChange: Function,
};

export default memo<DropdownFilterProps>(DropdownFilter);
