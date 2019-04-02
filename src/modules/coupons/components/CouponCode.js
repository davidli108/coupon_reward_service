// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

type CouponCodeProps = {
  code: string,
  link: string,
};

const CouponCode = ({ code, link }: CouponCodeProps) => {
  const [isShowCode, setIsShowCode] = useState(false);

  return (
    <CouponCode.Wrapper>
      <CouponCode.Button
        onClick={() => {
          if (code) {
            setIsShowCode(true);
          } else {
            window.location.href = link;
          }
        }}
        isShow={!isShowCode}
      >
        {code ? 'VIEW CCOUPON' : 'VIEW DEAL'}
      </CouponCode.Button>
      <CouponCode.Code isShow={isShowCode}>{code}</CouponCode.Code>
    </CouponCode.Wrapper>
  );
};

CouponCode.Wrapper = styled.div`
  width: 90%;
`;

CouponCode.Button = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: #00cbe9;
  border: 1px solid #00b4cf;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.5),
    inset 0px -1px 5px rgba(0, 0, 0, 0.0584805),
    inset 0px -2px 0px rgba(255, 255, 255, 0.213315);
  border-radius: 4px;
  font-weight: bold;
  line-height: 20px;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;
  cursor: pointer;
`;

CouponCode.Code = styled.div`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  width: 100%;
  height: 46px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border: 2px dashed gray;
  background-color: #fefff4;
`;

export default CouponCode;
