import * as React from 'react';

import { Typography, Box, Avatar, TextField } from '@mui/material';

import Proptypes from 'prop-types';

const Component = (props) => {
  const { user } = props;
  return (
    <>
      <Box sx={{ display: 'flex', boxShadow: 'none' }}>
        <Avatar
          alt={user.first_name}
          src={user.avatar}
          sx={{ width: 280, height: 280, marginTop: 5 }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }}>
          <Typography component="div" variant="h5">
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {user.email}
          </Typography>

          <Box
            sx={{
              width: 750,
              maxWidth: '100%',
              marginTop: 5,
            }}
          >
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Id User"
              defaultValue={user.first_name}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>

          <Box
            sx={{
              width: 750,
              maxWidth: '100%',
              marginTop: 3,
            }}
          >
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="First Name"
              defaultValue={user.first_name}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box
            sx={{
              width: 750,
              maxWidth: '100%',
              marginTop: 3,
            }}
          >
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Last Name"
              defaultValue={user.last_name}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box
            sx={{
              width: 750,
              maxWidth: '100%',
              marginTop: 3,
            }}
          >
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Email"
              defaultValue={user.email}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Component;
Component.propTypes = {
  user: Proptypes.array,
};
