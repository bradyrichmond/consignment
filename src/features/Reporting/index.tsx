import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import useStoreLocation from '../../utils/useStoreLocation';
import * as JSPM from "jsprintmanager";
import { format, sub } from 'date-fns';
import * as htmlToImage from 'html-to-image';
import { Item, Tender, TenderType, Transaction } from '../../models';
import { currencyFormatter } from '../../utils/PrintReceipt';
import { Amplify, DataStore } from 'aws-amplify';

const REPORTS: string[] = ['End of day'];

const Reporting = () => {
    const [isShowingEndOfDayPreview, setIsShowingEndOfDayPreview] = useState(false);

    const handleClick = (label: string) => {
        if (label === 'End of day') {
            previewEndOfDayReport();
        }
    }

    const previewEndOfDayReport = () => {
        setIsShowingEndOfDayPreview(true);
    }

    return (
        <Box padding='2rem' display='flex' flexDirection='column' flexWrap='wrap'>
            <Box display='flex' flexDirection='row'>
                {REPORTS.map((report: string) => <ReportButton label={report} handleClick={handleClick}/>)}
            </Box>
            <Box flex='1'>
                {isShowingEndOfDayPreview && 
                    <EndOfDayReport />
                }
            </Box>
        </Box>
    )
}

interface ReportButtonProps {
    label: string
    handleClick: (label: string) => void
}

const ReportButton = (props: ReportButtonProps) => {
    const { label, handleClick } = props;

    return (
        <Button onClick={() => handleClick(label)}>{label}</Button>
    )
}

const EndOfDayReport = () => {
    const locationData = useStoreLocation();
    const ref = useRef<HTMLDivElement>(null);
    const [itemsSold, setItemsSold] = useState<Item[]>([]);
    const [itemsAdded, setItemsAdded] = useState<Item[]>([])
    const [itemsRefunded, setItemsRefunded] = useState<Item[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [tenders, setTenders] = useState<{cash: Tender[], card: Tender[], storeCredit: Tender[], giftCard: Tender[], tax: Tender[]}>();

    useEffect(() => {
        const getTransactionData = async () => {
            const todayStart = sub(Date.now(), { hours: 18 }).toString();

            const fetchedTransactions = await DataStore.query(Transaction, (t) => t.actTransTimestamp.gt(todayStart));
            const transactionData = await getTransactionsTypes(fetchedTransactions);
            setTransactions(fetchedTransactions);
            setTenders(transactionData);
            let todayItems: Item[] = [];

            for (let i = 0; i < fetchedTransactions.length; i++) {
                const currentItems = await transactions[i].items.toArray();
                todayItems = [...itemsSold, ...currentItems];
            }
            
            const filteredItemsSold = todayItems.filter((i) => !i.returned);
            const filteredItemsReturned = todayItems.filter((i) => i.returned)
            setItemsSold(filteredItemsSold);
            setItemsRefunded(filteredItemsReturned);

            const newItems = await DataStore.query(Item, (i) => i.createTimestamp.gt(todayStart))
            setItemsAdded(newItems);
        }

        getTransactionData();
    }, [])

    const dayTotal = transactions.reduce((a,b) => a + (parseFloat(b?.actTransAmt ?? '0')), 0)
    
    const getTransactionsTypes = async (fetchedTransactions: Transaction[]) => {
        const tenderTypes: {cash: Tender[], card: Tender[], storeCredit: Tender[], giftCard: Tender[], tax: Tender[]}  = { cash: [], card: [], storeCredit: [], giftCard: [], tax: [] };

        for (let i = 0; i < fetchedTransactions.length; i++) {
            const transaction = fetchedTransactions[i];
            const tenders = await transaction.tenders.toArray();
            const cash = tenders.filter((t) => t.label === TenderType.CASH);
            const card = tenders.filter((t) => t.label === TenderType.CREDIT_CARD);
            const storeCredit = tenders.filter((t) => t.label === TenderType.STORE_CREDIT);
            const giftCard = tenders.filter((t) => t.label === TenderType.GIFT_CARD);
            const tax = tenders.filter((t) => t.label === TenderType.TAX);

            tenderTypes.cash = [...tenderTypes.cash, ...cash];
            tenderTypes.card = [...tenderTypes.card, ...card];
            tenderTypes.storeCredit = [...tenderTypes.storeCredit, ...storeCredit];
            tenderTypes.giftCard = [...tenderTypes.giftCard, ...giftCard];
            tenderTypes.tax = [...tenderTypes.tax, ...tax];
        }

        return tenderTypes;
    }

    useEffect(() => {
        const setUpJspm = async () => {
            JSPM.JSPrintManager.auto_reconnect = true;
            await JSPM.JSPrintManager.start();
            const socket = JSPM.JSPrintManager.WS;
            
            if (socket) {
                socket.onStatusChanged = async () => {
                    try {
                        if (JSPM.JSPrintManager.websocket_status === JSPM.WSStatus.Open) {
                            console.log('socket open');
                        }
                    } catch (e) {
                        console.error(JSON.stringify(e));
                    }
                };
            }
        }

        setUpJspm();
    }, []);

    const jspmWSStatus = () => {
        if (JSPM.JSPrintManager.websocket_status === JSPM.WSStatus.Open)
            return true;
        else if (JSPM.JSPrintManager.websocket_status === JSPM.WSStatus.Closed) {
            console.error('JSPrintManager (JSPM) is not installed or not running! Download JSPM Client App from https://neodynamic.com/downloads/jspm');
            return false;
        }
        else if (JSPM.JSPrintManager.websocket_status === JSPM.WSStatus.Blocked) {
            console.error('JSPM has blocked this website!');
            return false;
        }
    }

    const print = async () => {
        if (jspmWSStatus()) {
            //generate an image of HTML content through html-to-image utility
            if (ref.current) {
                const imgBlob = await htmlToImage.toBlob(ref.current, { cacheBust: true });
                //Create a ClientPrintJob
                const cpj = new JSPM.ClientPrintJob();
                //Set Printer type (Refer to the help, there many of them!)

                cpj.clientPrinter = new JSPM.InstalledPrinter(localStorage.getItem('reportPrinter') ?? 'default');

                const myImageFile = new JSPM.PrintFile(imgBlob, JSPM.FileSourceType.BLOB, 'somefilename', 1);
                //add file to print job
                cpj.files.push(myImageFile);

                //Send print job to printer!
                cpj.sendToClient();
            }
        }
    }

    return (
        <>
            <Box display='flex' width='1275px' height='1650px' padding='2rem' ref={ref} flexWrap='wrap' flexDirection='column'>
                <Box display='flex' flexDirection='row'>
                    <Typography variant='h2'>End of day report for {locationData?.locationName ?? 'location'} on {format(Date.now(), "MM-dd-yyyy")}</Typography>
                </Box>
                <Box display='flex' flexDirection='column' marginBottom='2rem'>
                    <Typography>Number of items sold: {itemsSold.length}</Typography>
                    <Typography>Number of items refunded: {itemsRefunded.length}</Typography>
                    <Typography>Number of items transactions: {transactions.length}</Typography>
                    <Typography>Average number of items per transaction: {itemsSold.length / transactions.length}</Typography>
                    <Typography>Total Sales: {currencyFormatter.format(dayTotal)}</Typography>
                    <Typography>Average sale per transaction: {currencyFormatter.format(dayTotal / transactions.length)}</Typography>
                </Box>
                <Box display='flex' flexDirection='column' marginBottom='2rem'>
                    <Typography>Cash: {currencyFormatter.format(tenders?.cash.reduce((a,b) => a + b.receivedAmount, 0) ?? 0)}</Typography>
                    <Typography>Credit Card: {currencyFormatter.format(tenders?.card.reduce((a,b) => a + b.receivedAmount, 0) ?? 0)}</Typography>
                    <Typography>Store Credit: {currencyFormatter.format(tenders?.storeCredit.reduce((a,b) => a + b.receivedAmount, 0) ?? 0)}</Typography>
                    <Typography>Gift Card: {currencyFormatter.format(tenders?.giftCard.reduce((a,b) => a + b.receivedAmount, 0) ?? 0)}</Typography>
                    <Typography>Total Sales: {currencyFormatter.format(dayTotal)}</Typography>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <Typography>Newly processed items: {itemsAdded.length}</Typography>
                </Box>
            </Box>
            <Box>
                <Button onClick={print}>Print Report</Button>
            </Box>
        </>
    )
}

export default Reporting;
