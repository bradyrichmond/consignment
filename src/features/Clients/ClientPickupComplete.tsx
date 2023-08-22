import { Box, Typography } from '@mui/material';
import React from 'react';

const ClientPickupComplete = () => {
    return (
        <Box padding='2rem'>
            <Typography variant='h3'>Thank you for picking up your items.</Typography>
            <Typography variant='h4'>Please let an employee know that you're finished.</Typography>
        </Box>
    )
}

export default ClientPickupComplete;