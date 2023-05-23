import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ProcessCsvButton } from '../Clients';
import { Brand } from '../../models';
import { DataStore, Predicates } from 'aws-amplify';
import { format } from 'date-fns';
import AddBrand from './AddBrand';
import ConfirmModal from '../../utils/ConfirmModal';
import SearchBar from '../../components/SearchBar';

const Brands = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddingBrand, setIsAddingBrand] = useState(false);
    const [isDeletingBrand, setIsDeletingBrand] = useState(false);
    const [isRevivingBrand, setIsRevivingBrand] = useState(false);
    const [activeBrandId, setActiveBrandId] = useState('');
    const [activeBrand, setActiveBrand] = useState('');
    const [filterInactiveBrands, setFilterInactiveBrands] = useState(true);
    const [inactiveBrands, setInactiveBrands] = useState<string[]>([])

    useEffect(() => {
        const getData = async () => {
            const fetchedBrands = await DataStore.query(Brand, Predicates.ALL, {
                page: 0,
                limit: 100
            });

            setBrands(filterInactiveBrands ? fetchedBrands.filter((b) => !b.inactive) : fetchedBrands);
            setInactiveBrands(fetchedBrands.filter((b) => b.inactive).map((b) => b.id))
        }

        getData();
    }, [])

    useEffect(() => {
        const getData = setTimeout(searchChange, 250);
        
        return () => clearTimeout(getData);
    }, [searchTerm, isAddingBrand, activeBrandId, filterInactiveBrands, isDeletingBrand, isRevivingBrand])

    const onSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        const changeSearchTerm = e.target.value;
        setSearchTerm(changeSearchTerm);
    }

    const searchChange = async () => {
        const fetchedBrands = await DataStore.query(Brand, (b) => b.description.contains(searchTerm));

        setBrands(filterInactiveBrands ? fetchedBrands.filter((b) => !b.inactive) : fetchedBrands);
    }

    const columns: GridColDef[] = [
        {field: 'description', headerName: 'Brand Name', flex: 1},
        {field: 'lastUpdateTimestamp', headerName: 'Last Updated', flex: 1},
        {field: '', headerName: 'Mark inactive?', flex: 1, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <>
                    {inactiveBrands.includes(params.id.toString()) ?
                        <Button variant="contained" component="label" sx={{marginTop: '2rem', marginBottom: '2rem'}} onClick={() => startRevivingBrand(params.id.toString())}>
                            Mark active?
                        </Button>
                        :
                        <Button variant="contained" component="label" sx={{marginTop: '2rem', marginBottom: '2rem'}} onClick={() => startDeletingBrand(params.id.toString())}>
                            Mark inactive?
                        </Button>
                    }
                </>
            )
        }},
    ];

    const rows = brands ?? [];

    const fileReader = new FileReader();

    const bulkAddBrands = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;

        if (files) {
            const file = files[0]
            fileReader.onload = function (event) {
                const csvOutput = event.target?.result;
                const brands = csvOutput?.toString().split('\n');

                if (brands) {
                    for(let i = 1; i < brands?.length; i++) {
                        const brand = brands[i];
                        const add = async () => {
                            const brandId = brand[0];
                            const description = brand[1];
                            const lastUpdateTimestamp = format(Date.parse(brand[2]), "yyyy-MM-dd");
                            await DataStore.save(new Brand({ brandId, description, lastUpdateTimestamp }));
                        }

                        add();
                    }
                }
            }

            fileReader.readAsText(file);
        }
    }

    const startAddingBrand = () => {
        setIsAddingBrand(true);
    }

    const stopAddingBrand = () => {
        setIsAddingBrand(false);
    }

    const startDeletingBrand = async (brandId: string) => {
        const selectedBrand = await DataStore.query(Brand, brandId);
        setActiveBrand(selectedBrand?.description ?? 'this brand');
        setActiveBrandId(brandId)
        setIsDeletingBrand(true);
    }

    const stopDeletingBrand = () => {
        setIsDeletingBrand(false);
    }

    const deleteBrand = async () => {
        const original = await DataStore.query(Brand, activeBrandId);
        if (original) {
            await DataStore.save(Brand.copyOf(original, (updated) => {
                updated.inactive = true
            }));
        }
        setActiveBrandId('');
        stopDeletingBrand();
    }

    const startRevivingBrand = async (brandId: string) => {
        const selectedBrand = await DataStore.query(Brand, brandId);
        setActiveBrand(selectedBrand?.description ?? 'this brand');
        setActiveBrandId(brandId)
        setIsRevivingBrand(true);
    }

    const stopRevivingBrand = () => {
        setIsRevivingBrand(false);
    }

    const reviveBrand = async () => {
        const original = await DataStore.query(Brand, activeBrandId);
        if (original) {
            await DataStore.save(Brand.copyOf(original, (updated) => {
                updated.inactive = false
            }));
        }
        setActiveBrandId('');
        stopRevivingBrand();
    }

    const filterInactive = () => {
        setFilterInactiveBrands((cur) => !cur);
    }

    return (
        <Box height='100%' display='flex' flexDirection='column' padding='2rem'>
            <Modal
                open={isAddingBrand}
                onClose={stopAddingBrand}
            >
                <Box>
                    <AddBrand close={stopAddingBrand}/>
                </Box>
            </Modal>
            <Modal
                open={isDeletingBrand}
                onClose={stopDeletingBrand}
            >
                <Box>
                    <ConfirmModal close={stopDeletingBrand} validationText={`Are you sure you want to mark ${activeBrand} inactive?`} cancelText='Cancel' confirmText='Confirm' confirm={deleteBrand} cancel={stopDeletingBrand}/>
                </Box>
            </Modal>
            <Modal
                open={isRevivingBrand}
                onClose={stopRevivingBrand}
            >
                <Box>
                    <ConfirmModal close={stopRevivingBrand} validationText={`Are you sure you want to mark ${activeBrand} active?`} cancelText='Cancel' confirmText='Confirm' confirm={reviveBrand} cancel={stopRevivingBrand}/>
                </Box>
            </Modal>
            <Box paddingTop='2rem' paddingBottom='2rem' display='flex' flexDirection='row' width='100%' alignItems='center'>
                <Box flex='1'>
                    <SearchBar onSearchChange={onSearchChange} />
                </Box>
                <Box paddingLeft='2rem' display='flex' justifyContent='center' alignItems='center' width='30%'>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>
                        <ProcessCsvButton label='Bulk Upload Brands' action={bulkAddBrands} />
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Button variant="contained" component="label" onClick={startAddingBrand} sx={{margin: 0}}>
                            Add a Brand
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box paddingBottom='2rem'>
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 50}}} onChange={filterInactive} checked={filterInactiveBrands} value={filterInactiveBrands}/>} label="Active brands only" />
            </Box>
            <Box flex='1'>
                <DataGrid columns={columns} rows={rows} getRowHeight={() => 'auto'} sx={{fontSize: '2rem'}} />
            </Box>
        </Box>
    )
}

export default Brands;