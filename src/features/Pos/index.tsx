import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { API, DataStore, Predicates } from 'aws-amplify';
import CheckoutActions from './CheckoutActions';
import { Item } from '../../models';

enum PAYMENT_INTENT_STATUS {
    declined = 'requires_payment_method',
    retry = 'requires_confirmation'
}

const Pos = () => {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = (item: Item) => {
        setItems(items.length > 0 ? [...items, item] : [item]);
    }

    return (
        <Box padding='2rem' display='flex' flexDirection='row' height='100%'>
            <Box flex='1' flexDirection='column-reverse'>
                {items && items.map((item) => <ListItem description={item.itemName ?? ''} price={item.price} />)}
            </Box>
            <Box  width='20%'>
                <CheckoutActions items={items} addItem={addItem} />
            </Box>
        </Box>
    )
}

interface ListItemProps {
    price: string
    description: string
}

const ListItem = (props: ListItemProps) => {
    const { price, description } = props;

    return (
        <Box display='flex' flexDirection='row' padding='2rem' marginBottom='1rem' border='1px solid white' borderRadius='.25rem'>
            <Box flex='1' paddingRight='2rem'>
                {description}
            </Box>
            <Box justifyContent='center' alignItems='center'>
                {price}
            </Box>
        </Box>
    )
}

export default Pos;