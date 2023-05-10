import React from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

interface AddManualPriceProps {
    selectPrice: (price: string) => void
    close: () => void
}

const AddManualPrice = (props: AddManualPriceProps) => {
    const { close, selectPrice } = props;
    const { handleSubmit, register } = useForm();

    const handleAddManualPrice = async (data: any) => {
        const { price } = data;

        selectPrice(price);
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id='modal-modal-title' variant='h6' component='h2' marginBottom='2rem'>
                        Add Price
                    </Typography>
                    <form onSubmit={handleSubmit(handleAddManualPrice)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField id='standard-basic' label='Price' variant='standard' {...register('price', { required: true, minLength: 2 })} />
                            <Button type='submit' variant='contained'>Add Price</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddManualPrice;