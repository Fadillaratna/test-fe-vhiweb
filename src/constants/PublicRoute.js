import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { ROUTES } from '../config';
import { getToken, getUserData } from '../utils/storage';

const PublicRoute = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate(ROUTES.DASHBOARD);
    }
  }, [navigate]);

  return <>{children}</>;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.element,
};
