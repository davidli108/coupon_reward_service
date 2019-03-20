//@flow
import * as React from 'react';

import Controls from './Controls';
import CategoriesMobile from './CategoriesMobile';

import type { ContentProps } from '../models/CouponsPage';

const Content = ({ categories, stores }: ContentProps) => {
  const [filterBy, setFilter] = React.useState('allDeals');

  return (
    <div>
      <Controls filterBy={filterBy} setFilter={setFilter} />
      <CategoriesMobile categories={categories} title="Categories" />
      <CategoriesMobile categories={stores} title="Stores" />
    </div>
  );
};

export default Content;
