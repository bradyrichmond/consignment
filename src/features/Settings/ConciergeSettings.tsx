import React, { useEffect, useState } from 'react';
import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { Cubby, Location } from '../../models';
import { DataStore, SortDirection } from 'aws-amplify';

interface ConciergeSettingsProps {
    locationId: string
}

const ConciergeSettings = (props: ConciergeSettingsProps) => {
    const { locationId } = props;
    const [cubbies, setCubbies] = useState<Cubby[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const cubbySub = DataStore.observeQuery(
            Cubby,
            c => c.locationId.eq(locationId ?? ''), {
              sort: s => s.cubbyNumber(SortDirection.ASCENDING),
            }
          ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;
            setCubbies(items);
        });
        
        return (() => {
            cubbySub.unsubscribe();
        })
    }, [locationId])

    const addACubby = async () => {
        const nextCubbyNumber = (cubbies.length + 1).toString();
        const locationId = localStorage.getItem('locationId');

        if (locationId) {
            await DataStore.save(new Cubby({ cubbyNumber: nextCubbyNumber, locationId: locationId ?? '', inUse: false }));
        }
    }

    const removeACubby = async () => {
        const cubbyToDelete = cubbies[cubbies.length - 1];
        await DataStore.delete(Cubby, cubbyToDelete.id);
    }

    return (
        <Box sx={{ backgroundColor: 'white' }} borderRadius='1rem' padding='2rem'>
            <Typography variant='h3'>{cubbies.length} cubbies assigned to this location</Typography>
            <Button variant='contained' sx={{marginRight: '2rem'}} onClick={addACubby}>{loading ? <LinearProgress color='primary' /> : 'Add a Cubby'}</Button>
            <Button variant='contained' onClick={removeACubby}>{loading ? <LinearProgress color='primary' /> : 'Remove a Cubby'}</Button>
        </Box>
    )
}

export default ConciergeSettings;