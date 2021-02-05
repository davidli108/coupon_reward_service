// @flow
import { memo } from 'react';
import { withTranslation } from 'react-i18next';

import BrandContent from './BrandContent';
import type { BrandContentProps } from '../../models/StorePage';
import styles from './BrandContent.styles';

styles(BrandContent);

export default memo<BrandContentProps>(withTranslation()(BrandContent));
