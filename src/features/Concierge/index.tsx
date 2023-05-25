import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Concierge = () => {
    const navigate = useNavigate();

    const showClient = () => {
        navigate('/concierge/client');
    }

    const showEmployee = () => {
        navigate('/concierge/employee');
    }

    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='background.default'>
            <Button variant='contained' onClick={showClient} sx={{marginBottom: '2rem'}}>Client</Button>
            <Button variant='contained' onClick={showEmployee}>Employee</Button>
        </Box>
    )
}

export default Concierge;