// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (OurCouponExperts: Object) => {
  OurCouponExperts.Wrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    padding: 13px 0;
    margin-bottom: 20px;

    & * {
      font-family: ${props => props.theme.fonts.montserrat} !important;
    }

    & .Checkbox {
      top: 0 !important;
    }

    ${breakpoint('md')`

    `}

    @media (max-width: 992px) {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `;

  OurCouponExperts.Title = styled.h2`
    padding: calc(21px / 2) 12px;
    color: ${props => props.theme.colors.darkGray};
    font-size: 12px;
  `;

  OurCouponExperts.List = styled.div``;

  OurCouponExperts.ListItem = styled.div`
    display: flex;
    padding: calc(21px / 2) 12px;
    align-items: center;
    cursor: pointer;
  `;

  OurCouponExperts.ListItemLabel = styled.div`
    width: 100%;
    color: ${props => props.theme.colors.blackExLight};
    margin-left: 5px;
  `;

  OurCouponExperts.ListItemLabelValue = styled.div`
    font-weight: bold;
    color: ${props => props.theme.colors.greenSecondary};
  `;
};

export default styles;
