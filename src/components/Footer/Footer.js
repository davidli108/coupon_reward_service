// @flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import DesktopIcon from './desktop.svg';
import DesktopHoveIcon from './desktoph.svg';
import InstagramIcon from './instagram.svg';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

import logo from '../Header/logo.svg';
import FooterLink from './FooterLink/FooterLink';

type FooterProps = {
  t: Function,
  i18n: Object,
};

const Footer = ({ t, i18n }: FooterProps) => {
  const footerLinks = {
    en: [
      { url: '/about-us', text: t('footer.menu.aboutUs') },
      { url: '/blog', text: t('footer.menu.blog') },
      { url: '/about-cashback', text: t('footer.menu.aboutCashBack') },
      { url: '/help', text: t('footer.menu.help') },
      { url: '/consumer-resources', text: t('footer.menu.consumerResources') },
      { url: '/contactus', text: t('footer.menu.contact') },
      { url: '/howtoinstall', text: t('footer.menu.howToInstall') },
      { url: '/howtoremove', text: t('footer.menu.howToUninstall') },
      { url: '/cashback-apps', text: t('footer.menu.aboutOurApp') },
      { url: '/careers', text: t('footer.menu.careers') },
    ],
    gb: [
      { url: '/howtoinstall', text: t('footer.menu.howToInstall') },
      { url: '/about-cashback', text: t('footer.menu.aboutCashBack') },
      { url: '/cashback-apps', text: t('footer.menu.aboutOurApp') },
      { url: '/careers', text: t('footer.menu.careers') },
      { url: '/contactus', text: t('footer.menu.contact') },
      { url: '/howtoremove', text: t('footer.menu.howToUninstall') },
      { url: '/help', text: t('footer.menu.help') },
      { url: '/about-us', text: t('footer.menu.aboutUs') },
    ],
    fr: [
      { url: '/howtoinstall', text: t('footer.menu.howToInstall') },
      { url: '/about-cashback', text: t('footer.menu.aboutCashBack') },
      { url: '/cashback-apps', text: t('footer.menu.aboutOurApp') },
      { url: '/careers', text: t('footer.menu.careers') },
      { url: '/contactus', text: t('footer.menu.contact') },
      { url: '/howtoremove', text: t('footer.menu.howToUninstall') },
      { url: '/help', text: t('footer.menu.help') },
      { url: '/about-us', text: t('footer.menu.aboutUs') },
    ],
    de: [
      { url: '/howtoinstall', text: t('footer.menu.howToInstall') },
      { url: '/about-cashback', text: t('footer.menu.aboutCashBack') },
      { url: '/cashback-apps', text: t('footer.menu.aboutOurApp') },
      { url: '/careers', text: t('footer.menu.careers') },
      { url: '/contactus', text: t('footer.menu.contact') },
      { url: '/howtoremove', text: t('footer.menu.howToUninstall') },
      { url: '/help', text: t('footer.menu.help') },
      { url: '/about-us', text: t('footer.menu.aboutUs') },
    ],
  };

  const copyrightLinks = {
    en: [
      { url: '/terms', text: t('footer.copyright.menu.termsOfUse') },
      { url: '/privacy', text: t('footer.copyright.menu.privacyPolicy') },
      { url: '/sitemap', text: t('footer.copyright.menu.sitemap') },
      { url: '/unsubscribe', text: t('footer.copyright.menu.unsubscribe') },
      { url: '/eula', text: t('footer.copyright.menu.eula') },
    ],
    gb: [
      { url: '/terms', text: t('footer.copyright.menu.termsOfUse') },
      { url: '/privacy', text: t('footer.copyright.menu.privacyPolicy') },
      { url: '/sitemap', text: t('footer.copyright.menu.sitemap') },
      { url: '/unsubscribe', text: t('footer.copyright.menu.unsubscribe') },
      { url: '/eula', text: t('footer.copyright.menu.eula') },
    ],
    fr: [
      { url: '/terms', text: t('footer.copyright.menu.termsOfUse') },
      { url: '/privacy', text: t('footer.copyright.menu.privacyPolicy') },
      { url: '/unsubscribe', text: t('footer.copyright.menu.unsubscribe') },
      { url: '/eula', text: t('footer.copyright.menu.eula') },
    ],
    de: [
      { url: '/terms', text: t('footer.copyright.menu.termsOfUse') },
      { url: '/privacy', text: t('footer.copyright.menu.privacyPolicy') },
      { url: '/unsubscribe', text: t('footer.copyright.menu.unsubscribe') },
      { url: '/eula', text: t('footer.copyright.menu.eula') },
      { url: '/impressum', text: t('footer.copyright.menu.impressum') },
    ],
  };

  return (
    <Footer.Wrapper>
      <Footer.Container>
        <Footer.LogoWrapper>
          <Footer.Logo src={logo} />
          <Footer.Socials>
            <Footer.SocialLink
              icon="facebook"
              href="https://www.facebook.com/joinpiggy/"
              target="_blank"
            >
              <FaFacebookF />
            </Footer.SocialLink>
            <Footer.SocialLink
              icon="twitter"
              href="https://twitter.com/JoinPiggy"
              target="_blank/"
            >
              <FaTwitter />
            </Footer.SocialLink>
            <Footer.SocialLink
              icon="instagram"
              href="https://www.instagram.com/join_piggy/"
              target="_blank"
            >
              <img src={InstagramIcon} alt="" />
              <FaInstagram />
            </Footer.SocialLink>
          </Footer.Socials>
        </Footer.LogoWrapper>
        <Footer.DownloadAppLinksWrapper>
          <Footer.DownloadAppLink
            href={`https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba?hl=${
              i18n.language
            }`}
            target="_blank"
            style={{ order: '1' }}
            lng={i18n.language}
          >
            <div>
              <img src={DesktopIcon} alt="" />
              <img src={DesktopHoveIcon} alt="" />
            </div>
            <p>{t('footer.downloadButtons.desktop')}</p>
          </Footer.DownloadAppLink>
        </Footer.DownloadAppLinksWrapper>
        <Footer.Navigation>
          {footerLinks[i18n.language].map((link: any, key) => (
            <FooterLink key={key} url={link.url} text={link.text} />
          ))}
        </Footer.Navigation>
      </Footer.Container>
      <Footer.CopyrightWrapper>
        <div>
          <Footer.CopyrightLinks>
            {copyrightLinks[i18n.language].map((link: any, key) => (
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
  background: #fafafa;
  width: 100%;
`;

Footer.DownloadAppLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 164px;
  height: 54px;
  padding: 0 10px 0 22px;
  border-radius: 4px;
  border: 1px solid #62707b;
  background-color: #fff;
  transition: all 0.5s ease;
  color: #62707b;
  box-sizing: border-box;

  &:active {
    text-decoration: underline;
    color: white;
  }

  svg,
  img {
    width: auto;
    height: 30px;
    display: block;
  }

  img {
    &:last-child {
      display: none;
    }
  }

  > div {
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > p {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.375px;
  }

  &:hover {
    background-color: #62707b;
    color: #fff;

    img {
      &:last-child {
        display: block;
      }

      &:first-child {
        display: none;
      }
    }
  }

  ${breakpoint('xs')`
    max-width: 320px;
    justify-content: center;
    margin: 0 auto 20px;
    width: 100%;
  `}

  ${breakpoint('md')`
    width: 164px;
    padding: 0 10px 0 22px;
    margin: 0;

    > div {
      width: 25px;
      margin: 0 15px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;

Footer.Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 80px 15px 20px;
  width: 100%;
  max-width: 1170px;
  box-sizing: border-box;

  ${breakpoint('xs')`
    display: block;
    padding: 60px 15px 20px;
  `}

  ${breakpoint('md')`
    display: flex;
  `}

  ${breakpoint('lg')`
    width: 100%;
    padding: 80px 15px 20px;
  `}

  ${breakpoint('xl')`
    width: 1170px;
  `}
`;

Footer.LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;

  ${breakpoint('xs')`
    margin: 0 auto 35px;
  `}

  ${breakpoint('md')`
    max-width: 50%;
    margin: 0 0 35px;
  `}

  ${breakpoint('lg')`
    max-width: 50%;
    margin: 0;
  `}
`;

Footer.Logo = styled.img``;

Footer.Socials = styled.div`
  display: flex;
  margin: 0;

  ${breakpoint('sm')`
      margin: 0 0 0 60px;    
  `}
`;

Footer.SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid #dadde2;
  font-size: 21px;
  margin: 0 0 0 25px;
  transition: all 0.3s ease;

  svg {
    transition: color 0.3s ease;
  }

  ${({ icon }) => {
    switch (icon) {
      case 'facebook':
        return `
          svg {
            color: #768DBD;
          }

        `;
      case 'twitter':
        return `
          svg {
            color: #69BAEC;
          }

        `;
      default:
        return;
    }
  }}

  img {
    display: block;
    width: 21px;
    height: 21px;

    + svg {
      display: none;
    }
  }

  &:hover {
    border-color: #fff;

    svg {
      color: #fff;
    }

    img {
      display: none;

      + svg {
        color: #fff;
        display: block;
      }
    }

    ${({ icon }) => {
      switch (icon) {
        case 'facebook':
          return 'background-color: #768DBD';
        case 'twitter':
          return 'background-color: #69BAEC';
        case 'instagram':
          return `
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          background: -ms-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        `;
        default:
          return;
      }
    }}
  }

  ${breakpoint('xs')`
    margin: 0 0 0 15px;
  `}

  ${breakpoint('sm')`
    margin: 0 0 0 25px;
  `}
`;

Footer.DownloadAppLinksWrapper = styled.div`
  display: none;
  width: 100%;
  flex-direction: row;
  padding: 0 15px;

  ${breakpoint('lg')`
    flex: 1;
    display: flex;
  `}
`;

Footer.Navigation = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 72px 0 1rem;
  padding: 0 20px;
  list-style: none;
  box-sizing: border-box;
  width: 100%;
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
      font-size: 13px;
      line-height: 15px;
      color: #a0a7b0;

      ${breakpoint('md')`
        margin: 0 0 0 auto;
      `}

      ${breakpoint('xs')`
        margin: 0;
        padding: 0 20px 45px;
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

    ul {
      li {
        margin: 0;
      }
    }
  }
`;

Footer.CopyrightLinks = styled.ul`
  display: flex;
  font-size: 14px;
  color: white;
  padding: 45px 0;
  cursor: pointer;
  justify-content: flex-start;

  > li {
    flex: 0;
    max-width: none;
    white-space: nowrap;
    padding: 0;

    a {
      font-size: 13px;
      line-height: 15px;
      text-decoration: none;
      position: relative;
      margin: 0 20px 0 0;

      &::after {
        content: '';
        margin: 0;
        display: block;
        top: 7px;
        right: -11px;
        position: absolute;
        pointer-events: none;
        border: 1px solid #a0a7b0;
        border-radius: 50%;
      }
    }

    &:last-child {
      a {
        &::after {
          display: none;
        }
      }
    }
  }

  ${breakpoint('xs')`
    flex-flow: row wrap;
    justify-content: center;

    > li {
      flex: 0;
      max-width: 100%;
      padding: .75rem 0;

      :after {
        display: none;
      }
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