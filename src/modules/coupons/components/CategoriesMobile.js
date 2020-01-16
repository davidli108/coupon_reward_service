// @flow
import * as R from 'ramda';
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import CategoryItem from './CategoryItem';

const capitalize = R.compose(
  R.join(''),
  R.juxt([
    R.compose(
      R.toUpper,
      R.head,
    ),
    R.tail,
  ]),
);

const capitalizeOrNull = R.unless(R.isNil, capitalize);

type CategoriesMobileProps = {
  t: Object,
  categories: Object,
  activeCategory: string,
  onActiveCategory: string => void,
};

const CategoriesMobile = ({
  t,
  categories,
  activeCategory,
  onActiveCategory,
}: CategoriesMobileProps) => {
  const [isOpen, setOpen] = useState(false);
  const [refItemsWrapper, setRefItemsWrapper] = useState(null);
  const [refTitle, setRefTitle] = useState(null);

  const html: HTMLElement | null = document.querySelector('html');
  const selected = categories.categories
    ? R.find(i => i.short_name === activeCategory)(categories.categories)
    : null;

  const onCloseItems: EventListener = e => {
    const isOutClick =
      refItemsWrapper &&
      refTitle &&
      !refItemsWrapper.contains(e.target) &&
      !refTitle.contains(e.target);

    if (isOutClick && html) {
      setOpen(false);
      html.removeEventListener('mousedown', onCloseItems);
    }
  };

  const onOpenItems = () => {
    if (!isOpen && html) {
      setOpen(true);
      html.addEventListener('mousedown', onCloseItems);
    } else {
      setOpen(false);
    }
  };

  return (
    <CategoriesMobile.Wrapper>
      <CategoriesMobile.Title onClick={() => onOpenItems()} ref={setRefTitle}>
        {selected
          ? selected.name || selected.store_name
          : t('categories.selectCategory')}
      </CategoriesMobile.Title>
      {/* $FlowFixMe */}
      <div ref={setRefItemsWrapper}>
        {isOpen && (
          <CategoriesMobile.ItemsWrapper items={categories[1]}>
            {categories &&
              Object.keys(categories).map(key => (
                <CategoriesMobile.Section key={`key_${key}`}>
                  <h2>{capitalizeOrNull(key)}</h2>
                  {categories['categories'].map(i => (
                    <CategoryItem
                      setOpen={setOpen}
                      key={`key_${i.short_name}`}
                      name={i.name || i.store_name}
                      shortName={i.short_name}
                      count={i.offers_count}
                      isActive={activeCategory === i.short_name}
                      onActive={onActiveCategory}
                      isCounter={key !== 'stores'}
                    />
                  ))}
                </CategoriesMobile.Section>
              ))}
          </CategoriesMobile.ItemsWrapper>
        )}
      </div>
      <CategoriesMobile.Triangle isOpen={isOpen} />
    </CategoriesMobile.Wrapper>
  );
};

CategoriesMobile.Wrapper = styled.div`
  position: relative;

  border: 1px solid #dadde2;
  border-radius: 5px;

  margin-top: 20px;
  cursor: pointer;

  ${breakpoint('md')`
    display: none;
  `}
`;

CategoriesMobile.Title = styled.p`
  display: flex;

  font-weight: bold;
  line-height: 21px;
  font-size: 18px;
  letter-spacing: 0.45px;
  color: #899197;

  padding: 10px 20px;
`;

CategoriesMobile.Triangle = styled.div`
  position: absolute;
  right: 0;
  top: 18px;

  width: 11px;
  height: 8px;
  background: #b1b1b1;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  margin-right: 20px;
  align-self: center;
  border-radius: 1px;
  transform: rotate(${({ isOpen }) => (isOpen ? '0deg' : '180deg')});
`;

CategoriesMobile.ItemsWrapper = styled.div`
  height: 50vh;
  position: absolute;
  top: 45px;
  left: -1px;
  overflow-y: scroll;

  border: 1px solid #dadde2;
  border-radius: 5px;
  border-top: none;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;

  box-shadow: 0px 16px 22px rgba(0, 0, 0, 0.2);

  background: #fff;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  z-index: 5;
`;

CategoriesMobile.Section = styled.div`
  width: 100%;
  background: #fff;

  display: flex;
  flex-flow: column nowrap;
  margin: 7px 0;

  div {
    padding: 7px 20px;
  }

  > h2 {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.45px;
    color: #899197;

    padding: 10px 20px;
  }
`;

export default withTranslation()(CategoriesMobile);
