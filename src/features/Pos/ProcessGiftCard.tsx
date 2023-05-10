import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { TextField, Typography } from '@mui/material';
import { DataStore } from 'aws-amplify';
import { GiftCard } from '../../models';

interface ProcessGiftCardProps {
    close: (giftCard?: GiftCard) => void
}

const ProcessGiftCard = (props: ProcessGiftCardProps) => {
    const { close } = props;
    
    const [scannedGiftCardNumber, setScannedGiftCardnumber] = useState('')
    const [error, setError] = useState('');

    useEffect(() => {
        const searchForGiftCard = setTimeout(getGiftCard, 250);

        return () => clearTimeout(searchForGiftCard);
    }, [scannedGiftCardNumber])

    const getGiftCard = async () => {
        const giftCardFetchedById = await DataStore.query(GiftCard, scannedGiftCardNumber);

        if (giftCardFetchedById) {
            close(giftCardFetchedById);
            return;   
        }

        // this should only fetch one, but it returns an array
        const giftCardsFetchedByNumber = await DataStore.query(GiftCard, (gc) => gc.barcode.eq(scannedGiftCardNumber));
        const giftCard = giftCardsFetchedByNumber[0]

        if (giftCard) {
            close(giftCard);
            return;
        }

        setError('Gift Card not found');
    }

    const handleScan = (e:ChangeEvent<HTMLInputElement>) => {
        setScannedGiftCardnumber(e.target.value);
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem' width='50%'>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Typography>Scan Gift Card</Typography>
                        <Box flex={1} marginRight='2rem' justifyContent='center' alignItems='center'>
                            <TextField
                                fullWidth={true}
                                style={{border: '1px solid black', borderRadius: '.25rem' }}
                                sx={{ input: { color: 'black' }}}
                                focused={true}
                                onChange={handleScan}
                                value={scannedGiftCardNumber}
                            />
                        </Box>
                        {error && 
                            <Typography sx={{color: 'red'}}>{error}</Typography>
                        }
                    </Box>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default ProcessGiftCard;