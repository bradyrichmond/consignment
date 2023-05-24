import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Modal, TextField, Typography } from '@mui/material';
import ConfirmModal from '../../utils/ConfirmModal';
import { useForm } from 'react-hook-form';
import { ConsignmentDropoff, Cubby } from '../../models';
import { DataStore, SortDirection } from 'aws-amplify';
import { useLocation, useNavigate } from 'react-router-dom';
import useStoreLocation from '../../utils/useStoreLocation';

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
    const storeData = useStoreLocation();

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
        const availableCubbies = await DataStore.query(Cubby, (c) => c.and((c) => [
                c.cubbyLocationId.eq(storeData?.id ?? ''),
                c.inUse.eq(false)
            ]),
            {
                sort: (s) => s.cubbyNumber(SortDirection.ASCENDING)
            }
        );
        const assignedCubby = availableCubbies[0].cubbyNumber;

        await DataStore.save(new ConsignmentDropoff({ firstName, lastName, phone, oversizedItems, complete: false, createdTime: Date.now().toString(), newConsigner, hasAppointment, oversizedDescription }));
        reset();
        navigate('/concierge/client/complete', { state: { cubbyNumber: assignedCubby }});
    }

    const closeModals = () => {
        setValidatingNewPolicy(false);
        setError('');
    }

    return (
        <Box>
            <Modal
                open={validatingNewPolicy}
                onClose={closeModals}
            >
                <Box>
                    <ConfirmModal validationText={error} confirmText='OK' confirm={closeModals} close={closeModals}/>
                </Box>
            </Modal>
            <Modal
                open={validatingNewPolicy}
                onClose={closeModals}
            >
                <Box>
                    <ConfirmModal validationText='Effective January 1, 2023, all items consigned are eligible for store credit only.' confirmText='I agree' confirm={validateBeforeSubmitCustomer} cancel={closeModals} close={closeModals} />
                </Box>
            </Modal>
            <Typography>We're so glad you're here! Please sign in!</Typography>
            <form onSubmit={handleSubmit(confirmNewPolicy)}>
                <Box className='checkin-input-container'>
                    <TextField label='First Name' className='checkin-input' {...register('firstName', { required: true, minLength: 2 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                </Box>
                <Box className='checkin-input-container'>
                    <TextField label='Last Name' className='checkin-input' {...register('lastName', { required: true, minLength: 2 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                </Box>
                <Box className='checkin-input-container'>
                    <TextField label='Phone' className='checkin-input' {...register('phone', { required: true, minLength: 10 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                </Box>
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="New Consigner?" onChange={() => {setNewConsigner((cur) => !cur)}} />
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Oversized Items?" onChange={() => {setOversizedItem((cur) => !cur)}} />
                {oversizedItems && 
                    <Box className='checkin-input-container'>
                        <TextField label='List Oversized Items' className='checkin-input' {...register('oversizedDescription', { required: true, minLength: 2 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                    </Box>
                }
                <Button variant='contained' type='submit' onClick={confirmNewPolicy}>Next</Button>
            </form>
        </Box>
    )
}

export default CreateDropOff;