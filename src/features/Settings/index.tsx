import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import * as JSPM from "jsprintmanager";
import { useForm } from 'react-hook-form';
import { generateReceipt } from '../../utils/PrintReceipt';
import { DataStore } from 'aws-amplify';
import { Item } from '../../models';
import PrinterSelector from './PrinterSelector';
import CardReaderSelector from './CardReaderSelector';

const Settings = () => {
    const [printers, setPrinters] = useState<any>([]);
    const [storedCardReaderId, setStoredCardReaderId] = useState('');
    const [socketStatus, setsocketStatus] = useState<JSPM.WSStatus>(JSPM.WSStatus.WaitingForUserResponse);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        JSPM.JSPrintManager.auto_reconnect = true;
        JSPM.JSPrintManager.start();

        setTimeout(() => { setsocketStatus(JSPM.JSPrintManager.websocket_status); }, 3000);
        setStoredCardReaderId(localStorage.getItem('cardReaderId') ?? '');
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

    const handleSetCardReaderId = (data: any) => {
        localStorage.setItem('cardReaderId', data.cardReaderId);
    }

    return (
        <Box padding='2rem'>
            <Box>
                <Typography>Printers</Typography>
                <PrinterSelector label='Report Printer' lsKey='reportPrinter' printerNames={printers} onPrinterChange={setPrinter} testPrint={testPrint} />
                <PrinterSelector label='Receipt Printer' lsKey='receiptPrinter' printerNames={printers} onPrinterChange={setPrinter} testPrint={testPrint} />
                <PrinterSelector label='Tag Printer' lsKey='tagPrinter' printerNames={printers} onPrinterChange={setPrinter} testPrint={testPrint} />
            </Box>
            <Box marginTop='2rem'>
                <Typography>Card Reader</Typography>
                <CardReaderSelector cardReaderIds={[]} onCardReaderChange={handleSetCardReaderId} />
            </Box>
        </Box>
    )
}

export default Settings;