import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Drawer from '../DrawerContent';

const Home = () => {
    return (
        <Box display='flex' flexDirection='row' height='100%' bgcolor='black' color='white'>
            <Box flex='1'>
                <Outlet />
            </Box>
            <Box maxWidth='25%' bgcolor='red' overflow='hidden'>
                <Drawer />
            </Box>
        </Box>
    );
}

export default Home;