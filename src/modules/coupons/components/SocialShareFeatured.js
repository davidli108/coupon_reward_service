// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiShare2 } from 'react-icons/fi';

import facebookIcon from '../assets/facebookIcon.svg';
import twitterIcon from '../assets/twitterIcon.svg';
import pinterestIcon from '../assets/pinterestIcon.svg';

import facebookConfig from '@config/FacebookConfig';

type SocialShareProps = {
  text: string,
  link: string,
  twitterLink: string,
  pinterestLink: string,
};

const SocialShare = ({
  text,
  link,
  twitterLink,
  pinterestLink,
}: SocialShareProps) => {
  const [isShowSocial, setIsShowSocial] = useState(false);

  //const logo = 'https://d26fg97ql61k4.cloudfront.net/build/img/piggy/logo.svg';

  const facebookLink = `https://www.facebook.com/v2.0/dialog/feed?app_id=${
    facebookConfig.app_id
  }&link=${link}&description=${link}`;

  return (
    <SocialShare.Wrapper>
      <SocialShare.Button onClick={() => setIsShowSocial(!isShowSocial)}>
        <FiShare2 />
      </SocialShare.Button>
      <SocialShare.SocialsWrapper isShow={isShowSocial}>
        <SocialShare.Social href={facebookLink} target="_blank">
          <img src={facebookIcon} alt="facebook" />
        </SocialShare.Social>
        <SocialShare.Social href={twitterLink} target="_blank">
          <img src={twitterIcon} alt="twitter" />
        </SocialShare.Social>
        <SocialShare.Social href={pinterestLink} target="_blank">
          <img src={pinterestIcon} alt="pinterest" />
        </SocialShare.Social>
      </SocialShare.SocialsWrapper>
    </SocialShare.Wrapper>
  );
};

SocialShare.Wrapper = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
`;

SocialShare.Button = styled.div`
  margin-right: 10px;
  padding: 4px;
  display: flex;
  color: #adb8c0;
  font-size: 25px;
  cursor: pointer;

  p {
    margin: 0 5px 0 5px;
  }
`;

SocialShare.SocialsWrapper = styled.div`
  width: ${props => (props.isShow ? '100px' : 'auto')};
  display: ${props => (props.isShow ? 'flex' : 'none')};

  img {
    padding-right: 0 !important;
    width: 30px !important;
  }
`;

SocialShare.Social = styled.a`
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default SocialShare;
