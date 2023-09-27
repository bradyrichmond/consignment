import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataStore, Storage } from 'aws-amplify';
import { CognitoContext } from '../../context';
import { Organization } from '../../models';

const OrganizationImageUpload = () => {
    const { organizationId, organization, setOrganization } = useContext(CognitoContext);
    const [imageUrl, setImageUrl] = useState('');

    const getLogoUrl = async () => {
        const logoId = organization.logoId;
        if (logoId) {
            const fetchedImageUrl = await Storage.get(logoId);
            setImageUrl(fetchedImageUrl);
        }
    }

    useEffect(() => {
        getLogoUrl();
    }, [])

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e?.target?.files;
        if (files) {
            const file = files[0];
            try {
                const uploaded = await Storage.put(file.name, file, { level: 'public' });
                const imageKey = uploaded.key;

                const current = await DataStore.query(Organization, organizationId);
                if (current) {
                    const updatedOrganization = await DataStore.save(Organization.copyOf(current, (updated) => { updated.logoId = imageKey }));
                    setOrganization(updatedOrganization);
                }

                getLogoUrl();
            } catch (e) {
                console.error(JSON.stringify(e));
            }
        }
    }

    return (
        <Paper style={{padding: '2rem'}}>
            <Typography variant='h2' style={{marginBottom: '2rem'}}>Organization Logo</Typography>
            {imageUrl && 
                <Box>
                    <Typography>Current Logo</Typography>
                    <img src={imageUrl} alt='organization logo' />
                </Box>
            }
            <Button variant="contained" component="label">
                Upload File
                <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                    accept='image'
                />
            </Button>
        </Paper>
    )
}

export default OrganizationImageUpload;