import React, { useEffect, useState } from 'react';
import ConfirmModal from '../../utils/ConfirmModal';
import { DataStore, SortDirection } from 'aws-amplify';
import TodayIcon from '@mui/icons-material/Today';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box, Modal, Typography } from '@mui/material';
import { ConsignmentDropoff, Cubby } from '../../models';

const EmployeeDisplay = () => {
    const [customers, setCustomers] = useState<ConsignmentDropoff[]>([])
    const [deletedCustomers, setDeletedCustomers] = useState<ConsignmentDropoff[]>([]);
    const [validatingDelete, setValidatingDelete] = useState(false);
    const [validatingRevive, setValidatingRevive] = useState(false);
    const [oversizedDescription, setOversizedDescription] = useState('');
    const [showingOversizedDescription, setShowingOversizedDescription] = useState(false);
    const [activeId, setActiveId] = useState('');

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

        return () => {
            waitingSub.unsubscribe();
            deletedSub.unsubscribe();
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
        <Box className='employee-display'>
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
            <Box className='waiting-customer-container'>
                <Typography className='employee-display-header'>Customers waiting:</Typography>
                {customers && customers.length < 1 &&
                    <Typography className='no-waiting'>No customers waiting.</Typography>
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
            <Box className='deleted-customer-container'>
                <Typography className='employee-display-header'>Recently completed:</Typography>
                <Box>
                    {deletedCustomers.map((deletedCustomer: any) => <Typography className='deleted-customer' key={deletedCustomer.id} onClick={() => { setValidatingRevive(true); setActiveId(deletedCustomer.id) }} >{deletedCustomer.firstName} {deletedCustomer.lastName}</Typography>)}
                </Box>
            </Box>
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
    const [waitingLevel, setWaitingLevel] = useState('');
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
        const currentCustomer = await DataStore.query(ConsignmentDropoff, customer.id);
        if (currentCustomer) {
            await DataStore.save(ConsignmentDropoff.copyOf(currentCustomer, updated => {
                updated.timerCleared = true;
            }))
        }
    }

    const checkDotData = () => {
        let waitingTime = Date.now() - Date.parse(customer.createdTime);

        if (customer.timerCleared) {
            setWaitingLevel('cancelled');
            return;
        }

        // may want to add this to admin settings
        if (waitingTime > 420000 && waitingTime < 639000) {
            setWaitingLevel('level-two');
        } else if (waitingTime > 639000 && waitingTime < 810000) {
            setWaitingLevel('level-three');
        } else if (waitingTime > 810000) {
            setWaitingLevel('level-three flashing');
        }
    }

    const runDotUpdater = () => {
        let dotUpdaterFunction = setInterval(() => {
            checkDotData();
        }, 10000);

        setDotUpdater(dotUpdaterFunction)
    }

    const clearDotUpdater = () => {
        setWaitingLevel('cancelled');
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
        <Box className='waiting-customer'>
            <Modal
                open={validatingTimer}
                onClose={clearValidatingTimer}
            >
                <ConfirmModal validationText='Are you sure you want to clear the timer?' confirmText='Yes' cancelText='No' confirm={clearDotUpdater} cancel={clearValidatingTimer} close={clearValidatingTimer} />
            </Modal>
            <Box className='waiting-dot-container'>
            {!customer.timerCleared && <Box className={`waiting-dot ${waitingLevel}`} onClick={ConfirmModalTimer}/>}
            </Box>
            <Box className='customer-container'>
                <Box className='customer-data-container'>
                    <Box className='customer-name'>{customer.firstName} {customer.lastName}</Box>
                </Box>
                <Box className='waiting-customer-data'>
                    {customer.phone && 
                        <Box className='waiting-customer-phone'>{customer.phone}</Box>
                    }
                    {customer.oversizedItems && <InventoryIcon onClick={() => {infoAction(customer?.oversizedDescription ?? 'Missing description')}}/>}
                    {customer.newConsigner && <FiberNewIcon />}
                    {customer.hasAppointment && <TodayIcon />}
                    {cubbyData?.cubbyNumber && 
                        <Box className='waiting-customer-cubby'>Bin {cubbyData?.cubbyNumber}</Box>
                    }
                </Box>
            </Box>
            <Box className='move-customer' onClick={() => { setValidatingDelete(true); setActiveId(customer.id); }}>
                <ExitToAppIcon />
            </Box>
        </Box>
    )
}

export default EmployeeDisplay;