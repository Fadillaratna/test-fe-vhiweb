import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './config';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import PublicRoute from './constants/PublicRoute';
import PrivateRoute from './constants/PrivateRoute';

import Login from './containers/pages/Login';
import Dashboard from './containers/pages/Dashboard';
import Users from './containers/pages/Users';
import DetailUser from './containers/pages/DetailUser';
import PageNotFound from './containers/pages/PageNotFound';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path={ROUTES.LOGIN} element={<PublicRoute><Login /></PublicRoute>} />
        <Route path={ROUTES.DASHBOARD} element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path={ROUTES.LIST_USERS} element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path={ROUTES.DETAIL_USER} element={<PrivateRoute><DetailUser /></PrivateRoute>} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
