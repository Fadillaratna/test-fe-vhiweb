import React from 'react';

//? Component
import MainLayout from '../../organisms/MainLayout';
import { Paper } from '@mui/material';

import DetailUserOrganism from '../../organisms/DetailUser';

const Component = () => {
  return (
    <>
      <MainLayout title="Users">
        <>
          <Paper sx={{ p: 4, minWidth: 100, overflow: 'auto' }}>
            <DetailUserOrganism />
          </Paper>
        </>
      </MainLayout>
    </>
  );
};

export default Component;
