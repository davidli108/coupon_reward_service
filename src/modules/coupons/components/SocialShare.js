// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

import shareIcon from '../assets/ShareIcon.svg';
import facebookIcon from '../assets/facebookIcon.svg';
import twitterIcon from '../assets/twitterIcon.svg';
import pinterestIcon from '../assets/pinterestIcon.svg';

import facebookConfig from '@config/FacebookConfig';

type SocialShareProps = {
  text: string,
  link: string,
  t: Function,
  twitterLink: string,
  pinterestLink: string,
};

const SocialShare = ({
  text,
  link,
  t,
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
        <SocialShare.ShareIcon src={shareIcon} alt="share" />
        <p>{t('coupons.shopBy.share')}</p>
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
  width: 100%;
  line-height: 20px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

SocialShare.ShareIcon = styled.img`
  padding: 0 5px !important;
`;

SocialShare.Button = styled.div`
  padding: 4px;
  display: flex;
  color: #00cbe9;
  cursor: pointer;
  border-radius: 3px;
  background-color: #f0f1f4;
  border: 1px solid #f0f1f4;

  p {
    margin: 0 5px 0 5px;
  }

  &:hover {
    border: 1px solid #00cbe9;
  }
`;

SocialShare.SocialsWrapper = styled.div`
  width: 100px;
  display: ${props => (props.isShow ? 'flex' : 'none')};

  img {
    padding-right: 0 !important;
  }
`;

SocialShare.Social = styled.a`
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default SocialShare;
