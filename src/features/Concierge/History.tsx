import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataStore, SortDirection } from 'aws-amplify';
import { ConsignmentDropoff, Location } from '../../models';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { format } from 'date-fns';
import SearchBar from '../../components/SearchBar';

interface LocationNamesObj {
    id: string, name: string
}

const ConciergeHistory = () => {
    const [historicalCheckins, setHistoricalCheckins] = useState<ConsignmentDropoff[]>([]);
    const [locationFilters, setLocationFilters] = useState([]);
    const [locationNames, setLocationNames] = useState<LocationNamesObj[]>([]);

    useEffect(() => {
        const buildLocationNames = async () => {
            const tempLocationNames = [];
            const locations = await DataStore.query(Location);
            const locationCount = locations.length;
            
            for (let i = 0; i < locationCount; i++) {
                tempLocationNames.push({ id: locations[i].id, name: locations[i].locationName });
            }

            setLocationNames(tempLocationNames);
        }

        buildLocationNames();
    }, [])

    useEffect(() => {
        const fetchedData = DataStore.observeQuery(
            ConsignmentDropoff,
            c => c.complete.eq(true), {
              sort: s => s.createdAt(SortDirection.ASCENDING)
            }
          ).subscribe(snapshot => {
            const { items } = snapshot;
            setHistoricalCheckins(items);
        });

        return () => {
            fetchedData.unsubscribe();
        }
    }, [locationNames, locationFilters])

    const handleFilterChange = () => {

    }

    const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {

    }

    const columns: GridColDef[] = [
        {field: 'firstName', headerName: 'First Name', width: 400},
        {field: 'lastName', headerName: 'Last Name', width: 400},
        {field: 'createdAt', headerName: 'Last Updated', width: 400, renderCell: (params: GridRenderCellParams<String>) => {
                return (
                    <>
                        {format(params.value, "MM/dd/yyyy hh:mm:ss")}
                    </>
                )
            }
        }
    ];

    const rows = historicalCheckins;

    return (
        <Box padding='2rem'>
            <SearchBar onSearchChange={handleSearchChange}/>
            <DataGrid rows={rows} columns={columns} />
        </Box>
    )
}

export default ConciergeHistory;