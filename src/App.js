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
        <Route
          path={ROUTES.LOGIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={ROUTES.LIST_USERS}
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
      </Routes>

    </ThemeProvider>
  );
};

export default App;
