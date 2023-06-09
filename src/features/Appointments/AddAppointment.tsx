import React from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { Appointment } from '../../models';
import { format } from 'date-fns';

interface AddAppointmentProps {
    close: () => void
    date: number
}

const AddAppointment = (props: AddAppointmentProps) => {
    const { close, date } = props;
    const { handleSubmit, register } = useForm();

    const handleAddAppointment = async (data: any) => {
        const { firstName, lastName, phone } = data;
        const appointmentData = { firstName, lastName, phone, date };
        alert(JSON.stringify(appointmentData))
        await DataStore.save(new Appointment(appointmentData));
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <form onSubmit={handleSubmit(handleAddAppointment)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField label='First Name' variant='standard' {...register('firstName', { required: true, minLength: 2 })} sx={{marginBottom: '2rem'}} />
                            <TextField label='Last Name' variant='standard' {...register('lastName', { required: true, minLength: 2 })} sx={{marginBottom: '2rem'}} />
                            <TextField label='Phone Number' variant='standard' {...register('phone', { required: true, minLength: 2 })} sx={{marginBottom: '2rem'}} />
                            <Button type='submit' variant='contained'>Add Appointment</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddAppointment;