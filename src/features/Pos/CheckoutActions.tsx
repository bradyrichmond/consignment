import React, { useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { format } from 'date-fns';

import { currencyFormatter, currencyFormatterNoSign, generateReceipt } from "../../utils/PrintReceipt";
import UserAvatar from "../../utils/UserAvatar";
import ProcessCash from "./ProcessCash";
import { API, DataStore } from "aws-amplify";
import { Client, ConsignerSplit, GiftCard, GiftCardLog, Item, StoreCredit, Transaction } from "../../models";
import ProcessingCard, { STEPS } from "./ProcessingCard";
import { useForm } from "react-hook-form";
import ModalContainer from "../../utils/ModalContainer";
import useStoreLocation from "../../utils/useStoreLocation";
import ProcessGiftCard from "./ProcessGiftCard";
import { GiftCardLogType } from "../../models";

interface CheckoutActionsProps {
    items: Item[]
    addItem: (item: Item) => void
}

const CheckoutActions = (props: CheckoutActionsProps) => {
    const { items, addItem } = props;
    const [time, setTime] = useState<number>(0);
    const [intentSecret, setIntentSecret] = useState('');
    const [isProcessingCash, setIsProcessingCash] = useState<boolean>(false);
    const [isProcessingCard, setIsProcessingCard] = useState<boolean>(false);
    const [isProcessingGiftCard, setIsProcessingGiftCard] = useState<boolean>(false);
    const [tenders, setTenders] = useState<{label: string, receivedAmount: number, giftCardId?: string}[]>([]);
    const [totalTenderedAmount, setTotalTenderedAmount] = useState(0);
    const [cashTender, setCashTender] = useState(0);
    const [cardProcessingStep, setCardProcessingStep] = useState('');
    const [terminal, setTerminal] = useState();
    const [tenderAmountHasBeenMet, setTenderAmountHasBeenMet] = useState(false);
    const [itemAlreadyScanned, setItemAlreadyScanned] = useState(false);
    const [itemNotFound, setItemNotFound] = useState(false);
    const [itemAlreadySold, setItemAlreadySold] = useState(false);
    const [consignmentPercentage, setConsignmentPercentage] = useState('0');
    const storeData = useStoreLocation();
    
    const { handleSubmit, register, resetField } = useForm();
    
    const amount = items.reduce((a,b) => a + parseFloat(b.price), 0)

    const taxPercentage = (storeData?.taxRate ?? 0 / 100) + 1;
    const amountWithTax = amount * taxPercentage;

    const fetchConnectionToken = async () => {
        const fetchedConnectionToken = await API.post('stripeApi', '/stripe-connection-token', {});
        return fetchedConnectionToken;
    }

    useEffect(() => {
        const initializeTerminal = async () => {
            //@ts-ignore
            const createdTerminal = window.StripeTerminal.create({
                onFetchConnectionToken: fetchConnectionToken,
                onUnexpectedReaderDisconnect: unexpectedDisconnect,
            });

            setTerminal(createdTerminal);
        }

        const getConsignerPercentage = async () => {
            const fetchedConsignerSettings = await DataStore.query(ConsignerSplit);
            const currentConsignerSettings = fetchedConsignerSettings[0];
            setConsignmentPercentage((currentConsignerSettings.consignerPercentage / 100).toString());
        }

        initializeTerminal();
        getConsignerPercentage();
    }, [])

    useEffect(() => {
        connectReaderHandler();
    }, [terminal])

    useEffect(() => {
        if (amountWithTax.toString().includes(totalTenderedAmount.toString()) && totalTenderedAmount > 0) {
            setTenderAmountHasBeenMet(true);
        }
    }, [tenders])

    const unexpectedDisconnect = () => {

    }

    // Handler for a "Connect Reader" button
    const connectReaderHandler = async () => {
        if (terminal) {
            const config = {simulated: true};
            //@ts-ignore
            terminal.setSimulatorConfiguration({testCardNumber: '4242424242424242'});
            // @ts-ignore
            const discoverResult = await terminal.discoverReaders(config);

            if (discoverResult.error) {
                console.log('Failed to discover: ', discoverResult.error);
            } else if (discoverResult.discoveredReaders.length === 0) {
                console.log('No available readers.');
            } else {
                // Just select the first reader here.
                const selectedReader = discoverResult.discoveredReaders[0];
            
                // @ts-ignore
                const connectResult = await terminal.connectReader(selectedReader);
                if (connectResult.error) {
                    console.log('Failed to connect: ', connectResult.error);
                } else {
                    console.log('Connected to reader: ', connectResult.reader.label);
                }
            }
        }
    }

    useEffect(() => {
        const getTime = () => {
            const currentTime = Date.now();
            setTime(currentTime);
        }
        const ticker = setInterval(getTime, 1000);
        getTime();

        return () => {
            clearInterval(ticker);
        }
    }, [])

    const cash = () => {
        setIsProcessingCash(true);
    }

    const card = () => {
        setIsProcessingCard(true);
        startTakePayment(Math.round((amountWithTax - totalTenderedAmount) * 100))
    }

    const giftCard = () => {
        setIsProcessingGiftCard(true);
    }

    const startTakePayment = async (amount: number) => {
        setCardProcessingStep(STEPS.PAYMENT_INTENT);
        const paymentIntent = await API.post('stripeApi', '/create-payment-intent', {
            body: { amount },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"}
            });
        const paymentIntentSecret = paymentIntent.clientSecret;
        // need to capture intent secret for retries of card processing
        setIntentSecret(paymentIntentSecret);
        collectPaymentMethod(paymentIntentSecret);
    }

    const collectPaymentMethod = async (secret: string) => {
        // clientSecret is the client_secret from the PaymentIntent you created in Step 1.
        setCardProcessingStep(STEPS.COLLECTING);
        // @ts-ignore
        const result = await terminal.collectPaymentMethod(secret);
        if (result.error) {
          // Placeholder for handling result.error
          console.error(JSON.stringify(result));
        } else {
          processPayment(result.paymentIntent);
        }
    }

    const processPayment = async (paymentIntent: any) => {
        setCardProcessingStep(STEPS.COLLECTING);

        //@ts-ignore
        const result = await terminal.processPayment(paymentIntent);
        if (result.error) {
            // Placeholder for handling result.error
            console.error(JSON.stringify(result));
        } else if (result.paymentIntent) {
            const intentAmount = (result.paymentIntent.amount) / 100;
            // Placeholder for notifying your backend to capture result.paymentIntent.id
            setTenders(tenders.length > 0 ? [...tenders, { label: 'Card', receivedAmount: intentAmount }] : [{ label: 'Card', receivedAmount: intentAmount }]);
            setTotalTenderedAmount((cur) => cur + intentAmount);
            setCardProcessingStep(STEPS.DONE);
            console.log('payment success')
        }
    }

    const addCashTender = (receivedAmount?: number) => {
        if (receivedAmount) {
            setTenders(tenders.length > 0 ? [...tenders, { label: 'Cash', receivedAmount }] : [{ label: 'Cash', receivedAmount }]);
            setTotalTenderedAmount((cur) => cur + receivedAmount);
            setCashTender(receivedAmount);
        }

        stopProcessingPayment();
    }

    const stopProcessingPayment = () => {
        setIsProcessingCash(false);
        setIsProcessingCard(false);
        setIsProcessingGiftCard(false);
    }

    const completeTransaction = async () => {
        // needs correct userId
        const transaction = await DataStore.save(new Transaction({ items, userId: '1', actTransAmt: amountWithTax.toString(), actTransTimestamp: Date.now().toString(), location: storeData }));

        const giftCardTenders = tenders.filter((t) => t.label === 'Gift Card');

        if (giftCardTenders.length > 0) {
            updateGiftCards(giftCardTenders);
        }

        await updateSoldItems();

        // this will just create the zprint directions at this point, it won't print a receipt
        const address = await storeData?.address;
        await generateReceipt(items, tenders, transaction.id, address?.address1 ?? '', `${address?.city}, ${address?.state} ${address?.zip}`);
    }

    const updateGiftCards = async (giftCards: {label: string, receivedAmount: number, giftCardId?: string}[]) => {
        for (let i = 0; i < giftCards.length; i++) {
            const gc = giftCards[i];
            const original = await DataStore.query(GiftCard, gc.giftCardId ?? '');

            if (original) {
                const updatedGiftCard = await DataStore.save(GiftCard.copyOf(original, (updated) => {
                    updated.value = original.value - gc.receivedAmount;
                }));

                await DataStore.save(new GiftCardLog({ amount: -gc.receivedAmount, giftCard: updatedGiftCard, type: GiftCardLogType.PURCHASE, giftCardLogGiftCardId: updatedGiftCard.id }))
            }
        }
    }

    const updateSoldItems = async () => {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const consigner = await DataStore.query(Client, item.clientItemsId ?? '');
            const storeCredit = await DataStore.query(StoreCredit, consigner?.clientCreditId ?? '');

            if (storeCredit) {
                const fetchedItems = await storeCredit.items.toArray();

                await DataStore.save(StoreCredit.copyOf(storeCredit, (updated) => {
                    // needs dynamic percentage
                    updated.amount = storeCredit.amount ?? 0 + parseFloat(item.price) * parseFloat(consignmentPercentage);
                    updated.items = fetchedItems.length > 0 ? [...fetchedItems, item] : [item]
                }));
            } else {
                await DataStore.save(new StoreCredit({ amount: parseFloat(item.price) * parseFloat(consignmentPercentage), items: [item] }));
            }

            await DataStore.save(Item.copyOf(item, (updated) => {
                // need to add an enum for this
                updated.statusId = '18'
            }));
        }
    }

    const handleManualEntry = async (data: any) => {
        const { itemNumber } = data;

        //this should only be one, but have to query for a list first
        const matchedItems = await DataStore.query(Item, (i) => i.itemId.eq(itemNumber));

        if (matchedItems[0].statusId === '18') {
            showItemAlreadySold();
            return;
        }

        if (matchedItems.length > 0) {
            const item = matchedItems[0];

            if (items.filter((i) => i.itemId === itemNumber).length > 0) {
                showItemAlreadyScanned();
            } else {
                addItem(item);
            }
        } else {
            showItemNotFound();
        }

        resetField('itemNumber');
    }

    const showItemAlreadyScanned = () => {
        setItemAlreadyScanned(true);
    }

    const hideItemAlreadyScanned = () => {
        setItemAlreadyScanned(false);
    }

    const showItemNotFound = () => {
        setItemNotFound(true);
    }

    const hideItemNotFound = () => {
        setItemNotFound(false);
    }

    const showItemAlreadySold = () => {
        setItemAlreadySold(true);
    }

    const hideItemAlreadySold = () => {
        setItemAlreadySold(false);
    }

    const intakeGiftCardData = (giftCard?: GiftCard) => {
        if (giftCard) {
            const currentTenderedAmount = amount >= giftCard.value ? {label: 'Gift Card', receivedAmount: giftCard.value} : {label: 'Gift Card', receivedAmount: amount}; 
            setTenders((cur) => {
                if (cur.length > 0) {
                    return [...cur, currentTenderedAmount]
                }

                return [currentTenderedAmount]
            })
        }

        stopProcessingPayment();
    }

    return (
        <Box display='flex' flexDirection='column' height='100%'>
            <Modal
                open={isProcessingCash}
                onClose={stopProcessingPayment}
            >
                <ProcessCash close={addCashTender} amount={amountWithTax}/>
            </Modal>
            <Modal
                open={isProcessingCard}
                onClose={stopProcessingPayment}
            >
                <ProcessingCard step={cardProcessingStep} close={stopProcessingPayment}/>
            </Modal>
            <Modal
                open={isProcessingGiftCard}
                onClose={stopProcessingPayment}
            >
                <ProcessGiftCard close={intakeGiftCardData}/>
            </Modal>
            <Modal
                open={itemAlreadyScanned}
                onClose={hideItemAlreadyScanned}
            >
                <ModalContainer onClose={hideItemAlreadyScanned}>
                    <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                        <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                            <Typography>Item has already been added to this transaction.</Typography>
                            <Button variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem' }} onClick={hideItemAlreadyScanned}>Ok</Button>
                        </Box>
                    </Box>
                </ModalContainer>
            </Modal>
            <Modal
                open={itemAlreadySold}
                onClose={hideItemAlreadySold}
            >
                <ModalContainer onClose={hideItemAlreadySold}>
                    <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                        <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                            <Typography>Item has already been sold.</Typography>
                            <Button variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem' }} onClick={hideItemAlreadySold}>Ok</Button>
                        </Box>
                    </Box>
                </ModalContainer>
            </Modal>
            <Modal
                open={itemNotFound}
                onClose={hideItemNotFound}
            >
                <ModalContainer onClose={hideItemNotFound}>
                    <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                        <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                            <Typography>Item not found.</Typography>
                            <Button variant='outlined' sx={{ color: 'black', border: '1px solid black', borderRadius: '.25rem', marginTop: '2rem' }} onClick={hideItemNotFound}>Ok</Button>
                        </Box>
                    </Box>
                </ModalContainer>
            </Modal>
            <Box display='flex' flexDirection='row' padding='2rem' borderBottom='1px solid white' marginBottom='2rem'>
                <Box marginRight='2rem'><AccessTimeIcon sx={{color: 'white'}} /></Box>
                <Box flex='1'>{format(time, "eee, MMM do, yyyy | h:mm bbb")}</Box>
                <Box><UserAvatar /></Box>
            </Box>
            <Box flex='1'>
                <Box display='flex' flexDirection='row' padding='2rem'>
                    <Typography flex='1'>Subtotal:</Typography>
                    <Typography>{currencyFormatter.format(amount)}</Typography>
                </Box>
                <Box display='flex' flexDirection='row' padding='2rem'>
                    <Typography flex='1'>Tax:</Typography>
                    <Typography>{currencyFormatter.format(amount * .1)}</Typography>
                </Box>
                <Box display='flex' flexDirection='row' padding='2rem' borderBottom='1px solid white'>
                    <Typography flex='1'>Total:</Typography>
                    <Typography>{currencyFormatter.format(amountWithTax)}</Typography>
                </Box>
                <Box marginTop='2rem'>
                    <form onSubmit={handleSubmit(handleManualEntry)}>
                        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                            <Box flex={1} marginRight='2rem' justifyContent='center' alignItems='center'>
                                <TextField
                                    fullWidth={true}
                                    style={{border: '1px solid white', borderRadius: '.25rem' }}
                                    sx={{ input: { color: 'white' }}}
                                    {...register('itemNumber', { required: true, minLength: 2 })}
                                />
                            </Box>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Button type='submit' variant='outlined' sx={{ color: 'white', border: '1px solid white', borderRadius: '.25rem' }}>Add Item</Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
                {tenders.map((tender) => {
                    return (
                        <Box display='flex' flexDirection='row' padding='2rem'>
                            <Typography flex='1'>{tender.label}:</Typography>
                            <Typography>{currencyFormatter.format(tender.receivedAmount)}</Typography>
                        </Box>
                    )
                })}
                {cashTender > 0 &&
                    <Box display='flex' flexDirection='row' padding='2rem'>
                        <Typography flex='1'>{cashTender >= amountWithTax ? 'Change due:' : 'Amount due:'}</Typography>
                        <Typography sx={{color: cashTender >= amountWithTax ? 'green' : 'red'}}>{cashTender >= amountWithTax ? currencyFormatter.format((cashTender - amountWithTax)) : currencyFormatter.format(amountWithTax - cashTender)}</Typography>
                    </Box>
                }
                {tenderAmountHasBeenMet &&
                    <Box padding='2rem'>
                        <Button variant='outlined' sx={{border: '1px solid white', borderRadius: '.25rem', padding: '2rem', width: '100%', marginBottom: '2rem', color: 'white'}} onClick={completeTransaction}>Complete Transaction</Button>
                    </Box>
                }
            </Box>
            <Box padding='2rem'>
                <Button variant='outlined' sx={{border: '1px solid white', borderRadius: '.25rem', padding: '2rem', width: '100%', marginBottom: '2rem', color: 'white'}} disabled={tenderAmountHasBeenMet} onClick={cash}>Cash</Button>
                <Button variant='outlined' sx={{border: '1px solid white', borderRadius: '.25rem', padding: '2rem', width: '100%', marginBottom: '2rem', color: 'white'}} disabled={tenderAmountHasBeenMet} onClick={card}>Credit / Debit</Button>
                <Button variant='outlined' sx={{border: '1px solid white', borderRadius: '.25rem', padding: '2rem', width: '100%', marginBottom: '2rem', color: 'white'}} disabled={tenderAmountHasBeenMet}>Store Credit</Button>
                <Button variant='outlined' sx={{border: '1px solid white', borderRadius: '.25rem', padding: '2rem', width: '100%', marginBottom: '2rem', color: 'white'}} disabled={tenderAmountHasBeenMet} onClick={giftCard}>Gift Card</Button>
            </Box>
        </Box>
    )
}

export default CheckoutActions;