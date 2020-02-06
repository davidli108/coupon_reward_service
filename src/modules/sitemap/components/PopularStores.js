// @flow
import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import placeholder from '@modules/coupons/assets/image-placeholder.png';
import { MdChevronRight } from 'react-icons/md';
import popular_stores from '../assets/popular_stores';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import { slider_settings } from '../constants';

type PopuparStoresProps = {
  t: Function,
  i18n: Object,
};

const PopularStores = ({ t, i18n }: PopuparStoresProps) => {
  const [popularStores, setPopularStores] = useState([]);

  useEffect(() => {
    setPopularStores(popular_stores[i18n.language]);
  }, [popular_stores, i18n.language]);

  return (
    <PopularStores.Wrapper>
      <Slider {...slider_settings}>
        {popularStores &&
          popularStores.map((store: any, key: number) => (
            <PopularStores.ItemWrapper key={key}>
              <PopularStores.Item>
                <PopularStores.Figure>
                  <img
                    src={store.logo}
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = placeholder;
                    }}
                    alt={store.name}
                  />
                </PopularStores.Figure>
                <b>{store.name}</b>
                <div>
                  <MdChevronRight />
                  <span>
                    {store.discount}{' '}
                    {store.kind === 'paid_placements'
                      ? t('global.cashBack')
                      : ''}
                  </span>
                </div>
                <NavLink to={`/coupons/${store.short_name}`}>
                  {t('sitemap.visit_store')}
                </NavLink>
              </PopularStores.Item>
            </PopularStores.ItemWrapper>
          ))}
      </Slider>
    </PopularStores.Wrapper>
  );
};

PopularStores.Wrapper = styled.div`
  display: block;
  padding: 0 15px 41px;
  margin: 0 0 43px;
  position: relative;
  border-bottom: 1px solid #f0f1f4;

  .slick-list {
    overflow: hidden;
  }

  .slick-slider {
    margin: 0 -15px;
  }

  .slick-slide {
    &:last-of-type {
      > div > div::after {
        display: none;
      }
    }
  }

  .slick-track {
    display: flex;

    *:focus {
      outline: none;
    }
  }

  .slick-arrow {
    display: flex !important;
    align-items: center;
    width: 77px;
    height: 77px;
    border-radius: 50%;
    box-shadow: 0px 14px 34px rgba(0, 0, 0, 0.2);

    &.slick-prev,
    &.slick-next {
      border: 0;
      padding: 0;
      position: absolute;
      z-index: 10;
      bottom: 50%;
      background-color: #fff;

      svg {
        width: 20px;
        height: 20px;
        display: block;
        color: #979797;
      }
    }

    &.slick-prev {
      left: -54px;
      justify-content: flex-end;

      svg {
        margin: 0 12px 0 0;
      }
    }

    &.slick-next {
      right: -54px;

      svg {
        margin: 0 0 0 12px;
      }
    }
  }

  ${breakpoint('sm')`
    .slick-arrow {
      &.slick-prev,
      &.slick-next {
        width: 97px;
        height: 97px;
      }

      &.slick-prev {
        left: -63px;

        svg {
          margin: 0 20px 0 0;
        }
      }

      &.slick-next {
        right: -63px;

        svg {
          margin: 0 0 0 20px;
        }
      }
    }
  `}
`;

PopularStores.List = styled.ul`
  display: flex;
  margin: 0 -15px;
`;

PopularStores.ItemWrapper = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
  flex: 1;
  position: relative;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(0, -50%);
    height: 140px;
    width: 1px;
    background-image: linear-gradient(
      to bottom,
      #b3bbc2 20%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: left;
    background-size: 1px 10px;
    background-repeat: repeat-y;
  }
`;

PopularStores.Item = styled.div`
  padding: 43px 0 35px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;

  b {
    display: block;
    font-size: 16px;
    line-height: 19px;
    font-weight: 900;
    text-align: center;
    color: #6b7480;
    margin: 0 0 7px;
  }

  > div {
    margin: 0 0 22px;
    display: flex;
    align-items: center;

    span {
      color: #7ed321;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.46px;
    }
  }

  a {
    display: block;
    color: #374b5a;
    text-decoration: underline;
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
    text-align: center;
  }
`;

PopularStores.Figure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 27px;
  padding: 0;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  position: relative;

  img {
    display: block;
    max-width: 100%;
    object-fit: contain;
    position: relative;
    z-index: 1;
  }

  ::after,
  ::before {
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: -6px;
    transform: translate(0, -50%);
  }

  ::after {
    left: auto;
    right: -6px;
  }
`;

export default withTranslation()(PopularStores);
