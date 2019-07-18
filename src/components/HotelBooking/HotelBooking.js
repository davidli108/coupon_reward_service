// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';
import { getIsAuthenticated } from '@modules/auth/AuthReducer';
import AppConfig from '@config/AppConfig';

type HotelBookingProps = {
  isAuthenticated: boolean,
  toggleLogin: Function,
};

const HotelBooking = ({ isAuthenticated, toggleLogin }: HotelBookingProps) => {
  const [isActive, setIsActive] = useState(false);
  const [code, setCode] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const submitForm = (e: Event) => {
    e.preventDefault();
    setIsLoading(true);
    axios.post(`${AppConfig.apiUrl}/bookings/finds`, { code }).then(
      (response: any) => {
        if (response.success && response.data.url !== '') {
          setHasError(false);
          window.top.location.href = response.data.url;
        }
        setIsLoading(false);
      },
      () => {
        setHasError(true);
        setIsLoading(false);
      },
    );
  };

  const handleChange = e => {
    setCode(e.target.value);
  };

  return (
    <HotelBooking.Wrapper>
      <HotelBooking.Button isActive={isActive} onClick={toggleActive}>
        Hotel Booking
      </HotelBooking.Button>
      <HotelBooking.Popup isActive={isActive}>
        {isAuthenticated ? (
          <p>
            To manage your hotel booking please enter your confirmation number
            below.
          </p>
        ) : (
          <p>
            To manage your hotel booking,{' '}
            <span onClick={toggleLogin}>login to your account</span> or enter
            your confirmation number below.
          </p>
        )}
        {hasError && <b>Please enter a valid confirmation number.</b>}
        <HotelBooking.Form onSubmit={submitForm} isLoading={isLoading}>
          <input
            type="text"
            maxLength={20}
            value={code}
            onChange={handleChange}
            placeholder="Enter confirmation #"
          />
          <HotelBooking.FormSubmit>
            {isLoading ? <HotelBooking.Loading /> : <FiSearch />}
          </HotelBooking.FormSubmit>
        </HotelBooking.Form>
      </HotelBooking.Popup>
      <HotelBooking.Backdrop onClick={toggleActive} isActive={isActive} />
    </HotelBooking.Wrapper>
  );
};

HotelBooking.Wrapper = styled.div`
  position: relative;

  ${breakpoint('xs')`
    height: auto !important;
    min-width: 290px;
  `}

  ${breakpoint('lg')`
    height: 100% !important;
    min-width: 0;
  `}
`;

HotelBooking.Button = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;

  width: 100%;
  height: 100%;
  padding: 0 23px;
  letter-spacing: 0.6px;
  font-weight: 500;
  line-height: 25px;

  color: white;
  font-family: Roboto, Arial, sans-serif;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${breakpoint('xs')`
    margin: 20px 0 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  `}

  ${breakpoint('lg')`
    margin: 0;
    font-size: 19.5px;
    background-color: ${({ isActive }) =>
      isActive ? '#03b6d1' : 'transparent'};

    &:hover {
      background: #02a6bf;
    }
  `}
`;

HotelBooking.Popup = styled.div`
  box-sizing: border-box;

  p {
    color: #fff;
    letter-spacing: 0.5px;
    font-weight: 500;
    margin: 10px 0 0;

    ${breakpoint('xs')`
      font-size: 12px;
      line-height: 17px;
      display: block;
    `}

    ${breakpoint('lg')`
      text-align: center;
      color: #62707B;
      padding: 0 16px;
      margin: 0;
    `}

    span {
      cursor: pointer;
      text-decoration: underline;
      font-weight: 700;
    }
  }

  b {
    display: block;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.5px;
    margin-top: 10px;
    font-weight: 500;
    color: #a94442;

    ${breakpoint('lg')`
      color: red;
      font-weight: 700;
    `}
  }

  ${breakpoint('xs')`
    display: block;
    position: static;
    padding: 0 23px;
  `}

  ${breakpoint('lg')`
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    position: absolute;
    width: 366px;
    border-radius: 5px;
    -webkit-box-shadow: 0 7px 14.4px 1.6px rgba(0,0,0,.19);
    top: 65px;
    position: absolute;
    background: #fff;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    padding: 20px 17px 12px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      border: 9px solid transparent;
      border-bottom-color: #fff;
    }
  `}
`;

HotelBooking.Form = styled.form`
  display: flex;
  background: #fbfbfb;
  border: 1px solid #59c6e1;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #899197;
  padding: 0;
  position: relative;
  height: 41px;
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'auto')};

  input {
    background-color: transparent;
    border: 0;
    flex: 1;
    height: 100%;
    padding: 11px 13px 12px 15px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: #899197;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #ccc;
    }

    ${breakpoint('lg')`
      font-size: 14px;
    `}
  }

  ${breakpoint('lg')`
    margin: 13px 0 0;
  `}
`;

HotelBooking.FormSubmit = styled.button`
  width: 39px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    color: #ccc;
  }

  &:hover {
    svg {
      color: ${props => props.theme.colors.blue};
    }
  }

  &:focus {
    outline: none;
  }
`;

HotelBooking.Backdrop = styled.div`
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

HotelBooking.Loading = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-left-color: ${props => props.theme.colors.blue};
  border-top-color: ${props => props.theme.colors.blue};
  border-radius: 50%;
  animation: ${spin} 0.4s linear infinite;
`;

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});
export default compose(
  connect(
    mapStateToProps,
    null,
  ),
  withTranslation(),
)(HotelBooking);
