import React from 'react';
import PropTypes from 'prop-types';

import styles from './style';
import { sidebarData } from '../../../constants/sidebarData';

import ButtonToggleDrawer from '../../../components/atoms/ButtonDrawerToggle';
import SidebarItem from '../../../components/molecules/SidebarItem';

//? Redux
import { toogleDrawer } from '../../../reducers/global';

//? Material UI
import { Box, Drawer, List } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

const openedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: '#FFFFFF',
  overflow: 'visible',
  width: 260,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#FFFFFF',
  overflow: 'visible',
  width: 80,
});

const DrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

const Component = (props) => {
  const dispacth = useDispatch();

  const { title } = props;
  const { openDrawer } = useSelector((file) => file.global);

  const _handleClickToggle = () => {
    dispacth(toogleDrawer());
  };

  return (
    <>
      <DrawerStyled variant="permanent" anchor="left" open={openDrawer}>
        <Box sx={styles.rootBox}>
          <Box sx={styles.contentBox} />
          <ButtonToggleDrawer openDrawer={openDrawer} handleClick={_handleClickToggle} />
        </Box>
        <List sx={{ mt: 2, overflow: 'hidden' }}>
          {sidebarData.map((item, i) => (
            <SidebarItem item={item} key={i} active={title === item.title} />
          ))}
        </List>
      </DrawerStyled>
    </>
  );
};

export default Component;

Component.propTypes = {
  title: PropTypes.string,
};
