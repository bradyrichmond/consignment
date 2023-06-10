import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { add, format } from 'date-fns';
import { DataStore } from 'aws-amplify';
import { Blackout, Location } from '../../models';

const days = [0, 1, 2, 3, 4, 5, 6];

const daynames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const SetupBlackouts = () => {
    const [hours, setHours] = useState<Date[]>([]);
    const [storeData, setStoreData] = useState<Location>();
    const storeLocationId = localStorage.getItem('locationId');

    useEffect(() => {
        const getData = async () => {
            const fetchedStore = await DataStore.query(Location, storeLocationId ?? '');
            setStoreData(fetchedStore);
        }

        getData();
        generateHours();
    }, [])

    const generateHours = () => {
        let startingTime = new Date('December 17, 1995 00:00:00' + (new Date(Date.now()).getTimezoneOffset() * 60 * 1000));
        const endDateTime = add(startingTime ?? 0, { hours: 24 });
        const generatedOptions = [];

        if (startingTime && endDateTime) {
            while (startingTime < endDateTime) {
                generatedOptions.push(startingTime);
                startingTime = add(startingTime, { minutes: 30 });
            }
        }
        
        setHours(generatedOptions);
    }

    return (
        <Box padding='2rem' display='flex' justifyContent='center' alignItems='center'>
            {days.map((d) => {
                return <DayView hours={hours} daynumber={d} store={storeData} storeLocationId={storeLocationId} />
            })}
        </Box>
    )
}

interface DayViewProps {
    hours: Date[]
    daynumber: number
    store?: Location
    storeLocationId?: string | null
}

const DayView = (props: DayViewProps) => {
    const { hours, daynumber, store, storeLocationId } = props;

    return (
        <Box display='flex' flexDirection='column' flex='1' height='100%' justifyContent='center' alignItems='center'>
            <Typography variant='h5'>{daynames[daynumber]}</Typography>
            <Box display='flex' flexDirection='column' flex='1' sx={{overflowY: 'auto'}}>
                {hours.map((h) => {
                    return <DayHour time={h} day={daynumber} store={store} storeLocationId={storeLocationId} />
                })}
            </Box>
        </Box>
    )
}

interface DayHourProps {
    time: Date
    day: number
    store?: Location
    storeLocationId?: string | null
}

const DayHour = (props: DayHourProps) => {
    const { time, day, store, storeLocationId } = props;
    const [blackedOut, setBlackedOut] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const blackouts = await DataStore.query(Blackout, (b) => b.and((b) => 
                [
                    b.time.eq(format(time, 'hh:mm aa')),
                    b.dayOfWeek.eq(day),
                    b.blackoutLocationId.eq(storeLocationId)
                ]
            ))

            if (blackouts.length > 0) {
                setBlackedOut(true);
            }
        }

        getData();
    }, [])

    const toggleBlackout = async () => {
        if (blackedOut) {
            await DataStore.delete(Blackout, (b) => b.and((b) => [
                b.time.eq(time.toString()),
                b.dayOfWeek.eq(day),
                b.blackoutLocationId.eq(storeLocationId)
            ]))
        }

        if (!blackedOut) {
            await DataStore.save(new Blackout({ dayOfWeek: day, time: format(time, 'hh:mm aa'), blackoutLocationId: storeLocationId ?? '', location: store }));
        }

        setBlackedOut((bo) => !bo);
    }

    return (
        <Box borderRadius='100%' bgcolor={blackedOut ? 'black' : 'white'} color={blackedOut ? 'white' : 'black'} display='flex' justifyContent='center' alignItems='center' padding='2rem' margin='1rem' onClick={toggleBlackout}>
            <Typography>{format(time, 'hh:mm aa')}</Typography>
        </Box>
    )
}

export default SetupBlackouts;