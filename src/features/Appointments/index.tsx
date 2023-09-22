import React, { useEffect, useState } from 'react';
import { Badge, Box, Button, Modal, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Appointment, Blackout } from '../../models';
import { DataStore } from 'aws-amplify';
import { add, format } from 'date-fns';
import AddAppointment from './AddAppointment';
import ConfirmModal from '../../utils/ConfirmModal';
import { useNavigate } from 'react-router-dom';

const ServerDay = (props: PickersDayProps<Date> & { highlightedDays?: number[] }) => {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const hasAppointmentsAvailable = !outsideCurrentMonth && highlightedDays.includes(day.getDate());

    return (
        <Box bgcolor={hasAppointmentsAvailable ? '#434ce6' : 'inherit'} borderRadius='100%'>
            <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} sx={{color: hasAppointmentsAvailable ? 'white' : 'inherit'}}/>
        </Box>
    );
  }

const Appointments = () => {
    const [highlightedDays, setHighlightedDays] = useState([]);
    const [selected, setSelected] = useState<Date>(new Date(format(Date.now() + (new Date(Date.now()).getTimezoneOffset() * 60 * 1000 ), 'yyyy-MM-dd')));
    const navigate = useNavigate();

    const getHighlightedDays = (date: Date) => {

    }

    const handleMonthChange = (date: Date) => {
        setHighlightedDays([]);
        getHighlightedDays(date);
    };

    const manageBlackouts = () => {
        navigate('/appointments/blackouts');
    }

    return (
        <Box padding='2rem' display='flex' justifyContent='center' alignItems='center' flexDirection='row' height='100%'>
            <Box display='flex' flexDirection='column'>
                <Box padding='1rem' border='3px solid #434ce6' borderRadius='.5rem'>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateCalendar
                            disablePast
                            onMonthChange={handleMonthChange}
                            slots={{
                                day: ServerDay,
                            }}
                            slotProps={{
                                day: {
                                    highlightedDays,
                                } as any,
                            }}
                            value={selected}
                            onChange={(newValue) => newValue ? setSelected(newValue) : ''}
                        />
                    </LocalizationProvider>
                </Box>
                <Button variant='contained' sx={{marginTop: '2rem'}} onClick={manageBlackouts}>
                    Manage Blackouts
                </Button>
            </Box>
            <Box flex='1' display='flex' height='100%' sx={{overflowY: 'auto'}}>
                {selected && <DayDisplay selectedDay={selected} />}
            </Box>
        </Box>
    )
}

interface DayDisplayProps {
    selectedDay: Date
}

const DayDisplay = (props: DayDisplayProps) => {
    const { selectedDay } = props;
    const [blackouts, setBlackouts] = useState<Blackout[]>([]);
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [options, setOptions] = useState<Date[]>([]);
    const [isAddingAppointment, setIsAddingAppointment] = useState(false);
    const [isDeletingAppointment, setIsDeletingAppointment] = useState(false);
    const [activeAppointment, setActiveAppointment] = useState<Appointment>();
    const [activeTimeframe, setActiveTimeframe] = useState<number>();
    const endDateTime = add(selectedDay ?? 0, { hours: 24 });

    const generateOptions = (passedBlackouts: Blackout[]) => {
        let startingTime = new Date(selectedDay.valueOf() + (selectedDay.getTimezoneOffset() * 60 * 1000));
        const generatedOptions = [];
        const dayNumber = selectedDay.getDay();

        if (startingTime && endDateTime) {
            while (startingTime < endDateTime) {
                console.log(!blackouts.find((b) => b.time === format(startingTime, 'hh:mm aa')), passedBlackouts, format(startingTime, 'hh:mm aa'), dayNumber);
                if (!passedBlackouts.find((b) => b.time === format(startingTime, 'hh:mm aa'))) {
                    generatedOptions.push(startingTime);
                }

                startingTime = add(startingTime, { minutes: 30 });
            }
        }

        setOptions(generatedOptions);
    }
    
    useEffect(() => {
        if (selectedDay && endDateTime) {
            const dayNumber = selectedDay.getDay();
            const blackoutSub = DataStore.observeQuery(
                Blackout,
                (b) => b.and((b) => [
                    b.dayOfWeek.eq(dayNumber)
                ])
            ).subscribe(snapshot => {
                const { items, isSynced } = snapshot;
                generateOptions(items);
                setBlackouts(items);
            });

            const appointmentSub = DataStore.observeQuery(
                Appointment,
                (a) => a.and((a) => [
                    a.date.ge(selectedDay.valueOf()),
                    a.date.le(endDateTime.valueOf())
                ])
            ).subscribe(snapshot => {
                const { items, isSynced } = snapshot;
                setAppointments(items);
            });

            return () => {
                blackoutSub.unsubscribe();
                appointmentSub.unsubscribe();
            }
        }
    }, [selectedDay])

    const startAddingAppointment = async (time: number) => {
        setActiveTimeframe(time);
        setIsAddingAppointment(true);
    }

    const startDeletingAppointment = (appointment: Appointment) => {
        setActiveAppointment(appointment);
        setIsDeletingAppointment(true);
    }

    const deleteAppointment = async () => {
        if (activeAppointment) {
            await DataStore.delete(Appointment, activeAppointment.id)
        }
        closeModals();
    }

    const closeModals = () => {
        setIsAddingAppointment(false);
        setIsDeletingAppointment(false);
    }

    return (
        <Box flex='1' height='100%' marginTop='2rem' marginLeft='2rem'>
            <Modal
                open={isAddingAppointment}
                onClose={closeModals}
            >
                <AddAppointment close={closeModals} date={activeTimeframe ?? 0}/>
            </Modal>
            <Modal
                open={isDeletingAppointment}
                onClose={closeModals}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <ConfirmModal validationText={`Delete the appointment for ${activeAppointment?.firstName}`} confirmText='Yes' confirm={deleteAppointment} cancelText='No' cancel={closeModals} />
            </Modal>
            <Box display='flex' flexDirection='column' height='75%' width='75%'>
                {options && options.map((o) => <DayDisplayItem 
                    time={o}
                    appointmentMatch={appointments.find((a) => a.date === o.valueOf())}
                    addAppointmentClick={startAddingAppointment}
                    deleteAppointmentClick={startDeletingAppointment}
                />)}
            </Box>
        </Box>
    )
}

interface DayDisplayItemProps {
    time: Date
    appointmentMatch?: Appointment
    addAppointmentClick: (time: number) => void
    deleteAppointmentClick: (appointment: Appointment) => void
}

const DayDisplayItem = (props: DayDisplayItemProps) => {
    const { time, appointmentMatch, addAppointmentClick, deleteAppointmentClick } = props;
    

    const handleDeleteAppointment = () => {
        if (appointmentMatch) {
            deleteAppointmentClick(appointmentMatch);
        }
    }

    const handleAddAppoinment = () => {
        addAppointmentClick(time.valueOf());
    }

    return (
        <Box padding='1rem' display='flex' flexDirection='row' border='3px solid #434ce6' borderRadius='.5rem' marginBottom='1rem' width='100%'>
            <Box>
                <Typography variant='h4'>{format(time, 'hh:mm aa')}</Typography>
            </Box>
            <Box flex='1' justifyContent='center' alignItems='center' flexDirection='column' display='flex'>
                {appointmentMatch && 
                    <>
                        <Typography variant='h4'>{appointmentMatch.firstName} {appointmentMatch.lastName}</Typography>
                        <Typography variant='h5'>{appointmentMatch.phone}</Typography>
                    </>
                }
            </Box>
            <Box sx={{fontSize: '4rem'}} display='flex' flexDirection='row'>
                {!appointmentMatch && <PersonAddAlt1Icon fontSize='inherit' onClick={handleAddAppoinment} sx={{paddingLeft: '2rem'}} />}
                {appointmentMatch && <PersonAddDisabledIcon fontSize='inherit' onClick={handleDeleteAppointment} sx={{paddingLeft: '2rem'}} />}
            </Box>
        </Box>
    )
}

export default Appointments;