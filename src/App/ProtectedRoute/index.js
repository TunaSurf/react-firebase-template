import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { useAuthUser } from '../../shared/firebase';
import * as ROUTES from '../../shared/constants/routes';

// Replaces route to page with a redirect if user does not meet authorization condition
// Accepts a condition parameter which is a function in the format of the following examples:
// authUser => !!authUser;
// or
// authUser => authUser.role === 'ADMIN';
export default function ProtectedRoute({
  condition,
  redirectTo,
  path,
  ...rest
}) {
  const { authUser, loadingAuthUser } = useAuthUser();
  // First, make sure the authUser has finished loading before trying to check against an authUser
  if (loadingAuthUser) {
    return <p>Loading...</p>;
  }

  // Redirect to 'redirectTo' prop if unauthorized
  if (!condition(authUser)) {
    return (
      <Redirect to={{ pathname: redirectTo, state: { fromPath: path } }} />
    );
  }

  // If provider type is email/password and email has not been verified, redirect to email verification page
  if (
    !authUser.emailVerified &&
    authUser.providerData
      .map((provider) => provider.providerId)
      .includes('password')
  ) {
    return (
      <Redirect
        to={{ pathname: ROUTES.VERIFY_EMAIL, state: { fromPath: path } }}
      />
    );
  }

  return <Route path={path} {...rest} />;
}

ProtectedRoute.propTypes = {
  condition: PropTypes.func.isRequired,
  redirectTo: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};