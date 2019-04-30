// @flow
import React from 'react';
import styled from 'styled-components';

const NotAuthorizedPage = () => (
  <NotAuthorizedPage.Message>You are not logged in!</NotAuthorizedPage.Message>
);

NotAuthorizedPage.Message = styled.h1`
  text-align: center;
`;

export default NotAuthorizedPage;
