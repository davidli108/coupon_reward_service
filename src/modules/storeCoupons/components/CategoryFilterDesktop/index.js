// @flow
import { memo } from 'react';
import { withTranslation } from 'react-i18next';

import CategoryFilterDesktop from './CategoryFilterDesktop';
import styles from './CategoryFilterDesktop.styles';

type Category = {
  label: string,
  value?: string,
  count?: number,
  amount?: string,
  link?: string,
};

export type CategoryFilterDesktopProps = {
  t?: Function,
  title: string,
  categories?: Category[],
  onChange?: Function,
  selectedCategories?: string[],
};

styles(CategoryFilterDesktop);

export default memo<CategoryFilterDesktopProps>(
  withTranslation()(CategoryFilterDesktop),
);
