import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, InputAdornment, Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ProcessCsvButton } from '../Clients';
import SearchIcon from '@mui/icons-material/Search';
import { AttributeType } from '../../models';
import { DataStore, Predicates } from 'aws-amplify';
import { format } from 'date-fns';
import ConfirmModal from '../../utils/ConfirmModal';
import AddAttributeType from './AddAttributeType';
import AddAttributeTypeValues from './AddAttributeTypeValues';
import ViewValues from './ViewValues';

const AttributeTypes = () => {
    const [attributeTypes, setAttributeTypes] = useState<AttributeType[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddingAttributeType, setIsAddingAttributeType] = useState(false);
    const [isAddingAttributeTypeValue, setIsAddingAttributeTypeValue] = useState(false);
    const [isDeletingAttributeType, setIsDeletingAttributeType] = useState(false);
    const [isRevivingAttributeType, setIsRevivingAttributeType] = useState(false);
    const [activeAttributeTypeId, setActiveAttributeTypeId] = useState('');
    const [activeAttributeType, setActiveAttributeType] = useState('');
    const [filterInactiveAttributeTypes, setFilterInactiveAttributeTypes] = useState(true);
    const [inactiveAttributeTypes, setInactiveAttributeTypes] = useState<string[]>([]);
    const [isViewingValues, setIsViewingValues] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const fetchedAttributeTypes = await DataStore.query(AttributeType, Predicates.ALL, {
                page: 0,
                limit: 100
            });

            setAttributeTypes(filterInactiveAttributeTypes ? fetchedAttributeTypes.filter((b) => !b.inactive) : fetchedAttributeTypes);
            setInactiveAttributeTypes(fetchedAttributeTypes.filter((b) => b.inactive).map((b) => b.id))
        }

        getData();
    }, [])

    useEffect(() => {
        const getData = setTimeout(searchChange, 250);
        
        return () => clearTimeout(getData);
    }, [searchTerm, isAddingAttributeType, activeAttributeTypeId, filterInactiveAttributeTypes, isDeletingAttributeType, isRevivingAttributeType])

    const onSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        const changeSearchTerm = e.target.value;
        setSearchTerm(changeSearchTerm);
    }

    const searchChange = async () => {
        const fetchedAttributeTypes = await DataStore.query(AttributeType, (b) => b.attributeTypeDescription.contains(searchTerm));

        setAttributeTypes(filterInactiveAttributeTypes ? fetchedAttributeTypes.filter((b) => !b.inactive) : fetchedAttributeTypes);
    }

    const columns: GridColDef[] = [
        {field: 'attributeTypeDescription', headerName: 'Attribute Type Name', width: 200},
        {field: 'lastUpdateTimestamp', headerName: 'Last Updated', width: 200},
        {field: 'toggleActive', headerName: 'Mark inactive?', width: 300, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <>
                    {inactiveAttributeTypes.includes(params.id.toString()) ?
                        <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white'}} onClick={() => startRevivingAttributeType(params.id.toString())}>
                            Mark active?
                        </Button>
                        :
                        <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white'}} onClick={() => startDeletingAttributeType(params.id.toString())}>
                            Mark inactive?
                        </Button>
                    }
                </>
            )
        }},
        {field: 'addValues', headerName: 'Add Type Value?', width: 300, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <>
                    <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white'}} onClick={() => startAddingAttributeTypeValue(params.id.toString())}>
                        Add Value
                    </Button>
                </>
            )
        }},
        {field: 'viewValues', headerName: 'View Values?', width: 300, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <>
                    <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white'}} onClick={() => toggleViewValues(params.id.toString())}>
                        View Values
                    </Button>
                </>
            )
        }},
    ];

    const rows = attributeTypes ?? [];

    const fileReader = new FileReader();

    const bulkAddAttributeTypes = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;

        if (files) {
            const file = files[0];
            fileReader.onload = function (event) {
                const csvOutput = event.target?.result;
                const attributeTypes = csvOutput?.toString().split('\n');

                if (attributeTypes) {
                    for(let i = 1; i < attributeTypes?.length; i++) {
                        const attributeType = attributeTypes[i];
                        const add = async () => {
                            const attributeTypeId = attributeType[0];
                            const attributeTypeDescription = attributeType[1];
                            const lastUpdateTimestamp = format(Date.parse(attributeType[2]), "yyyy-MM-dd");
                            await DataStore.save(new AttributeType({ attributeTypeId, attributeTypeDescription, lastUpdateTimestamp }));
                        }

                        add();
                    }
                }
            }

            fileReader.readAsText(file);
        }
    }

    const startAddingAttributeType = () => {
        setIsAddingAttributeType(true);
    }

    const stopAddingAttributeType = () => {
        setIsAddingAttributeType(false);
    }

    const startAddingAttributeTypeValue = async (attributeTypeId: string) => {
        setActiveAttributeTypeId(attributeTypeId)
        setIsAddingAttributeTypeValue(true);
    }

    const stopAddingAttributeTypeValue = () => {
        setIsAddingAttributeTypeValue(false);
    }

    const startDeletingAttributeType = async (attributeTypeId: string) => {
        const selectedAttributeType = await DataStore.query(AttributeType, attributeTypeId);
        setActiveAttributeType(selectedAttributeType?.attributeTypeDescription ?? 'this attribute type');
        setActiveAttributeTypeId(attributeTypeId)
        setIsDeletingAttributeType(true);
    }

    const stopDeletingAttributeType = () => {
        setIsDeletingAttributeType(false);
    }

    const toggleViewValues = (id: string) => {
        setActiveAttributeTypeId(id);
        setIsViewingValues((val) => !val);
    }

    const stopViewingValues = () => {
        setActiveAttributeTypeId('');
        setIsViewingValues(false);
    }

    const deleteAttributeType = async () => {
        const original = await DataStore.query(AttributeType, activeAttributeTypeId);
        if (original) {
            await DataStore.save(AttributeType.copyOf(original, (updated) => {
                updated.inactive = true
            }));
        }
        setActiveAttributeTypeId('');
        stopDeletingAttributeType();
    }

    const startRevivingAttributeType = async (attributeTypeId: string) => {
        const selectedAttributeType = await DataStore.query(AttributeType, attributeTypeId);
        setActiveAttributeType(selectedAttributeType?.attributeTypeDescription ?? 'this attribute type');
        setActiveAttributeTypeId(attributeTypeId)
        setIsRevivingAttributeType(true);
    }

    const stopRevivingAttributeType = () => {
        setIsRevivingAttributeType(false);
    }

    const reviveAttributeType = async () => {
        const original = await DataStore.query(AttributeType, activeAttributeTypeId);
        if (original) {
            await DataStore.save(AttributeType.copyOf(original, (updated) => {
                updated.inactive = false
            }));
        }
        setActiveAttributeTypeId('');
        stopRevivingAttributeType();
    }

    const filterInactive = () => {
        setFilterInactiveAttributeTypes((cur) => !cur);
    }

    return (
        <Box height='100%' display='flex' flexDirection='column' padding='2rem'>
            <Modal
                open={isAddingAttributeType}
                onClose={stopAddingAttributeType}
            >
                <AddAttributeType close={stopAddingAttributeType} />
            </Modal>
            <Modal
                open={isAddingAttributeTypeValue}
                onClose={startAddingAttributeTypeValue}
            >
                <AddAttributeTypeValues close={stopAddingAttributeTypeValue} attributeType={activeAttributeTypeId}/>
            </Modal>
            <Modal
                open={isDeletingAttributeType}
                onClose={stopDeletingAttributeType}
            >
                <ConfirmModal close={stopDeletingAttributeType} validationText={`Are you sure you want to mark ${activeAttributeType} inactive?`} cancelText='Cancel' confirmText='Confirm' confirm={deleteAttributeType} cancel={stopDeletingAttributeType}/>
            </Modal>
            <Modal
                open={isRevivingAttributeType}
                onClose={stopRevivingAttributeType}
            >
                <ConfirmModal close={stopRevivingAttributeType} validationText={`Are you sure you want to mark ${activeAttributeType} active?`} cancelText='Cancel' confirmText='Confirm' confirm={reviveAttributeType} cancel={stopRevivingAttributeType}/>
            </Modal>
            <Modal
                open={isViewingValues}
                onClose={toggleViewValues}
            >
                <ViewValues close={stopViewingValues} attributeTypeId={activeAttributeTypeId}/>
            </Modal>
            <Box paddingTop='2rem' paddingBottom='2rem' display='flex' flexDirection='row' width='100%' alignItems='center'>
                <TextField InputProps={{
                        endAdornment: <InputAdornment position="start"><SearchIcon style={{color: 'white'}}/></InputAdornment>,
                    }}
                    fullWidth={true}
                    onChange={onSearchChange}
                    style={{border: '1px solid white', borderRadius: '.25rem'}}
                />
                <ProcessCsvButton label='Bulk Upload Items' action={bulkAddAttributeTypes} />
                <Box paddingLeft='2rem'>
                    <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white'}} onClick={startAddingAttributeType}>
                        Add Attribute Type
                    </Button>
                </Box>
            </Box>
            <Box paddingBottom='2rem'>
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 50, border: '1px solid white', borderRadius: '.25rem' }, '&.Mui-checked': { color: 'white'}}} onChange={filterInactive} checked={filterInactiveAttributeTypes} value={filterInactiveAttributeTypes}/>} label="Active attribute types only" />
            </Box>
            <Box flex='1'>
                <DataGrid columns={columns} rows={rows} style={{color: 'white'}} />
            </Box>
        </Box>
    )
}

export default AttributeTypes;