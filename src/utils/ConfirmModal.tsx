import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import ModalContainer from './ModalContainer';

interface ConfirmModalProps {
    cancel: () => void
    confirm: () => void
    close: () => void
    validationText: string
    cancelText: string
    confirmText: string
}

const ConfirmModal = (props: ConfirmModalProps) => {
    const { cancel, confirm, close, validationText, cancelText, confirmText } = props;

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id='modal-modal-title' variant='h6' component='h2' marginBottom='2rem'>
                        {validationText}
                    </Typography>
                    <Box display='flex' flexDirection='column'>
                        <Button type='submit' variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem' }} onClick={cancel}>{cancelText}</Button>
                        <Button type='submit' variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem' }} onClick={confirm}>{confirmText}</Button>
                    </Box>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default ConfirmModal;