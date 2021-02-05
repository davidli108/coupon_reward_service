// @flow
import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

import type { TermsModalProps } from '.';

const TermsModal = ({ t, isVisible, terms, onClose }: TermsModalProps) => {
  useEffect(() => {
      const body = document.body;
      if (body)
        body.style.overflowY = isVisible ? 'hidden' : '';
  }, [isVisible]);

  return (
    <TermsModal.Wrapper className={isVisible ? 'active' : ''}>
      <TermsModal.Backdrop onClick={onClose}/>
      <TermsModal.Container>
        <MdClose onClick={onClose} />
        <h2>{t('storeCoupons.terms')}</h2>
        <TermsModal.Content dangerouslySetInnerHTML={{ __html: terms }} />
      </TermsModal.Container>
    </TermsModal.Wrapper>
  );
};

export default TermsModal;
