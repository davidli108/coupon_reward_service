// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import { IoMdClose } from 'react-icons/io';
import ArrowIcon from '../assets/ArrowIcon.svg';

type DownloadPiggyProps = {
  t: string => string,
};

const DownloadPiggy = ({ t }: DownloadPiggyProps) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <DownloadPiggy.Wrapper isShow={isShow}>
      <DownloadPiggy.Close onClick={() => setIsShow(false)} />
      <DownloadPiggy.Text>{t('global.downloadPiggy')}</DownloadPiggy.Text>
      <DownloadPiggy.Arrow src={ArrowIcon} alt="arrow" />
    </DownloadPiggy.Wrapper>
  );
};

DownloadPiggy.Wrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  margin-top: 10px;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

DownloadPiggy.Close = styled(IoMdClose)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  color: gray;
  opacity: 0.3;
  cursor: pointer;
`;

DownloadPiggy.Text = styled.p`
  font-weight: 200;
`;

DownloadPiggy.Arrow = styled.img`
  padding: 0 10px 0 10px;
  margin-bottom: 5px;
  margin-left: 5px;
  opacity: 0.3;

  ${breakpoint('xs')`
    transform: scale(1, -1);
  `}

  ${breakpoint('md')`
    transform: scale(1, -1) rotate(-20deg);
  `}

  ${breakpoint('lg')`
    transform: scale(1, -1) rotate(60deg);
  `}

  ${breakpoint('xl')`
    transform: scale(1, -1) rotate(-20deg);
  `}
`;

export default withTranslation()(DownloadPiggy);
