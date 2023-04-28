import React from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { AttributeType } from '../../models';
import { format } from 'date-fns';

interface AddAttributeTypeProps {
    close: () => void
}

const AddAttributeType = (props: AddAttributeTypeProps) => {
    const { close } = props;
    const { handleSubmit, register } = useForm();

    const handleAddAttributeType = async (data: any) => {
        const { attributeTypeDescription } = data;

        await DataStore.save(new AttributeType({ attributeTypeDescription, lastUpdateTimestamp: format(Date.now(), 'yyyy-MM-dd') }));
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id='modal-modal-title' variant='h6' component='h2' marginBottom='2rem'>
                        Add Attribute Type
                    </Typography>
                    <form onSubmit={handleSubmit(handleAddAttributeType)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField id='standard-basic' label='AttributeType Name' variant='standard' {...register('attributeTypeDescription', { required: true, minLength: 2 })} />
                            <Button type='submit' variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem' }}>Add Attribute Type</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddAttributeType;