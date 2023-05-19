import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import ModalContainer from '../../utils/ModalContainer';
import { Item } from '../../models';
import { useForm } from 'react-hook-form';
import { Auth, DataStore } from 'aws-amplify';

interface AddMissingTagItemProps {
    close: (item?: Item) => void
}

const AddMissingTagItem = (props: AddMissingTagItemProps) => {
    const { close } = props;
    const { register, handleSubmit } = useForm();
    const [userData, setUserData] = useState<any>();

    useEffect(() => {
        const getUserData = async () => {
            const fetchedUserData = await Auth.currentUserInfo();
            setUserData(fetchedUserData);
        }

        getUserData();
    }, [])

    const handleAddMissingTag = async (data: any) => {
        const newItem = await DataStore.save(new Item({ userId: userData.id, statusId: '18', itemName: data.description, price: data.price, description: data.description }));
        close(newItem);
    }

    return (
        <ModalContainer onClose={close}>
            <Box>
                <form onSubmit={handleSubmit(handleAddMissingTag)}>
                    <TextField label="Description" variant="standard" {...register('description', { minLength: 2 })} />
                    <TextField label="Price" variant="standard" {...register('price', { minLength: 2 })} />
                </form>
            </Box>
        </ModalContainer>
    )
}

export default AddMissingTagItem;