import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Address, Client } from '../../models';
import { DataGrid, GridColDef, GridEventListener, GridRenderCellParams, MuiEvent } from '@mui/x-data-grid';
import { Box, Button, Checkbox, FormControlLabel, Modal} from '@mui/material';
import AddClient from './AddClient';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import { DrawerContext } from '../../context';

export const toTitleCase = (str: string) => {
    if (str.length > 0){
        return `${str[0].toUpperCase()}${str.substring(1)}`;
    }

    return str;
}

const formatPhoneNumber = (num: string) => {
    if (num.length > 3 && num.length < 7) {
        return `${num.substring(0,3)}-${num.substring(3)}`
    }

    if (num.length > 6) {
        return `${num.substring(0,3)}-${num.substring(3,6)}-${num.substring(6)}`
    }

    return num;
}

interface ClientsProps {
    onRowClickOverride?: (consignerId: string) => void
}

const Clients = (props: ClientsProps) => {
    const { onRowClickOverride } = props;
    const [clients, setClients] = useState<Client[]>([]);
    const [isAddingClient, setIsAddingClient] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterInactiveClients, setFilterInactiveClients] = useState(true);
    const { setDrawerContent, setDrawerClientId } = useContext(DrawerContext);
    const navigate = useNavigate();

    useEffect(() => {
        const getClients = async () => {
            const fetchedClients = await DataStore.query(Client, Predicates.ALL, {
                page: 0,
                limit: 100
            });

            const finalClients = filterInactiveClients ? fetchedClients.filter((c) => (c.inactiveTimestamp ?? format(Date.now(), "yyyy-MM-dd")) >= format(Date.now(), "yyyy-MM-dd")) : fetchedClients;

            setClients(finalClients);
        }

        getClients();
    }, [isAddingClient])

    useEffect(() => {
        const getData = setTimeout(searchChange, 250);
        
        return () => clearTimeout(getData)
    }, [searchTerm, filterInactiveClients])

    const onSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        const changeSearchTerm = e.target.value;
        setSearchTerm(changeSearchTerm);
    }

    const searchChange = async () => {
        const filteredClients = await DataStore.query(Client, (c) => c.or(
            c => [
                c.firstName.contains(searchTerm.toUpperCase()),
                c.lastName.contains(searchTerm.toUpperCase()),
                c.email.contains(searchTerm.toUpperCase()),
                c.firstName.contains(searchTerm.toLowerCase()),
                c.lastName.contains(searchTerm.toLowerCase()),
                c.email.contains(searchTerm.toLowerCase()),
                c.firstName.contains(toTitleCase(searchTerm)),
                c.lastName.contains(toTitleCase(searchTerm)),
                c.phone.contains(formatPhoneNumber(searchTerm)),
                c.account.contains(searchTerm),
            ])
        );

        const finalClients = filterInactiveClients ? filteredClients.filter((c) => (c.inactiveTimestamp ?? format(Date.now(), "yyyy-MM-dd")) >= format(Date.now(), "yyyy-MM-dd")) : filteredClients;

        setClients(finalClients);
    }

    const addItemsNavigation = (params: GridRenderCellParams<String>, event: MuiEvent<React.MouseEvent>) => {
        event.stopPropagation();
        navigate(`/add-items/${params.id}`);
    }

    const columns: GridColDef[] = [
        {field: 'firstName', headerName: 'First Name', flex: 1},
        {field: 'lastName', headerName: 'Last Name', flex: 1},
        {field: 'account', headerName: 'Account #', flex: 1},
        {field: 'phone', headerName: 'Phone #', flex: 1},
        {field: 'email', headerName: 'Email', flex: 1},
        {field: 'createTimestamp', headerName: 'Created TS', flex: 1},
        {field: 'activeTimestamp', headerName: 'Active TS', flex: 1},
        {field: 'inactiveTimestamp', headerName: 'InactiveTS', flex: 1},
        {field: '', headerName: 'Add Items', flex: 1, editable: true, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <Button variant='contained' onClick={(event: MuiEvent<React.MouseEvent>) => addItemsNavigation(params, event)} sx={{marginTop: '2rem', marginBottom: '2rem'}}>Add Items</Button>
            )
        }},
    ];

    const rows = clients ?? [];

    const fileReader = new FileReader();

    const bulkAddClients = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;

        if (files) {
            const file = files[0]
            fileReader.onload = function (event) {
                const csvOutput = event.target?.result;
                const clients = csvOutput?.toString().split('\n');

                if (clients) {
                    for(let i = 1; i < clients?.length; i++) {
                        const add = async () => {
                            const client = clients[i].split(',');
                            const clientId = client[0] ?? "";
                            const firstName = client[7] ?? "";
                            const lastName = client[8] ?? "";
                            const companyName = client[9] ?? "";
                            const account = client[10] ?? "";
                            const receiveMailInd = Boolean(client[11]);
                            const nextItemNumber = client[12] ?? "";
                            const createTimestamp = client[13] ?? "";
                            const activeTimestamp = client[14] ?? "";
                            const inactiveTimestamp = client[15] ?? "";

                            const addressId = client[43];
                            const addressLabel = client[44];
                            const address1 = client[45];
                            const address2 = client[46];
                            const address3 = client[47];
                            const city = client[48];
                            const state = client[49];
                            const zip = client[50];
                            const primary = !!client[51];
                            const email = client[52];
                            const phone = client[53];

                            const fetchedClients = await DataStore.query(Client, (c) => c.clientId.eq(clientId));
                            
                            if (fetchedClients.length < 1) {
                                console.log(`Processing ${i} of ${clients.length}`);
                                
                                const client = await DataStore.save(new Client({ clientId, firstName, lastName, companyName, account, receiveMailInd, nextItemNumber, createTimestamp, activeTimestamp, inactiveTimestamp, modifiedBy: 'Bulk', email, phone }));
                                await DataStore.save(new Address({addressId, addressLabel, address1, address2, address3, city, state, zip, primary, clientAddressesId: client.id}))
                            } else {
                                const original = fetchedClients[0];
                                const fetchedAddresses = await DataStore.query(Address, (a) => a.addressId.eq(addressId));
                                
                                if (fetchedAddresses.length < 1) {
                                    await DataStore.save(new Address({addressId, addressLabel, address1, address2, address3, city, state, zip, primary, clientAddressesId: original.id}));
                                }

                                await DataStore.save(
                                    Client.copyOf(original, updated => {
                                        updated.createTimestamp = createTimestamp;
                                        updated.activeTimestamp = activeTimestamp;
                                        updated.inactiveTimestamp = inactiveTimestamp;
                                    })
                                )
                                console.log('found duplicate');
                            }
                        }

                        add();
                    }
                }
            };

            fileReader.readAsText(file);
        }
    }

    const startAddingClient = () => {
        setIsAddingClient(true);
    }

    const stopAddingClient = () => {
        setIsAddingClient(false);
    }

    const handleRowClick: GridEventListener<'rowClick'> = (
        params,
        event,
        details,
      ) => {
        if (onRowClickOverride) {
            onRowClickOverride(params.id.toString());
            return;
        }

        setDrawerClientId(params.id.toString());
        setDrawerContent('clientOverview');
    };

    const filterInactive = () => {
        setFilterInactiveClients((cur) => !cur);
    }

    return (
        <Box height='100%' display='flex' flexDirection='column' padding='2rem'>
            <Modal
                open={isAddingClient}
                onClose={stopAddingClient}
            >
                <Box>
                    <AddClient close={stopAddingClient}/>
                </Box>
            </Modal>

            <Box paddingTop='2rem' paddingBottom='2rem' display='flex' flexDirection='row' width='100%' alignItems='center'>
                <Box flex='1'>
                    <SearchBar onSearchChange={onSearchChange} />
                </Box>
                {!onRowClickOverride && 
                    <Box paddingLeft='2rem' display='flex' justifyContent='center' alignItems='center' width='30%'>
                        <Box flex='1' justifyContent='center' alignItems='center'>
                            <ProcessCsvButton label='Bulk Upload Clients' action={bulkAddClients} />
                        </Box>
                        <Box flex='1' justifyContent='center' alignItems='center'>
                            <Button variant="contained" component="label" sx={{margin: 0}} onClick={startAddingClient}>
                                Add a Client
                            </Button>
                        </Box>
                    </Box>
                }
            </Box>
            <Box paddingBottom='2rem'>
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 50}}} onChange={filterInactive} checked={filterInactiveClients} value={filterInactiveClients}/>} label="Active clients only" />
            </Box>
            <Box flex='1'>
                <DataGrid columns={columns} rows={rows} onRowClick={handleRowClick} getRowHeight={() => 'auto'} sx={{fontSize: '2rem'}} />
            </Box>
        </Box>
    )
}

interface ProcessCsvButtonProps {
    label: string
    action: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ProcessCsvButton = (props: ProcessCsvButtonProps) => {
    const { label, action } = props;

    return (
        <Box paddingLeft='2rem'>
            <Button variant="contained" component="label" sx={{margin: 0}}>
                {label}
                <input hidden accept=".csv" type="file" onChange={action} />
            </Button>
        </Box>
    )
}

export default Clients;