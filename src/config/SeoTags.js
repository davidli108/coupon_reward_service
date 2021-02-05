// @flow
import moment from 'moment';

import AppConfig from '@config/AppConfig';
import logo from '@components/Header/logo.svg';

type opeGraphProps = {
  url?: string,
  type?: string,
  title?: string,
  description?: string,
  image?: string,
  imageAlt?: string,
  imageType?: string,
  siteName?: string,
};

export const openGraph = ({
  url,
  type,
  title,
  description,
  image,
  imageAlt,
  imageType,
  siteName,
}: opeGraphProps = {}) => {
  return [
    {
      property: 'og:url',
      content: url || AppConfig.apiUrl + window.location.pathname,
    },
    {
      property: 'og:type',
      content: type || 'website',
    },
    {
      property: 'og:title',
      content: title || 'Automatic Coupons, Huge Sales, and Cash back! - Piggy',
    },
    {
      property: 'og:description',
      content:
        description ||
        'Piggy, the only app to automatically apply coupons and cashback across all devices. Available at 3600+ Stores - Get Piggy Now!',
    },
    {
      property: 'og:image',
      content: image || AppConfig.apiUrl + logo,
    },
    {
      property: 'og:image:alt',
      content: imageAlt || '',
    },
    {
      property: 'og:image:type',
      content: imageType || '',
    },
    {
      property: 'og:site_name',
      content: siteName || 'Piggy',
    },
  ];
};

type metaTagsProps = {
  description?: string,
  keywords?: string,
};

export const metaTags = ({ description, keywords }: metaTagsProps = {}) => {
  const tags = [];

  if (description) {
    tags.push({
      name: 'description',
      content: description,
    });
  }

  if (keywords) {
    tags.push({
      name: 'keywords',
      content: keywords,
    });
  }

  return tags;
};

export const month = moment().format('MMMM');
export const year = moment().format('YYYY');
