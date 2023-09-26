import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { Organization } from '../../models';

const OrganizationSetup = () => {
    const { handleSubmit, register } = useForm();

    const handleCreateOrganization = async (formData: any) => {
        await DataStore.save(new Organization({ name: formData.organizationName,  }))
    }

    return (
        <Box padding='2rem'>
            <form onSubmit={handleSubmit(handleCreateOrganization)}>
                <Box display='flex' flexDirection='column'>
                    <TextField label='Organization Name' variant='standard' inputProps={{ 'data-testid': 'addCategoryName' }} {...register('categoryName', { required: true, minLength: 2 })} />
                    <Button type='submit' style={{marginTop: '2rem'}}>Create New Organization</Button>
                </Box>
            </form>
        </Box>
    )
}

export default OrganizationSetup;