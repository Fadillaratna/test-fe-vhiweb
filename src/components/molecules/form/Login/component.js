import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, CircularProgress } from '@mui/material';
import FormInputOutlined from '../../../atoms/FormInputOutlined';
import Snackbar from '../../../atoms/Snackbar';

import { useFormik } from 'formik';
import { validationSchema } from './validate';

import { setToken, setUserData } from '../../../../utils/storage';
import { ROUTES, SERVICES } from '../../../../config';

import axios from 'axios';

const Component = () => {
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState({
    message: '',
    severity: 'error',
    show: false,
  });
  const navigate = useNavigate();

  const _handleLogin = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.post(SERVICES.LOGIN, payload);
      setToken(response.data.token);
      setUserData({ email: payload.email });
      setAlert({
        show: true,
        message: 'Success Login',
        severity: 'success',
      });
      setTimeout(() => {
        setLoading(false);
        navigate(ROUTES.DASHBOARD);
      }, 500);
    } catch (error) {
      setLoading(false);
      setAlert({
        show: true,
        message: 'Invalid username or password',
        severity: 'error',
      });
    }
  };

  const _handleCloseSnackbar = () => {
    setAlert({
      show: false,
      severity: alert.severity,
      message: alert.message,
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      _handleLogin(values);
    },
  });

  return (
    <>
      <Box sx={{ mt: 1 }}>
        <form onSubmit={formik.handleSubmit}>
          <FormInputOutlined
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email || ''}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <FormInputOutlined
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password || ''}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ mt: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#3178F6', boxShadow: 'none' }}
            size="large"
          >
            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login'}
          </Button>
        </form>
      </Box>

      <Snackbar alert={alert} open={alert.show} handleClose={_handleCloseSnackbar} />
    </>
  );
};

export default Component;
