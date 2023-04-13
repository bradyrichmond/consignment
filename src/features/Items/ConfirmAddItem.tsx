import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { AttributeTypeValue, Brand } from '../../models';

interface ConfirmAddItemProps {
    brand?: Brand
    categoryId: string
    price: string
    attributeValues: AttributeTypeValue[]
    confirm: () => void
}

const ConfirmAddItem = (props: ConfirmAddItemProps) => {
    const { brand, categoryId, price, attributeValues, confirm } = props;

    return (
        <Box>
            <Typography>{brand?.description}</Typography>
            {attributeValues.length > 0 &&
                attributeValues.map((av) => {
                    return (
                        <Typography>{av.attributeTypeValue}</Typography>
                    )
                })
            }
            <Typography>${price}</Typography>
            <Box marginTop='2rem'>
                <Button variant='outlined' onClick={confirm} sx={{color: 'white', border: '1px solid white', borderRadius: '.25rem', fontSize: '3rem' }}>Add Item</Button>
            </Box>
        </Box>
    )
}

export default ConfirmAddItem