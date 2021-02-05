// @flow
import { memo } from 'react';
import { withTranslation } from 'react-i18next';

import CategoryFilterMobile from './CategoryFilterMobile';
import styles from './CategoryFilterMobile.styles';

type Category = {
  label: string,
  value?: string,
  count?: number,
  amount?: string,
  link?: string,
};

export type CategoryFilterMobileProps = {
  title: string,
  categories?: Category[],
  onChange?: Function,
  selectedCategories?: string[],
};

styles(CategoryFilterMobile);

export default memo<CategoryFilterMobileProps>(
  withTranslation()(CategoryFilterMobile),
);
