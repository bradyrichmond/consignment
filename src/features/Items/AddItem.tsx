import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { Button, Stepper, Step, StepLabel, Typography } from '@mui/material';
import NarrowBrand from './NarrowBrand';
import SelectBrand from './SelectBrand';
import { AttributeTypeValue, Brand, Category, CategoryAttribute } from '../../models';
import SelectCategory from './SelectCategory';
import { DataStore } from 'aws-amplify';
import SelectAttributes from './SelectAttributes';
import SetPrice from './SetPrice';

const AddItem = () => {
    const { id } = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);
    const [narrowBrand, setNarrowBrand] = useState<string>('');
    const [brand, setBrand] = useState<Brand>();
    const [category, setCategory] = useState<string>('');
    const [categoryAttributes, setCategoryAttributes] = useState<CategoryAttribute[]>([]);
    const [categoryAttributeValues, setCategoryAttributeValues] = useState<AttributeTypeValue[]>([]);
    const [itemPrice, setItemPrice] = useState<string>('')
    const [atvId, setAtvId] = useState<string>('');

    const handleNarrowBrand = (brandRange: string) => {
        setNarrowBrand(brandRange);
        setActiveStep(1);
    }

    const handleBrandSelection = (brand: Brand) => {
        setBrand(brand);
        setActiveStep(2);
    }

    const handleCategorySelection = async (category: string) => {
        setCategory(category)
        const subCategories = await DataStore.query(Category, (c) => c.parent.eq(category));

        if (subCategories.length < 1) {
            const fetchedCategoryAttributes = await DataStore.query(CategoryAttribute, (c) => c.categoryAttributeCategoryId.eq(category));
            const firstCategoryAttribute = fetchedCategoryAttributes.shift();
            setCategoryAttributes(fetchedCategoryAttributes);

            if (firstCategoryAttribute) {
                const categoryAttributeType = await firstCategoryAttribute.attributeType;
                const attributeTypeValueId = categoryAttributeType.attributeTypeId;
                setAtvId(attributeTypeValueId ?? '');  
            }

            setActiveStep(3);
        }
    }

    const handleAttributeSelection = async (attributeValueId: string) => {
        const attributeValue = await DataStore.query(AttributeTypeValue, attributeValueId);
        const currentCategoryAttributeValues = categoryAttributeValues;

        if (attributeValue) {
            currentCategoryAttributeValues.push(attributeValue);
            setCategoryAttributeValues(currentCategoryAttributeValues);
        }


        if (categoryAttributes.length > 0) {
            const currentCategoryAttributes = categoryAttributes;
            const next = currentCategoryAttributes.shift();
            setCategoryAttributes(currentCategoryAttributes);
            if (next){
                setAtvId(next?.id);
            }
            return;
        }

        setActiveStep(4);
    }

    const selectItemPrice = (price: string) => {
        setItemPrice(price);
        setActiveStep(5);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = [
        {
            label: 'Narrow Brand',
            content: <NarrowBrand onButtonClick={handleNarrowBrand} />
        }, 
        {
            label: 'Select Brand', 
            content: <SelectBrand range={narrowBrand} onButtonClick={handleBrandSelection} />
        },
        { 
            label: 'Select Category',
            content: <SelectCategory categoryParent={category} onButtonClick={handleCategorySelection} /> 
        },
        { 
            label: 'Select Attributes',
            content: <SelectAttributes atvId={atvId} onButtonClick={handleAttributeSelection} />
        },
        { 
            label: 'Set Price',
            content: <SetPrice setItemPrice={setItemPrice} />
        },
        { 
            label: 'Confirm',
            content: <Typography>{brand?.description} {category} {categoryAttributeValues.map((cav) => cav.attributeTypeValue)}</Typography>
        }
    ];

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