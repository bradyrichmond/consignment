import React, { useEffect, useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { format } from 'date-fns';

import { currencyFormatter, currencyFormatterNoSign, generateReceipt } from "../../utils/PrintReceipt";
import UserAvatar from "../../utils/UserAvatar";
import ProcessCash from "./ProcessCash";
import { API } from "aws-amplify";
import { Item } from "../../models";
import ProcessingCard, { STEPS } from "./ProcessingCard";

interface CheckoutActionsProps {
    items: Item[]
}

const CheckoutActions = (props: CheckoutActionsProps) => {
    const { items } = props;
    const [time, setTime] = useState<number>(0);
    const [intentSecret, setIntentSecret] = useState('');
    const [isProcessingCash, setIsProcessingCash] = useState<boolean>(false);
    const [isProcessingCard, setIsProcessingCard] = useState<boolean>(false);
    const [tenders, setTenders] = useState<{label: string, receivedAmount: number}[]>([]);
    const [totalTenderedAmount, setTotalTenderedAmount] = useState(0);
    const [cashTender, setCashTender] = useState(0);
    const [cardProcessingStep, setCardProcessingStep] = useState('');
    const [terminal, setTerminal] = useState();
    const [tenderAmountHasBeenMet, setTenderAmountHasBeenMet] = useState(false);
    
    const amount = items.reduce((a,b) => a + parseFloat(b.price), 0)

    const amountWithTax = amount * 1.1;


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

        initializeTerminal();
    }, [])

    useEffect(() => {
        connectReaderHandler();
    }, [terminal])

    useEffect(() => {
        if (amountWithTax.toString().includes(totalTenderedAmount.toString())) {
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
    }

    const completeTransaction = () => {
        // this will just create the zprint directions at this point, it won't print a receipt
        generateReceipt(items, tenders, 'SomeGenericTransactionId', '123 Test', 'Test, Wa 99999');
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
                <ProcessingCard step={cardProcessingStep} close={() => setIsProcessingCard(false) }/>
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
            </Box>
        </Box>
    )
}

export default CheckoutActions;