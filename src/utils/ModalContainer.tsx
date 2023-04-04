import { Box, Fab } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface ModalContainerProps {
    children: React.ReactElement
    onClose?: () => void
}

const ModalContainer = (props: ModalContainerProps) => {
    const { children, onClose } = props;

    return (
        <Box padding='2rem' borderRadius='2rem' bgcolor='rgba(0, 0, 0, 255)' minWidth='25%' minHeight='25%' maxHeight='90%' display='flex' flexDirection='row' overflow='auto'>
            <Box display='flex' flex='1' flexDirection='column'>
                {children}
            </Box>
            <Box marginLeft='2rem' onClick={onClose}>
                <Fab aria-label="close" sx={{bgcolor: 'white'}}>
                    <CloseIcon sx={{color: 'black'}}/>
                </Fab>
            </Box>
        </Box>
    )
}

export default ModalContainer;