import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Auth, DataStore, Predicates, SortDirection } from 'aws-amplify';
import ModalContainer from '../../utils/ModalContainer';
import { Address, Client } from '../../models';
import { add, format } from 'date-fns';

interface AddClientProps {
    close: () => void
}

const AddClient = ({ close }: AddClientProps) => {
    const { register, handleSubmit } = useForm();

    const handleAddClient = async (data: any) => {
        const { firstName, lastName, companyName, phoneNumber, email, addressLabel, address1, address2, address3, city, state, zipCode } = data;

        const clients = await DataStore.query(Client, Predicates.ALL, {
            sort: (c) => c.account(SortDirection.DESCENDING),
            limit: 1
        });

        const nextNewestClient = clients[0];
        const account = nextNewestClient ? (parseInt(nextNewestClient.account) + 1).toString() : '1';
        const fetchedModifiedBy = await Auth.currentUserInfo();
        const modifiedBy = fetchedModifiedBy.username;
        
        const newClient = await DataStore.save(new Client({ firstName, lastName, companyName, phone: phoneNumber, email, account, nextItemNumber: '1', receiveMailInd: false, modifiedBy, createTimestamp: format(Date.now(), "MM-dd-yyyy HH:mm:ss"), activeTimestamp: format(Date.now(), "MM-dd-yyyy HH:mm:ss"), inactiveTimestamp: format(add(Date.now(), {years: 1}), "MM-dd-yyyy HH:mm:ss") }));
        await DataStore.save(new Address({ addressLabel, address1, address2, address3, city, state, zip: zipCode, clientAddressesId: newClient.id }));
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom='2rem'>
                        Add Client
                    </Typography>
                    <form onSubmit={handleSubmit(handleAddClient)}>
                        <Box display='flex' flexDirection='column'>
                            <Box flexDirection='row'>
                                <TextField id="standard-basic" label="First Name" variant="standard" {...register('firstName', { required: true, minLength: 2 })} />
                                <TextField id="standard-basic" label="Last Name" variant="standard" {...register('lastName', { required: true, minLength: 2 })} sx={{marginLeft: '1rem'}} />
                            </Box>
                            <TextField id="standard-basic" label="Company Name" variant="standard" {...register('companyName', { minLength: 2 })} />
                            <TextField id="standard-basic" label="Phone Number" variant="standard" {...register('phoneNumber', { required: true, minLength: 2 })} />            
                            <TextField id="standard-basic" label="Email" variant="standard" {...register('email', { required: true, minLength: 2 })} />
                            <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Receive promotional email" />
                            <TextField id="standard-basic" label="Address Label" variant="standard" {...register('addressLabel', { minLength: 2 })} />
                            <TextField id="standard-basic" label="Address 1" variant="standard" {...register('address1', { required: true, minLength: 2 })} />
                            <TextField id="standard-basic" label="Address 2" variant="standard" {...register('address2')} />
                            <TextField id="standard-basic" label="Address 3" variant="standard" {...register('address3')} />
                            <Box flexDirection='row'>
                                <TextField id="standard-basic" label="City" variant="standard" {...register('city', { required: true, minLength: 2 })} />
                                <TextField id="standard-basic" label="State" variant="standard" {...register('state', { required: true, minLength: 2 })} sx={{marginLeft: '1rem'}} />
                            </Box>
                            <TextField id="standard-basic" label="Zip Code" variant="standard" {...register('zipCode', { required: true, minLength: 2 })} />
                            <Box marginTop='2rem'>
                                <Button variant='outlined' type='submit'>Add Client</Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddClient;