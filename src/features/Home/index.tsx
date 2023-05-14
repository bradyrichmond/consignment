import React, { useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Drawer from '../DrawerContent';
import Navigation from '../Navigation';
import { CognitoContext } from '../../App';
import { Auth } from 'aws-amplify';

const Home = () => {
    const { setUserGroups } = useContext(CognitoContext);

    useEffect(() => {
        const getUserGroups = async () => {
            const user = await Auth.currentAuthenticatedUser();
            const userGroups = user.signInUserSession.accessToken.payload['cognito:groups'];
            setUserGroups(userGroups);
        }

        getUserGroups();
    }, [])

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