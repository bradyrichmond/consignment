import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, InputAdornment, Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { DataStore, Predicates } from 'aws-amplify';
import { Category } from '../../models';
import { format } from 'date-fns';
import ConfirmModal from '../../utils/ConfirmModal';
import SearchIcon from '@mui/icons-material/Search';
import { ProcessCsvButton } from '../Clients';
import AddCategory from './AddCategory';
import ViewCategoryAttributes from './ViewCategoryAttributes';

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [filterInactiveCategories, setFilterInactiveCategories] = useState(true);
    const [inactiveCategories, setInactiveCategories] = useState<String[]>([]);
    const [isDeletingCategory, setIsDeletingCategory] = useState(false);
    const [isRevivingCategory, setIsRevivingCategory] = useState(false);
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [activeCategoryId, setActiveCategoryId] = useState('');
    const [activeCategory, setActiveCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isViewingCategoryAttributes, setIsViewingCategoryAttributes] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const fetchedCategories = await DataStore.query(Category, Predicates.ALL, {
                page: 0,
                limit: 100
            });

            setCategories(filterInactiveCategories ? fetchedCategories.filter((b) => !b.inactive) : fetchedCategories);
            setInactiveCategories(fetchedCategories.filter((b) => b.inactive).map((b) => b.id))
        }

        getData();
    }, [])

    useEffect(() => {
        const getData = setTimeout(searchChange, 250);
        
        return () => clearTimeout(getData);
    }, [searchTerm, isAddingCategory, activeCategoryId, filterInactiveCategories, isDeletingCategory, isRevivingCategory])

    const onSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        const changeSearchTerm = e.target.value;
        setSearchTerm(changeSearchTerm);
    }

    const searchChange = async () => {
        const fetchedCategories = await DataStore.query(Category, (c) => c.categoryName.contains(searchTerm));

        setCategories(filterInactiveCategories ? fetchedCategories.filter((b) => !b.inactive) : fetchedCategories);
    }


    const startDeletingCategory = async (categoryId: string) => {
        const selectedBrand = await DataStore.query(Category, categoryId);
        setActiveCategory(selectedBrand?.categoryName ?? 'this brand');
        setActiveCategoryId(categoryId);
        setIsDeletingCategory(true);
    }

    const stopDeletingCategory = () => {
        setIsDeletingCategory(false);
    }

    const deleteCategory = async () => {
        const original = await DataStore.query(Category, activeCategoryId);
        if (original) {
            await DataStore.save(Category.copyOf(original, updated => {
                updated.inactive = true;
            }));
        }
        setActiveCategoryId('');
        setIsDeletingCategory(false);
    }

    const startRevivingCategory = async (categoryId: string) => {
        const selectedBrand = await DataStore.query(Category, categoryId);
        setActiveCategory(selectedBrand?.categoryName ?? 'this brand');
        setActiveCategoryId(categoryId);
        setIsRevivingCategory(true);
    }

    const stopRevivingCategory = () => {
        setIsRevivingCategory(false);
    }

    const reviveCategory = async () => {
        const original = await DataStore.query(Category, activeCategoryId);
        if (original) {
            await DataStore.save(Category.copyOf(original, updated => {
                updated.inactive = false;
            }));
        }
        setActiveCategoryId('');
        setIsRevivingCategory(false);
    }

    const startAddingCategory = () => {
        setIsAddingCategory(true);
    }

    const stopAddingCategory = () => {
        setIsAddingCategory(false);
    }

    const startViewingCategoryAttributes = (categoryId: string) => {
        setActiveCategory(categoryId);
        setIsViewingCategoryAttributes(true);
    }

    const stopViewingCategoryAttributes = () => {
        setActiveCategory('');
        setIsViewingCategoryAttributes(false);
    }
    
    const columns: GridColDef[] = [
        {field: 'categoryName', headerName: 'Category Name', width: 200},
        {field: 'lastUpdateTimestamp', headerName: 'Last Updated', width: 200},
        {field: 'categoryLevel', headerName: 'Category Level', width: 200},
        {field: 'Active?', headerName: 'Mark inactive?', width: 300, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <>
                    {inactiveCategories.includes(params.id.toString()) ?
                        <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white'}} onClick={() => startRevivingCategory(params.id.toString())}>
                            Mark active?
                        </Button>
                        :
                        <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white'}} onClick={() => startDeletingCategory(params.id.toString())}>
                            Mark inactive?
                        </Button>
                    }
                </>
            )
        }},
        {field: 'View Attribute Types', headerName: 'View Attribute Types', width: 300, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white'}} onClick={() => startViewingCategoryAttributes(params.id.toString())}>
                    View Attribute Types
                </Button>
            )
        }},

    ];

    const rows = categories ?? [];

    const fileReader = new FileReader();

    const bulkAddCategories = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;

        if (files) {
            const file = files[0]
            fileReader.onload = function (event) {
                const csvOutput = event.target?.result;
                const categoriesToProcess = csvOutput?.toString().split('\n');

                if (categoriesToProcess) {
                    for(let i = 1; i < categoriesToProcess?.length; i++) {
                        const brand = categoriesToProcess[i];
                        const add = async () => {
                            const categoryId = brand[0];
                            const parent = brand[1];
                            const categoryName = brand[4]
                            const categoryLevel = parseInt(brand[5]);
                            const inactive = !!brand[7];
                            const lastUpdateTimestamp = format(Date.parse(brand[9]), "yyyy-MM-dd");

                            await DataStore.save(new Category({ categoryId, parent, categoryName, categoryLevel, inactive, lastUpdateTimestamp }));
                        }

                        add();
                    }
                }
            }

            fileReader.readAsText(file);
        }
    }

    const filterInactive = () => {
        setFilterInactiveCategories((cur) => !cur);
    }
    
    return (
        <Box height='100%' display='flex' flexDirection='column' padding='2rem'>
            <Modal
                open={isAddingCategory}
                onClose={stopAddingCategory}
            >
                <AddCategory close={stopAddingCategory} />
            </Modal>
            <Modal
                open={isViewingCategoryAttributes}
                onClose={stopViewingCategoryAttributes}
            >
                <ViewCategoryAttributes close={stopViewingCategoryAttributes} categoryId={activeCategory}/>
            </Modal>
            <Modal
                open={isDeletingCategory}
                onClose={stopDeletingCategory}
            >
                <ConfirmModal close={stopDeletingCategory} validationText={`Are you sure you want to mark ${activeCategory} inactive?`} cancelText='Cancel' confirmText='Confirm' confirm={deleteCategory} cancel={stopDeletingCategory} />
            </Modal>
            <Modal
                open={isRevivingCategory}
                onClose={stopRevivingCategory}
            >
                <ConfirmModal close={stopRevivingCategory} validationText={`Are you sure you want to mark ${activeCategory} active?`} cancelText='Cancel' confirmText='Confirm' confirm={reviveCategory} cancel={stopRevivingCategory} />
            </Modal>
            <Box paddingTop='2rem' paddingBottom='2rem' display='flex' flexDirection='row' width='100%' alignItems='center'>
                <TextField InputProps={{
                        endAdornment: <InputAdornment position="start"><SearchIcon style={{color: 'white'}}/></InputAdornment>,
                    }}
                    fullWidth={true}
                    onChange={onSearchChange}
                    style={{border: '1px solid white', borderRadius: '.25rem'}}
                />
                <ProcessCsvButton label='Bulk Upload Items' action={bulkAddCategories} />
                <Box paddingLeft='2rem'>
                    <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white'}} onClick={startAddingCategory}>
                        Add Category
                    </Button>
                </Box>
            </Box>
            <Box paddingBottom='2rem'>
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 50, border: '1px solid white', borderRadius: '.25rem' }, '&.Mui-checked': { color: 'white'}}} onChange={filterInactive} checked={filterInactiveCategories} value={filterInactiveCategories}/>} label="Active categories only" />
            </Box>
            <Box flex='1'>
                <DataGrid columns={columns} rows={rows} style={{color: 'white'}} />
            </Box>
        </Box>
    )
}

export default Categories;