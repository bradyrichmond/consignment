import React, { useContext, useEffect, useState } from 'react';
import { Box, Chip, LinearProgress, Typography } from '@mui/material';
import { useDrag } from 'react-dnd'
import UserTypeReceiver from './UserTypeReceiver';
import { DataStore } from 'aws-amplify';
import { User, UserLevel } from '../../models';
import { CognitoContext } from '../../context';

const UserManagement = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [userLevels, setUserLevels] = useState<UserLevel[]>([])
    const [loading, setLoading] = useState(true);
    const { organizationId } = useContext(CognitoContext);

    useEffect(() => {
        const usersSub = DataStore.observeQuery(
            User,
            (u) => u.organizationUsersId.eq(organizationId)
        ).subscribe(snapshot => {
            const { items } = snapshot;
            setUsers(items);
        });

        const userLevelsSub = DataStore.observeQuery(
            UserLevel,
            (u) => u.userLevelOrganizationId.eq(organizationId)
        ).subscribe(snapshot => {
            const { items } = snapshot;
            setUserLevels(items);
        });

        return () => {
            usersSub.unsubscribe();
            userLevelsSub.unsubscribe();
        }
    }, [])

    return (
        <Box display='flex' flexDirection='row' height='100%'>
            {loading ? 
                <LinearProgress color='primary' />
                :
                <>
                    <Box flex='1' display='flex' flexDirection='column' height='100%'>
                        <Box padding='2rem'><Typography variant='h2'>User Management</Typography></Box>
                        <Box flex='1'>
                            {userLevels.map((u) => <UserTypeReceiver label={u.name} onDelete={() => {}} onDrop={() => {}} users={[]} />)}
                        </Box>
                    </Box>
                    <Box height='100%' width='20%' borderLeft='1px solid black' padding='2rem'>
                        {users &&
                            users.map((u) => <MovableUser key={u.id} user={u} />)
                        }
                    </Box>
                </>
            }
        </Box>
    )
}

interface MovableUserProps {
    user: User
}

const MovableUser = (props: MovableUserProps) => {
    const { user } = props;
    const [collected, drag] = useDrag(() => ({
        type: 'user',
        item: { ...user }
      }))

    return (
        // @ts-ignore
        <Chip ref={drag} label={user.Username} {...collected} />
    )
}

export default UserManagement;