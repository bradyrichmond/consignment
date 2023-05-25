import React, { useEffect, useState } from 'react';
import ConfirmModal from '../../utils/ConfirmModal';
import { DataStore, SortDirection } from 'aws-amplify';
import TodayIcon from '@mui/icons-material/Today';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box, Modal, Typography, keyframes } from '@mui/material';
import { ConsignmentDropoff, Cubby } from '../../models';
import useStoreLocation from '../../utils/useStoreLocation';

const pulse = keyframes`
    from {
        opacity: 1 
    }
    to {
        opacity: 0
    }
`

const EmployeeDisplay = () => {
    const [customers, setCustomers] = useState<ConsignmentDropoff[]>([])
    const [deletedCustomers, setDeletedCustomers] = useState<ConsignmentDropoff[]>([]);
    const [validatingDelete, setValidatingDelete] = useState(false);
    const [validatingRevive, setValidatingRevive] = useState(false);
    const [oversizedDescription, setOversizedDescription] = useState('');
    const [showingOversizedDescription, setShowingOversizedDescription] = useState(false);
    const [activeId, setActiveId] = useState('');
    const [cubbyData, setCubbyData] = useState<Cubby[]>([]);
    const locationData = useStoreLocation();

    useEffect(() => {
        const waitingSub = DataStore.observeQuery(
            ConsignmentDropoff,
            c => c.complete.eq(false), {
              sort: s => s.createdAt(SortDirection.DESCENDING)
            }
          ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;

            if (isSynced) {
                setCustomers(items);
            }
        });

        const deletedSub = DataStore.observeQuery(
            ConsignmentDropoff,
            c => c.complete.eq(true), {
              sort: s => s.createdAt(SortDirection.DESCENDING),
            }
          ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;

            const subset = items.slice(0, 10);

            if (isSynced) {
                setDeletedCustomers(subset);
            }
        });

        const cubbySub = DataStore.observeQuery(
            Cubby,
            (c) => c.cubbyLocationId.eq(locationData?.id ?? '')
          ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;

            if (isSynced) {
                setCubbyData(items);
            }
        });

        return () => {
            waitingSub.unsubscribe();
            deletedSub.unsubscribe();
            cubbySub.unsubscribe();
        }
    }, [])

    const deleteCustomer = async () => {
        const customer = await DataStore.query(ConsignmentDropoff, activeId);
        const customerCubbyId = customer?.consignmentDropoffCubbyId;
        const fetchedCubby = await DataStore.query(Cubby, customerCubbyId ?? '');

        if (customer) {
            await DataStore.save(ConsignmentDropoff.copyOf(customer, updated => {
                updated.complete = true;
            }));

            if (fetchedCubby) {
                await DataStore.save(Cubby.copyOf(fetchedCubby, updated => {
                    updated.inUse = false;
                }))
            }
        }
    }

    const reviveCustomer = async () => {
        const customer = await DataStore.query(ConsignmentDropoff, activeId);
        if (customer) {
            await DataStore.save(ConsignmentDropoff.copyOf(customer, updated => {
                updated.complete = true;
            }))
        }
    }

    const closeModals = () => {
        setValidatingDelete(false);
        setValidatingRevive(false);
        hideOversizedDescription();
    }

    const showOversizedDescription = (oversizedDescription: string) => {
        setOversizedDescription(oversizedDescription);
        setShowingOversizedDescription(true);
    }

    const hideOversizedDescription = () => {
        setShowingOversizedDescription(false);
        setOversizedDescription('');
    }

    return (
        <Box display='flex' flexDirection='row' bgcolor='background.default' padding='2rem' height='100%' width='100%'>
            {cubbyData.length < 1 ?
                <Typography variant='h1'>Your admin needs to add cubbies to this location.</Typography>
                :
                <>
                    <Modal
                        open={validatingDelete}
                        onClose={closeModals}
                    >
                        <Box>
                            <ConfirmModal validationText='Are you sure you want to mark customer as completed?' confirmText='Yes' cancelText='No' confirm={deleteCustomer} cancel={closeModals} close={closeModals} />
                        </Box>
                    </Modal>
                    <Modal
                        open={validatingRevive}
                        onClose={closeModals}
                    >
                        <ConfirmModal validationText='Are you sure you want to mark customer as active?' confirmText='Yes' cancelText='No' confirm={reviveCustomer} cancel={closeModals} close={closeModals} />
                    </Modal>
                    <Modal
                        open={showingOversizedDescription}
                        onClose={closeModals}
                    >
                        <ConfirmModal validationText={`Oversized items: ${oversizedDescription}`} confirmText='OK' confirm={hideOversizedDescription} close={closeModals} />
                    </Modal>
                    <Box display='flex' flexDirection='column' flex='1'>
                        <Typography variant='h2' sx={{ marginBottom: '2rem' }}>Customers waiting:</Typography>
                        {customers && customers.length < 1 &&
                            <Typography variant='h2'>No customers waiting.</Typography>
                        }
                        {customers.length > 0 &&
                            <Box>
                                {customers.map((customer: any) => {
                                    return (
                                        <WaitingCustomer customer={customer} key={customer.id} infoAction={showOversizedDescription} setActiveId={() => { setActiveId(customer.id) }} setValidatingDelete={() => { setValidatingDelete(true) }} />
                                    )
                                })}
                            </Box>
                        }
                    </Box>
                    <Box display='flex' flexDirection='column' flex='1'>
                        <Typography variant='h2'>Recently completed:</Typography>
                        <Box>
                            {deletedCustomers.map((deletedCustomer: any) => <Typography key={deletedCustomer.id} onClick={() => { setValidatingRevive(true); setActiveId(deletedCustomer.id) }} >{deletedCustomer.firstName} {deletedCustomer.lastName}</Typography>)}
                        </Box>
                    </Box>
                </>
            }
        </Box>
    )
}

interface WaitingCustomerProps {
    customer: ConsignmentDropoff
    setValidatingDelete: (validatingDelete: boolean) => void
    setActiveId: (id: string) => void
    infoAction: (description: string) => void
}

const WaitingCustomer = (props: WaitingCustomerProps) => {
    const { customer, setValidatingDelete, setActiveId, infoAction } = props;
    const [dotColor, setDotColor] = useState('success');
    const [dotFlashing, setDotFlashing] = useState(false);
    const [validatingTimer, setValidatingTimer] = useState(false);
    const [dotUpdater, setDotUpdater] = useState<NodeJS.Timer>();
    const [cubbyData, setCubbyData] = useState<Cubby>();

    useEffect(() => {
        runDotUpdater();
        checkDotData();

        const cubbySub = DataStore.observeQuery(
            Cubby,
            (c) => c.id.eq(customer.consignmentDropoffCubbyId ?? '')
          ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;

            if (isSynced) {
                setCubbyData(items[0]);
            }
        });

        return () => {
            cubbySub.unsubscribe();
        }
    }, [])

    const clearTimer = async () => {
        clearInterval(dotUpdater);

        const currentCustomer = await DataStore.query(ConsignmentDropoff, customer.id);
        if (currentCustomer) {
            await DataStore.save(ConsignmentDropoff.copyOf(currentCustomer, updated => {
                updated.timerCleared = true;
            }))
        }
    }

    const checkDotData = () => {
        let waitingTime = Date.now() - Date.parse(customer.createdTime);

        // may want to add this to admin settings
        if (waitingTime > 420000 && waitingTime < 639000) {
            setDotColor('warning');
        } else if (waitingTime > 639000 && waitingTime < 810000) {
            setDotColor('error');
        } else if (waitingTime > 810000) {
            setDotFlashing(true);
        }
    }

    const runDotUpdater = () => {
        let dotUpdaterFunction = setInterval(() => {
            checkDotData();
        }, 10000);

        setDotUpdater(dotUpdaterFunction);
    }

    const clearDotUpdater = () => {
        setDotFlashing(false);
        clearTimer();
        clearValidatingTimer();
    }

    const ConfirmModalTimer = () => {
        setValidatingTimer(true);
    }

    const clearValidatingTimer = () => {
        setValidatingTimer(false);
    }

    return (
        <Box width='100%' display='flex' flexDirection='row' borderRadius='.25rem'>
            <Modal
                open={validatingTimer}
                onClose={clearValidatingTimer}
            >
                <ConfirmModal validationText='Are you sure you want to clear the timer?' confirmText='Yes' cancelText='No' confirm={clearDotUpdater} cancel={clearValidatingTimer} close={clearValidatingTimer} />
            </Modal>
            <Box display='flex' justifyContent='center' alignItems='center'>
                {!customer.timerCleared && <Box sx={{ width: '1rem', height: '1rem', borderRadius: '1rem', bgcolor: { dotColor }, animation: dotFlashing ? `${pulse} 1s infinite ease` : 'none' }} onClick={ConfirmModalTimer}/>}
            </Box>
            <Box display='flex' flex='1' flexDirection='column'>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant='h3'>{customer.firstName} {customer.lastName}</Typography>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' flexDirection='row'>
                    {customer.phone && 
                        <Typography>{customer.phone}</Typography>
                    }
                    {customer.oversizedItems && <InventoryIcon onClick={() => {infoAction(customer?.oversizedDescription ?? 'Missing description')}}/>}
                    {customer.newConsigner && <FiberNewIcon />}
                    {customer.hasAppointment && <TodayIcon />}
                    {cubbyData?.cubbyNumber && 
                        <Typography>Bin {cubbyData?.cubbyNumber}</Typography>
                    }
                </Box>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' onClick={() => { setValidatingDelete(true); setActiveId(customer.id); }}>
                <ExitToAppIcon />
            </Box>
        </Box>
    )
}

export default EmployeeDisplay;