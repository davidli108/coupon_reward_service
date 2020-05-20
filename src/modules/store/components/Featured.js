// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import moment from 'moment';
import i18n, { 
  currencyLocaleFormat,
  setDecimalFormat,

} from '@modules/localization/i18n';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import i18next from 'i18next';

type FeaturedProps = {
  t: Function,
  featured: Object,
};

const Featured = ({ t, featured }: FeaturedProps) => {
  const triggerEvent = (url: string) => () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      pageCategory: 'Stores by Category',
      event: 'featured_store_click',
      label: url,
    });
  };

  return (
    <Featured.Wrapper>
      <Featured.List>
        {featured.map(
          ({
            store_name,
            cashback_text,
            override,
            cashbackok,
            offer_img,
            store_id,
            offer_link,
            short_name,
            pay_type,
            country,
          }) => {
            const discount = cashbackok
              ? pay_type === 1
                ? currencyLocaleFormat(cashback_text, country || i18n.language)
                : setDecimalFormat(`${cashback_text} %`)
              : '';
            const cashBackMessageKey = cashbackok
              ? pay_type === 1
                ? 'global.amCashBack'
                : 'global.upToCashBack'
              : 'global.instantSaving';
            const cashBackText =
              override || t(cashBackMessageKey, { discount });
            Featured.CashComponent =
              i18next.language === 'jp' ? Featured.CashJp : Featured.Cash;
            const date = moment().format('MMMM | YYYY');

            return (
              <Featured.Item key={store_id}>
                {offer_img && (
                  <Featured.WrapperImage to={`/coupons/${short_name}`}>
                    <Featured.Image
                      src={offer_img || placeholder}
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = placeholder;
                      }}
                      alt={`${store_name || ''} ${t(
                        'storeCoupons.codes',
                      )} ${date.charAt(0).toUpperCase() + date.slice(1)}`}
                    />
                  </Featured.WrapperImage>
                )}
                <Featured.Link
                  to={`/coupons/${short_name}`}
                  onClick={triggerEvent(`/coupons/${short_name}`)}
                >
                  {t('build.visitStore')}
                </Featured.Link>
                <Featured.CashComponent>{cashBackText}</Featured.CashComponent>
              </Featured.Item>
            );
          },
        )}
      </Featured.List>
    </Featured.Wrapper>
  );
};

Featured.defaultProps = {
  featured: [],
};

Featured.Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  min-width: 0;

  ${breakpoint('xs')`
    padding: 11px 0;
    flex-direction: column;
  `}

  ${breakpoint('sx')`
    flex-direction: row;
    font-size: 22px;
    padding: 28px 0 20px;
  `}

  ${breakpoint('sm')`
    padding: 33px 0;
  `}

  ${breakpoint('md')`
    padding: 28px 0 20px;
    margin: 0 -30px 0 0;
  `}

  ${breakpoint('lg')`
    padding: 37px 0;
    margin: 0 -30px 0 0;
  `}

  ${breakpoint('xl')`
    padding: 37px 0 33px;
    margin: 0;
  `}
`;

Featured.List = styled.ul`
  display: flex;
  width: 100%;
  overflow: auto;
`;

Featured.Item = styled.li`
  padding: 11px 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  border-radius: 5px;
  box-sizing: border-box;

  :last-child {
    margin: 0;
  }

  ${breakpoint('xs')`
    min-width: 140px;
    padding: 9px;
    margin: 0 9px 0 0;
  `}

  ${breakpoint('sx')`
    min-width: 147px;
    padding: 11px 9px;
  `}

  ${breakpoint('lg')`
    min-width: 158px;
    margin: 0 27px 0 0;
  `}

  ${breakpoint('xl')`
    min-width: 147px;
  `}
`;

Featured.WrapperImage = styled(Link)`
  height: 90px;
  width: 90px;
`;

Featured.Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

Featured.Link = styled(Link)`
  display: block;
  width: 100%;
  padding: 9px 0;
  background: ${props => props.theme.colors.greenMain};
  border: 2px solid transparent;
  border-radius: 4px;
  font-weight: bold;
  line-height: 20px;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  margin: 0 0 21px;
  transition: background 205ms linear;

  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.greenMain};
    border-color: ${props => props.theme.colors.greenMain} !important;
  }
`;

Featured.Cash = styled.p`
  text-align: center;
  font-weight: 500;
  line-height: 23px;
  font-size: 13px;
  color: ${props => props.theme.colors.blackExLight};
`;

Featured.CashJp = styled.p`
  text-align: center;
  font-weight: 500;
  line-height: 23px;
  font-size: 10px;
  color: ${props => props.theme.colors.blackExLight};
`;

export default withTranslation()(Featured);
