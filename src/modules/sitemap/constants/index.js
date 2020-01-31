// @flow
import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

export type Category = {
  name: string,
  offers_count: number,
  short_name: string,
};

export const chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

export const footerLinks = (
  t: Function,
  categories: Category[],
  isAuthenticated: boolean,
  i18n: Object,
) => {
  const main_pages = {
    name: t('sitemap.main_pages.title'),
    collapsed: false,
    list: [
      { name: t('sitemap.main_pages.home'), url: '' },
      {
        name: t('sitemap.main_pages.automatic_coupon_apps'),
        url: '/coupon-app',
        href: true,
      },
      {
        name: t('sitemap.main_pages.about_cashback'),
        url: '/about-cashback',
        href: true,
      },
      { name: t('sitemap.main_pages.blog'), url: '/blog', href: true },
      {
        name: t('sitemap.main_pages.cashback_stores'),
        url: '/cashback-stores',
      },
      { name: t('sitemap.main_pages.free_coupons'), url: '/coupons' },
    ],
  };

  const company_info = {
    name: t('sitemap.company_info.title'),
    collapsed: false,
    list: [
      { name: t('sitemap.company_info.about'), url: '/about-us', href: true },
      {
        name: t('sitemap.company_info.contact_us'),
        url: '/contactus',
        href: true,
      },
      {
        name: t('sitemap.company_info.privacy_policy'),
        url: '/privacy',
        href: true,
      },
      {
        name: t('sitemap.company_info.terms_of_use'),
        url: '/terms',
        href: true,
      },
      { name: t('sitemap.company_info.eula'), url: '/eula', href: true },
    ],
  };

  const shopping_categories = {
    name: t('sitemap.shopping_categories.title'),
    collapsed: false,
    list: [
      ...categories.map((category: Category) => ({
        name: getCategoryTitle(category.name, t),
        url: `/coupons/${category.short_name}`,
      })),
    ],
  };

  const account_pages = {
    name: t('sitemap.account_pages.title'),
    collapsed: false,
    list: [
      {
        name: t('sitemap.account_pages.account_update'),
        url: '/account/update',
        href: true,
      },
      {
        name: t('sitemap.account_pages.change_password'),
        url: '/account/passwordreset',
        href: true,
      },
      {
        name: t('sitemap.account_pages.earnings_summary'),
        url: '/account/earnings',
        href: true,
      },
      {
        name: t('sitemap.account_pages.favorites'),
        url: '/account/favorites',
        href: true,
      },
      {
        name: t('sitemap.account_pages.referrals'),
        url: '/account/referrals',
        href: true,
      },
      {
        name: t('sitemap.account_pages.preferences'),
        url: '/account/preferences',
        href: true,
      },
    ],
  };

  const help_section = {
    name: t('sitemap.help_section.title'),
    collapsed: false,
    list: [
      {
        name: t('sitemap.help_section.contact_us'),
        url: '/contactus',
        href: true,
      },
      {
        name: t('sitemap.help_section.how_to_install'),
        url: '/howtoinstall',
        href: true,
      },
      {
        name: t('sitemap.help_section.how_to_uninstall'),
        url: '/howtoremove',
        href: true,
      },
      { name: t('sitemap.help_section.help'), url: '/help', href: true },
      {
        name: t('sitemap.help_section.unsubscribe'),
        url: '/unsubscribe',
        href: true,
      },
    ],
  };

  const misc = {
    name: t('sitemap.misc.title'),
    collapsed: false,
    list: [
      {
        name: t('sitemap.misc.consumer_resources'),
        url: '/consumer-resources',
        href: true,
      },
    ],
  };

  if (isAuthenticated) {
    main_pages.list.push({
      name: t('sitemap.main_pages.my_account'),
      url: '/account/earnings',
      href: true,
    });

    return i18n.language === 'en'
      ? {
          main_pages,
          company_info,
          shopping_categories,
          account_pages,
          help_section,
          misc,
        }
      : {
          main_pages,
          company_info,
          shopping_categories,
          account_pages,
          help_section,
        };
  }

  return i18n.language === 'en'
    ? {
        main_pages,
        company_info,
        shopping_categories,
        help_section,
        misc,
      }
    : {
        main_pages,
        company_info,
        shopping_categories,
        help_section,
      };
};

const SlickButtonWrapper = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any) => <span {...props}>{children}</span>;

export const slider_settings = {
  speed: 500,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false,
  prevArrow: (
    <SlickButtonWrapper>
      <MdArrowBack />
    </SlickButtonWrapper>
  ),
  nextArrow: (
    <SlickButtonWrapper>
      <MdArrowForward />
    </SlickButtonWrapper>
  ),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const getCategoryTitle = (name: string, t: Function) => {
  const categories = {
    Accessories: t('categories.accessories'),
    Automotive: t('categories.automotive'),
    Baby: t('categories.baby'),
    Beauty: t('categories.beauty'),
    'Books & Media': t('categories.booksMedia'),
    'Office & Business': t('categories.officeBusiness'),
    Canada: t('categories.canada'),
    Cellphones: t('categories.cellphones'),
    Clothing: t('categories.clothing'),
    Computers: t('categories.computers'),
    'Department Stores': t('categories.departmentStores'),
    Electronics: t('categories.electronics'),
    'Dining And Entertainment': t('categories.diningEntertainment'),
    'Gifts & Flowers': t('categories.giftFlowers'),
    Health: t('categories.health'),
    'Hobbies & Crafts': t('categories.hobbiesCrafts'),
    'Home & Garden': t('categories.HomeGarden'),
    Jewelry: t('categories.jewelries'),
    'Music & Instruments': t('categories.musicInstruments'),
    'Party Supplies': t('categories.partySupplies'),
    Pets: t('categories.pets'),
    Services: t('categories.services'),
    Shoes: t('categories.shoes'),
    'Sports And Fitness': t('categories.sportsFitness'),
    'Toys And Games': t('categories.toysGames'),
    Travel: t('categories.travel'),
    Luxury: t('categories.luxury'),
  };

  return categories[name] || name;
};
