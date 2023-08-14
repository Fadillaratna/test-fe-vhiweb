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
  const [currentPage, setCurrentPage] = useState(0); // Initialize to 0 for 0-based indexing
  const [totalPages, setTotalPages] = useState(0); // Initialize to 0 for 0-based indexing
  const [searchTerm, setSearchTerm] = useState('');

  const rowsPerPage = 6;

  const _getAllUser = async (page) => {
    try {
      const response = await axios.get(`${SERVICES.USERS}?page=${page}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    _getAllUser(currentPage + 1); // Add 1 to convert to 1-based indexing
  }, [currentPage]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Stack direction="row" spacing={53} alignItems="center" sx={{ marginBottom: 5 }}>
        <Stack direction="column" spacing={1}>
          <Typography fontWeight={600}>List User</Typography>
          <Typography fontWeight={400} sx={{ fontSize: 15 }}>
            {filteredUsers.length} data
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </FormControl>
      </Stack>
      <TableUser
        data={filteredUsers}
        page={currentPage}
        rowsPerPage={rowsPerPage}
        count={totalPages * rowsPerPage} // Estimate total count based on total pages and rows per page
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Component;
