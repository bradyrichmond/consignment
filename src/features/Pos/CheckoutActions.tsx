import React, { useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import { currencyFormatter, generateReceipt } from "../../utils/PrintReceipt";
import ProcessCash from "./ProcessCash";
import { API, DataStore } from "aws-amplify";
import { Client, ConsignerSplit, Coupon, CouponType, GiftCard, GiftCardLog, Item, StoreCredit, Tender, Transaction } from "../../models";
import ProcessingCard, { STEPS } from "./ProcessingCard";
import { useForm } from "react-hook-form";
import ModalContainer from "../../utils/ModalContainer";
import useStoreLocation from "../../utils/useStoreLocation";
import ProcessGiftCard from "./ProcessGiftCard";
import { GiftCardLogType } from "../../models";
import { TenderType } from "../../models";
import SelectConsigner from "./SelectConsigner";
import AddCoupon from "./AddCoupon";

interface CheckoutActionsProps {
    items: Item[]
    addItem: (item: Item) => void
}

const CheckoutActions = (props: CheckoutActionsProps) => {
    const { items, addItem } = props;
    const [intentSecret, setIntentSecret] = useState('');
    const [isProcessingCash, setIsProcessingCash] = useState<boolean>(false);
    const [isProcessingCard, setIsProcessingCard] = useState<boolean>(false);
    const [isProcessingGiftCard, setIsProcessingGiftCard] = useState<boolean>(false);
    const [isAddingConsigner, setIsAddingConsigner] = useState<boolean>(false);
    const [tenders, setTenders] = useState<Tender[]>([]);
    const [totalTenderedAmount, setTotalTenderedAmount] = useState(0);
    const [cashTender, setCashTender] = useState(0);
    const [cardProcessingStep, setCardProcessingStep] = useState('');
    const [terminal, setTerminal] = useState();
    const [tenderAmountHasBeenMet, setTenderAmountHasBeenMet] = useState(false);
    const [itemAlreadyScanned, setItemAlreadyScanned] = useState(false);
    const [itemNotFound, setItemNotFound] = useState(false);
    const [itemAlreadySold, setItemAlreadySold] = useState(false);
    const [consignmentPercentage, setConsignmentPercentage] = useState('0');
    const [selectedConsigner, setSelectedConsigner] = useState<Client>();
    const [selectedConsignerCredit, setSelectedConsignerCredit] = useState<StoreCredit>();
    const [isAddingCoupon, setIsAddingCoupon] = useState(false);
    const [coupons, setCoupons] = useState<Coupon[]>([])
    const storeData = useStoreLocation();

    // TODO: This file is really big, you should split it up more.
    
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
            const newTender = await DataStore.save(new Tender({ label: TenderType.CREDIT_CARD, receivedAmount: intentAmount }));
            setTenders(tenders.length > 0 ? [...tenders, newTender] : [newTender]);
            setTotalTenderedAmount((cur) => cur + intentAmount);
            setCardProcessingStep(STEPS.DONE);
            console.log('payment success')
        }
    }

    const addCashTender = async (receivedAmount?: number) => {
        if (receivedAmount) {
            const newTender = await DataStore.save(new Tender({ label: TenderType.CASH, receivedAmount }));
            setTenders(tenders.length > 0 ? [...tenders, newTender] : [newTender]);
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
        const transaction = await DataStore.save(new Transaction({ items, userId: '1', actTransAmt: amountWithTax.toString(), actTransTimestamp: Date.now().toString(), location: storeData, tenders }));

        const giftCardTenders = tenders.filter((t) => t.label === TenderType.GIFT_CARD);

        if (giftCardTenders.length > 0) {
            updateGiftCards(giftCardTenders);
        }

        await updateSoldItems();

        // this will just create the zprint directions at this point, it won't print a receipt
        const address = await storeData?.address;
        await generateReceipt(items, tenders, transaction.id, address?.address1 ?? '', `${address?.city}, ${address?.state} ${address?.zip}`);
    }

    const updateGiftCards = async (giftCards: Tender[]) => {
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

            if (item.itemAcquireTypeId && item.itemAcquireTypeId === '1'){
                const consigner = await DataStore.query(Client, item.clientItemsId ?? '');
                const storeCredit = await DataStore.query(StoreCredit, consigner?.clientCreditId ?? '');

                if (storeCredit) {
                    const fetchedItems = await storeCredit.items.toArray();

                    await DataStore.save(StoreCredit.copyOf(storeCredit, (updated) => {
                        updated.amount = storeCredit.amount ?? 0 + parseFloat(item.price) * parseFloat(consignmentPercentage);
                        updated.items = fetchedItems.length > 0 ? [...fetchedItems, item] : [item]
                    }));
                } else {
                    await DataStore.save(new StoreCredit({ amount: parseFloat(item.price) * parseFloat(consignmentPercentage), items: [item] }));
                }
            }

            if (item.itemAcquireTypeId && item.itemAcquisitionTypeId === '2') {
                const itemQty = item.qty ?? 1;
                await DataStore.save(Item.copyOf(item, (updated) => {
                    updated.qty = itemQty - 1;
                }));
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

        if (matchedItems.length > 0) {
            const item = matchedItems[0];

            if (item.statusId === '18') {
                showItemAlreadySold();
                return;
            }

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

    const startAddingConsigner = () => {
        setIsAddingConsigner(true);
    }

    const stopAddingConsigner = () => {
        setIsAddingConsigner(false);
    }

    const startAddingCoupon = () => {
        setIsAddingCoupon(true);
    }

    const stopAddingCoupon = async (couponId?: string) => {
        if (couponId) {
            const selectedCoupon = await DataStore.query(Coupon, couponId);
            if (selectedCoupon) {
                setCoupons((current) => [...current, selectedCoupon]);
            }
        }

        setIsAddingCoupon(false);
    }

    const intakeGiftCardData = async (giftCard?: GiftCard) => {
        if (giftCard) {
            const receivedAmount = amount >= giftCard.value ? giftCard.value : amount;
            const currentTenderedAmount =  await DataStore.save(new Tender({ label: TenderType.GIFT_CARD, receivedAmount, giftCardId: giftCard.id }));
            setTenders((cur) => {
                if (cur.length > 0) {
                    return [...cur, currentTenderedAmount]
                }

                return [currentTenderedAmount]
            })
        }

        stopProcessingPayment();
    }

    const addStoreCredit = async () => {
        const storeCredit = await DataStore.query(StoreCredit, selectedConsigner?.clientCreditId ?? '');
        if (storeCredit) {
            const receivedAmount = amount >= storeCredit.amount ? storeCredit?.amount : amount;
            const newTender = await DataStore.save(new Tender({ label: TenderType.STORE_CREDIT, receivedAmount }))
        }
    }

    const handleAddConsigner = async (consignerId?: string) => {
        if (!consignerId) {
            stopAddingConsigner();
            return;
        }

        const consigner = await DataStore.query(Client, consignerId);
        const consignerStoreCredit = await DataStore.query(StoreCredit, consigner?.clientCreditId ?? '');
        setSelectedConsigner(consigner);
        setSelectedConsignerCredit(consignerStoreCredit);
        stopAddingConsigner();
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
                open={isAddingConsigner}
                onClose={stopAddingConsigner}
            >
                <SelectConsigner close={handleAddConsigner}/>
            </Modal>
            <Modal
                open={isAddingCoupon}
                onClose={() => setIsAddingCoupon(false)}
            >
                <AddCoupon close={stopAddingCoupon} />
            </Modal>
            <Modal
                open={itemAlreadyScanned}
                onClose={hideItemAlreadyScanned}
            >
                <ModalContainer onClose={hideItemAlreadyScanned}>
                    <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                        <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                            <Typography mb='2rem' variant='h2'>Item has already been added to this transaction.</Typography>
                            <Button variant='contained' fullWidth={true} color='secondary' onClick={hideItemAlreadyScanned}>Ok</Button>
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
                            <Typography mb='2rem' variant='h2'>Item has already been sold.</Typography>
                            <Button variant='contained' fullWidth={true} color='secondary' onClick={hideItemAlreadySold}>Ok</Button>
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
                            <Typography mb='2rem' variant='h2'>Item not found.</Typography>
                            <Button variant='contained' fullWidth={true} color='secondary' onClick={hideItemNotFound}>Ok</Button>
                        </Box>
                    </Box>
                </ModalContainer>
            </Modal>
            <Box flex='1'>
                {coupons && 
                    <Box display='flex' flexDirection='column' padding='2rem'>
                        <Typography flex='1'>{`${coupons.length > 1 ? 'Coupons:' : 'Coupon:'}`}</Typography>
                        <Box display='flex' flexDirection='column'>
                            {coupons.map((c) => {
                                return (
                                    <Typography>{c.name} {c.type === CouponType.FLAT ? currencyFormatter.format(c.amount) : `${c.amount}%`} {c.type === CouponType.FLAT ? 'off' : ' percent off'}</Typography>
                                )
                            })}
                        </Box>
                    </Box>
                }
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
                    <Typography>{currencyFormatter.format(coupons.length < 1 ? amountWithTax : coupons.reduce((a: number, b: Coupon) => b.type === CouponType.FLAT ? a - b.amount : a * (b.amount / 100), amountWithTax))}</Typography>
                </Box>
                <Box marginTop='2rem'>
                    <form onSubmit={handleSubmit(handleManualEntry)}>
                        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                            <Box flex={1} marginRight='2rem' justifyContent='center' alignItems='center'>
                                <TextField
                                    fullWidth={true}
                                    color='primary'
                                    {...register('itemNumber', { required: true, minLength: 2 })}
                                />
                            </Box>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Button type='submit' variant='contained' fullWidth={true} color='primary'>Add Item</Button>
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
                        <Typography color={cashTender >= amountWithTax ? 'success' : 'error'}>{cashTender >= amountWithTax ? currencyFormatter.format((cashTender - amountWithTax)) : currencyFormatter.format(amountWithTax - cashTender)}</Typography>
                    </Box>
                }
                {tenderAmountHasBeenMet &&
                    <Box padding='2rem'>
                        <Button variant='contained' fullWidth={true} color='primary' onClick={completeTransaction}>Complete Transaction</Button>
                    </Box>
                }
            </Box>
            <Box>
                <Button variant='contained' fullWidth={true} color='primary' disabled={tenderAmountHasBeenMet} onClick={cash}>Cash</Button>
                <Button variant='contained' fullWidth={true} color='primary' disabled={tenderAmountHasBeenMet} onClick={card}>Credit / Debit</Button>
                <Button variant='contained' fullWidth={true} color='primary' disabled={tenderAmountHasBeenMet} onClick={giftCard}>Gift Card</Button>
                <Button variant='contained' fullWidth={true} color='primary' disabled={tenderAmountHasBeenMet} onClick={startAddingCoupon}>Coupon</Button>
                {selectedConsigner && <Button variant='contained' fullWidth={true} color='primary' disabled={tenderAmountHasBeenMet} onClick={addStoreCredit}>{currencyFormatter.format(parseFloat(selectedConsignerCredit?.amount.toString() ?? '0'))} Store Credit</Button>}
            </Box>
            <Box>
                <Button variant='contained' fullWidth={true} color='primary' onClick={startAddingConsigner}>Select Consigner</Button>
            </Box>
        </Box>
    )
}

export default CheckoutActions;