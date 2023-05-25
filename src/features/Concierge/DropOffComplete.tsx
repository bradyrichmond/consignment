import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const DropOffComplete = () => {
    const { state } = useLocation();
    const { cubbyNumber } = state;
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/concierge/client')
        }, 7500)
    }, [])

    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='background.default'>
            <Box>
                <Typography variant='h2'>Please place your items in</Typography>
                <Typography variant='h3' sx={{ marginBottom: '2rem' }}>bin #{cubbyNumber}</Typography>
                <Typography variant='h3'>
                    We will call your name as soon as we have finished looking through your items.
                </Typography>
                <Typography variant='h3'>
                    Thank you for consigning with us!
                </Typography>
            </Box>
        </Box>
    )
}

export default DropOffComplete;