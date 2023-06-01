import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, LinearProgress, Typography } from '@mui/material';
import { AttributeType, Category, CategoryAttribute } from '../../models';
import { DataStore } from 'aws-amplify';

interface ViewCategoryAttributesProps {
    close: () => void
    categoryId: string
}

const ViewCategoryAttributes = (props: ViewCategoryAttributesProps) => {
    const { close, categoryId } = props;
    const [categoryAttributeTypes, setCategoryAttributeTypes] = useState<AttributeType[]>([]);
    const [category, setCategory] = useState<Category>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const fetchedCategory = await DataStore.query(Category, categoryId);
            setCategory(fetchedCategory);
            const fetchedCategoryAttributes = await fetchedCategory?.attributeTypes.toArray();
            if (fetchedCategoryAttributes) {
                const fetchedAttributeTypes = await Promise.all(fetchedCategoryAttributes.map(async (cat) => await cat.attributeType));
                setCategoryAttributeTypes(fetchedAttributeTypes);
            }
            setLoading(false);
        }

        getData();
    }, [categoryId]);

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    {loading ? 
                        <LinearProgress color='primary' />
                        :
                        <>
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
                        </>
                    }
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default ViewCategoryAttributes;