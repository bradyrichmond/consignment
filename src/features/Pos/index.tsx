import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { API } from 'aws-amplify';
import CheckoutActions from './CheckoutActions';

enum PAYMENT_INTENT_STATUS {
    declined = 'requires_payment_method',
    retry = 'requires_confirmation'
}

const ITEMS = [{description: 'test description', price: '2.99'}, {description: 'test description', price: '2.99'}, {description: 'test description', price: '2.99'}];

const Pos = () => {
    const [terminal, setTerminal] = useState();
    const [intentSecret, setIntentSecret] = useState('');

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

    const startTakePayment = async () => {
        const paymentIntent = await API.post('stripeApi', '/create-payment-intent', {
            body: { amount: 50 },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"}
            });
        const paymentIntentSecret = paymentIntent.clientSecret;
        setIntentSecret(paymentIntentSecret);
        collectPaymentMethod(paymentIntentSecret)
    }

    const collectPaymentMethod = async (secret: string) => {
        // clientSecret is the client_secret from the PaymentIntent you created in Step 1.
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
        //@ts-ignore
        const result = await terminal.processPayment(paymentIntent);
        if (result.error) {
          // Placeholder for handling result.error
          console.error(JSON.stringify(result));
        } else if (result.paymentIntent) {
          // Placeholder for notifying your backend to capture result.paymentIntent.id
          console.log('payment success')
        }
      }

    return (
        <Box padding='2rem' display='flex' flexDirection='row' height='100%'>
            <Box flex='1' flexDirection='column-reverse'>
                {ITEMS && ITEMS.map((item) => <ListItem description={item.description} price={item.price} />)}
            </Box>
            <Box  width='20%'>
                <CheckoutActions amount={ITEMS.reduce((a,b) => a + parseFloat(b.price), 0)}/>
            </Box>
        </Box>
    )
}

interface ListItemProps {
    price: string
    description: string
}

const ListItem = (props: ListItemProps) => {
    const { price, description } = props;

    return (
        <Box display='flex' flexDirection='row' padding='2rem' marginBottom='1rem' border='1px solid white' borderRadius='.25rem'>
            <Box flex='1' paddingRight='2rem'>
                {description}
            </Box>
            <Box justifyContent='center' alignItems='center'>
                {price}
            </Box>
        </Box>
    )
}

export default Pos;