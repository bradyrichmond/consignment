import React from 'react';
import { Box, Typography } from '@mui/material';
import ModalContainer from '../../utils/ModalContainer';
import Clients from '../Clients';

interface SelectConsignerProps {
    close: (consignerId?: string) => void
}

const SelectConsigner = ({ close }: SelectConsignerProps) => {
    const handleSelectConsigner = async (consignerId: string) => {
        close(consignerId)
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom='2rem'>
                        Select Consigner
                    </Typography>
                    <Clients onRowClickOverride={handleSelectConsigner} />
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default SelectConsigner;