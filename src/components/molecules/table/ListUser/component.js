import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Button,
} from '@mui/material';

import PropTypes from 'prop-types';

const Component = (props) => {
  const { data } = props;

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)' }}>
              <TableCell>#</TableCell>
              <TableCell align="left">Avatar</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, i) => (
              <TableRow
                key={item.id_user}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="left">
                  {' '}
                  <Avatar alt={item.first_name} src={item.avatar} />
                </TableCell>
                <TableCell align="left">{item.email}</TableCell>
                <TableCell align="left">{item.first_name}</TableCell>
                <TableCell align="left">{item.last_name}</TableCell>
                <TableCell align="left"><Button
                  variant="contained"
                  sx={{backgroundColor: '#3178F6', boxShadow: 'none' }}
                >
                  Detail
                </Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Component;
Component.propTypes = {
  data: PropTypes.array,
};
