import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Item } from '../../models';

interface ClientPickupItemProps {
    currentItemNumber: string
    totalItemNumber: string
    item: Item
    nextItem: () => void
}

const ClientPickupItem = (props: ClientPickupItemProps) => {
    const { currentItemNumber, totalItemNumber, item, nextItem } = props;

    const next = () => {
        if (!!nextItem) {
            nextItem();
        }
    }

    return (
        <Box padding='2rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%' width='100%'>
            <Typography variant='h3' marginBottom='2rem'>{currentItemNumber} of {totalItemNumber}</Typography>
            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>
                {item ? 
                    <Typography variant='h4'>{`${item.size} ${item.itemName}`}</Typography>
                    :
                    <Typography variant='h4'>No more items.</Typography>
                }
            </Box>
            <Button variant='contained' onClick={next}>{currentItemNumber === totalItemNumber ? 'Done' : 'Found it!'}</Button>
        </Box>
    )
}

export default ClientPickupItem;