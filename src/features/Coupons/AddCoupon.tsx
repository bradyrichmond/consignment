import React, { useContext } from 'react'
import ModalContainer from '../../utils/ModalContainer';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Coupon, CouponType } from '../../models';
import { DataStore } from 'aws-amplify';
import { CognitoContext } from '../../context';

interface AddCouponProps {
    close: () => void
}

const AddCoupon = (props: AddCouponProps) => {
    const { close } = props;
    const { organization, organizationId } = useContext(CognitoContext);

    const handleAddCoupon = async (data: any) => {
        const { name, amount, type } = data;
        await DataStore.save(new Coupon({ name, amount: parseFloat(amount), type: type === CouponType.FLAT ? CouponType.FLAT : CouponType.PERCENT, organization, couponOrganizationId: organizationId }));
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id='modal-modal-title' variant='h6' component='h2' marginBottom='2rem'>
                        Add Attribute Type
                    </Typography>
                    <AddCouponForm handleAddCoupon={handleAddCoupon} />
                </Box>
            </Box>
        </ModalContainer>
    )
}

interface AddCouponFormProps {
    handleAddCoupon: (data: any) => void
}

export const AddCouponForm = (props: AddCouponFormProps) => {
    const { handleAddCoupon } = props;
    const { handleSubmit, register } = useForm();

    return (
        <form onSubmit={handleSubmit(handleAddCoupon)}>
            <Box display='flex' flexDirection='column'>
                <TextField label='Name' variant='standard' inputProps={{ 'data-testid': 'addCouponName' }} {...register('name', { required: true, minLength: 3 })} />
                <TextField label='Amount' variant='standard' inputProps={{ 'data-testid': 'addCouponAmount' }} {...register('amount', { required: true, minLength: 1 })} />
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
    )
}

export default AddCoupon;