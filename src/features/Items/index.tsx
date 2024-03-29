import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Box, Checkbox, FormControlLabel, LinearProgress } from '@mui/material';
import { ProcessCsvButton } from '../Clients';
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { DataStore, Predicates } from 'aws-amplify';
import { Brand, Category, Client, Item, Location } from '../../models';
import { CognitoContext, DrawerContext } from '../../context';
import SearchBar from '../../components/SearchBar';


const Items = () => {
    const { setDrawerItemId, setDrawerContent } = useContext(DrawerContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState<Item[]>([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [isFilteringMissingTags, setIsFilteringMissingTags] = useState(false);
    const [loading, setLoading] = useState(true);
    const { organization, organizationId } = useContext(CognitoContext);

    useEffect(() => {
        const getData = async () => {
            const fetchedItems = await DataStore.query(Item, Predicates.ALL, {
                page: 0,
                limit: 100
            });

            setItems(fetchedItems);
            setDataLoaded(true);
            setLoading(false);
        }

        getData();
    }, [])

    useEffect(() => {
        if (dataLoaded) {
            const getData = setTimeout(searchChange, 250);
            
            return () => clearTimeout(getData)
        }
    }, [searchTerm, isFilteringMissingTags])

    const onSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        const changeSearchTerm = e.target.value;
        setSearchTerm(changeSearchTerm);
    }

    const searchChange = async () => {
        const filteredItems = await DataStore.query(Item, (i) => i.or(i => [
            i.description.contains(searchTerm.toUpperCase()),
            i.description.contains(searchTerm.toLowerCase()),
        ]));

        setItems(isFilteringMissingTags ? filteredItems.filter((i) => !i.clientItemsId) : filteredItems);
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
                                    entryTimestamp,
                                    organization,
                                    itemOrganizationId: organizationId
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

    const filterMissingTagItems = () => {
        setIsFilteringMissingTags((cur) => !cur);
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
        {field: 'itemName', headerName: 'Item Name', flex: 1},
        {field: 'price', headerName: 'Price', flex: 1},
        {field: 'upcCode', headerName: 'UPC', flex: 1},
        {field: 'clientItemsId', headerName: 'Client id', flex: 1},
        {field: 'itemId', headerName: 'Item Id', flex: 1},
    ];

    const rows = items ?? [];

    return (
        <Box height='100%' display='flex' flexDirection='column' padding='2rem'>
            <Box paddingTop='2rem' paddingBottom='2rem' display='flex' flexDirection='row' width='100%' alignItems='center'>
                <Box flex='1'>
                    <SearchBar onSearchChange={onSearchChange} />
                </Box>
                <Box paddingLeft='2rem' display='flex' justifyContent='center' alignItems='center' width='30%'>
                    <ProcessCsvButton label='Bulk Upload Items' action={bulkAddItems} />
                </Box>
            </Box>
            <Box paddingBottom='2rem'>
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }}} onChange={filterMissingTagItems} checked={isFilteringMissingTags} value={isFilteringMissingTags}/>} label="Missing tags only" />
            </Box>
            <Box flex='1'>
                {loading ? 
                    <LinearProgress color='primary' />
                    :
                    <DataGrid columns={columns} rows={rows} sx={{fontSize: '2rem'}} getRowHeight={() => 'auto'} onRowClick={handleRowClick}/>
                }
            </Box>
        </Box>
    )
}

export default Items;