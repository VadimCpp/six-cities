import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-data/selector';
import { getIsDataLoaded } from '../../store/offers-data/selector';

function PrivateRoute({ render, path, exact }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getIsDataLoaded);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        isDataLoaded && authorizationStatus !== AuthorizationStatus.AUTH
          ? <Redirect to={AppRoute.LOGIN} />
          : render(routeProps)
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export { PrivateRoute };
export default PrivateRoute;
