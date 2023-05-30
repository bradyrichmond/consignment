import React, { useContext, useEffect, useState } from 'react';
import { Badge, Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { format } from 'date-fns';
import UserAvatar from "../../utils/UserAvatar";
import useStoreLocation from '../../utils/useStoreLocation';
import { useNavigate } from 'react-router-dom';
import { CognitoContext } from '../../context';
import { DataStore } from 'aws-amplify';
import { ConsignmentDropoff } from '../../models';

// this should probably be decided by an admin too
const navItems = [
    {
        label: 'Attribute Types',
        navUrl: 'attribute-types',
        userGroups: ['Manager', 'Admins']
    },
    {
        label: 'Brands',
        navUrl: 'brands',
        userGroups: ['Manager', 'Admins']
    },
    {
        label: 'Categories',
        navUrl: 'categories',
        userGroups: ['Manager', 'Admins']
    },
    {
        label: 'Consigners',
        navUrl: 'consigners',
        userGroups: ['Salespeople', 'Processors', 'Managers', 'Admins']
    },
    {
        label: 'Concierge',
        navUrl: 'concierge/employee',
        userGroups: ['Salespeople', 'Processors', 'Managers', 'Admins']
    },
    {
        label: 'Coupons',
        navUrl: 'coupons',
        userGroups: ['Admins']
    },
    {
        label: 'Items',
        navUrl: 'items',
        userGroups: ['Salespeople', 'Processors', 'Managers', 'Admins']
    },
    {
        label: 'Point of Sale',
        navUrl: 'pos',
        userGroups: ['Salespeople', 'Processors', 'Managers', 'Admins']
    },
    {
        label: 'Reports',
        navUrl: 'reports',
        userGroups: ['Manager', 'Admins']
    },
    {
        label: 'Settings',
        navUrl: 'settings',
        userGroups: ['Admins']
    },
    {
        label: 'User Management',
        navUrl: 'user-management',
        userGroups: ['Admins']
    },
];

const Navigation = () => {
    const [activeTab, setActiveTab] = useState('');
    const { userGroups } = useContext(CognitoContext);

    const setActiveNav = (label: string) => {
        setActiveTab(label);
    }

    return (
        <Box display='flex' flexDirection='row' width='100%'  bgcolor='background.default' borderBottom='1px solid' borderColor='primary'>
            <Box flex='1' display='flex' flexDirection='row' padding='2rem' height='100%'>
                {navItems.length > 0 && 
                    navItems.map((ni) => {
                        const allowed = userGroups.filter((value) => ni.userGroups.includes(value));
                        if (allowed.length > 0) {
                            return ni.label === 'Concierge' ? <ConciergeNavItem key={ni.label} label={ni.label} navUrl={ni.navUrl} onClick={() => setActiveNav(ni.label)} active={ni.label === activeTab}/> : <NavItem key={ni.label} label={ni.label} navUrl={ni.navUrl} onClick={() => setActiveNav(ni.label)} active={ni.label === activeTab}/>;
                        }
                    })
                }
            </Box>
            <Box minWidth='20%'>
                <Status />
            </Box>
        </Box>
    )
}

interface NavItemProps {
    active: boolean
    label: string
    navUrl: string
    onClick: () => void
}

const NavItem = (props: NavItemProps) => {
    const { active, label, navUrl, onClick } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navUrl);
        onClick();
    }

    return (
        <Box flex='1' height='100%' display='flex' justifyContent='center' alignItems='center' onClick={handleClick} borderBottom={active ? '5px solid white' : 'inherit'} sx={{'&:hover': { cursor: 'pointer' }}}>
            <Typography variant='h5'>{label}</Typography>
        </Box>
    )
}

const ConciergeNavItem = (props: NavItemProps) => {
    const { active, label, navUrl, onClick } = props;
    const navigate = useNavigate();
    const [waitingCount, setWaitingCount] = useState(0);

    useEffect(() => {
        const waitingSub = DataStore.observeQuery(
            ConsignmentDropoff,
                c => c.and((c) => [
                    c.complete.eq(false),
                    c.cubby.locationId.eq(localStorage.getItem('locationId') ?? '')
                ])
            ).subscribe(snapshot => {
                const { items, isSynced } = snapshot;
                setWaitingCount(items.length);
        });

        return () => {
            waitingSub.unsubscribe();
        }
    }, [])

    const handleClick = () => {
        navigate(navUrl);
        onClick();
    }

    return (
        <Box flex='1' height='100%' display='flex' justifyContent='center' alignItems='center' onClick={handleClick} borderBottom={active ? '5px solid white' : 'inherit'} sx={{'&:hover': { cursor: 'pointer' }}}>
            <Badge badgeContent={waitingCount} color='error'>
                <Typography variant='h5'>{label}</Typography>
            </Badge>
        </Box>
    )
}

const Status = () => {
    const [time, setTime] = useState<number>(0);
    const locationData = useStoreLocation();

    useEffect(() => {
        const getTime = () => {
            const currentTime = Date.now();
            setTime(currentTime);
        }
        const ticker = setInterval(getTime, 1000);
        getTime();

        return () => {
            clearInterval(ticker);
        }
    }, [])

    return (
        <Box display='flex' flexDirection='row' padding='2rem' fontSize='1rem'>
            <Box marginRight='2rem' display='flex' justifyContent='center' alignItems='center'><AccessTimeIcon color='primary' fontSize='large'/></Box>
            <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{format(time, "eeee MMM do, yyyy h:mm bbb")}</Box>
            {locationData?.locationName && <Box flex='1' display='flex' justifyContent='center' alignItems='center'>{locationData?.locationName}</Box>}
            <Box display='flex' justifyContent='center' alignItems='center'><UserAvatar /></Box>
        </Box>
    )
}

export default Navigation;