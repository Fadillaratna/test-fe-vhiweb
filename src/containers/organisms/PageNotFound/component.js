import React from 'react';

//Material UI
import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../config';

const Component = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ color: '#a0a0a0', fontSize: 28, letterSpacing: '0.5px', marginBottom: '20px' }}>
        404 Page Not Found
      </h1>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#3178F6', boxShadow: 'none' }}
        size="large"
        onClick={() => navigate(ROUTES.DASHBOARD)}
      >
        Back to Dashboard
      </Button>
    </div>
  );
};

export default Component;
