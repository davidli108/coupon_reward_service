// @flow
import { memo } from 'react';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import Offers from './Offers';
import styles from './Offers.styles';

styles(Offers);

export default compose(withTranslation(), withRouter, memo)(Offers);
