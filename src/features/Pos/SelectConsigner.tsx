import React from 'react';
import { Box, Typography } from '@mui/material';
import ModalContainer from '../../utils/ModalContainer';
import Clients from '../Clients';

interface SelectConsignerProps {
    close: (consignerId?: string) => void
}

const SelectConsigner = ({ close }: SelectConsignerProps) => {
    const handleSelectConsigner = async (consignerId: string) => {
        close(consignerId);
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%' padding='2rem'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' height='80%' width='80%' padding='2rem' display='flex' flexDirection='column'>
                    <Box>
                        <Typography variant="h6" component="h2" marginBottom='2rem'>
                            Select Consigner
                        </Typography>
                    </Box>
                    <Box flex='1'>
                        <Clients onRowClickOverride={handleSelectConsigner} />
                    </Box>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default SelectConsigner;