import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { DrawerContext } from '../../context';
import ClientOverview from './ClientOverview';
import { Close } from '@mui/icons-material';
import ItemOverview from './ItemOverview';

const Drawer = () => {
    const { drawerContent, setDrawerContent } = useContext(DrawerContext);

    const closeDrawer = () => {
        setDrawerContent('');
    }

    return (
        <Box height='100%' bgcolor='primary'>
            {drawerContent && 
                <Box borderRadius='2rem' overflow='hidden' width='2rem' height='2rem' position='absolute' right='2rem' top='2rem' display='flex' justifyContent='center' alignItems='center' onClick={closeDrawer} zIndex='1000'>
                    <Close color='primary' />
                </Box>
            }
            <DrawerContentPicker drawerContent={drawerContent} />
        </Box>
    );
}

interface DrawerContentPickerProps {
    drawerContent: string
}

const DrawerContentPicker = ({ drawerContent }: DrawerContentPickerProps) => {
    switch (drawerContent) {
        case 'clientOverview':
            return <ClientOverview />
        case 'itemOverview':
            return <ItemOverview />
        default:
            return <></>
    }
}

export default Drawer;