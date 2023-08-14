import React, { useEffect, useState } from 'react';

//? Component
import {
  Stack,
  TextField,
  MenuItem,
  Typography,
  OutlinedInput,
  Button,
  FormControl,
  InputAdornment,
} from '@mui/material';
import { SearchRounded } from '@mui/icons-material';

import TableUser from '../../../components/molecules/table/ListUser';

import { SERVICES } from '../../../config';
import axios from 'axios';

const Component = () => {
  const [users, setUsers] = useState([]);

  const _getAllUser = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    _getAllUser();
  }, []);

  return (
    <>
      <Stack direction="row" spacing={53} alignItems="center" sx={{ marginBottom: 5 }}>
        <Stack direction="column" spacing={1}>
          <Typography fontWeight={600}>List User</Typography>
          <Typography fontWeight={400} sx={{ fontSize: 15 }}>
            {users.length} data
          </Typography>
        </Stack>
        <FormControl sx={{ m: 1, width: '58ch' }} variant="outlined" size="small">
          <OutlinedInput
            id="outlined-adornment-password"
            startAdornment={
              <InputAdornment position="start">
                <SearchRounded />
              </InputAdornment>
            }
            placeholder="Search"
            // onChange={(e) => setKeyword(e.target.value)}
          />
        </FormControl>
      </Stack>
      <TableUser data={users} />
    </>
  );
};

export default Component;
