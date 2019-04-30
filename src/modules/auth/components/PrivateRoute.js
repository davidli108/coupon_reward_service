// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { isAuth } from '../AuthReducer';

type PrivateRouteProps = {
  component: any,
  isAuth: boolean,
};

const PrivateRoute = ({
  component: Component,
  isAuth,
  ...rest
}: PrivateRouteProps) => (
  <Route
    {...rest}
    render={props =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: isAuth ? '/' : '/auth/not-authorized',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PrivateRoute.defaultProps = {
  isAuth: false,
};

const mapStateToProps = state => ({
  isAuth: isAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
