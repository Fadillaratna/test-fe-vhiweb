import React from 'react';

//? Component
import MainLayout from '../../organisms/MainLayout';
import { Paper } from '@mui/material';

import UsersOrganisms from '../../organisms/ListUser';

const Component = () => {
  return (
    <>
      <MainLayout title="Users">
        <>
          <Paper sx={{ p: 4, minWidth: 100, overflow: 'auto' }}>
            <UsersOrganisms />
          </Paper>
        </>
      </MainLayout>
    </>
  );
};

export default Component;
