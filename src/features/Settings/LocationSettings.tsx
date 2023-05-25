import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Address, Location } from "../../models";
import AddLocation from "./AddLocation";
import { DataStore } from "aws-amplify";
import UpdateTaxRate from "./UpdateTaxRate";

interface LocationSettingsProps {
    onLocationChange: (locationId: string) => void
    handleAddLocation: () => void
    locations: Location[]
}

const LocationSettings = (props: LocationSettingsProps) => {
    const { locations, onLocationChange, handleAddLocation } = props;
    const [selectedLocation, setSelectedLocation] = useState('');
    const [addingLocation, setAddingLocation] = useState(false);
    const [updatingTaxRate, setUpdatingTaxRate] = useState(false);
    const [activeLocationData, setActiveLocationData] = useState<Location>();
    const [activeLocationAddress, setActiveLocationAddress] = useState<Address>();
    const { handleSubmit } = useForm();

    useEffect(() => {
        const getLocationData = async () => {
            const fetchedLocationData = await DataStore.query(Location, selectedLocation);
            setActiveLocationData(fetchedLocationData);
            const fetchedAddress = await fetchedLocationData?.address;
            setActiveLocationAddress(fetchedAddress);
        }

        getLocationData();
    }, [selectedLocation])

    const handleLocationChange = async (data: any) => {
        onLocationChange(selectedLocation);
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

    const setTerminalLocation = () => {
        localStorage.setItem('locationId', selectedLocation);
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
                <UpdateTaxRate close={stopUpdatingTaxRate} locationId={selectedLocation}/>
            </Modal>
            <form onSubmit={handleSubmit(handleLocationChange)}> 
                <Box display='flex' flexDirection='column' bgcolor='white' padding='2rem' borderRadius='1rem' marginTop='2rem'>
                    {locations.length > 0 &&
                        <>
                            <Box marginTop='1rem'>
                                <FormControl fullWidth>
                                    <InputLabel>Locations</InputLabel>
                                    <Select
                                        label='Locations'
                                        value={selectedLocation}
                                        onChange={(e) => setSelectedLocation(e.target.value)}
                                    >
                                        {locations && 
                                            locations.map((l) => <MenuItem value={l.id} key={l.id}>{l.locationName}</MenuItem>)
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box display='flex' flexDirection='row'>
                                <Box flex='1'>
                                    <Button type='submit' variant='contained' onClick={setTerminalLocation} fullWidth>Select location</Button>
                                </Box>
                            </Box>
                        </>
                    }
                    {activeLocationData &&
                        <Box marginBottom='2rem' marginTop='2rem' sx={{color: 'black'}}>
                            <Typography>{activeLocationData.locationName}</Typography>
                            <Box display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center'>
                                <Typography sx={{marginRight: '2rem'}}>Tax Rate: {activeLocationData.taxRate}%</Typography>
                                <Button variant='contained' onClick={startUpdatingTaxRate}>Update Tax Rate</Button>
                            </Box>
                        </Box>
                    }
                    {activeLocationAddress &&
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
                    }
                    <Box marginTop='2rem'>
                        <Button variant='contained' fullWidth onClick={startAddingLocation}>Add location</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default LocationSettings;