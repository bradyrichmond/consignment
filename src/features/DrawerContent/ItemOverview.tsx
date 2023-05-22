import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataStore } from 'aws-amplify';
import { DrawerContext } from '../../context';
import { Client, Item } from '../../models';

const ItemOverview = () => {
    const { drawerItemId } = useContext(DrawerContext);
    const [itemData, setItemData] = useState<Item>();
    const [clientData, setClientData] = useState<Client>();

    useEffect(() => {
        const getItemData = async () => {
            const fetchedItemData = await DataStore.query(Item, drawerItemId);
            setItemData(fetchedItemData);
            if (fetchedItemData && fetchedItemData.clientItemsId) {
                const client = await DataStore.query(Client, fetchedItemData?.clientItemsId)
                setClientData(client);
            }
        }

        getItemData();
    }, [drawerItemId])

    return (
        <Box display='flex' flexDirection='column' padding='2rem' color='white' height='100%'>
            {itemData &&
                <Box marginTop='4rem'>
                    <Typography variant='h3'>{`${itemData?.description}`}</Typography>
                    <Typography variant='h4'>{`${clientData?.firstName} ${clientData?.lastName}`}</Typography>
                </Box>
            }
        </Box>
    )
}

export default ItemOverview;