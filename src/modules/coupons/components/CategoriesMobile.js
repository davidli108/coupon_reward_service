//@flow
import * as React from 'react';
import styled from 'styled-components';

import CategoriesItem from './CategoriesItem';

import type { CategoriesMobileProps } from '../models/CouponsPage';

const CategoriesMobile = ({ categories, title }: CategoriesMobileProps) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <CategoriesMobile.Wrapper>
      <CategoriesMobile.Title
        onClick={() => setOpen(false) || setOpen(!isOpen)}
      >
        {title}
      </CategoriesMobile.Title>
      {isOpen && (
        <CategoriesMobile.ItemsWrapper items={categories}>
          {categories.map(category => (
            <CategoriesItem
              setOpen={setOpen}
              key={`category_${category.title}_${category.value}`}
              {...category}
            />
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

  margin-top: 25px;

  cursor: pointer;
`;

CategoriesMobile.Title = styled.p`
  display: flex;

  font-weight: bold;
  line-height: 21px;
  font-size: 18px;
  letter-spacing: 0.45px;
  color: #899197;

  padding: 10px;
`;

CategoriesMobile.Triangle = styled.div`
  position: absolute;
  right: 0;
  top: 18px;

  width: 11px;
  height: 8px;
  background: #b1b1b1;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  margin-right: 5px;
  align-self: center;

  border-radius: 1px;

  transform: rotate(${({ isOpen }) => (isOpen ? '0deg' : '180deg')});
`;

CategoriesMobile.ItemsWrapper = styled.div`
  position: absolute;
  top: 35px;
  left: -1px;

  border: 1px solid #dadde2;
  border-top: 4px solid rgba(0, 0, 0, 0.01);
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;

  background: #fff;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;

  z-index: 5;

  > div:first-child {
    margin-top: 15px;
  }
`;

export default CategoriesMobile;
