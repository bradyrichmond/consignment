import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, LinearProgress, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ProcessCsvButton } from '../Clients';
import { AttributeType } from '../../models';
import { DataStore, Predicates } from 'aws-amplify';
import { format } from 'date-fns';
import ConfirmModal from '../../utils/ConfirmModal';
import AddAttributeType from './AddAttributeType';
import AddAttributeTypeValues from './AddAttributeTypeValues';
import ViewValues from './ViewValues';
import SearchBar from '../../components/SearchBar';

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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const fetchedAttributeTypes = await DataStore.query(AttributeType, Predicates.ALL, {
                page: 0,
                limit: 100
            });

            setAttributeTypes(filterInactiveAttributeTypes ? fetchedAttributeTypes.filter((b) => !b.inactive) : fetchedAttributeTypes);
            setInactiveAttributeTypes(fetchedAttributeTypes.filter((b) => b.inactive).map((b) => b.id));
            setLoading(false);
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
        {field: 'attributeTypeDescription', headerName: 'Name', width: 400},
        {field: 'lastUpdateTimestamp', headerName: 'Last Updated', width: 400},
        {field: 'toggleActive', headerName: 'Mark inactive?', width: 400, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <>
                    {inactiveAttributeTypes.includes(params.id.toString()) ?
                        <Button variant="contained" component="label" sx={{marginBottom: '2rem', marginTop: '2rem'}} onClick={() => startRevivingAttributeType(params.id.toString())}>
                            Mark active?
                        </Button>
                        :
                        <Button variant="contained" component="label" sx={{marginBottom: '2rem', marginTop: '2rem'}} onClick={() => startDeletingAttributeType(params.id.toString())}>
                            Mark inactive?
                        </Button>
                    }
                </>
            )
        }},
        {field: 'addValues', headerName: 'Add Type Value?', width: 400, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <>
                    <Button variant="contained" component="label" sx={{marginBottom: '2rem', marginTop: '2rem'}} onClick={() => startAddingAttributeTypeValue(params.id.toString())}>
                        Add Value
                    </Button>
                </>
            )
        }},
        {field: 'viewValues', headerName: 'View Values?', width: 400, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <>
                    <Button variant="contained" component="label" sx={{marginBottom: '2rem', marginTop: '2rem'}} onClick={() => toggleViewValues(params.id.toString())}>
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
        <Box height='100%' display='flex' flexDirection='column' padding='2rem' width='100%'>
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
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <ConfirmModal validationText={`Are you sure you want to mark ${activeAttributeType} inactive?`} cancelText='Cancel' confirmText='Confirm' confirm={deleteAttributeType} cancel={stopDeletingAttributeType}/>
            </Modal>
            <Modal
                open={isRevivingAttributeType}
                onClose={stopRevivingAttributeType}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <ConfirmModal validationText={`Are you sure you want to mark ${activeAttributeType} active?`} cancelText='Cancel' confirmText='Confirm' confirm={reviveAttributeType} cancel={stopRevivingAttributeType}/>
            </Modal>
            <Modal
                open={isViewingValues}
                onClose={toggleViewValues}
            >
                <ViewValues close={stopViewingValues} attributeTypeId={activeAttributeTypeId}/>
            </Modal>
            <Box paddingTop='2rem' paddingBottom='2rem' display='flex' flexDirection='row' width='100%' alignItems='center'>
                <Box flex='1'>
                    <SearchBar onSearchChange={onSearchChange} />
                </Box>
                <Box paddingLeft='2rem' display='flex' justifyContent='center' alignItems='center' width='30%'>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>
                        <ProcessCsvButton label='Bulk Upload' action={bulkAddAttributeTypes} />
                    </Box>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>
                        <Button variant="contained" component="label" onClick={startAddingAttributeType} sx={{margin: 0}}>
                            Add an Attribute Type
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box paddingBottom='2rem'>
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }}} onChange={filterInactive} checked={filterInactiveAttributeTypes} value={filterInactiveAttributeTypes}/>} label="Active attribute types only" />
            </Box>
            <Box flex='1'>
                {loading ?
                    <LinearProgress color='primary' />
                    :
                    <DataGrid columns={columns} rows={rows} getRowHeight={() => 'auto'} sx={{fontSize: '2rem'}} />
                }
            </Box>
        </Box>
    )
}

export default AttributeTypes;