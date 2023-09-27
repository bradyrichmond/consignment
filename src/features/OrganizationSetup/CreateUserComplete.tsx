import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const CreateUserComplete = () => {
    return (
        <Box height='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='background.default'>
            <Paper style={{padding: '2rem'}}>
                <Typography>User has been created. Speak with your manager for next steps.</Typography>
            </Paper>
        </Box>
    )
}

export default CreateUserComplete;