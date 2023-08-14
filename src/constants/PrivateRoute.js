import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { ROUTES } from '../config';
import { getToken } from '../utils/storage';

const PrivateRoute = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate(ROUTES.LOGIN);
    }
  }, [navigate]);

  return <>{children}</>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.element,
};
