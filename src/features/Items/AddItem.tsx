import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { Button, Stepper, Step, StepLabel, Typography, StepContent } from '@mui/material';
import NarrowBrand from './NarrowBrand';
import SelectBrand from './SelectBrand';
import { Brand } from '../../models';

const AddItem = () => {
    const { id } = useParams();
    const [activeStep, setActiveStep] = useState(0);
    const [narrowBrand, setNarrowBrand] = useState('');
    const [brand, setBrand] = useState<Brand>();

    const handleNarrowBrand = (brandRange: string) => {
        setNarrowBrand(brandRange);
        setActiveStep(1);
    }

    const handleBrandSelection = (brand: Brand) => {
        setBrand(brand);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = [{ label: 'Narrow Brand', content: <NarrowBrand onButtonClick={handleNarrowBrand}/> }, { label: 'Select Brand', content: <SelectBrand range={narrowBrand} onButtonClick={handleBrandSelection} /> }, { label: 'Select Category', content: <Box>{brand?.description}</Box> }];

    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
            <Box width='50%' height='50%'>
                <Stepper activeStep={activeStep}>
                    {steps.map((step, index) => {
                        const { label, content } = step
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}><Typography color='white'>{label}</Typography></StepLabel>
                                {content}
                            </Step>
                        );
                    })}
                </Stepper>
                <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant='outlined' sx={{color: 'white', border: '1px solid white', borderRadius: '.25rem', mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleNext} variant='outlined' sx={{color: 'white', border: '1px solid white', borderRadius: '.25rem' }}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AddItem;