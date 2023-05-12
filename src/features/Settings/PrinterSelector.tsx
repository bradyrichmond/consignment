import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useForm } from "react-hook-form";

interface PrinterSelectorProps {
    label: string
    onPrinterChange: (printerName: string, lsKey: string) => void
    printerNames: string[]
    lsKey: string
    testPrint: (printerName: string) => void
}

const PrinterSelector = (props: PrinterSelectorProps) => {
    const { printerNames, onPrinterChange, label, lsKey, testPrint } = props;
    const [selectedPrinter, setSelectedPrinter] = useState('')
    const { handleSubmit, register } = useForm();

    const handlePrinterChange = async (data: any) => {
        onPrinterChange(selectedPrinter, lsKey);
    }

    const handleTestPrint = () => {
        testPrint(selectedPrinter);
    }
    
    return (
        <form onSubmit={handleSubmit(handlePrinterChange)}>
            <Box display='flex' flexDirection='column' bgcolor='white' padding='2rem' borderRadius='1rem' marginTop='2rem'>
                <Box marginTop='1rem' marginBottom='1rem'>
                    <FormControl fullWidth>
                        <InputLabel>{label}</InputLabel>
                        <Select
                            label={label}
                            {...register('selectPrinter')}
                            value={selectedPrinter}
                            onChange={(e) => setSelectedPrinter(e.target.value)}
                        >
                            <MenuItem value='None'>None</MenuItem>
                            {printerNames && 
                                printerNames.map((pn) => <MenuItem value={pn} key={pn}>{pn}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Box>
                <Box display='flex' flexDirection='row'>
                    <Box flex='1' marginRight='2rem'>
                        <Button type='submit' variant='contained' fullWidth>Select {label}</Button>
                    </Box>
                    <Box>
                        <Button onClick={handleTestPrint} variant='contained'>Print Test</Button>
                    </Box>
                </Box>
            </Box>
        </form>
    )
}

export default PrinterSelector;