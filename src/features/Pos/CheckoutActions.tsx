import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { format } from 'date-fns';

import { currencyFormatter } from "../../utils/PrintReceipt";
import UserAvatar from "../../utils/UserAvatar";

interface CheckoutActionsProps {
    amount: number
}

const CheckoutActions = (props: CheckoutActionsProps) => {
    const { amount } = props;
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        const getTime = () => {
            const currentTime = Date.now();
            setTime(currentTime);
        }
        const ticker = setInterval(getTime, 1000);

        return () => {
            clearInterval(ticker);
        }
    }, [])

    return (
        <Box display='flex' flexDirection='column' height='100%'>
            <Box display='flex' flexDirection='row' padding='2rem' borderBottom='1px solid white' marginBottom='2rem'>
                <Box marginRight='2rem'><AccessTimeIcon sx={{color: 'white'}} /></Box>
                <Box flex='1'>{format(time, "eee, MMM do, yyyy | h:mm bbb")}</Box>
                <Box><UserAvatar /></Box>
            </Box>
            <Box flex='1'>
                <Box display='flex' flexDirection='row' padding='2rem'>
                    <Typography flex='1'>Subtotal:</Typography>
                    <Typography>{currencyFormatter.format(amount)}</Typography>
                </Box>
                <Box display='flex' flexDirection='row' padding='2rem'>
                    <Typography flex='1'>Tax:</Typography>
                    <Typography>{currencyFormatter.format(amount * .1)}</Typography>
                </Box>
                <Box display='flex' flexDirection='row' padding='2rem'>
                    <Typography flex='1'>Total:</Typography>
                    <Typography>{currencyFormatter.format(amount * 1.1)}</Typography>
                </Box>
            </Box>
            <Box padding='2rem'>
                <Button variant='outlined' sx={{border: '1px solid white', borderRadius: '.25rem', padding: '2rem', width: '100%', marginBottom: '2rem', color: 'white'}}>Cash</Button>
                <Button variant='outlined' sx={{border: '1px solid white', borderRadius: '.25rem', padding: '2rem', width: '100%', marginBottom: '2rem', color: 'white'}}>Credit / Debit</Button>
            </Box>
        </Box>
    )
}

export default CheckoutActions;