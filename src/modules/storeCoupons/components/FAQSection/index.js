// @flow
import { memo } from 'react';
import FAQSection from './FAQSection';
import { withRouter } from 'react-router-dom';

import styles from './FAQSection.styles';

export type FAQSectionProps = {
  question: string,
  answer: string,
};

styles(FAQSection);

export default memo<any>(withRouter(FAQSection));
