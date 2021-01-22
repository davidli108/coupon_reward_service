// @flow
import * as React from 'react';
import { withTranslation } from 'react-i18next';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

import DesktopIcon from './desktop.svg';
import DesktopIconHover from './desktoph.svg';
import InstagramIcon from './instagram.svg';
import logo from '../Header/logo.svg';
import FooterLink from './FooterLink/FooterLink';
import AppConfig from '@config/AppConfig';
import { fireGTMEvent } from '@config/Utils';
import { localeDomains } from '../../modules/localization/i18n';
import styles from './Footer.styles';

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
      {
        url: '/do-not-sell-my-personal-information',
        text: 'Do Not Sell My Personal Information',
      },
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
      { url: '/sitemap', text: t('footer.copyright.menu.sitemap'), link: true },
      { url: '/unsubscribe', text: t('footer.copyright.menu.unsubscribe') },
      { url: '/eula', text: t('footer.copyright.menu.eula') },
    ],
    gb: [
      { url: '/terms', text: t('footer.copyright.menu.termsOfUse') },
      { url: '/privacy', text: t('footer.copyright.menu.privacyPolicy') },
      { url: '/sitemap', text: t('footer.copyright.menu.sitemap'), link: true },
      { url: '/unsubscribe', text: t('footer.copyright.menu.unsubscribe') },
      { url: '/eula', text: t('footer.copyright.menu.eula') },
    ],
    fr: [
      { url: '/terms', text: t('footer.copyright.menu.termsOfUse') },
      { url: '/privacy', text: t('footer.copyright.menu.privacyPolicy') },
      { url: '/sitemap', text: t('footer.copyright.menu.sitemap'), link: true },
      { url: '/unsubscribe', text: t('footer.copyright.menu.unsubscribe') },
      { url: '/eula', text: t('footer.copyright.menu.eula') },
    ],
    de: [
      { url: '/terms', text: t('footer.copyright.menu.termsOfUse') },
      { url: '/privacy', text: t('footer.copyright.menu.privacyPolicy') },
      { url: '/sitemap', text: t('footer.copyright.menu.sitemap'), link: true },
      { url: '/unsubscribe', text: t('footer.copyright.menu.unsubscribe') },
      { url: '/eula', text: t('footer.copyright.menu.eula') },
      { url: '/impressum', text: t('footer.copyright.menu.impressum') },
    ],
  };

  const clickHandler = () => {
    fireGTMEvent({
      pageCategory: 'Footer',
      event: 'download_for_desktop',
      label: document.location.href,
    });
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
            href={`${AppConfig.extension.url}?hl=${i18n.language}`}
            target="_blank"
            style={{ order: '1' }}
            lng={i18n.language}
            onClick={clickHandler}
          >
            <div>
              <img src={DesktopIcon} alt="" />
              <img src={DesktopIconHover} alt="" />
            </div>
            <p>{t('footer.downloadButtons.desktop')}</p>
          </Footer.DownloadAppLink>
        </Footer.DownloadAppLinksWrapper>
        <Footer.Navigation>
          <Footer.NavigationPages>
            {footerLinks[i18n.language].map((link: any, key) => (
              <FooterLink key={key} url={link.url} text={link.text} />
            ))}
          </Footer.NavigationPages>
          <Footer.NavigationSites>
            {localeDomains.map((link: any, key) => (
              <li>
                <Footer.SiteLink key={key} href={link.url}>
                  {t(`country_names.${link.code}`)}
                </Footer.SiteLink>
              </li>
            ))}
          </Footer.NavigationSites>
        </Footer.Navigation>
      </Footer.Container>
      <Footer.CopyrightWrapper>
        <div>
          <Footer.CopyrightLinks>
            {copyrightLinks[i18n.language].map((link: any, key) => (
              <FooterLink
                key={key}
                url={link.url}
                text={link.text}
                link={link.link}
              />
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

styles(Footer);

export default withTranslation()(Footer);
