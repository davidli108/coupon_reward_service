// @flow
import { memo } from 'react';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import FAQs from './FAQs';
import styles from './FAQs.styles';

export type FAQsProps = {
  t: Function,
  i18n: Object,
  store: Object,
};

styles(FAQs);

export default compose(withTranslation(), withRouter, memo)(FAQs);
