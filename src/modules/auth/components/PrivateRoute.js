// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { getIsAuthenticated } from '../AuthReducer';

type PrivateRouteProps = {
  component: any,
  getIsAuthenticated: boolean,
};

const PrivateRoute = ({
  component: Component,
  getIsAuthenticated,
  ...rest
}: PrivateRouteProps) => (
  <Route
    {...rest}
    render={props =>
      getIsAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: getIsAuthenticated ? '/' : '/auth/not-authorized',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PrivateRoute.defaultProps = {
  getIsAuthenticated: false,
};

const mapStateToProps = state => ({
  getIsAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
