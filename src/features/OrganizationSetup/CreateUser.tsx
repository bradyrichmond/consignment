import React, { useContext } from 'react';
import { Box, Button, Paper, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Auth, DataStore } from 'aws-amplify';
import { User, UserLevel } from '../../models';
import { useLocation, useNavigate } from 'react-router-dom';
import { CognitoContext } from '../../context';

const CreateUser = () => {
    const { handleSubmit, register } = useForm();
    const { state } = useLocation();
    const { createAdmin } = state;
    const { organizationId } = useContext(CognitoContext);
    const navigate = useNavigate();

    const handleCreateUser = async (formData: any) => {
        const { firstName, lastName } = formData;
        const cognitoUser = await Auth.currentUserInfo();
        const adminUserlevel = await DataStore.query(UserLevel, (u) => u.name.eq('Admin'));

        if (adminUserlevel) {
            const newUserData = createAdmin ? { firstName, lastName, cognitoId: cognitoUser.id, userLevel: adminUserlevel, organizationUsersId: organizationId } : { firstName, lastName, cognitoId: cognitoUser.id, organizationUsersId: organizationId }
            await DataStore.save(new User(newUserData));
        }

        if (createAdmin) {
            navigate('/');
            return;
        }

        navigate('/create-user-complete')
    }

    return (
        <Box height='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='background.default'>
            <Paper style={{padding: '2rem'}}>
                <form onSubmit={handleSubmit(handleCreateUser)}>
                    <Box display='flex' flexDirection='column'>
                        <TextField label='First Name' variant='standard' inputProps={{ 'data-testid': 'addFirstName' }} {...register('firstName', { required: true, minLength: 2 })} />
                        <TextField label='Last Name' variant='standard' inputProps={{ 'data-testid': 'addLastName' }} {...register('lastName', { required: true, minLength: 2 })} />
                        <Button type='submit' variant='contained' style={{marginTop: '2rem'}}>Create New User</Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    )
}

export default CreateUser;