import React, { useContext, useEffect, useState } from 'react';
import { Badge, Box, LinearProgress, Modal, Tooltip, Typography } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { format } from 'date-fns';
import UserAvatar from "../../utils/UserAvatar";
import useStoreLocation from '../../utils/useStoreLocation';
import { useNavigate } from 'react-router-dom';
import { CognitoContext } from '../../context';
import { Auth, DataStore } from 'aws-amplify';
import { ConsignmentDropoff } from '../../models';
import StyleIcon from '@mui/icons-material/Style';
import CategoryIcon from '@mui/icons-material/Category';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ExtensionIcon from '@mui/icons-material/Extension';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import TuneIcon from '@mui/icons-material/Tune';
import GroupIcon from '@mui/icons-material/Group';
import CreateIcon from '@mui/icons-material/Create';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForumIcon from '@mui/icons-material/Forum';
import ConfirmModal from '../../utils/ConfirmModal';
import ModalContainer from '../../utils/ModalContainer';

// this should probably be decided by an admin too
const navItems = [
    {
        label: 'Attribute Types',
        navUrl: 'attribute-types',
        userGroups: [],
        icon: <CreateIcon fontSize='large' />
    },
    {
        label: 'Appointments',
        navUrl: 'appointments',
        userGroups: [],
        icon: <CalendarMonthIcon fontSize='large' />
    },
    {
        label: 'Brands',
        navUrl: 'brands',
        userGroups: [],
        icon: <StyleIcon fontSize='large' />
    },
    {
        label: 'Categories',
        navUrl: 'categories',
        userGroups: [],
        icon: <CategoryIcon fontSize='large' />
    },
    {
        label: 'Chat',
        navUrl: 'chat',
        userGroups: [],
        icon: <ForumIcon fontSize='large' />
    },
    {
        label: 'Consigners',
        navUrl: 'consigners',
        userGroups: [],
        icon: <ContactEmergencyIcon fontSize='large' />
    },
    {
        label: 'Concierge',
        navUrl: 'concierge/employee',
        userGroups: ['Salespeople', 'Processors', 'Managers', 'Admins'],
        icon: <RoomServiceIcon fontSize='large' />
    },
    {
        label: 'Coupons',
        navUrl: 'coupons',
        userGroups: [],
        icon: <PriceChangeIcon fontSize='large' />   
    },
    {
        label: 'Items',
        navUrl: 'items',
        userGroups: [],
        icon: <ExtensionIcon fontSize='large' />
    },
    {
        label: 'Point of Sale',
        navUrl: 'pos',
        userGroups: [],
        icon: <PointOfSaleIcon fontSize='large' />
    },
    {
        label: 'Reports',
        navUrl: 'reports',
        userGroups: [],
        icon: <SsidChartIcon fontSize='large' />
    },
    {
        label: 'Settings',
        navUrl: 'settings',
        userGroups: ['Admins'],
        icon: <TuneIcon fontSize='large' />
    },
    {
        label: 'User Management',
        navUrl: 'user-management',
        userGroups: [],
        icon: <GroupIcon fontSize='large' />
    },
];

const Navigation = () => {
    const [activeTab, setActiveTab] = useState('');
    const [expanded, setExpanded] = useState(false);
    const { userGroups } = useContext(CognitoContext);

    const setActiveNav = (label: string) => {
        setActiveTab(label);
    }

    const toggleExpand = () => {
        setExpanded((cur) => !cur);
    }

    return (
        <Box display='flex' flexDirection='column' bgcolor='primary.main'>
            <Box padding='2rem' color='white' display='flex' flexDirection='row' justifyContent={expanded ? 'flex-end' : 'flex-start'} onClick={toggleExpand}>
                {expanded ? <KeyboardDoubleArrowLeftIcon /> : <DoubleArrowIcon />}
            </Box>
            <Box flex='1' display='flex' flexDirection='column' padding='2rem' height='100%'>
                {navItems.length > 0 && 
                    navItems.map((ni) => {
                        const allowed = userGroups.filter((value) => ni.userGroups.includes(value));
                        if (allowed.length > 0) {
                            return ni.label === 'Concierge' ? <ConciergeNavItem key={ni.label} label={ni.label} navUrl={ni.navUrl} icon={ni.icon} onClick={() => setActiveNav(ni.label)} active={ni.label === activeTab} expanded={expanded} /> : <NavItem key={ni.label} label={ni.label} navUrl={ni.navUrl} icon={ni.icon} onClick={() => setActiveNav(ni.label)} active={ni.label === activeTab} expanded={expanded} />;
                        }
                    })
                }
            </Box>
            <Status expanded={expanded} />
        </Box>
    )
}

interface NavItemProps {
    active: boolean
    label: string
    navUrl: string
    onClick: () => void
    icon?: React.ReactElement
    expanded: boolean
}

const NavItem = (props: NavItemProps) => {
    const { active, label, navUrl, onClick, icon, expanded } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navUrl);
        onClick();
    }

    return (
        <Box flex='1' height='100%' display='flex' flexDirection='row' alignItems='center' color='white' onClick={handleClick} sx={{'&:hover': { cursor: 'pointer' }}}>
            {icon}
            {expanded && <Typography variant='h5' sx={{marginLeft: '2rem', whiteSpace: 'nowrap'}}>{label}</Typography>}
        </Box>
    )
}

const ConciergeNavItem = (props: NavItemProps) => {
    const { active, label, navUrl, onClick, icon, expanded } = props;
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
        <Box flex='1' height='100%' display='flex' alignItems='center' flexDirection='row' color='white' onClick={handleClick} sx={{'&:hover': { cursor: 'pointer' }}}>
            <Badge badgeContent={waitingCount} color='error'>
                {icon}
                {expanded && <Typography variant='h5' sx={{marginLeft: '2rem'}}>{label}</Typography>}
            </Badge>
        </Box>
    )
}

interface StatusProps {
    expanded: boolean
}

const Status = (props: StatusProps) => {
    const { expanded } = props;
    const [time, setTime] = useState<number>(0);
    const locationData = useStoreLocation();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [waitingForLogout, setWaitingForLogout] = useState(false);
    const navigate = useNavigate();
    const cognito = useContext(CognitoContext);

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

    const cancelLogOut = () => {
        setIsLoggingOut(false);
    }

    const startLogOut = () => {
        setIsLoggingOut(true);
    }

    const finishLogOut = () => {
        Auth.signOut();
        cancelLogOut();
        setWaitingForLogout(true);

        setTimeout(() => {
            cognito.setUserIsLoggedIn(false);
            cognito.setUserGroups([]);
            setWaitingForLogout(false);
            navigate('/');
        }, 3000)
    }

    return (
        <Box display='flex' flexDirection='column' padding='2rem' fontSize='1rem'>
            <Modal
                open={isLoggingOut}
                onClose={cancelLogOut}
            >
                <ConfirmModal close={cancelLogOut} validationText={`Are you sure you want to log out?`} cancelText='Cancel' confirmText='Log Out' confirm={finishLogOut} cancel={cancelLogOut}/>
            </Modal>
            <Modal
                open={waitingForLogout}
                onClose={() => {}}
            >
                <ModalContainer onClose={() => {}}>
                    <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                        <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                            <Typography>Logging out...</Typography>
                            <LinearProgress color='primary' />
                        </Box>
                    </Box>
                </ModalContainer>
            </Modal>
            <Box display='flex' flexDirection='row' color='white'>
                {!expanded &&
                    <Tooltip title={format(time, "eeee MMM do, yyyy h:mm bbb")}>
                        <Box display='flex' alignItems='center'><AccessTimeFilledIcon color='secondary' fontSize='large'/></Box>
                    </Tooltip>
                }
                {expanded && <Box flex='1' display='flex' alignItems='flex-start' marginLeft='2rem'>{format(time, "eee MMM do, yyyy h:mm bbb")}</Box>}
            </Box>
            {expanded && locationData?.locationName && <Box flex='1' display='flex' justifyContent='center' alignItems='center' color='white'>{locationData?.locationName}</Box>}
            <Box display='flex' alignItems='center' marginTop='2rem' onClick={startLogOut}>
                <UserAvatar small={!expanded}/>
            </Box>
        </Box>
    )
}

export default Navigation;