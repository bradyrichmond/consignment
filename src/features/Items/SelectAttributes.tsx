import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { AttributeTypeValue } from '../../models';
import { DataStore } from 'aws-amplify';
import { Button, LinearProgress } from '@mui/material';

interface SelectAttributesProps {
    atvId: string,
    onButtonClick: (id: string) => void
}

const SelectAttributes = (props: SelectAttributesProps) => {
    const { atvId, onButtonClick } = props;
    const [attributeTypeValues, setAttributeTypeValues] = useState<AttributeTypeValue[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAttributeTypeValue = async () => {
            const fetchedAttributeTypeValues = await DataStore.query(AttributeTypeValue, (a) => a.attributeTypeValueAttributeTypeId.eq(atvId));
            setAttributeTypeValues(fetchedAttributeTypeValues);
            setLoading(false);
        }

        getAttributeTypeValue();
    }, [atvId])

    return (
        <Box paddingTop='2rem'>
            {loading && <LinearProgress color='primary' />}
            {attributeTypeValues.length > 0 &&
                attributeTypeValues.map((atv) => <Button variant='contained' onClick={() => { onButtonClick(atv.id) }}>{atv.attributeTypeValue}</Button>)
            }
        </Box>
    )
}

export default SelectAttributes;