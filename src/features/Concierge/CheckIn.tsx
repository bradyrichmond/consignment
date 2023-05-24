import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkin = () => {
    const navigate = useNavigate();

    const navigateAsAppointment = () => {
        navigate('/concierge/create-dropoff', { state: { hasAppointment: true } });
    }

    const navigateAsDropoff = () => {
        navigate('/concierge/create-dropoff', { state: { hasAppointment: false } });
    }

    return (
        <Box className='checkin-container'>
            <Box className='checkin-button-container'>
                <Typography className='question'>Welcome! </Typography>
                <Typography className='question'>What brings you in today?</Typography>
                <Button variant='contained' className='button' onClick={navigateAsAppointment}>
                    Appointment
                </Button>
                <Button variant='contained' className='button' onClick={navigateAsDropoff}>
                    6 Item Drop Off
                </Button>
            </Box>
        </Box>
    )
}

export default Checkin;