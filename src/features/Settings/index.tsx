import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import * as JSPM from "jsprintmanager";
import { useForm } from 'react-hook-form';
import { generateReceipt } from '../../utils/PrintReceipt';
import { DataStore } from 'aws-amplify';
import { Item } from '../../models';

const Settings = () => {
    const [printers, setPrinters] = useState<any>([]);
    const [socketStatus, setsocketStatus] = useState<JSPM.WSStatus>(JSPM.WSStatus.WaitingForUserResponse);

    useEffect(() => {
        JSPM.JSPrintManager.auto_reconnect = true;
        JSPM.JSPrintManager.start();

        setTimeout(() => { setsocketStatus(JSPM.JSPrintManager.websocket_status); }, 3000);
    }, [])
    
    useEffect(() => {
        const socket = JSPM.JSPrintManager.WS;
        
        if (socket) {
            socket.onStatusChanged = async () => {
                if (socketStatus === JSPM.WSStatus.Open) {
                    console.log('socket open')
                    const devicePrinters = await JSPM.JSPrintManager.getPrinters();
                    setPrinters(devicePrinters);
                }
            };
        }
    }, [socketStatus]);

    const setPrinter = (printerName: string, lsKey: string) => {
        localStorage.setItem(lsKey, printerName);
    }

    const testPrint = async () => {
        const fetchedItem = await DataStore.query(Item, '3342f72c-1d94-444f-b400-ab8ef9204bc8');
        if (fetchedItem) {
            const listOfItems: Item[] = [];
            listOfItems.push(fetchedItem);
            console.log('receipt:');
            console.log(generateReceipt(listOfItems, 'testTransactionId', '1480 NW Gilman Blvd #3', "Issaquah, WA 98027"))
        }
    }

    return (
        <Box padding='2rem'>
            <Box>
                <Typography>Printers</Typography>
                <PrinterSelector label='Report Printer' lsKey='reportPrinter' printerNames={printers} onPrinterChange={setPrinter} testPrint={testPrint} />
                <PrinterSelector label='Receipt Printer' lsKey='receiptPrinter' printerNames={printers} onPrinterChange={setPrinter} testPrint={testPrint} />
                <PrinterSelector label='Tag Printer' lsKey='tagPrinter' printerNames={printers} onPrinterChange={setPrinter} testPrint={testPrint} />
            </Box>
        </Box>
    )
}

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
                <Box marginTop='1rem'>
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
                        <Button type='submit' variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem', width: '100%' }}>Select {label}</Button>
                    </Box>
                    <Box>
                        <Button onClick={handleTestPrint} variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem' }}>Print Test</Button>
                    </Box>
                </Box>
            </Box>
        </form>
    )
}

export default Settings;