// @flow
import { memo } from 'react';
import TermsModal from './TermsModal';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';

import styles from './TermsModal.styles';

export type TermsModalProps = {
  t: Function,
  isVisible: boolean,
  terms: string,
  onClose: Function,
};

styles(TermsModal);

export default compose(withTranslation(), memo)(TermsModal);
