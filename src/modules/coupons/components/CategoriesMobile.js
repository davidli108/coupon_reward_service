//@flow
import * as R from 'ramda';
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import CategoriesItem from './CategoriesItem';
import type { CategoriesMobileProps } from '../models/CouponsPage';

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

const CategoriesMobile = ({ categories }: CategoriesMobileProps) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <CategoriesMobile.Wrapper>
      <CategoriesMobile.Title
        onClick={() => setOpen(false) || setOpen(!isOpen)}
      >
        {capitalizeOrNull(categories[0][0])}
      </CategoriesMobile.Title>
      {isOpen && (
        <CategoriesMobile.ItemsWrapper items={categories[1]}>
          {categories.map(([sectionTitle, category], index) => (
            <CategoriesMobile.Section
              key={`categories_section_${sectionTitle}`}
            >
              {index !== 0 && <h2>{capitalizeOrNull(sectionTitle)}</h2>}
              {category.map(x => (
                <CategoriesItem
                  setOpen={setOpen}
                  key={`category_${x.title}_${x.value}`}
                  {...x}
                />
              ))}
            </CategoriesMobile.Section>
          ))}
        </CategoriesMobile.ItemsWrapper>
      )}
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
  position: absolute;
  top: 35px;
  left: -1px;

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

  > div {
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

export default CategoriesMobile;
