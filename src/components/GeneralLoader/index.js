// @flow
import React from 'react';

import styles from './general-loader.styles';

const GeneralLoader = () => (
  <GeneralLoader.Wrapper>
    <GeneralLoader.Ripple />
  </GeneralLoader.Wrapper>
);

styles(GeneralLoader);

export default GeneralLoader;
