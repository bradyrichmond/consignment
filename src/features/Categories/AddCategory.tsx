import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, FormControl, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { Category } from '../../models';
import { format } from 'date-fns';
import { CognitoContext } from '../../context';

interface AddCategoryProps {
    close: () => void
}

const AddCategory = (props: AddCategoryProps) => {
    const { close } = props;
    const { handleSubmit, register } = useForm();
    const [parentCategories, setParentCategories] = useState<Category[]>([]);
    const [selectedValue, setSelectedValue] = useState('None');
    const [loading, setLoading] = useState(true);
    const { organization, organizationId } = useContext(CognitoContext);

    useEffect(() => {
        const getData = async () => {
            const fetchedCategories = await DataStore.query(Category);
            setParentCategories(fetchedCategories.filter(c => c.inactive === false));
            setLoading(false);
        }

        getData();
    }, [])

    const handleAddCategory = async (data: any) => {
        const { categoryName, parent } = data;
        let categoryLevel = 1;

        if (parent && parent !== 'None') {
            const parentCategory = await DataStore.query(Category, parent);
            categoryLevel = parentCategory?.categoryLevel ?? 1;
        }

        await DataStore.save(new Category({ categoryName, categoryLevel, parent, inactive: false, lastUpdateTimestamp: format(Date.now(), 'yyyy-MM-dd'), organization, categoryOrganizationId: organizationId }));
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    {loading ? 
                        <LinearProgress color='primary' />
                        :
                        <form onSubmit={handleSubmit(handleAddCategory)}>
                            <Box display='flex' flexDirection='column'>
                                <TextField label='Category Name' variant='standard' inputProps={{ 'data-testid': 'addCategoryName' }} {...register('categoryName', { required: true, minLength: 2 })} />
                                <Box marginTop='1rem'>
                                    <FormControl fullWidth>
                                        <InputLabel>Parent Category</InputLabel>
                                        <Select
                                            label="Parent"
                                            {...register('parent')}
                                            value={selectedValue}
                                            onChange={(e) => setSelectedValue(e.target.value)}
                                        >
                                            <MenuItem value='None'>None</MenuItem>
                                            {parentCategories && 
                                                parentCategories.map((cat) => <MenuItem value={cat.id} key={cat.id}>{cat.categoryName} - Level {cat.categoryLevel}</MenuItem>)
                                            }
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Button type='submit' variant='contained'>Add Category</Button>
                            </Box>
                        </form>
                    }
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddCategory;