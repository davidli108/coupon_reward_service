//@flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { MdAndroid, MdLaptop } from 'react-icons/md';
import { IoLogoApple } from 'react-icons/io';
import { withTranslation } from 'react-i18next';

import logo from '../Header/logo.svg';

type FooterProps = {
  t: Function,
};

const Footer = ({ t }: FooterProps) => (
  <Footer.Wrapper>
    <Footer.Strip>
      <div>
        <p>{t('footer.stopMissingOut')}</p>
        <Footer.StripLink
          href="https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba?hl=en"
          rel="noopener noreferrer"
          target="_blank"
        >
          {t('footer.getTheApp')}
        </Footer.StripLink>
      </div>
    </Footer.Strip>
    <Footer.Container>
      <div>
        <Footer.Logo src={logo} />
        <Footer.Socials>
          <Footer.SocialLink
            href="https://www.facebook.com/joinpiggy/"
            target="_blank"
            style={{ marginRight: '25px' }}
          >
            Facebook
          </Footer.SocialLink>
          <Footer.SocialLink
            href="https://twitter.com/JoinPiggy"
            target="_blank"
          >
            Twitter
          </Footer.SocialLink>
        </Footer.Socials>
      </div>
      <Footer.DownloadAppLinksWrapper>
        <Footer.DownloadAppLink
          href="https://play.google.com/store/apps/details?id=com.piggy.coupons"
          target="_blank"
          style={{ order: '2' }}
        >
          <div>
            <MdAndroid
              style={{ height: '22px', width: '22px', color: '#00b2cc' }}
            />
          </div>
          <p>{t('footer.downloadButtons.android')}</p>
        </Footer.DownloadAppLink>
        <Footer.DownloadAppLink
          href="https://itunes.apple.com/us/app/coupons-cashback-piggy/id1176303802?ls=1&mt=8"
          target="_blank"
          style={{ order: '3' }}
        >
          <div>
            <IoLogoApple
              style={{ height: '30px', width: '30px', color: '#00b2cc' }}
            />
          </div>
          <p>{t('footer.downloadButtons.ios')}</p>
        </Footer.DownloadAppLink>
        <Footer.DownloadAppLink
          href="https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba?hl=en"
          target="_blank"
          style={{ order: '1' }}
        >
          <div>
            <MdLaptop
              style={{ height: '22px', width: '22px', color: '#00b2cc' }}
            />
          </div>
          <p>{t('footer.downloadButtons.desktop')}</p>
        </Footer.DownloadAppLink>
      </Footer.DownloadAppLinksWrapper>
      <Footer.Navigation>
        <Footer.NavLink to="/howtoinstall">
          {t('footer.menu.howToInstall')}
        </Footer.NavLink>
        <Footer.NavLink to="/about-cashback">
          {t('footer.menu.aboutCashBack')}
        </Footer.NavLink>
        <Footer.NavLink to="/account/referrals">
          {t('footer.menu.referrals')}
        </Footer.NavLink>
        <Footer.NavLink to="/careers">
          {t('footer.menu.careers')}
        </Footer.NavLink>
        <Footer.NavLink to="/howtoremove">
          {t('footer.menu.howToUninstall')}
        </Footer.NavLink>
        <Footer.NavLink to="/consumer-resources">
          {t('footer.menu.consumerResources')}
        </Footer.NavLink>
        <Footer.NavLink to="/blog">{t('footer.menu.blog')}</Footer.NavLink>
        <Footer.NavLink to="/cashback-apps">
          {t('footer.menu.aboutOurApp')}
        </Footer.NavLink>
        <Footer.NavLink to="/about">{t('footer.menu.aboutUs')}</Footer.NavLink>
        <Footer.NavLink to="/contactus">
          {t('footer.menu.contact')}
        </Footer.NavLink>
        <Footer.NavLink to="/info">{t('footer.menu.help')}</Footer.NavLink>
      </Footer.Navigation>
    </Footer.Container>
    <Footer.CopyrightWrapper>
      <div>
        <div>
          <Footer.CopyrightLink to="/terms">
            {t('footer.copiright.menu.termsOfUse')}
          </Footer.CopyrightLink>
          <Footer.CopyrightLink to="/sitemap">
            {t('footer.copiright.menu.sitemap')}
          </Footer.CopyrightLink>
          <Footer.CopyrightLink to="/eula">
            {t('footer.copiright.menu.eula')}
          </Footer.CopyrightLink>
          <Footer.CopyrightLink to="/privacy">
            {t('footer.copiright.menu.privacyPolicy')}
          </Footer.CopyrightLink>
          <Footer.CopyrightLink to="/unsubscribe">
            {t('footer.copiright.menu.unsubscribe')}
          </Footer.CopyrightLink>
        </div>
        <p>
          {t('footer.copiright.text')} © {new Date().getFullYear()}{' '}
          {t('footer.copiright.allRightReserved')}
        </p>
      </div>
    </Footer.CopyrightWrapper>
  </Footer.Wrapper>
);

Footer.Wrapper = styled.footer`
  background: #40c8e5;
  width: 100%;
`;

Footer.DownloadAppLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #63d8ed;
  width: 180px;
  height: 70px;
  border-radius: 5px;
  margin-right: 5px;

  ${breakpoint('md')`
    margin-right: 1rem;
  `}

  &:active {
    text-decoration: underline;
    color: white;
  }

  &:nth-child(3) {
    display: none;
    ${breakpoint('lg')`
      display: flex;
    `}
  }

  > div {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: white;
    width: 45px;
    height: 45px;
  }

  > p {
    font-size: 16px;
    width: 90px;
    color: white;
    letter-spacing: 0.3px;
    padding-right: 10px;
  }
`;

Footer.Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 20px auto 0 auto;
  width: 100%;
  max-width: 1170px;

  ${breakpoint('lg')`
    width: 970px;
  `}

  ${breakpoint('xl')`
    width: 1170px;
  `}

  > * {
    padding: 10px 20px;
  }
`;

Footer.Strip = styled.div`
  display: none;
  align-items: center;
  height: 128px;
  background: #38b2cc;

  ${breakpoint('lg')`
    display: flex;
  `}

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    max-width: 865px;
    margin: 0 auto;

    > p {
      color: #fff;
      font-size: 24px;
      font-weight: 500;
      font-family: Montserrat, sans-serif !important;
    }
  }
`;

Footer.StripLink = styled.a`
  color: white;
  font-size: 1.25rem;
  padding: 0.7rem 1rem;
  background-color: #ef65a0;
  border: 1px solid transparent;
  border-color: #ee5797;
  transition: 0.2s;
  border-radius: 4px;
  outline: 0;

  &:hover {
    background-color: #ed4e92;
    text-decoration: none;
  }

  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
`;

Footer.Logo = styled.img`
  height: 95px;
  width: 225px;
  padding-left: 15px;
`;

Footer.Socials = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
`;

Footer.SocialLink = styled.a`
  font-size: 24px;
  color: white;

  &:hover {
    text-decoration: none;
  }
`;

Footer.DownloadAppLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${breakpoint('md')`
    width: auto;
  `}
`;

Footer.Navigation = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 250px;
  width: 100%;
  margin-top: 30px;

  ${breakpoint('md')`
    height: 200px;
  `}

  ${breakpoint('lg')`
    height: 150px;
  `}
`;

Footer.NavLink = styled(Link)`
  color: white;
  width: fit-content;
  padding: 12.5px 0;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

Footer.CopyrightWrapper = styled.div`
  background: #00b2cc;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: space-between;
    text-align: center;
    margin: 0 auto;

    ${breakpoint('md')`
      flex-direction: row;
      align-items: center;
    `}

    ${breakpoint('lg')`
      width: 970px;
    `}

    ${breakpoint('xl')`
      width: 1170px;
    `}

    > p {
      margin: 25px 0 10px 0;
      color: white;
      font-size: 13.5px;
      padding: 0 10px;

      ${breakpoint('md')`
        margin: 0 0 0 auto;
      `}
    }

    > div {
      display: flex;
      height: 123px;
      flex-flow: column wrap;

      ${breakpoint('md')`
        flex-flow: row nowrap;
        height: 60px;
        align-items: center;
      `}
    }
  }
`;

Footer.CopyrightLink = styled(Link)`
  width: fit-content;
  font-size: 14px;
  color: white;
  padding: 20px;
  cursor: pointer;

  ${breakpoint('md')`
    padding: 0 10px;
  `}

  &:hover {
    text-decoration: underline;
  }
`;

export default withTranslation()(Footer);
