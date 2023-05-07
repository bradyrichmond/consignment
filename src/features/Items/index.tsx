import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ProcessCsvButton } from '../Clients';
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { DataStore, Predicates } from 'aws-amplify';
import { Brand, Category, Client, Item, Location } from '../../models';
import { DrawerContext } from '../../App';


const Items = () => {
    const { setDrawerItemId, setDrawerContent } = useContext(DrawerContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState<Item[]>([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const fetchedItems = await DataStore.query(Item, Predicates.ALL, {
                page: 0,
                limit: 100
            });

            setItems(fetchedItems);
            setDataLoaded(true);
        }

        getData();
    }, [])

    useEffect(() => {
        if (dataLoaded) {
            const getData = setTimeout(searchChange, 250);
            
            return () => clearTimeout(getData)
        }
    }, [searchTerm])

    const onSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        const changeSearchTerm = e.target.value;
        setSearchTerm(changeSearchTerm);
    }

    const searchChange = async () => {
        const filteredItems = await DataStore.query(Item, (i) => i.or(i => [
            i.description.contains(searchTerm.toUpperCase()),
            i.description.contains(searchTerm.toLowerCase()),
        ]));

        setItems(filteredItems);
    }

    const fileReader = new FileReader();

    const bulkAddItems = (e:ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;

        if (files) {
            console.log('found files')
            const file = files[0];
            console.log(`loading file ${file.name}`)
            fileReader.onload = function (event) {
                console.log('file loaded');
                const csvOutput = event.target?.result;
                const items = csvOutput?.toString().split('\n');

                if (items) {
                    for(let i = 1; i < items?.length; i++) {
                        const add = async () => {                            
                            console.log(`Processing ${i} of ${items.length}`);
                            const item = items[i].split(',');
            
                            const itemId = item[0];
                            const clientId = item[1]
                            const userId = item[2];
                            const itemAcquireTypeId = item[3];
                            const categoryId = item[4];
                            const locationId = item[5];
                            const sectionId = item[6];
                            const statusId = item[7];
                            const taxTypeId = item[8];
                            const number = item[9];
                            const itemName = item[10];
                            const description = item[11];
                            const receiveTimestamp = item[12];
                            const donateIndicator = !!item[13];
                            const price = item[14];
                            const cost = item[15];
                            const qty = parseInt(item[16]);
                            const qtyTagPrint = parseInt(item[17]);
                            const tagPrintedTimestamp = item[18];
                            const commission = item[19];
                            const itemAcquisitionTypeId = item[20];
                            const brandId = item[21];
                            const saleDetailId = item[22];
                            const titleChanged = !!item[23];
                            const modifiedTimestamp = item[24];
                            const modifiedBy = item[25];
                            const upcCode = item[26];
                            const createTimestamp = item[27];
                            const entryTimestamp = item[28];

                            const fetchedCategory = await DataStore.query(Category, (c) => c.categoryId.eq(categoryId));
                            const category = fetchedCategory[0];

                            const fetchedBrands = await DataStore.query(Brand, (b) => b.brandId.eq(brandId));
                            const brand = fetchedBrands[0];

                            const fetchedClient = await DataStore.query(Client, c => c.clientId.eq(clientId));
                            const clientItemsId = fetchedClient[0].id;

                            const fetchedLocations = await DataStore.query(Location, (l) => l.locationId.eq(locationId));
                            const location = fetchedLocations[0];


                            if (clientItemsId) {
                            
                                await DataStore.save(new Item({ 
                                    itemId,
                                    clientItemsId,
                                    userId,
                                    itemAcquireTypeId, 
                                    category, 
                                    location, 
                                    sectionId, 
                                    statusId, 
                                    taxTypeId, 
                                    number, 
                                    itemName, 
                                    description, 
                                    receiveTimestamp, 
                                    donateIndicator, 
                                    price, 
                                    cost, 
                                    qty, 
                                    qtyTagPrint, 
                                    tagPrintedTimestamp, 
                                    commission, 
                                    itemAcquisitionTypeId, 
                                    brand, 
                                    saleDetailId, 
                                    titleChanged, 
                                    modifiedBy, 
                                    upcCode, 
                                    createTimestamp, 
                                    entryTimestamp 
                                }));
                            }
                        }

                        add();
                    }
                }
            };

            fileReader.readAsText(file);
        }    
    }

    const handleRowClick: GridEventListener<'rowClick'> = (
        params,
        event,
        details,
      ) => {
        setDrawerItemId(params.id.toString());
        setDrawerContent('itemOverview');
    };

    const columns: GridColDef[] = [
        {field: 'itemName', headerName: 'Item Name', width: 400, editable: true},
        {field: 'price', headerName: 'Price', width: 200, editable: true},
        {field: 'upcCode', headerName: 'UPC', width: 200, editable: true},
        {field: 'clientItemsId', headerName: 'client id', width: 400, editable: true},
        {field: 'itemId', headerName: 'Item Id', width: 400, editable: true},
    ];

    const rows = items ?? [];

    return (
        <Box height='100%' display='flex' flexDirection='column' padding='2rem'>
            <Box paddingTop='2rem' paddingBottom='2rem' display='flex' flexDirection='row' width='100%' alignItems='center'>
                <TextField InputProps={{
                        endAdornment: <InputAdornment position="start"><SearchIcon style={{color: 'white'}}/></InputAdornment>,
                    }}
                    fullWidth={true}
                    onChange={onSearchChange}
                    style={{border: '1px solid white', borderRadius: '.25rem'}}
                />
                <ProcessCsvButton label='Bulk Upload Items' action={bulkAddItems} />
            </Box>
            <Box flex='1'>
                <DataGrid columns={columns} rows={rows} style={{color: 'white'}} onRowClick={handleRowClick}/>
            </Box>
        </Box>
    )
}

export default Items;