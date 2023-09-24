import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Modal, TextField, Typography } from '@mui/material';
import ConfirmModal from '../../utils/ConfirmModal';
import { useForm } from 'react-hook-form';
import { ConsignmentDropoff, Cubby } from '../../models';
import { DataStore, SortDirection } from 'aws-amplify';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const CreateDropOff = () => {
    const [validatingNewPolicy, setValidatingNewPolicy] = useState(false);
    const [formData, setFormData] = useState<any>();
    const [error, setError] = useState('');
    const [oversizedItems, setOversizedItem] = useState(false);
    const [newConsigner, setNewConsigner] = useState(false);
    const { handleSubmit, register, reset } = useForm();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { hasAppointment } = state;

    const confirmNewPolicy = (data: any) => {
        setFormData(data);
        setValidatingNewPolicy(true);
    }

    const validateBeforeSubmitCustomer = async () => {
         setValidatingNewPolicy(false);

        if (formData.firstName.length > 0 && formData.lastName.length > 0) {
            submitCustomer();
        } else if(formData.firstName.length < 1 && formData.lastName.length < 1) {
            setError('First name and last name are required.');
        } else if (formData.firstName.length < 1) {
            setError('First name is required.');
        } else if (formData.lastName.length < 1) {
            setError('Last name is required.');
        }
    }

    const submitCustomer = async () => {
        const { firstName, lastName, phone, oversizedDescription } = formData;
        const locationId = localStorage.getItem('locationId');
        
        if (locationId) {
            const availableCubbies = await DataStore.query(Cubby, (c) => c.and((c) => 
                [
                    c.locationId.eq(locationId),
                    c.inUse.eq(false)
                ]),
                {
                    sort: (s) => s.cubbyNumber(SortDirection.ASCENDING)
                }
            );

            if (availableCubbies.length > 0) {
                const assignedCubby = availableCubbies[0];

                await DataStore.save(Cubby.copyOf(assignedCubby, (updated) => {
                    updated.inUse = true;
                }));

                await DataStore.save(new ConsignmentDropoff({ firstName, lastName, phone, oversizedItems, complete: false, createdTime: Date.now(), newConsigner, hasAppointment, oversizedDescription, cubby: assignedCubby, locationId }));
                reset();
                navigate('/concierge/client/complete', { state: { cubbyNumber: assignedCubby.cubbyNumber } });
            }
        }
    }

    const closeModals = () => {
        setValidatingNewPolicy(false);
        setError('');
    }

    return (
        <Box height='100%' width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' bgcolor='background.default'>
            <Modal
                open={validatingNewPolicy}
                onClose={closeModals}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <ConfirmModal validationText={error} confirmText='OK' confirm={closeModals} />
            </Modal>
            <Modal
                open={validatingNewPolicy}
                onClose={closeModals}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <ConfirmModal validationText='Effective January 1, 2023, all items consigned are eligible for store credit only.' confirmText='I agree' confirm={validateBeforeSubmitCustomer} />
            </Modal>
            <Typography variant='h2'>We're so glad you're here! Please sign in!</Typography>
            <form onSubmit={handleSubmit(confirmNewPolicy)}>
                <Box display='flex' flexDirection='column' marginTop='2rem'>
                    <Box display='flex' flexDirection='row'>
                        <TextField style={{margin: '1rem'}} sx={{'.MuiInputBase-input': { fontSize: '2rem' } }} label='First Name' {...register('firstName', { required: true, minLength: 2 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                        <TextField style={{margin: '1rem'}} sx={{'.MuiInputBase-input': { fontSize: '2rem' } }} label='Last Name' {...register('lastName', { required: true, minLength: 2 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                    </Box>
                    <TextField style={{margin: '1rem'}}  label='Phone' {...register('phone', { required: true, minLength: 10 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                    <Box display='flex' flexDirection='row'>
                        <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 48 } }} />} label={<Typography variant='h3'>New Consigner?</Typography>} onChange={() => {setNewConsigner((cur) => !cur)}} />
                        <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 48 } }} />} label={<Typography variant='h3'>Oversized Items?</Typography>} onChange={() => {setOversizedItem((cur) => !cur)}} />
                    </Box>
                    {oversizedItems && 
                        <TextField style={{margin: '1rem'}}  label='List Oversized Items' {...register('oversizedDescription', { required: true, minLength: 2 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                    }
                    <Button variant='contained' type='submit' style={{marginTop: '2rem'}} onClick={confirmNewPolicy}>Next</Button>
                </Box>
            </form>
        </Box>
    )
}

export default CreateDropOff;