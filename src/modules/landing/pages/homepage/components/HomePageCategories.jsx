// @flow
import React, {useState} from 'react';
import Slider from 'react-slick';
import {compose} from 'recompose';
import {withTranslation} from 'react-i18next';
import {FaArrowRight, FaChevronRight} from 'react-icons/fa';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import {categories_settings} from '../HomePage.constants';
import {type HomePageCategoriesProps} from '../HomePage.types';

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

  return (
    <HomePageCategories.Wrapper>
      <HomePageCategories.Backdrop
        active={dropdownOpened}
        onClick={toggleDropdown}
      />
      <HomePageCategories.Title>
        <b>{t('homepage.discover')}</b>
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
      </HomePageCategories.Title>

      { isLoaded ? (
        <Slider {...categories_settings}>
          {categories && categories.map((item, key) => (
              <HomePageCategories.Slide key={key}>
                <Link to={item.link} >
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

export default compose(
  withTranslation(),
)(HomePageCategories);
