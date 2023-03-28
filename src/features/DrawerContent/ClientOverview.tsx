import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataStore } from 'aws-amplify';
import React, { useContext, useEffect, useState } from 'react';
import { DrawerContext } from '../../App';
import { Client } from '../../models';

const ClientOverview = () => {
    const { drawerClientId } = useContext(DrawerContext);
    const [clientData, setClientData] = useState<Client>();

    useEffect(() => {
        const getClientData = async () => {
            const fetchedClientData = await DataStore.query(Client, drawerClientId);
            setClientData(fetchedClientData);
        }

        getClientData();
    }, [])

    return (
        <Box display='flex' flexDirection='column' padding='2rem' color='white' height='100%'>
            {clientData &&
                <Box marginTop='4rem'>
                    <Typography variant='h3'>{`${clientData?.firstName} ${clientData?.lastName}`}</Typography>              
                </Box>
            }
        </Box>
    )
}

export default ClientOverview;