import React from 'react';
import {
  GridViewRounded,
  GroupRounded,
} from '@mui/icons-material';
import { ROUTES } from '../config';

export const sidebarData = [
  {
    title: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: <GridViewRounded />,
  },
  {
    title: 'Users',
    path: ROUTES.LIST_USERS,
    icon: <GroupRounded />,
  },
];
