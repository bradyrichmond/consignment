import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ModalContainer from '../../utils/ModalContainer';
import { Client, Item } from '../../models';
import { DataStore } from 'aws-amplify';
import { subDays } from 'date-fns';

interface StorePickUpProps {
    client?: Client
    close: () => void
    approve: (items: Item[]) => void
}

const StorePickUp = (props: StorePickUpProps) => {
    const { client, close, approve } = props;
    const [expiredItems, setExpiredItems] = useState<Item[]>([]);
    const [clientName, setClientName] = useState('');
    const storeLocationId = localStorage.getItem('locationId');

    useEffect(() => {
        if (client) {
            const getData = async () => {
                const expiredDate = subDays(Date.now(), 60);
                const fetchedExpiredItems = await DataStore.query(Item, (i) => i.and((i) => 
                    [
                        i.clientItemsId.eq(client.id),
                        i.createTimestamp.lt(expiredDate.toString()),
                        i.statusId.eq('18'),
                        i.itemLocationId.eq(storeLocationId)
                    ]
                ));
                
                setClientName(client.firstName)
                setExpiredItems(fetchedExpiredItems);
            }
            
            getData();
        }
    }, [client])

    const createPickup = () => {
        approve(expiredItems);
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography variant='h3'>{clientName} has {expiredItems.length} expired items.</Typography>
                    <Typography variant='h4'>Are you ready to authorize a pick up?</Typography>
                    <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop='2rem'>
                        <Button variant="contained" component="label" style={{flex: 1, marginRight: '1rem'}} onClick={close}>No</Button>
                        <Button variant="contained" component="label" style={{flex: 1}} onClick={createPickup}>Yes</Button>
                    </Box>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default StorePickUp;