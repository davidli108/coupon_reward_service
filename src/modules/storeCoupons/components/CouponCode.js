// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

type CouponCodeProps = {
  t: Function,
  code: string,
  link: string,
};

const CouponCode = ({ t, code, link }: CouponCodeProps) => {
  const [isShowCode, setIsShowCode] = useState(false);

  return (
    <CouponCode.Wrapper>
      <CouponCode.Button
        onClick={() => {
          if (code) {
            setIsShowCode(true);
          } else {
            window.open(link, '_blank');
          }
        }}
        isShow={!isShowCode}
      >
        <p>{code ? t('global.revealCoupon') : t('coupons.buttons.viewDeal')}</p>
        <CouponCode.Rectangle isShow={!!code} />
      </CouponCode.Button>
      <CouponCode.Code href={link} target="_blank" isShow={isShowCode}>
        {code}
      </CouponCode.Code>
    </CouponCode.Wrapper>
  );
};

CouponCode.Wrapper = styled.div`
  width: 100%;
`;

CouponCode.Button = styled.div`
  margin-bottom: 10px;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  width: 100%;
  height: 45px;
  background: #00cbe9;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;
  cursor: pointer;

  p {
    width: 100%;
  }
`;

CouponCode.Code = styled.a`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  width: 100%;
  height: 41px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border: 2px dashed gray;
  background-color: #fefff4;
  color: black;
  text-align: center;
`;

CouponCode.Rectangle = styled.div`
  width: 30px;
  height: 25px;
  margin-left: auto;
  margin-bottom: auto;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-image: linear-gradient(45deg, #00a2ba 50%, #f1f1f1 50%);
  background-position: 0 0;
`;

export default CouponCode;
