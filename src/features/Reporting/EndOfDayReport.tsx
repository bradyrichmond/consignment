import { ReactNode, useEffect, useRef, useState } from "react";
import useStoreLocation from "../../utils/useStoreLocation";
import { format, sub } from "date-fns";
import { DataStore } from "aws-amplify";
import { ConsignerSplit, Coupon, Item, Tender, TenderType, Transaction } from "../../models";
import * as JSPM from "jsprintmanager";
import * as htmlToImage from 'html-to-image';
import { Box, Button, Typography } from "@mui/material";
import { currencyFormatter } from "../../utils/PrintReceipt";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SavingsIcon from '@mui/icons-material/Savings';

const EndOfDayReport = () => {
    const locationData = useStoreLocation();
    const ref = useRef<HTMLDivElement>(null);
    const [itemsSold, setItemsSold] = useState<Item[]>([]);
    const [itemsAdded, setItemsAdded] = useState<Item[]>([])
    const [itemsRefunded, setItemsRefunded] = useState<Item[]>([]);
    const [consignedItems, setConsignedItems] = useState<Item[]>([]);
    const [retailItems, setRetailItems] = useState<Item[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [consignmentPercentage, setConsignmentPercentage] = useState('')
    const [tenders, setTenders] = useState<{cash: Tender[], card: Tender[], storeCredit: Tender[], giftCard: Tender[], tax: Tender[]}>();

    useEffect(() => {
        const getTransactionData = async () => {
            // Need to collect coupon data too, needs to come after adding discount/coupons
            const todayStart = sub(Date.now(), { hours: 18 }).toString();

            const fetchedTransactions = await DataStore.query(Transaction, (t) => t.actTransTimestamp.gt(todayStart));
            const transactionData = await getTransactionsTypes(fetchedTransactions);
            setTransactions(fetchedTransactions);
            setTenders(transactionData);
            let todayItems: Item[] = [];
            let todayCoupons: Coupon[] = [];

            for (let i = 0; i < fetchedTransactions.length; i++) {
                const currentItems = await transactions[i].items.toArray();
                const currentCoupons = await transactions[i].coupons.toArray();
                todayItems = [...todayItems, ...currentItems];
                todayCoupons = [...todayCoupons, ...currentCoupons];
            }
            
            const filteredItemsSold = todayItems.filter((i) => !i.returned);
            const filteredItemsReturned = todayItems.filter((i) => i.returned);
            const filteredItemsConsigned = todayItems.filter((i) => i.itemAcquireTypeId === '1');
            const filteredItemsRetail = todayItems.filter((i) => i.itemAcquireTypeId === '2');

            setItemsSold(filteredItemsSold);
            setItemsRefunded(filteredItemsReturned);
            setCoupons(todayCoupons);
            setConsignedItems(filteredItemsConsigned);
            setRetailItems(filteredItemsRetail);

            const newItems = await DataStore.query(Item, (i) => i.createTimestamp.gt(todayStart))
            setItemsAdded(newItems);
        }

        const getConsignerPercentage = async () => {
            const fetchedConsignerSettings = await DataStore.query(ConsignerSplit);
            const currentConsignerSettings = fetchedConsignerSettings[0];
            setConsignmentPercentage((currentConsignerSettings.consignerPercentage / 100).toString());
        }

        getTransactionData();
        getConsignerPercentage();
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
                <Box display='flex' flexDirection='row' flexWrap='wrap'>
                    <InfoContainerItem value={currencyFormatter.format(tenders?.cash.reduce((a,b) => a + b.receivedAmount, 0) ?? 0)} title='Cash' icon={<AttachMoneyIcon color='inherit' sx={{fontSize: '4rem'}} />} />
                    <InfoContainerItem value={currencyFormatter.format(tenders?.card.reduce((a,b) => a + b.receivedAmount, 0) ?? 0)} title='Credit Cards' icon={<CreditCardIcon color='inherit' sx={{fontSize: '4rem'}} />} />
                </Box>
                <Box display='flex' flexDirection='row' flexWrap='wrap'>
                    <InfoContainerItem value={currencyFormatter.format(tenders?.storeCredit.reduce((a,b) => a + b.receivedAmount, 0) ?? 0)} title='Store Credit' icon={<CardMembershipIcon color='inherit' sx={{fontSize: '4rem'}} />} />
                    <InfoContainerItem value={currencyFormatter.format(tenders?.giftCard.reduce((a,b) => a + b.receivedAmount, 0) ?? 0)} title='Gift Cards' icon={<LocalAtmIcon color='inherit' sx={{fontSize: '4rem'}} />} />
                </Box>
                <Box display='flex' flexDirection='row' flexWrap='wrap'>
                    <InfoContainerItem value={currencyFormatter.format(tenders?.tax.reduce((a,b) => a + b.receivedAmount, 0) ?? 0)} title='Tax' icon={<RequestQuoteIcon color='inherit' sx={{fontSize: '4rem'}} />} />
                    <InfoContainerItem value={currencyFormatter.format(dayTotal)} title='Total Sales' icon={<SavingsIcon color='inherit' sx={{fontSize: '4rem'}} />} />
                </Box>
                <Box display='flex' flexDirection='row'>
                    <InfoContainerItem value={itemsSold.length.toString()} title='Items sold' />
                    <InfoContainerItem value={itemsRefunded.length.toString()} title='Items refunded' subtitle={`(${currencyFormatter.format(itemsRefunded.reduce((a,b) => a + parseFloat(b.price), 0))})`} />
                </Box>
                <Box display='flex' flexDirection='row'>
                    <InfoContainerItem value={transactions.length.toString()} title='Number of transactions' />
                    <InfoContainerItem value={itemsAdded.length.toString()} title='Items processed' />
                </Box>
                <Box display='flex' flexDirection='row'>
                    <InfoContainerItem value={retailItems.length.toString()} title='Retail items sold' />
                    <InfoContainerItem value={currencyFormatter.format(retailItems.reduce((a,b) => a + (parseFloat(b?.price) ?? 0), 0))} title='Retail Price sold' subtitle={`COGS ${currencyFormatter.format(retailItems.reduce((a,b) => a + parseFloat(b?.cost ?? '0'), 0))}`} />
                </Box>
                <Box display='flex' flexDirection='row'>
                    <InfoContainerItem value={consignedItems.length.toString()} title='Consignment items sold' />
                    <InfoContainerItem value={currencyFormatter.format(consignedItems.reduce((a,b) => a + (parseFloat(b?.price) ?? 0), 0))} title='Consignment price sold' subtitle={`COGS ${currencyFormatter.format(consignedItems.reduce((a,b) => a + parseFloat(b.price) * parseFloat(consignmentPercentage), 0))}`} />
                </Box>
                <Box display='flex' flexDirection='row'>
                    <InfoContainerItem value={isNaN(itemsSold.length / transactions.length) ? '0' : (itemsSold.length / transactions.length).toString()} title='Average number of items per transaction' />
                    <InfoContainerItem value={isNaN(dayTotal / transactions.length) ? currencyFormatter.format(0) : currencyFormatter.format(dayTotal / transactions.length).toString()} title='Average sale per transaction' />
                </Box>
                <Box display='flex' flexDirection='row'>
                    <InfoContainerItem value={coupons.length.toString()} title='Coupons' subtitle={currencyFormatter.format(coupons.reduce((a,b) => a + b.amount, 0))} />
                </Box>
            </Box>
            <Box>
                <Button onClick={print}>Print Report</Button>
            </Box>
        </>
    )
}

interface InfoContainerItemProps {
    icon?: ReactNode
    title?: string
    subtitle?: string
    value: string
}

const InfoContainerItem = (props: InfoContainerItemProps) => {
    const { icon, title, subtitle, value } = props;

    return (
        <Box padding='1rem' flex='1' display='flex' margin='1rem' color='GrayText' bgcolor='Window' border='2px solid black' borderRadius='.25rem'>
            <Box flex='1' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography variant='h4'>{value}</Typography>
                {title && <Typography variant='h5'>{title}</Typography>}
                {subtitle && <Typography variant='h6'>{subtitle}</Typography>}
            </Box>
            {icon && 
                <Box width='20%' display='flex' justifyContent='center' alignItems='center'>
                    {icon}
                </Box>
            }
        </Box>
    )
}


export default EndOfDayReport;
