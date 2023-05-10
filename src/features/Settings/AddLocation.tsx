import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import ModalContainer from '../../utils/ModalContainer';
import { Address, Location } from '../../models';

interface AddLocationProps {
    close: () => void
}

const AddLocation = ({ close }: AddLocationProps) => {
    const { register, handleSubmit } = useForm();

    const handleAddLocation = async (data: any) => {
        const { locationName, addressLabel, address1, address2, address3, city, state, zipCode, taxRate } = data;

        const locations = await DataStore.query(Location, Predicates.ALL, {
            sort: (c) => c.locationId(SortDirection.DESCENDING),
            limit: 1
        });

        const nextNewestLocation = locations[0];
        const locationId = nextNewestLocation ? (parseInt(nextNewestLocation.locationId ?? '1000') + 1).toString() : '1';
        
        const address = await DataStore.save(new Address({ addressLabel, address1, address2, address3, city, state, zip: zipCode }));
        await DataStore.save(new Location({ locationName, locationId, locationAddressId: address.id, address, taxRate: parseFloat(taxRate) }));
        
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom='2rem'>
                        Add Location
                    </Typography>
                    <form onSubmit={handleSubmit(handleAddLocation)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField label="Location Name" variant="standard" {...register('locationName', { minLength: 2 })} />
                            <TextField label="Tax Rate in %" variant="standard" {...register('taxRate', { minLength: 2 })} />
                            <TextField label="Address 1" variant="standard" {...register('address1', { required: true, minLength: 2 })} />
                            <TextField label="Address 2" variant="standard" {...register('address2')} />
                            <TextField label="Address 3" variant="standard" {...register('address3')} />
                            <Box flexDirection='row'>
                                <TextField label="City" variant="standard" {...register('city', { required: true, minLength: 2 })} />
                                <TextField label="State" variant="standard" {...register('state', { required: true, minLength: 2 })} sx={{marginLeft: '1rem'}} />
                            </Box>
                            <TextField label="Zip Code" variant="standard" {...register('zipCode', { required: true, minLength: 2 })} />
                            <Box marginTop='2rem'>
                                <Button variant='contained' type='submit'>Add Location</Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddLocation;