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
        <Box display='flex' flexDirection='row' paddingTop='2rem' justifyContent='center' alignItems='center' height='100%'>
            <Box marginRight='2rem'>
                <Typography variant='h2'>{brand?.description}</Typography>
            </Box>
            <Box marginRight='2rem'>
                {attributeValues.length > 0 &&
                    attributeValues.map((av) => {
                        return (
                            <Typography variant='h2' key={av.id}>{av.attributeTypeValue}</Typography>
                        )
                    })
                }
            </Box>
            <Box marginRight='2rem'>
                <Typography variant='h2'>${price}</Typography>
            </Box>
            <Box>
                <Button variant='contained' onClick={confirm}>Add Item</Button>
            </Box>
        </Box>
    )
}

export default ConfirmAddItem