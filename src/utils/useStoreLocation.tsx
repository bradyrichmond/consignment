import React, { useEffect, useState } from 'react';
import { Location } from '../models';
import { DataStore } from 'aws-amplify';

const useStoreLocation = () => {
    const [location, setLocation] = useState<Location>();

    useEffect(() => {
        const getLocationData = async () => {
            const locationId = localStorage.getItem('locationId');
            if (locationId) {
                const fetchedLocation = await DataStore.query(Location, locationId);
                setLocation(fetchedLocation);
            }
        }

        getLocationData();
    }, [])

    return location;
}

export default useStoreLocation;