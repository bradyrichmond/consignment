import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Cubby } from '../../models';
import { DataStore } from 'aws-amplify';

const Checkin = () => {
    const navigate = useNavigate();
    const [cubbyData, setCubbyData] = useState<Cubby[]>([])

    useEffect(() => {
        const locationId = localStorage.getItem('locationId');
        const cubbySub = DataStore.observeQuery(
            Cubby,
            (c) => c.locationId.eq(locationId ?? '')
          ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;
            setCubbyData(items);
            console.log('received updated cubbies')
        });

        return () => {
            cubbySub.unsubscribe();
        }
    }, [])

    const navigateAsAppointment = () => {
        navigate('/concierge/create-dropoff', { state: { hasAppointment: true } });
    }

    const navigateAsDropoff = () => {
        navigate('/concierge/create-dropoff', { state: { hasAppointment: false } });
    }

    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' bgcolor='background.default'>
            <Typography variant='h1'>Welcome! </Typography>
            {cubbyData.length < 1 ?
                <Typography variant='h1'>Please check in with an employee</Typography>
                :
                <>
                    <Typography variant='h1'>What brings you in today?</Typography>
                    <Button variant='contained' sx={{marginBottom: '1rem', marginTop: '2rem'}} onClick={navigateAsAppointment}>
                        Appointment
                    </Button>
                    <Button variant='contained' onClick={navigateAsDropoff}>
                        6 Item Drop Off
                    </Button>
                </>
            }
        </Box>
    )
}

export default Checkin;