import React from 'react';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';

const AddItem = () => {
    const { id } = useParams();

    return (
        <Box>
            {id}
        </Box>
    )
}

export default AddItem;