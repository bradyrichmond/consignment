import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Category } from '../../models';
import { DataStore } from 'aws-amplify';
import { Button, CircularProgress, Typography } from '@mui/material';

interface SelectCategoryProps {
    onButtonClick: (category: string) => void,
    categoryParent?: string
}

const SelectCategory = (props: SelectCategoryProps) => {
    const { onButtonClick, categoryParent } = props;
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategories = async () => {
            const fetchedCategories = categoryParent ? await DataStore.query(Category, (c) => c.parent.eq(categoryParent)) : await DataStore.query(Category);
            setCategories(fetchedCategories);
            setLoading(false);
        }

        getCategories();
    }, [categoryParent])

    const handleButtonClick = (category: string) => {
        onButtonClick(category);
    }

    return (
        <Box>
            {loading && <CircularProgress color='primary' />}
            {categories && categories.length > 0 ?
                categories.map((category) =>
                    <Box margin='1rem'>
                        <Button variant='contained' key={category.id} onClick={() => handleButtonClick(category.id)}>{category.categoryName}</Button>
                    </Box>
                )
                :
                <Box margin='1rem'>
                    <Typography>
                        No Categories here
                    </Typography>
                </Box>
            }
        </Box>
    )
}

export default SelectCategory;