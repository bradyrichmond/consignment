import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import useStoreLocation from '../../utils/useStoreLocation';
import { Cubby } from '../../models';
import { DataStore, SortDirection } from 'aws-amplify';

const ConciergeSettings = () => {
    const locationData = useStoreLocation();
    const [cubbies, setCubbies] = useState<Cubby[]>([]);

    useEffect(() => {
        const cubbySub = DataStore.observeQuery(
            Cubby,
            c => c.cubbyLocationId.eq(locationData?.locationId ?? ''), {
              sort: s => s.cubbyNumber(SortDirection.ASCENDING),
            }
          ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;

            if (isSynced) {
                setCubbies(items);
            }
        });
        const getCubbyData = async () => {
            const fetchedCubbies = await DataStore.query(Cubby, (c) => c.cubbyLocationId.eq(locationData?.id ?? ''));
            setCubbies(fetchedCubbies);
        }

        getCubbyData();
    }, [])

    const addACubby = async () => {
        const nextCubbyNumber = cubbies[cubbies.length - 1].cubbyNumber ?? 1;
        if (locationData) {
            await DataStore.save(new Cubby({ cubbyNumber: nextCubbyNumber, location: locationData, cubbyLocationId: locationData?.id ?? '', inUse: false }));
        }
    }

    const removeACubby = async () => {
        const cubbyToDelete = cubbies[cubbies.length - 1];
        await DataStore.delete(Cubby, cubbyToDelete.id);
    }

    return (
        <Box>
            <Typography>{cubbies.length} cubbies assigned to this location</Typography>
            <Button onClick={addACubby}>Add a Cubby</Button>
            <Button onClick={removeACubby}>Remove a Cubby</Button>
        </Box>
    )
}

export default ConciergeSettings;