import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Address, Location } from "../../models";
import AddLocation from "./AddLocation";
import { DataStore } from "aws-amplify";
import UpdateTaxRate from "./UpdateTaxRate";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmModal from "../../utils/ConfirmModal";

interface LocationSettingsProps {
    onLocationChange: (locationId: string) => void
    handleAddLocation: () => void
    locations: Location[]
    storedLocationId: string
}

const LocationSettings = (props: LocationSettingsProps) => {
    const { locations, onLocationChange, handleAddLocation, storedLocationId } = props;
    const [addingLocation, setAddingLocation] = useState(false);
    const [updatingTaxRate, setUpdatingTaxRate] = useState(false);
    const [activeLocationData, setActiveLocationData] = useState<Location>();
    const [activeLocationAddress, setActiveLocationAddress] = useState<Address>();
    const [isDeletingLocation, setIsDeletingLocation] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeLocationId, setActiveLocationId] = useState('');
    const { handleSubmit } = useForm();

    useEffect(() => {
        const getLocationData = async () => {
            const fetchedLocationData = await DataStore.query(Location, storedLocationId);
            setActiveLocationData(fetchedLocationData);
            const fetchedAddress = await fetchedLocationData?.address;
            setActiveLocationAddress(fetchedAddress);
            setLoading(false);
        }

        getLocationData();
    }, [storedLocationId])

    const handleLocationChange = async (id: string) => {
        onLocationChange(id);
    }

    const startAddingLocation = () => {
        setAddingLocation(true);
    }

    const stopAddingLocation = () => {
        handleAddLocation();
        setAddingLocation(false);
    }

    const startUpdatingTaxRate = () => {
        setUpdatingTaxRate(true);
    }

    const stopUpdatingTaxRate = () => {
        setUpdatingTaxRate(false);
    }

    const startDeletingLocation = (id: string) => {
        // TODO: Modal not showing up
        setActiveLocationId(id);
        setIsDeletingLocation(true);
    }

    const stopDeletingLocation = () => {
        setActiveLocationId('');
        setIsDeletingLocation(false);
    }

    const deleteLocation = async () => {
        DataStore.delete(Location, activeLocationId);
        stopDeletingLocation();
    }

    return (
        <Box>
            <Modal
                open={addingLocation}
                onClose={stopAddingLocation}
            >
                <AddLocation close={stopAddingLocation}/>
            </Modal>
            <Modal
                open={updatingTaxRate}
                onClose={stopUpdatingTaxRate}
            >
                <UpdateTaxRate close={stopUpdatingTaxRate} locationId={storedLocationId}/>
            </Modal>
            <Modal
                open={updatingTaxRate}
                onClose={stopUpdatingTaxRate}
            >
                <Box>
                    <ConfirmModal validationText='Are you sure you want to delete this location?' confirm={deleteLocation} confirmText='Delete' cancel={stopDeletingLocation} cancelText='cancel' close={stopDeletingLocation}/>
                </Box>
            </Modal>
            <Box display='flex' flexDirection='column' bgcolor='white' padding='2rem' borderRadius='1rem' marginTop='2rem'>
                {locations.length > 0 &&
                    <>
                        <Box marginTop='1rem' marginBottom='1rem'>
                            {locations && 
                                locations.map((l) => {
                                    return (
                                        <Box display='flex' flexDirection='row' border={storedLocationId === l.id ? '1px solid #e0e2e6' : 'none'}>
                                            <Box flex='1' padding='2rem'>
                                                <Typography variant='h2' key={l.id}>{l.locationName}</Typography>
                                            </Box>
                                            <Box display='flex' flexDirection='row' padding='2rem' fontSize='3rem'>
                                                {storedLocationId !== l.id && <Box onClick={ () => handleLocationChange(l.id) } padding='1rem'><OtherHousesIcon fontSize='inherit' /></Box>}
                                                <Box onClick={() => startDeletingLocation(l.id)} padding='1rem'><DeleteForeverIcon fontSize='inherit' /></Box>
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </>
                }
                {/* {activeLocationData &&
                    <Box marginBottom='2rem' marginTop='2rem' sx={{color: 'black'}}>
                        <Typography>{activeLocationData.locationName}</Typography>
                        <Box display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center'>
                            <Typography sx={{marginRight: '2rem'}}>Tax Rate: {activeLocationData.taxRate}%</Typography>
                            <Button variant='contained' onClick={startUpdatingTaxRate}>Update Tax Rate</Button>
                        </Box>
                    </Box>
                } */}
                {/* {activeLocationAddress &&
                    <Box sx={{color: 'black'}}>
                        {activeLocationAddress.address1 &&
                            <Typography>{activeLocationAddress.address1}</Typography>
                        }
                        {activeLocationAddress.address2 &&
                            <Typography>{activeLocationAddress.address2}</Typography>
                        }
                        {activeLocationAddress.address3 &&
                            <Typography>{activeLocationAddress.address3}</Typography>
                        }
                        {activeLocationAddress.city && activeLocationAddress.state && activeLocationAddress.zip &&
                            <Typography>{activeLocationAddress.city}, {activeLocationAddress.state} {activeLocationAddress.zip}</Typography>
                        }
                    </Box>
                } */}
                <Box marginTop='2rem'>
                    <Button variant='contained' fullWidth onClick={startAddingLocation}>Add location</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default LocationSettings;