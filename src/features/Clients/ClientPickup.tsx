import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { useNavigate, useParams } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Item, PickUp } from '../../models';
import ClientPickupItem from './ClientPickupItem';
import { SizeType } from '../../models';
import { GenderType } from '../../models';

const ClientPickup = () => {
    const { id } = useParams();
    const [hasId, setHasId] = useState(false);
    const [activePickupItem, setActivePickupItem] = useState(0);
    const [pickUpItems, setPickUpItems] = useState<Item[]>([]);
    const navigate = useNavigate();

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

    const advance = () => {
        setActivePickupItem((current) => current + 1);
    }

    const done = () => {
        navigate(`/client-pickup-complete/${id}`);
    }

    return (
        <Box height='100%'>
            {hasId ?
                <BreakpointProvider>
                    <Breakpoint medium up>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Typography variant='h1'>This page is available for mobile only.</Typography>
                        </Box>
                    </Breakpoint>
                    <Breakpoint small down style={{height: '100%'} as any}>
                        <Box display='flex' justifyContent='center' alignItems='center' padding='2rem' height='100%'>
                            {pickUpItems.length > 0 ?
                                <ClientPickupItem currentItemNumber={(activePickupItem + 1).toString()} totalItemNumber={pickUpItems.length.toString()} item={pickUpItems[activePickupItem]} nextItem={activePickupItem < pickUpItems.length ? advance : done} />
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
        </Box>
    )
}

export default ClientPickup;