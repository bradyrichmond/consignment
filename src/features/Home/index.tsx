import React, { useContext, useEffect, useState } from 'react';
import { Alert, Box, Snackbar } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import Drawer from '../DrawerContent';
import Navigation from '../Navigation';
import { CognitoContext } from '../../context';
import { Auth, DataStore, SortDirection } from 'aws-amplify';
import { ConsignmentDropoff, Organization, User } from '../../models';

const Home = () => {
    const { setUserGroups, setOrganization, setOrganizationId } = useContext(CognitoContext);
    const navigate = useNavigate();

    useEffect(() => {
        const getUserInfo = async () => {
            const user = await Auth.currentAuthenticatedUser();
            const userGroups = user.signInUserSession.accessToken.payload['cognito:groups'];
            const currentUserInfo = await Auth.currentUserInfo();
            const localUser = await DataStore.query(User, (u) => u.cognitoId.eq(currentUserInfo.id));
            const orgId = localUser[0]?.organizationUsersId;

            if (!orgId) {
                navigate('/organization-setup')
                return;
            }

            setUserGroups(userGroups);
            setOrganizationId(orgId);

            const fetchedOrganization = await DataStore.query(Organization, orgId);

            if (fetchedOrganization) {
                setOrganization(fetchedOrganization);
            }
        }

        getUserInfo();
    }, [])

    return (
        <>
            <Box display='flex' flexDirection='row' height='100%' width='100%' sx={{bgcolor: 'background.default'}}>
                <Navigation />
                <Box flex='1' sx={{ overflowY: 'auto' }}>
                    <Outlet />
                </Box>
                <Box maxWidth='25%' overflow='hidden'>
                    <Drawer />
                </Box>
            </Box>
        </>
    );
}

export default Home;