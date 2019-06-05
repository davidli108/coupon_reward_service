// @flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { MdAndroid, MdLaptop } from 'react-icons/md';
import { IoLogoApple } from 'react-icons/io';
import { withTranslation } from 'react-i18next';

import logo from '../Header/logo.svg';
import FooterLink from './FooterLink/FooterLink';

type FooterProps = {
  t: Function,
  i18n: Object,
};

const Footer = ({ t, i18n }: FooterProps) => {
  const footerLinks = [
    { url: '/howtoinstall', text: t('footer.menu.howToInstall') },
    { url: '/blog', text: t('footer.menu.blog') },
    { url: '/about-cashback', text: t('footer.menu.aboutCashBack') },
    { url: '/cashback-apps', text: t('footer.menu.aboutOurApp') },
    { url: '/account/referrals', text: t('footer.menu.referrals') },
    { url: '/careers', text: t('footer.menu.careers') },
    { url: '/contactus', text: t('footer.menu.contact') },
    { url: '/howtoremove', text: t('footer.menu.howToUninstall') },
    { url: '/info', text: t('footer.menu.help') },
    { url: '/consumer-resources', text: t('footer.menu.consumerResources') },
  ];

  const copyrightLinks = [
    { url: '/terms', text: t('footer.copyright.menu.termsOfUse') },
    { url: '/privacy', text: t('footer.copyright.menu.privacyPolicy') },
    { url: '/sitemap', text: t('footer.copyright.menu.sitemap') },
    { url: '/unsubscribe', text: t('footer.copyright.menu.unsubscribe') },
    { url: '/eula', text: t('footer.copyright.menu.eula') },
  ];

  return (
    <Footer.Wrapper>
      <Footer.Strip />
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
            lng={i18n.language}
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
            lng={i18n.language}
          >
            <div>
              <IoLogoApple
                style={{ height: '30px', width: '30px', color: '#00b2cc' }}
              />
            </div>
            <p>{t('footer.downloadButtons.ios')}</p>
          </Footer.DownloadAppLink>
          <Footer.DownloadAppLink
            href={`https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba?hl=${
              i18n.language
            }`}
            target="_blank"
            style={{ order: '1' }}
            lng={i18n.language}
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
          {footerLinks.map((link: any, key) => (
            <FooterLink key={key} url={link.url} text={link.text} />
          ))}
        </Footer.Navigation>
      </Footer.Container>
      <Footer.CopyrightWrapper>
        <div>
          <Footer.CopyrightLinks>
            {copyrightLinks.map((link: any, key) => (
              <FooterLink key={key} url={link.url} text={link.text} />
            ))}
          </Footer.CopyrightLinks>
          <p>
            {t('footer.copyright.text')} © {new Date().getFullYear()}{' '}
            {t('footer.copyright.allRightReserved')}
          </p>
        </div>
      </Footer.CopyrightWrapper>
    </Footer.Wrapper>
  );
};

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
    width: ${props => (props.lng === 'de' ? '110px' : '90px')};
    color: white;
    letter-spacing: 0.3px;
    padding-right: 10px;
  }
`;

Footer.Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 0;
  width: 100%;
  max-width: 1170px;

  ${breakpoint('lg')`
    width: 970px;
  `}

  ${breakpoint('xl')`
    width: 1170px;
  `}

  > * {
    padding: 0 20px;
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
  padding: 2rem 0 0;
  justify-content: center;
  flex-direction: column;

  ${breakpoint('sx')`
    flex-direction: row;
  `}

  ${breakpoint('md')`
    width: auto;
  `}

  a {
    margin-bottom: 20px;

    ${breakpoint('sx')`
      margin-bottom: 0;
    `}
  }
`;

Footer.Navigation = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 3rem 0 1rem;
  padding: 0 20px;
  list-style: none;
`;

Footer.NavLink = styled.a`
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
    padding: 0 20px;
    box-sizing: border-box;

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
      flex-flow: column nowrap;
      margin: 30px 0;

      ${breakpoint('sm')`
        margin: 0;
        flex-flow: row wrap;
        height: 60px;
        align-items: center;
      `}
    }
  }
`;

Footer.CopyrightLinks = styled.ul`
  display: flex;
  font-size: 14px;
  color: white;
  padding: 1.5rem 0;
  cursor: pointer;

  > li {
    flex: 0;
    max-width: none;
    white-space: nowrap;
    padding: 0;

    ::after {
      content: '/';
      display: inline-block;
      margin: 0 .5rem;
      color: inherit;
    }

    :last-child {
      ::after {
        display: none;
      }
    }
  }

  ${breakpoint('xs')`
    flex-flow: row wrap;

    > li {
      flex: 1 0 100%;
      max-width: 100%;
      padding: .75rem 0;

      :after {
        display: none;
      }
    }
  `}

  ${breakpoint('sm')`
    > li {
      flex: 1 0 50%;
      max-width: 50%;
    }
  `}

  ${breakpoint('sm')`
    > li {
      flex: 0;
      max-width: none;
      padding: 0;
      
      :after {
        display: inline;
      }
    }
  `}
`;

export default withTranslation()(Footer);
