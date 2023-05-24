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
        <Box>
            <Box className='checkin-complete-message'>
                <Box>
                    <Typography>Please place your items in</Typography>
                    <Box className='cubby-display'>bin #{cubbyNumber}</Box>
                    <Typography>
                        We will call your name as soon as we have finished looking through your items.
                    </Typography>
                    <Typography>
                        Thank you for consigning with us!
                    </Typography>
                </Box>
            </Box>    
        </Box>
    )
}

export default DropOffComplete;