import React, { MouseEvent, useState } from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, TextField, Typography } from '@mui/material';
import { currencyFormatter } from '../../utils/PrintReceipt';
import { useForm } from 'react-hook-form';

const PAYMENT_OPTIONS = [1, 5, 10, 20, 50, 100];

interface ProcessCashProps {
    amount: number
    close: (amount?: number) => void
}

const ProcessCash = (props: ProcessCashProps) => {
    const { amount, close } = props;
    const [amountDue, setAmountDue] = useState(amount);
    const [tenderedAmount, setTenderedAmount] = useState(0);
    const { register, handleSubmit } = useForm();

    const handleSelectPaymentAmount = async (amountTendered: number) => {
        setTenderedAmount((cur) => cur + amountTendered);
        setAmountDue((cur) => cur - amountTendered);
    }

    const handleManualEntry = (data: any) => {
        const { amountTendered } = data;
        handleSelectPaymentAmount(amountTendered);
    }

    const handleClose = () => {
        close(tenderedAmount);
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem' width='50%'>
                    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                        <Typography id='modal-modal-title' variant='h6' component='h2' marginBottom='2rem'>
                            {amountDue > 0 ? 'Amount Due:' : 'Change Due:'}
                        </Typography>
                        <Typography variant='h6' component='h2' marginBottom='2rem' marginLeft='2rem' sx={{color: amountDue > 0 ? 'red' : 'green', fontWeight: 'bold'}}>{currencyFormatter.format(amountDue > 0 ? amountDue : -amountDue)}</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row' flexWrap='wrap'>
                        {PAYMENT_OPTIONS.map((paymentOptionAmount) => 
                            <Button variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem', marginLeft: '2rem', minWidth: '30%', flex: 1 }} onClick={() => { handleSelectPaymentAmount(paymentOptionAmount) }}>{paymentOptionAmount}</Button>
                        )}
                    </Box>
                    <form onSubmit={handleSubmit(handleManualEntry)}>
                        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                            <Box flex={1} marginRight='2rem' justifyContent='center' alignItems='center'>
                                <TextField
                                    fullWidth={true}
                                    style={{border: '1px solid white', borderRadius: '.25rem' }}
                                    sx={{ input: { color: 'white' }}}
                                    {...register('amountTendered', { required: true, minLength: 2 })}
                                />
                            </Box>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Button type='submit' variant='outlined' sx={{ color: 'white', border: '1px solid white', borderRadius: '.25rem' }}>Add Manual Amount</Button>
                            </Box>
                        </Box>
                    </form>
                    <Button variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem', marginLeft: '2rem', flex: 1}} onClick={handleClose}>Done</Button>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default ProcessCash;