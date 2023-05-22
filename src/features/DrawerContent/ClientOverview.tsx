import React, { useContext, useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { DataStore } from 'aws-amplify';
import { Client, Item } from '../../models';
import { useNavigate } from 'react-router-dom';
import { DrawerContext } from '../../context';

const ClientOverview = () => {
    const { drawerClientId } = useContext(DrawerContext);
    const [clientData, setClientData] = useState<Client>();
    const [clientItems, setClientItems] = useState<Item[]>();
    const navigate = useNavigate();

    useEffect(() => {
        const getClientData = async () => {
            const fetchedClientData = await DataStore.query(Client, drawerClientId);
            setClientData(fetchedClientData);
            const fetchedClientItems = await fetchedClientData?.items.toArray() ?? [];
            setClientItems(fetchedClientItems.slice(0,10));
        }

        getClientData();
    }, [])

    const moreClientData = () => {
        navigate(`/client/details/${drawerClientId}`)
    }

    return (
        <Box display='flex' flexDirection='column' padding='2rem' color='white' height='100%'>
            {clientData &&
                <Box marginTop='4rem' display='flex' flex='1' flexDirection='column'>
                    <Typography variant='h3' marginBottom='2rem'>{`${clientData?.firstName} ${clientData?.lastName}`}</Typography>
                    <Box flex='1' marginBottom='2rem'>
                        {clientItems &&
                            <ClientItemsGrid items={clientItems} />
                        }
                    </Box>
                    <Box onClick={moreClientData} width='100%'>
                        <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white', width: '100%', padding: '1rem'}}>More</Button>
                    </Box>
                </Box>
            }
        </Box>
    )
}

interface ClientItemProps {
    items: Item[]
}

const ClientItemsGrid = (props: ClientItemProps) => {
    const { items } = props;
    const rows = items;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const columns: GridColDef[] = [
        {field: 'name', headerName: 'Item Name', width: 200, editable: true},
        {field: 'price', headerName: 'Price', width: 100, editable: true,
            renderCell: (params: GridRenderCellParams<String>) => (
                <Typography>
                    {formatter.format(params.value)}
                </Typography>
            ),
        },
    ];

    return (
        <DataGrid rows={rows} columns={columns} style={{color: 'white'}} />
    )
}

export default ClientOverview;