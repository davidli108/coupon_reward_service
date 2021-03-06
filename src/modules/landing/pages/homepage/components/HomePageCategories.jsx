// @flow
import React, {useState} from 'react';
import Slider from 'react-slick';
import {withTranslation} from 'react-i18next';
import {FaArrowRight, FaChevronRight} from 'react-icons/fa';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import {categories_settings} from '../HomePage.constants';
import {type HomePageCategoriesProps} from '../HomePage.types';
import { fireGTMEvent } from '@config/Utils';

import styles from './HomePageCategories.styles';
import {Link} from "react-router-dom";
import AmazonDealLoader from "../loader/AmazonDealLoader";

const HomePageCategories = ({
  t,
  categories,
  isLoaded,
}: HomePageCategoriesProps) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpened(!dropdownOpened);
  };

  const clickHandler = (category: Object) => () => {
    fireGTMEvent({
      pageCategory: 'Homepage',
      event: 'homepage_category_click',
      label: category.name,
    });
  };

  return (
    <HomePageCategories.Wrapper>
      <HomePageCategories.Backdrop
        active={dropdownOpened}
        onClick={toggleDropdown}
      />
      <HomePageCategories.TitleWrapper>
        <HomePageCategories.Title>{t('homepage.discover')}</HomePageCategories.Title>
        <HomePageCategories.Category>
          <div className="selected" onClick={toggleDropdown}>
            <span>{t('homepage.all')}</span>
            <FaChevronRight />
          </div>

          <HomePageCategories.Dropdown opened={dropdownOpened}>
            {categories && categories.map((item, key) => (
              <li key={key}>
                <Link to={item.link}>{item.name}</Link>
              </li>))
            }
          </HomePageCategories.Dropdown>
        </HomePageCategories.Category>
      </HomePageCategories.TitleWrapper>

      { isLoaded ? (
        <Slider {...categories_settings}>
          {categories && categories.map((item, key) => (
              <HomePageCategories.Slide key={key}>
                <Link to={item.link} onClick={clickHandler(item)}>
                <HomePageCategories.SlideWrapper>
                  <FaArrowRight />
                  <figure>
                    <img src={item.image || placeholder} alt=""/>
                  </figure>
                  <b>{item.name}</b>
                </HomePageCategories.SlideWrapper>
                </Link>
              </HomePageCategories.Slide>
            )
          )}
        </Slider>
      ) : (
          <AmazonDealLoader />
      )}
    </HomePageCategories.Wrapper>
  );
};

styles(HomePageCategories);

export default withTranslation()(HomePageCategories);
