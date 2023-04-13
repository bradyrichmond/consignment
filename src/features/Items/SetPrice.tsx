import React, { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import AddManualPrice from './AddManualPrice';

interface SetPriceProps {
    setItemPrice: (price: string) => void
}

const SetPrice = (props: SetPriceProps) => {
    const { setItemPrice } = props;
    const [ isSettingManualPrice, setIsSettingManualPrice ] = useState(false);

    const startAddingManualPrice = () => {
        setIsSettingManualPrice(true);
    }

    const stopAddingManualPrice = () => {
        setIsSettingManualPrice(false)
    }

    const selectPrice = (price: string) => {
        setItemPrice(price);
        stopAddingManualPrice();
    }

    return (
        <Box>
            <Modal
                open={isSettingManualPrice}
                onClose={stopAddingManualPrice}
            >
                <AddManualPrice selectPrice={selectPrice} close={stopAddingManualPrice}/>
            </Modal>
            <Button variant='outlined' onClick={startAddingManualPrice} sx={{color: 'white', border: '1px solid white', borderRadius: '.25rem', fontSize: '3rem' }}>Override Pricing</Button>
        </Box>
    )
}

export default SetPrice;