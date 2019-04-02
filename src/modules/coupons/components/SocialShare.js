// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiShare2 } from 'react-icons/fi';

import facebookIcon from '../assets/facebookIcon.svg';
import twitterIcon from '../assets/twitterIcon.svg';
import pinterestIcon from '../assets/pinterestIcon.svg';

type SocialShareProps = {
  text: string,
  link: string,
};

const SocialShare = ({ text, link }: SocialShareProps) => {
  const [isShowSocial, setIsShowSocial] = useState(false);

  const logo = 'https://d26fg97ql61k4.cloudfront.net/build/img/piggy/logo.svg';

  const facebookLink = `https://www.facebook.com/v2.0/dialog/feed?app_id=115716231892665&link=${link}&description=${link}`;
  const twitterLink = `https://twitter.com/intent/tweet?text=${text}%40JoinPiggy%20https%3A//${link}`;
  const pinterestLink = `http://pinterest.com/pin/create/button/?&description=${text}&url=${link}&media=${logo}`;

  return (
    <SocialShare.Wrapper>
      <SocialShare.Button onClick={() => setIsShowSocial(!isShowSocial)}>
        <FiShare2 />
        <p>Share</p>
      </SocialShare.Button>
      <SocialShare.SocialsWrapper isShow={isShowSocial}>
        <SocialShare.Social href={facebookLink} target="_blank">
          <img src={facebookIcon} alt="" />
        </SocialShare.Social>
        <SocialShare.Social href={twitterLink} target="_blank">
          <img src={twitterIcon} alt="" />
        </SocialShare.Social>
        <SocialShare.Social href={pinterestLink} target="_blank">
          <img src={pinterestIcon} alt="" />
        </SocialShare.Social>
      </SocialShare.SocialsWrapper>
    </SocialShare.Wrapper>
  );
};

SocialShare.Wrapper = styled.div`
  width: 100%;
  height: 35px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

SocialShare.Button = styled.div`
  margin-right: 10px;
  padding: 4px;
  display: flex;
  color: gray;
  cursor: pointer;
  border: 1px solid gray;

  p {
    margin: 0 5px 0 5px;
  }

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;

SocialShare.SocialsWrapper = styled.div`
  width: 100px;
  display: ${props => (props.isShow ? 'flex' : 'none')};
`;

SocialShare.Social = styled.a`
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default SocialShare;
