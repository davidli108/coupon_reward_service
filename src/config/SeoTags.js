// @flow
import moment from 'moment';

type opeGraphProps = {
  url?: string,
  type?: string,
  title?: string,
  description?: string,
};

export const openGraph = ({
  url,
  type,
  title,
  description,
}: opeGraphProps = {}) => {
  return [
    {
      property: 'og:url',
      content: url || window.location.href,
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
