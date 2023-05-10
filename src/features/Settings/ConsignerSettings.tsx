import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import ModalContainer from '../../utils/ModalContainer';
import { ConsignerSplit } from '../../models';

interface UpdateConsignerSettingsProps {
    close: () => void
}

const ConsignerSettings = () => {
    const [isUpdatingConsignerPercentage, setIsUpdatingConsignerPercentage] = useState(false);
    const [consignerPercentage, setConsignerPercentage] = useState('0');

    useEffect(() => {
        const getConsignerSettings = async () => {
            const fetchedConsignerSettings = await DataStore.query(ConsignerSplit);
            const currentConsignerSettings = fetchedConsignerSettings[0];
            setConsignerPercentage(currentConsignerSettings.consignerPercentage.toString());
        }

        getConsignerSettings();
    }, []);

    const startUpdatingConsignerPercentage = () => {
        setIsUpdatingConsignerPercentage(true);
    }

    const stopUpdatingConsignerPercentage = () => {
        setIsUpdatingConsignerPercentage(false);
    }

    return (
        <Box display='flex' flexDirection='column' bgcolor='white' padding='2rem' borderRadius='1rem' marginTop='2rem'>
            <Modal
                open={isUpdatingConsignerPercentage}
                onClose={stopUpdatingConsignerPercentage}
            >
                <UpdateConsignerSettings close={stopUpdatingConsignerPercentage}/>
            </Modal>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' color='secondary'>
                <Typography>Consigner Percentage: {consignerPercentage}%</Typography>
                <Button variant='contained' onClick={startUpdatingConsignerPercentage}>Update Consigner Percentage</Button>
            </Box>
        </Box>
    )
}

const UpdateConsignerSettings = ({ close }: UpdateConsignerSettingsProps) => {
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();

    const handleUpdateConsignerSettings = async (data: any) => {
        setError('')
        const { consignerPercentage } = data;

        const fetchedConsignerSettings = await DataStore.query(ConsignerSplit);
        const currentConsignerSettings = fetchedConsignerSettings[0];
        const percentage = parseFloat(consignerPercentage);

        if (percentage > 100 || percentage < 0) {
            setError('Percentage must be between 0 and 100');
        }
     
        if (currentConsignerSettings) {
            await DataStore.save(ConsignerSplit.copyOf(currentConsignerSettings, (updated) => {
                updated.consignerPercentage = percentage;
            }));
        } else {
            await DataStore.save(new ConsignerSplit({ consignerPercentage: percentage }))
        }
        
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography variant="h6" component="h2" marginBottom='2rem'>
                        Update Consigner Percentage
                    </Typography>
                    <form onSubmit={handleSubmit(handleUpdateConsignerSettings)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField label="Consigner rate in %" variant="standard" {...register('consignerPercentage', { minLength: 2 })} />
                            {error && 
                                <Typography color='error'>{error}</Typography>
                            }
                            <Box marginTop='2rem'>
                                <Button variant='contained' type='submit'>Update Consigner Percentage</Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default ConsignerSettings;