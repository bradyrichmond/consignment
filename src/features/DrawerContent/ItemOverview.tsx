import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataStore } from 'aws-amplify';
import { DrawerContext } from '../../App';
import { Item } from '../../models';

const ItemOverview = () => {
    const { drawerItemId } = useContext(DrawerContext);
    const [itemData, setItemData] = useState<Item>();

    useEffect(() => {
        const getItemData = async () => {
            const fetchedItemData = await DataStore.query(Item, drawerItemId);
            setItemData(fetchedItemData);
        }

        getItemData();
    }, [])

    return (
        <Box display='flex' flexDirection='column' padding='2rem' color='white' height='100%'>
            {itemData &&
                <Box marginTop='4rem'>
                    <Typography variant='h3'>{`${itemData?.description}`}</Typography>
                </Box>
            }
        </Box>
    )
}

export default ItemOverview;