import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { format } from 'date-fns';
import UserAvatar from "../../utils/UserAvatar";
import useStoreLocation from '../../utils/useStoreLocation';
import { Link, useNavigate } from 'react-router-dom';

const navItems = [
    {
        label: 'Attribute Types',
        navUrl: 'attribute-types'
    },
    {
        label: 'Brands',
        navUrl: 'brands'
    },
    {
        label: 'Categories',
        navUrl: 'categories'
    },
    {
        label: 'Consigners',
        navUrl: 'consigners'
    },
    {
        label: 'Items',
        navUrl: 'items'
    },
    {
        label: 'Point of Sale',
        navUrl: 'pos'
    },
    {
        label: 'Settings',
        navUrl: 'settings'
    },
];

const Navigation = () => {
    const [activeTab, setActiveTab] = useState('');

    const setActiveNav = (label: string) => {
        setActiveTab(label);
    }

    return (
        <Box display='flex' flexDirection='row' width='100%'  bgcolor='background.default' borderBottom='1px solid' borderColor='primary'>
            <Box flex='1' display='flex' flexDirection='row' padding='2rem' height='100%'>
                {navItems.length > 0 && 
                    navItems.map((ni) => <NavItem key={ni.label} label={ni.label} navUrl={ni.navUrl} onClick={() => setActiveNav(ni.label)} active={ni.label === activeTab}/>)
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
        <Box flex='1' height='100%' display='flex' justifyContent='center' alignItems='center' onClick={handleClick} borderBottom={active ? '5px solid white' : 'inherit'}>
            <Typography variant='h2'>{label}</Typography>
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
        <Box display='flex' flexDirection='row' padding='2rem' fontSize='2rem'>
            <Box marginRight='2rem' display='flex' justifyContent='center' alignItems='center'><AccessTimeIcon color='primary' fontSize='large'/></Box>
            {locationData?.locationName && <Box flex='1'>{locationData?.locationName}</Box>}
            <Box flex='1'>{format(time, "eee, MMM do, yyyy | h:mm bbb")}</Box>
            <Box><UserAvatar /></Box>
        </Box>
    )
}

export default Navigation;