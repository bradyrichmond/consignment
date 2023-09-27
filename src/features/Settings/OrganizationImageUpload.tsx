import React, { ChangeEvent, useContext } from 'react';
import { Box, Button } from '@mui/material';
import { DataStore, Storage } from 'aws-amplify';
import { CognitoContext } from '../../context';
import { Organization } from '../../models';

const OrganizationImageUpload = () => {
    const { organizationId } = useContext(CognitoContext);

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e?.target?.files;
        if (files) {
            const file = files[0];
            const uploaded = await Storage.put(file.name, file);
            const imageKey = uploaded.key;

            const current = await DataStore.query(Organization, organizationId);
            if (current) {
                await DataStore.save(Organization.copyOf(current, (updated) => { updated.logoId = imageKey }));
            }
        }
    }

    return (
        <Box>
            <Button variant="contained" component="label">
                Upload File
                <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                    accept='image'
                />
            </Button>
        </Box>
    )
}

export default OrganizationImageUpload;