import React from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { Brand } from '../../models';
import { format } from 'date-fns';

interface AddBrandProps {
    close: () => void
}

const AddBrand = (props: AddBrandProps) => {
    const { close } = props;
    const { handleSubmit, register } = useForm();

    const handleAddBrand = async (data: any) => {
        const { description } = data;

        await DataStore.save(new Brand({ description, lastUpdateTimestamp: format(Date.now(), 'yyyy-MM-dd') }));
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id='modal-modal-title' variant='h6' component='h2' marginBottom='2rem'>
                        Add Client
                    </Typography>
                    <form onSubmit={handleSubmit(handleAddBrand)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField id='standard-basic' label='Brand Name' variant='standard' {...register('description', { required: true, minLength: 2 })} />
                            <Button type='submit' variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem' }}>Add Brand</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddBrand;