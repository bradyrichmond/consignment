import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Category } from '../../models';
import { DataStore } from 'aws-amplify';
import { Button, Typography } from '@mui/material';

interface SelectCategoryProps {
    onButtonClick: (category: string) => void,
    categoryParent?: string
}

const SelectCategory = (props: SelectCategoryProps) => {
    const { onButtonClick, categoryParent } = props;
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        const getCategories = async () => {
            const fetchedCategories = categoryParent ? await DataStore.query(Category, (c) => c.parent.eq(categoryParent)) : await DataStore.query(Category);
            setCategories(fetchedCategories);
        }

        getCategories();
    }, [categoryParent])

    const handleButtonClick = (category: string) => {
        onButtonClick(category);
    }

    return (
        <Box>
            {categories && categories.length > 0 ?
                categories.map((category) => 
                    <Button key={category.id} onClick={() => handleButtonClick(category.id)} sx={{color: 'white', border: '1px solid white', borderRadius: '.25rem' }}>{category.categoryName}</Button>
                )
                :
                <Typography>
                    No Categories here
                </Typography>
            }
        </Box>
    )
}

export default SelectCategory;