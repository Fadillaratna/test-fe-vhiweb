import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../../config';
import { getToken } from '../../../utils/storage';
import LoginTemplate from '../../templates/Login';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate(ROUTES.DASHBOARD);
    }
  }, [navigate]);
  return <LoginTemplate />;
};

export default Login;
