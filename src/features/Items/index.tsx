import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ProcessCsvButton } from '../Clients';
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { DataStore } from 'aws-amplify';
import { Item } from '../../models';
import { DrawerContext } from '../../App';


const Items = () => {
    const { setDrawerItemId, setDrawerContent } = useContext(DrawerContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const getData = setTimeout(searchChange, 250);
        
        return () => clearTimeout(getData)
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
                            const userId = item[1];
                            const itemAcquireTypeId = item[2];
                            const categoryId = item[3];
                            const locationId = item[4];
                            const sectionId = item[5];
                            const statusId = item[6];
                            const taxTypeId = item[7];
                            const number = item[8];
                            const itemName = item[9];
                            const description = item[10];
                            const receiveTimestamp = item[11];
                            const donateIndicator = !!item[12];
                            const price = item[13];
                            const cost = item[14];
                            const qty = parseInt(item[15]);
                            const qtyTagPrint = parseInt(item[16]);
                            const tagPrintedTimestamp = item[17];
                            const commission = item[18];
                            const itemAcquisitionTypeId = item[19];
                            const brandId = item[20];
                            const saleDetailId = item[21];
                            const titleChanged = !!item[22];
                            const modifiedTimestamp = item[23];
                            const modifiedBy = item[24];
                            const upcCode = item[25];
                            const createTimestamp = item[26];
                            const entryTimestamp = item[27];
                            
                            await DataStore.save(new Item({ 
                                itemId, 
                                userId, 
                                itemAcquireTypeId, 
                                categoryId, 
                                locationId, 
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
                                brandId, 
                                saleDetailId, 
                                titleChanged, 
                                modifiedTimestamp, 
                                modifiedBy, 
                                upcCode, 
                                createTimestamp, 
                                entryTimestamp 
                            }));
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

    const mergeClientItemsToItems = (e:ChangeEvent<HTMLInputElement>) => {
        
    }

    const columns: GridColDef[] = [
        {field: 'itemId', headerName: 'Item Id', width: 200, editable: true},
        {field: 'description', headerName: 'Description', width: 400, editable: true},
        {field: 'price', headerName: 'Price', width: 200, editable: true},
        {field: 'upcCode', headerName: 'UPC', width: 200, editable: true},
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
                <ProcessCsvButton label='Merge Items with Client Items' action={mergeClientItemsToItems} />
            </Box>
            <Box flex='1'>
                <DataGrid columns={columns} rows={rows} style={{color: 'white'}} onRowClick={handleRowClick}/>
            </Box>
        </Box>
    )
}

export default Items;