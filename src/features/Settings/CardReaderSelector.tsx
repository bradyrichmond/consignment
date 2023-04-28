import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useForm } from "react-hook-form";

interface CardReaderSelectorProps {
    onCardReaderChange: (printerName: string) => void
    cardReaderIds: string[]
}

const CardReaderSelector = (props: CardReaderSelectorProps) => {
    const { cardReaderIds, onCardReaderChange } = props;
    const [selectedCardReader, setSelectedCardReader] = useState('');
    const { handleSubmit, register } = useForm();

    const handleCardReaderSelection = async (data: any) => {
        onCardReaderChange(selectedCardReader);
    }
    
    return (
        <form onSubmit={handleSubmit(handleCardReaderSelection)}>
            <Box display='flex' flexDirection='column' bgcolor='white' padding='2rem' borderRadius='1rem' marginTop='2rem'>
                <Box marginTop='1rem'>
                    <FormControl fullWidth>
                        <InputLabel>Card Reader Id</InputLabel>
                        <Select
                            label='Card Reader Id'
                            {...register('selectPrinter')}
                            value={selectedCardReader}
                            onChange={(e) => setSelectedCardReader(e.target.value)}
                        >
                            <MenuItem value='None'>None</MenuItem>
                            {cardReaderIds && 
                                cardReaderIds.map((id) => <MenuItem value={id} key={id}>{id}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Box>
                <Box display='flex' flexDirection='row'>
                    <Box flex='1' marginRight='2rem'>
                        <Button type='submit' variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem', width: '100%' }}>Select Card Reader</Button>
                    </Box>
                </Box>
            </Box>
        </form>
    )
}

export default CardReaderSelector;