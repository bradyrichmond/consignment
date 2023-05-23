import React, { useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { AttributeType, AttributeTypeValue } from '../../models';
import ModalContainer from '../../utils/ModalContainer';
import { format } from 'date-fns';

interface AddAttributeTypeValuesProps {
    attributeType: string
    close: () => void
}


const AddAttributeTypeValues = (props: AddAttributeTypeValuesProps) => {
    const { close, attributeType } = props;
    const { handleSubmit, register } = useForm();

    const handleAddAttributeTypeValue = async (data: any) => {
        const { attributeTypeValue } = data;

        await DataStore.save(new AttributeTypeValue({ attributeTypeValue, attributeTypeValueAttributeTypeId: attributeType, lastUpdateTimestamp: format(Date.now(), 'yyyy-MM-dd') }));
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <form onSubmit={handleSubmit(handleAddAttributeTypeValue)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField id='standard-basic' label='Attribute Type Value' variant='standard' inputProps={{ 'data-testid': 'attributeTypeValue' }} {...register('attributeTypeValue', { required: true, minLength: 2 })} />
                            <Button type='submit' variant='contained'>Add Attribute Type Value</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddAttributeTypeValues;