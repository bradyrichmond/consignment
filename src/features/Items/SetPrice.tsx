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
                <Box>
                    <AddManualPrice selectPrice={selectPrice} close={stopAddingManualPrice}/>
                </Box>
            </Modal>
            <Button variant='contained' onClick={startAddingManualPrice}>Override Pricing</Button>
        </Box>
    )
}

export default SetPrice;