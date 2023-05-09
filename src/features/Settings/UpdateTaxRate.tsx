import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import ModalContainer from '../../utils/ModalContainer';
import { Location } from '../../models';

interface UpdateTaxRateProps {
    close: () => void
    locationId: string
}

const UpdateTaxRate = ({ close, locationId }: UpdateTaxRateProps) => {
    const { register, handleSubmit } = useForm();

    const handleUpdateTaxRate = async (data: any) => {
        const { taxRate } = data;

        const currentLocationData = await DataStore.query(Location, locationId);
     
        if (currentLocationData) {
            await DataStore.save(Location.copyOf(currentLocationData, (updated) => {
                updated.taxRate = parseFloat(taxRate);
            }));
        }
        
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom='2rem'>
                        Update Tax Rate
                    </Typography>
                    <form onSubmit={handleSubmit(handleUpdateTaxRate)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField label="Tax Rate in %" variant="standard" {...register('taxRate', { minLength: 2 })} />
                            <Box marginTop='2rem'>
                                <Button variant='outlined' type='submit'>Update Tax Rate</Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default UpdateTaxRate;