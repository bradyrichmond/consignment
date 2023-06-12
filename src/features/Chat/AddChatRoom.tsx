import React, { useEffect, useState } from 'react';
import ModalContainer from '../../utils/ModalContainer';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { ChatRoom, Location } from '../../models';

interface AddChatRoomProps {
    close: () => void
}

const AddChatRoom = (props: AddChatRoomProps) => {
    const { close } = props;
    const { register, handleSubmit } = useForm();
    const [stores, setStores] = useState<Location[]>([]);

    useEffect(() => {
        const getStores = async () => {
            const fetchedStores = await DataStore.query(Location);
            setStores(fetchedStores);
        }

        getStores();
    }, [])

    const handleAddChatRoom = async (data: any) => {
        const accessList = [];
        const location: string[] = [];

        if (data.salespeople) {
            accessList.push('Salespeople')
        }

        if (data.processors) {
            accessList.push('Processors')
        }

        if (data.managers) {
            accessList.push('Managers')
        }

        if (data.admins) {
            accessList.push('Admins')
        }

        stores.forEach((s: Location) => {
            if (data[s.locationName]) {
                location.push(s.id);
            }
        })

        await DataStore.save(new ChatRoom({ name: data.roomName, accessList, location }));
        close();
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <form onSubmit={handleSubmit(handleAddChatRoom)}>
                        <Box display='flex' flexDirection='column'>
                            <TextField label='Room Name' variant='standard' inputProps={{ 'data-testid': 'roomName' }} sx={{marginBottom: '2rem'}} {...register('roomName', { required: true, minLength: 2 })} />
                            <Typography variant='h4' sx={{marginBottom: '2rem'}}>Who can access?</Typography>
                            <Box display='flex' flexDirection='column'>
                                <Box flex='1'>
                                    <FormControlLabel control={<Checkbox {...register('salespeople')} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} defaultChecked />} label='Salespeople' />
                                    <FormControlLabel control={<Checkbox {...register('processors')} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} defaultChecked />} label='Processors' />
                                    <FormControlLabel control={<Checkbox {...register('managers')} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} defaultChecked />} label='Managers' />
                                    <FormControlLabel control={<Checkbox {...register('admins')} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} defaultChecked />} label='Admins' />
                                </Box>
                                {stores && 
                                    <Box flex='1'>
                                        {stores.map((s) => <FormControlLabel control={<Checkbox {...register(s.locationName)} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} defaultChecked />} label={s.locationName} />)}
                                    </Box>
                                }
                            </Box>
                            <Button type='submit' variant='contained'>Create new Chat Room</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default AddChatRoom;