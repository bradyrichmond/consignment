import React, { useContext, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { CognitoContext } from '../../context';
import { DataStore, Storage } from 'aws-amplify';
import { Location, Organization } from '../../models';

const Concierge = () => {
    const [logoUrl, setLogoUrl] = useState('');

    useEffect(() => {
        const getLogoUrl = async () => {
            const locationId = localStorage.getItem('locationId');

            if (locationId) {
                const location = await DataStore.query(Location, locationId);

                if (location) {
                    const organization = await location.organization
                    const logoId = organization.logoId;

                    if (logoId) {
                        const fetchedLogoUrl = await Storage.get(logoId);
                        setLogoUrl(fetchedLogoUrl);
                    }
                }
            }
        }

        getLogoUrl();
    }, [])

    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='background.default'>
            {logoUrl && <Box height='20%' width='20%' position='fixed' left='0' top='0' sx={{background: `url(${logoUrl}) no-repeat`, backgroundSize: 'contain'}} />}
            <Outlet />
        </Box>
    )
}

export default Concierge;