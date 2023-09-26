import React, { ChangeEvent } from 'react';
import { Box, Button } from '@mui/material';

const OrganizationImageUpload = () => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
           
    }

    return (
        <Box>
            <Button
                variant="contained"
                component="label"
                >
                Upload File
                <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                    accept='image/png, image/jpeg, image/gif'
                />
            </Button>
        </Box>
    )
}

export default OrganizationImageUpload;