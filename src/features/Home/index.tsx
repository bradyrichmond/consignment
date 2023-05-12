import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Drawer from '../DrawerContent';
import Navigation from '../Navigation';

const Home = () => {
    return (
        <Box display='flex' flexDirection='column' height='100%'>
            <Navigation />
            <Box display='flex' flexDirection='row' flex='1' sx={{bgcolor: 'background.default'}}>
                <Box flex='1'>
                    <Outlet />
                </Box>
                <Box maxWidth='25%' overflow='hidden'>
                    <Drawer />
                </Box>
            </Box>
        </Box>
    );
}

export default Home;