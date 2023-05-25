import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import * as JSPM from "jsprintmanager";
import { generateReceipt } from '../../utils/PrintReceipt';
import { API, DataStore } from 'aws-amplify';
import { Item, Location, Tender } from '../../models';
import PrinterSelector from './PrinterSelector';
import CardReaderSelector from './CardReaderSelector';
import LocationSettings from './LocationSettings';
import ConsignerSettings from './ConsignerSettings';
import { TenderType } from '../../models';
import ConciergeSettings from './ConciergeSettings';

const Settings = () => {
    const [printers, setPrinters] = useState<any>([]);
    const [cardReaderOptions, setCardReaderOptions] = useState([])
    const [storedCardReaderId, setStoredCardReaderId] = useState('');
    const [storedStoreId, setStoredStoreId] = useState('');
    const [socketStatus, setsocketStatus] = useState<JSPM.WSStatus>(JSPM.WSStatus.WaitingForUserResponse);
    const [storeLocations, setStoreLocations] = useState<Location[]>([]);

    useEffect(() => {
        const setUpJspm = async () => {
            JSPM.JSPrintManager.auto_reconnect = true;
            await JSPM.JSPrintManager.start();
            const socket = JSPM.JSPrintManager.WS;
            
            if (socket) {
                socket.onStatusChanged = async () => {
                    try {
                        if (JSPM.JSPrintManager.websocket_status === JSPM.WSStatus.Open) {
                            console.log('socket open')
                            const devicePrinters = await JSPM.JSPrintManager.getPrinters();
                            setPrinters(devicePrinters);
                        }
                    } catch (e) {
                        console.error(JSON.stringify(e));
                    }
                };
            }
        }

        const getCardReaderIds = async () => {
            const fetchedCardReaderIds = await API.get('stripeApi', '/getStripeCardReaderList', {});
            setCardReaderOptions(fetchedCardReaderIds);
        }

        const getStoreLocations = async () => {
            const fetchedStoreLocations = await DataStore.query(Location);
            setStoreLocations(fetchedStoreLocations);
        }

        setTimeout(() => { setsocketStatus(JSPM.JSPrintManager.websocket_status); }, 3000);
        setStoredCardReaderId(localStorage.getItem('cardReaderId') ?? '');

        getCardReaderIds();
        getStoreLocations();
        setUpJspm();

        setStoredStoreId(localStorage.getItem('locationId') ?? '');
    }, [])

    const setPrinter = (printerName: string, lsKey: string) => {
        localStorage.setItem(lsKey, printerName);
    }

    const testPrint = async () => {
        const listOfItems: Item[] = [new Item({ userId: '1', statusId: '1', itemName: 'Test Item', price: '3.99' })];
        console.log('receipt:');
        console.log(generateReceipt(listOfItems, [new Tender({ label: TenderType.CREDIT_CARD, receivedAmount: 5.99 })], 'testTransactionId', '1480 NW Gilman Blvd #3', "Issaquah, WA 98027"))
    }

    const handleSetCardReaderId = (data: any) => {
        localStorage.setItem('cardReaderId', data.cardReaderId);
    }

    const handleLocationChange = (locationId: string) => {
        localStorage.setItem('locationId', locationId);
    }

    const handleAddLocation = async () => {
        const fetchedStoreLocations = await DataStore.query(Location);
        setStoreLocations(fetchedStoreLocations);
    }

    return (
        <Box padding='2rem'>
            <Box>
                <Typography variant='h2'>Printers</Typography>
                <PrinterSelector label='Report Printer' lsKey='reportPrinter' printerNames={printers} onPrinterChange={setPrinter} testPrint={testPrint} />
                <PrinterSelector label='Receipt Printer' lsKey='receiptPrinter' printerNames={printers} onPrinterChange={setPrinter} testPrint={testPrint} />
                <PrinterSelector label='Tag Printer' lsKey='tagPrinter' printerNames={printers} onPrinterChange={setPrinter} testPrint={testPrint} />
            </Box>
            <Box marginTop='2rem'>
                <Typography variant='h2'>Card Reader</Typography>
                <CardReaderSelector cardReaderIds={cardReaderOptions} onCardReaderChange={handleSetCardReaderId} />
            </Box>
            <Box marginTop='2rem'>
                <Typography variant='h2'>Location</Typography>
                <LocationSettings onLocationChange={handleLocationChange} locations={storeLocations} handleAddLocation={handleAddLocation} />
            </Box>
            {storedStoreId && 
                <>
                    <Box marginTop='2rem'>
                        <Typography variant='h2'>Consigner Percentage</Typography>
                        <ConsignerSettings />
                    </Box>
                    <Box marginTop='2rem'>
                        <Typography variant='h2'>Concierge Settings</Typography>
                        <ConciergeSettings />
                    </Box>
                </>
            }
        </Box>
    )
}

export default Settings;