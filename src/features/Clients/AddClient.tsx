import React, { useContext } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Auth, DataStore, Predicates, SortDirection } from 'aws-amplify';
import ModalContainer from '../../utils/ModalContainer';
import { Address, Client } from '../../models';
import { add, format } from 'date-fns';
import { CognitoContext } from '../../context';

interface AddClientProps {
    close: () => void
}

const AddClient = ({ close }: AddClientProps) => {
    const { register, handleSubmit } = useForm();
    const { organization, organizationId } = useContext(CognitoContext);

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
        
        const newClient = await DataStore.save(new Client({ firstName, lastName, companyName, phone: phoneNumber, email, account, nextItemNumber: '1', receiveMailInd: false, modifiedBy, createTimestamp: format(Date.now(), "yyyy-MM-dd"), activeTimestamp: format(Date.now(), "yyyy-MM-dd"), inactiveTimestamp: format(add(new Date(), {years: 1}), "yyyy-MM-dd"), organization, clientOrganizationId: organizationId }));
        await DataStore.save(new Address({ addressLabel, address1, address2, address3, city, state, zip: zipCode, clientAddressesId: newClient.id }));
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <form onSubmit={handleSubmit(handleAddClient)}>
                        <Box display='flex' flexDirection='column'>
                            <Box flexDirection='row'>
                                <TextField label="First Name" variant="standard" inputProps={{ 'data-testid': 'newClientFirstName' }} {...register('firstName', { required: true, minLength: 2 })} />
                                <TextField label="Last Name" variant="standard" inputProps={{ 'data-testid': 'newClientLastName' }} {...register('lastName', { required: true, minLength: 2 })} sx={{marginLeft: '1rem'}} />
                            </Box>
                            <TextField label="Company Name" variant="standard" inputProps={{ 'data-testid': 'newClientCompanyName' }} {...register('companyName', { minLength: 2 })} />
                            <TextField label="Phone Number" variant="standard" inputProps={{ 'data-testid': 'newClientPhoneNumber' }} {...register('phoneNumber', { required: true, minLength: 2 })} />            
                            <TextField label="Email" variant="standard" inputProps={{ 'data-testid': 'newClientEmail' }} {...register('email', { required: true, minLength: 2 })} />
                            <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Receive promotional email" />
                            <TextField label="Address Label" variant="standard" inputProps={{ 'data-testid': 'newClientAddressLabel' }} {...register('addressLabel', { minLength: 2 })} />
                            <TextField label="Address 1" variant="standard" inputProps={{ 'data-testid': 'newClientAddress1' }} {...register('address1', { required: true, minLength: 2 })} />
                            <TextField label="Address 2" variant="standard" inputProps={{ 'data-testid': 'newClientAddress2' }} {...register('address2')} />
                            <TextField label="Address 3" variant="standard" inputProps={{ 'data-testid': 'newClientAddress3' }} {...register('address3')} />
                            <Box flexDirection='row'>
                                <TextField label="City" variant="standard" inputProps={{ 'data-testid': 'newClientCity' }} {...register('city', { required: true, minLength: 2 })} />
                                <TextField label="State" variant="standard" inputProps={{ 'data-testid': 'newClientState' }} {...register('state', { required: true, minLength: 2 })} sx={{marginLeft: '1rem'}} />
                            </Box>
                            <TextField label="Zip Code" variant="standard" inputProps={{ 'data-testid': 'newClientZipCode' }} {...register('zipCode', { required: true, minLength: 2 })} />
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