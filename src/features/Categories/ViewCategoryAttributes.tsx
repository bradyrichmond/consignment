import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, Typography } from '@mui/material';
import { AttributeType, AttributeTypeValue, Category } from '../../models';
import { DataStore } from 'aws-amplify';

interface ViewCategoryAttributesProps {
    close: () => void
    categoryId: string
}

const ViewCategoryAttributes = (props: ViewCategoryAttributesProps) => {
    const { close, categoryId } = props;
    const [categoryAttributeTypes, setCategoryAttributeTypes] = useState<AttributeType[]>([]);
    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        const getData = async () => {
            const fetchedCategoryAttributeTypes = await DataStore.query(AttributeType, (at) => at.categoryAttributeTypesId.contains(categoryId));
            setCategoryAttributeTypes(fetchedCategoryAttributeTypes);
            const fetchedCategory = await DataStore.query(Category, categoryId);
            setCategory(fetchedCategory);
        }

        getData();
    }, [categoryId]);

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id='modal-modal-title' variant='h6' component='h2' marginBottom='2rem'>
                        {`Attribute types for ${category?.categoryName}`}
                    </Typography>
                    <Box marginBottom='2rem'>
                        {categoryAttributeTypes.length > 0 ?
                            categoryAttributeTypes.map((cat) => <Typography>{cat.attributeTypeDescription}</Typography>)
                            :
                            <Typography>This category has no attribute types assigned.</Typography>
                        }
                    </Box>
                    <Button variant='outlined' onClick={close}>Ok</Button>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default ViewCategoryAttributes;