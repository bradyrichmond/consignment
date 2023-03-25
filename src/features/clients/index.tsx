import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Client } from '../../models';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const toTitleCase = (str: string) => {
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

const Clients = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [page, setPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const getClients = async () => {
            const fetchedClients = await DataStore.query(Client, Predicates.ALL, {
                page,
                limit: 100
            });
            setClients(fetchedClients);
        }

        getClients();
    }, [])

    useEffect(() => {
        const getData = setTimeout(searchChange, 250);
        
        return () => clearTimeout(getData)
    }, [searchTerm])

    const onSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        const changeSearchTerm = e.target.value;
        setSearchTerm(changeSearchTerm);
    }

    const searchChange = async () => {
        const filteredClients = await DataStore.query(Client, (c) => c.or(c => [
            c.firstName.contains(searchTerm.toUpperCase()),
            c.lastName.contains(searchTerm.toUpperCase()),
            c.email.contains(searchTerm.toUpperCase()),
            c.firstName.contains(searchTerm.toLowerCase()),
            c.lastName.contains(searchTerm.toLowerCase()),
            c.email.contains(searchTerm.toLowerCase()),
            c.firstName.contains(toTitleCase(searchTerm)),
            c.lastName.contains(toTitleCase(searchTerm)),
            c.phone.contains(formatPhoneNumber(searchTerm)),
            c.account.contains(searchTerm)
        ]));

        setClients(filteredClients);
    }

    const columns: GridColDef[] = [
        {field: 'firstName', headerName: 'First Name', width: 200, editable: true},
        {field: 'lastName', headerName: 'Last Name', width: 200, editable: true},
        {field: 'account', headerName: 'Account #', width: 100, editable: true},
        {field: 'phone', headerName: 'Phone #', width: 200, editable: true},
        {field: 'email', headerName: 'Email', width: 300, editable: true},
        {field: 'createdTimestamp', headerName: 'Created TS', width: 300, editable: true},
        {field: 'activeTimestamp', headerName: 'Active TS', width: 300, editable: true},
        {field: 'inactiveTimestamp', headerName: 'Inactive TS', width: 300, editable: true},
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
                            const clientTypeId = client[3] ?? '1';
                            const firstName = client[7] ?? "";
                            const lastName = client[8] ?? "";
                            const companyName = client[9] ?? "";
                            const account = client[10] ?? "";
                            const receiveMailInd = Boolean(client[11]);
                            const nextItemNumber = client[12] ?? "";
                            const createTimestamp = client[13] ?? "";
                            const activeTimestamp = client[14] ?? "";
                            const inactiveTimestamp = client[15] ?? "";

                            const fetchedClients = await DataStore.query(Client, (c) => c.clientId.eq(clientId));
                            
                            if (fetchedClients.length < 1) {
                                console.log(`Processing ${i} of ${clients.length}`);
                                await DataStore.save(new Client({ clientId, clientTypeId, firstName, lastName, companyName, account, receiveMailInd, nextItemNumber, createTimestamp, activeTimestamp, inactiveTimestamp, modifiedBy: 'Bulk' }));
                            } else {
                                const original = fetchedClients[0];
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

    const mergePhoneNumbers = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;

        if (files) {
            const file = files[0]
            fileReader.onload = function (event) {
                const csvOutput = event.target?.result;
                const entries = csvOutput?.toString().split('\n');

                if (entries) {
                    for(let i = 1; i < entries?.length; i++) {
                        const merge = async () => {
                            const entry = entries[i].split(',');
                            const clientId = entry[1];
                            const phone = entry[3];
                            if (phone) {
                                const originals = await DataStore.query(Client, (c) => c.clientId.eq(clientId));
                                const original = originals[0];
                                if (original) {
                                    await DataStore.save(
                                        Client.copyOf(original, updated => {
                                            updated.phone = phone
                                        })
                                    );
                                }
                            }
                            console.log(`Processing ${i} of ${clients.length}`);
                        }

                        merge();
                    }
                }
            };

            fileReader.readAsText(file);
        }
    }

    const mergeEmails = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;

        if (files) {
            const file = files[0]
            fileReader.onload = function (event) {
                const csvOutput = event.target?.result;
                const entries = csvOutput?.toString().split('\n');

                if (entries) {
                    for(let i = 1; i < entries?.length; i++) {
                        const merge = async () => {
                            const entry = entries[i].split(',');
                            const clientId = entry[1];
                            let email = entry[3];
                            if (email) {
                                const originals = await DataStore.query(Client, (c) => c.clientId.eq(clientId));
                                const original = originals[0];

                                if (email === "NULL" || email === 'Email' || email === 'Main') {
                                    email = "";
                                }

                                if (original) {
                                    await DataStore.save(
                                        Client.copyOf(original, updated => {
                                            updated.email = email
                                        })
                                    );
                                }
                            }
                            console.log(`Processing ${i} of ${clients.length}`);
                        }

                        merge();
                    }
                }
            };

            fileReader.readAsText(file);
        }
    }

    const nextPage = () => {
        setPage((currentPage) => currentPage++);
    }

    const prevPage = () => {
        setPage((currentPage) => currentPage--);
    }

    return (
        <Box height='100%'>
            <Box marginLeft='2rem' marginRight='2rem' marginTop='2rem' display='flex' flexDirection='row'>
                <Box paddingLeft='2rem'>
                    <Button variant="contained" component="label">
                        Bulk Upload Clients
                        <input hidden accept=".csv" type="file" onChange={bulkAddClients} />
                    </Button>
                    <Button variant="contained" component="label">
                        Merge Phone numbers to clients
                        <input hidden accept=".csv" type="file" onChange={mergePhoneNumbers} />
                    </Button>
                    <Button variant="contained" component="label">
                        Merge emails to clients
                        <input hidden accept=".csv" type="file" onChange={mergeEmails} />
                    </Button>
                </Box>
            </Box>
            <Box width='100%'>
                <TextField InputProps={{
                        endAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                    }}
                    onChange={onSearchChange}
                />
            </Box>
            <DataGrid columns={columns} rows={rows} />
        </Box>
    )
}

export default Clients;