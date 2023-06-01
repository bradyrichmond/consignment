import React, { useEffect, useState } from 'react';
import { Box, Chip, LinearProgress, Typography } from '@mui/material';
import { API, Auth } from 'aws-amplify';
import { useDrag } from 'react-dnd'
import UserTypeReceiver from './UserTypeReceiver';
import { addUserToGroup, getUsersInGroup, removeUserFromGroup } from '../../utils/AdminActions';

const UserManagement = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [admins, setAdmins] = useState<any[]>([]);
    const [managers, setManagers] = useState<any[]>([]);
    const [processors, setProcessors] = useState<any[]>([]);
    const [salespeople, setSalespeople] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        const fetchedUsers = await API.get('AdminQueries', '/listUsers', {
            headers: {
            'Content-Type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }});
        setUsers(fetchedUsers.Users);

        const fetchedAdmins = await getUsersInGroup('Admins');
        setAdmins(fetchedAdmins.Users);

        const fetchedManagers = await getUsersInGroup('Managers');
        setManagers(fetchedManagers.Users);

        const fetchedProcessors = await getUsersInGroup('Processors');
        setProcessors(fetchedProcessors.Users);

        const fetchedSalespeople = await getUsersInGroup('Salespeople')
        setSalespeople(fetchedSalespeople.Users);
        setLoading(false);
    }

    useEffect(() => {
        getUsers();
    }, [])

    const handleRemoveAdmin = async (user: any) => {
        const userId = user.Attributes.filter((a:any) => a.Name === 'sub')[0].Value;
        const username = user.Username;
        setAdmins((cur) => [...cur].filter((a) => a.Attributes.filter((a:any) => a.Name === 'sub')[0].Value !== userId));
        await removeUserFromGroup(username, 'Admins');
        getUsers();
    }

    const handleDropAdmin = async (user: any) => {
        const username = user.Username;
        setAdmins((cur: any[]) => cur.length > 0 ? [...cur, user] : [user]);
        await addUserToGroup(username, 'Admins');
        getUsers();
    }

    const handleRemoveManager = async (user: any) => {
        const userId = user.Attributes.filter((a:any) => a.Name === 'sub')[0].Value;
        const username = user.Username;
        setManagers((cur) => [...cur].filter((a) => a.Attributes.filter((a:any) => a.Name === 'sub')[0].Value !== userId));
        await removeUserFromGroup(username, 'Managers');
        getUsers();
    }

    const handleDropManager = async (user: any) => {
        const username = user.Username;
        setManagers((cur: any[]) => cur.length > 0 ? [...cur, user] : [user]);
        await addUserToGroup(username, 'Managers');
        getUsers();
    }

    const handleRemoveProcessor = async (user: any) => {
        const userId = user.Attributes.filter((a:any) => a.Name === 'sub')[0].Value;
        const username = user.Username;
        setManagers((cur) => [...cur].filter((a) => a.Attributes.filter((a:any) => a.Name === 'sub')[0].Value !== userId));
        await removeUserFromGroup(username, 'Processors');
        getUsers();
    }

    const handleDropProcessor = async (user: any) => {
        const username = user.Username;
        setManagers((cur: any[]) => cur.length > 0 ? [...cur, user] : [user]);
        await addUserToGroup(username, 'Processors');
        getUsers();
    }

    const handleRemoveSalesperson = async (user: any) => {
        const userId = user.Attributes.filter((a:any) => a.Name === 'sub')[0].Value;
        const username = user.Username;
        setSalespeople((cur) => [...cur].filter((a) => a.Attributes.filter((a:any) => a.Name === 'sub')[0].Value !== userId));
        await removeUserFromGroup(username, 'Salespeople');
        getUsers();
    }

    const handleDropSalesperson = async (user: any) => {
        const username = user.Username;
        setSalespeople((cur: any[]) => cur.length > 0 ? [...cur, user] : [user]);
        await addUserToGroup(username, 'Managers');
        getUsers();
    }

    return (
        <Box display='flex' flexDirection='row' height='100%'>
            {loading ? 
                <LinearProgress color='primary' />
                :
                <>
                    <Box flex='1' display='flex' flexDirection='column' height='100%'>
                        <Box padding='2rem'><Typography variant='h2'>User Management</Typography></Box>
                        <Box flex='1'>
                            <UserTypeReceiver label='Admin' onDelete={handleRemoveAdmin} onDrop={handleDropAdmin} users={admins} />
                            <UserTypeReceiver label='Manager' onDelete={handleRemoveManager} onDrop={handleDropManager} users={managers} />
                            <UserTypeReceiver label='Processors' onDelete={handleRemoveProcessor} onDrop={handleDropProcessor} users={processors} />
                            <UserTypeReceiver label='Salespeople' onDelete={handleRemoveSalesperson} onDrop={handleDropSalesperson} users={salespeople} />
                        </Box>
                    </Box>
                    <Box height='100%' width='20%' borderLeft='1px solid black' padding='2rem'>
                        {users &&
                            users.map((u) => <MovableUser key={u.Attributes.filter((a: any) => a.Name === 'sub')[0].Value} user={u} />)
                        }
                    </Box>
                </>
            }
        </Box>
    )
}

interface MovableUserProps {
    user: any
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