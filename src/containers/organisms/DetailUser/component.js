import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES, SERVICES } from '../../../config';
import axios from 'axios';

import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import BoxDetailUser from '../../../components/molecules/Box/BoxDetailUser';

const Component = () => {
  const [user, setUser] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const _getDetailUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${SERVICES.USERS}/${id}`);
      setUser(response.data.data);
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setNotFound(true);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    _getDetailUser();
  }, []);

  let content;

  if (!loading) {
    if (notFound) {
      content = <div>User Not Found</div>;
    } else {
      content = (
        <>
          <IconButton aria-label="back" size="large" onClick={() => navigate(ROUTES.LIST_USERS)}>
            <ArrowBack fontSize="inherit" />
          </IconButton>
          <BoxDetailUser user={user} />
        </>
      );
    }
  }

  return <>{content}</>;
};

export default Component;
