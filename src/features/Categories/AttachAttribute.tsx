import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, FormControl, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { AttributeType, Category, CategoryAttribute } from '../../models';

interface AttachAttributeProps {
    close: () => void
    categoryId: string
}

const AttachAttribute = (props: AttachAttributeProps) => {
    const { close, categoryId } = props;
    const { handleSubmit, register } = useForm();
    const [attributeTypes, setAttributeTypes] = useState<AttributeType[]>([]);
    const [selectedAttribute, setSelectedAttribute] = useState('');
    const [category, setCategory] = useState<Category>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const fetchedCategory = await DataStore.query(Category, categoryId);
            setCategory(fetchedCategory)
            
            const fetchedAttributeTypes = await DataStore.query(AttributeType);
            setAttributeTypes(fetchedAttributeTypes);
            setLoading(false);
        }

        getData();
    }, [])

    const handleAttachAttribute = async (data: any) => {
        const attributeType = await DataStore.query(AttributeType, selectedAttribute);

        if (attributeType && category) {
            await DataStore.save(new CategoryAttribute({
                category,
                attributeType
            }))
        }
        
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    {loading ?
                        <LinearProgress color='primary' />
                        :
                        <>
                            <Typography id='modal-modal-title' variant='h6' component='h2' marginBottom='2rem'>
                                {`Attach attribute type to ${category?.categoryName}`}
                            </Typography>
                            <form onSubmit={handleSubmit(handleAttachAttribute)}>
                                <Box display='flex' flexDirection='column'>
                                    <Box marginTop='1rem'>
                                        <FormControl fullWidth>
                                            <InputLabel>Attribute Type</InputLabel>
                                            <Select
                                                label="attributeType"
                                                {...register('attributeType')}
                                                value={selectedAttribute}
                                                onChange={(e) => setSelectedAttribute(e.target.value)}
                                            >
                                                <MenuItem value='None'>None</MenuItem>
                                                {attributeTypes && 
                                                    attributeTypes.map((at) => <MenuItem value={at.id} key={at.id}>{at.attributeTypeDescription}</MenuItem>)
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Button type='submit' variant='contained'>Attach Attribute</Button>
                                </Box>
                            </form>
                        </>
                    }
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AttachAttribute;