import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { Button, Stepper, Step, StepLabel, Typography } from '@mui/material';
import NarrowBrand from './NarrowBrand';
import SelectBrand from './SelectBrand';
import { AttributeTypeValue, Brand, Category, CategoryAttribute, Item } from '../../models';
import SelectCategory from './SelectCategory';
import { DataStore } from 'aws-amplify';
import SelectAttributes from './SelectAttributes';
import SetPrice from './SetPrice';
import ConfirmAddItem from './ConfirmAddItem';

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
            return;
        }

        setActiveStep(3);
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

    const addItemAndResetState = async () => {
        await DataStore.save(new Item({ itemCategoryId: category, clientItemsId: id, itemBrandId: brand?.id, price: itemPrice, statusId: '1', userId: '1', itemName: '' }))
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
            content: <SetPrice setItemPrice={selectItemPrice} />
        },
        { 
            label: 'Confirm',
            content: <ConfirmAddItem brand={brand} price={itemPrice} attributeValues={categoryAttributeValues} categoryId={category} confirm={addItemAndResetState}/>
        }
    ];

    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
            <Box width='50%' height='50%' display='flex' flexDirection='column'>
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
                            </Step>
                        );
                    })}
                </Stepper>
                <Box flex='1'>
                    {
                        steps[activeStep].content
                    }
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', mt: '2rem', pt: '2rem', borderTop: '1px solid white' }}>
                    <Button variant='outlined' onClick={handleBack} sx={{color: 'white', border: '1px solid white', borderRadius: '.25rem', fontSize: '3rem' }}>
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button variant='outlined' onClick={handleNext} sx={{color: 'white', border: '1px solid white', borderRadius: '.25rem', fontSize: '3rem' }}>
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AddItem;