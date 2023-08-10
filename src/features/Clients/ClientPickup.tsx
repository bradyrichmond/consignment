import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { useParams } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Item, PickUp } from '../../models';

const ClientPickup = () => {
    const { id } = useParams();
    const [hasId, setHasId] = useState(false);
    const [pickUpItems, setPickUpItems] = useState<Item[]>([]);

    useEffect(() => {
        if (id) {
            setHasId(true)
        }
    }, [])

    useEffect(() => {
        if (id) {
            const getPickUpItems = async () => {
                const fetchedPickup = await DataStore.query(PickUp, id);
                if (fetchedPickup) {
                    const items = await fetchedPickup.items.toArray();
                    setPickUpItems(items);
                }
            }

            getPickUpItems();
        }
    }, [id])

    return (
        <>
            {hasId ?
                <BreakpointProvider>
                    <Breakpoint medium up>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Typography variant='h1'>This page is available for mobile only.</Typography>
                        </Box>
                    </Breakpoint>
                    <Breakpoint small down>
                        <Box display='flex' justifyContent='center' alignItems='center' padding='2rem'>
                            {pickUpItems.length > 0 ?
                                JSON.stringify(pickUpItems)
                                :
                                <Typography variant='h3'>No Items to pickup</Typography>
                            }
                        </Box>
                    </Breakpoint>
                </BreakpointProvider>
                :
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <LinearProgress />
                </Box>
            }
        </>
    )
}

export default ClientPickup;