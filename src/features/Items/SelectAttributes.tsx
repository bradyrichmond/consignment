import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { AttributeTypeValue } from '../../models';
import { DataStore } from 'aws-amplify';
import { Button } from '@mui/material';

interface SelectAttributesProps {
    atvId: string,
    onButtonClick: (id: string) => void
}

const SelectAttributes = (props: SelectAttributesProps) => {
    const { atvId, onButtonClick } = props;
    const [attributeTypeValues, setAttributeTypeValues] = useState<AttributeTypeValue[]>([]);

    useEffect(() => {
        const getAttributeTypeValue = async () => {
            const fetchedAttributeTypeValues = await DataStore.query(AttributeTypeValue, (a) => a.attributeTypeValueAttributeTypeId.eq(atvId));
            setAttributeTypeValues(fetchedAttributeTypeValues);
        }

        getAttributeTypeValue();
    }, [atvId])

    return (
        <Box paddingTop='2rem'>
            {attributeTypeValues.length > 0 &&
                attributeTypeValues.map((atv) => <Button variant='outlined' onClick={() => { onButtonClick(atv.id) }} sx={{ color: 'white', border: '1px solid white', borderRadius: '.25rem', margin: '1rem', fontSize:'3rem' }}>{atv.attributeTypeValue}</Button>)
            }
        </Box>
    )
}

export default SelectAttributes;