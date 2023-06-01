import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, Typography } from '@mui/material';
import { AttributeType, AttributeTypeValue } from '../../models';
import { DataStore } from 'aws-amplify';

interface ViewValuesProps {
    close: () => void
    attributeTypeId: string
}

const ViewValues = (props: ViewValuesProps) => {
    const { close, attributeTypeId } = props;
    const [attributeType, setAttributeType] = useState('this attribute');
    const [attributeTypeValues, setAttributeTypeValues] = useState<AttributeTypeValue[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const fetchedAttributeType = await DataStore.query(AttributeType, attributeTypeId);
            const fetchedAttributeTypeValues = await DataStore.query(AttributeTypeValue, (atv) => atv.attributeTypeValueAttributeTypeId.eq(attributeTypeId));
            setAttributeType(fetchedAttributeType?.attributeTypeDescription ?? 'this attribute');
            setAttributeTypeValues(fetchedAttributeTypeValues);
            setLoading(false);
        }

        getData();
    }, [attributeTypeId]);

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id='modal-modal-title' variant='h6' component='h2' marginBottom='2rem'>
                        {`Attribute types for ${attributeType}`}
                    </Typography>
                    <Box marginBottom='2rem'>
                        {attributeTypeValues.length > 0 ?
                            attributeTypeValues.map((atv) => <Typography>{atv.attributeTypeValue}</Typography>)
                            :
                            <Typography>This attribute has no values assigned.</Typography>
                        }
                    </Box>
                    <Button variant='outlined' onClick={close}>Ok</Button>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default ViewValues;