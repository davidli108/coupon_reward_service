// @flow
export const CouponCategories = [
  'accessories',
  'automotive',
  'baby',
  'beauty',
  'books-and-media',
  'office-and-business',
  'canada',
  'cell-phones',
  'clothing',
  'computers',
  'dept-stores',
  'electronics',
  'dining-and-entertainment',
  'gifts-and-flowers',
  'health',
  'hobbies-and-crafts',
  'home-and-garden',
  'jewelry',
  'music-and-instruments',
  'party-supplies',
  'Pets',
  'services',
  'shoes',
  'sports-and-fitness',
  'toys-and-games',
  'travel',
];

export const isCouponCategory = (route: string) =>
  CouponCategories.indexOf(route) !== -1;
