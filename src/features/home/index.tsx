import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <Box display='flex' flexDirection='row'>
        <Box>Drawer</Box>
        <Box flex='1'>
            <Outlet />
        </Box>
    </Box>
  );
}

export default Home;