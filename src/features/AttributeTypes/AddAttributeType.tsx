import React, { useState } from 'react';
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
    const [error, setError] = useState('');

    const handleAddAttributeType = async (data: any) => {
        const { attributeTypeDescription } = data;
        setError('');

        try {
            await DataStore.save(new AttributeType({ attributeTypeDescription, lastUpdateTimestamp: format(Date.now(), 'yyyy-MM-dd') }));
            close();
        } catch (e: any) {
            setError('Error creating attribute type');
        }
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <form onSubmit={handleSubmit(handleAddAttributeType)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField label='Attribute Type Name' variant='standard' inputProps={{ 'data-testid': 'attributeTypeDescription' }} {...register('attributeTypeDescription', { required: true, minLength: 2 })} sx={{marginBottom: '2rem'}} />
                            {error && <Typography color='error'>{error}</Typography>}
                            <Button type='submit' variant='contained'>Add Attribute Type</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddAttributeType;