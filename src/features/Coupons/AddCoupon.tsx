import React from 'react'
import ModalContainer from '../../utils/ModalContainer';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Coupon, CouponType } from '../../models';
import { DataStore } from 'aws-amplify';

interface AddCouponProps {
    close: () => void
}

const AddCoupon = (props: AddCouponProps) => {
    const { close } = props;
    const { handleSubmit, register } = useForm();

    const handleAddCoupon = async (data: any) => {
        const { name, amount, type } = data;
        await DataStore.save(new Coupon({ name, amount: parseFloat(amount), type: type === CouponType.FLAT ? CouponType.FLAT : CouponType.PERCENT }));
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id='modal-modal-title' variant='h6' component='h2' marginBottom='2rem'>
                        Add Attribute Type
                    </Typography>
                    <form onSubmit={handleSubmit(handleAddCoupon)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField label='Name' variant='standard' {...register('name', { required: true, minLength: 3 })} />
                            <TextField label='Amount' variant='standard' {...register('amount', { required: true, minLength: 1 })} />
                            <FormControl>
                                <FormLabel>Type</FormLabel>
                                <RadioGroup
                                    {...register('type')}
                                >
                                    <FormControlLabel value={CouponType.FLAT} control={<Radio />} label='Dollars' />
                                    <FormControlLabel value={CouponType.PERCENT} control={<Radio />} label='Percent' />
                                </RadioGroup>
                            </FormControl>
                            <Button type='submit' variant='contained'>Add Coupon</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddCoupon;