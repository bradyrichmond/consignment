import React, { useContext, useState } from 'react';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { Stepper, Step, StepLabel, Typography } from '@mui/material';
import NarrowBrand from './NarrowBrand';
import SelectBrand from './SelectBrand';
import { AttributeType, AttributeTypeValue, Brand, Category, CategoryAttribute, Client, Item } from '../../models';
import SelectCategory from './SelectCategory';
import { DataStore } from 'aws-amplify';
import SelectAttributes from './SelectAttributes';
import SetPrice from './SetPrice';
import ConfirmAddItem from './ConfirmAddItem';
import { CognitoContext } from '../../context';

const AddItem = () => {
    const { id } = useParams();
    const [activeStep, setActiveStep] = useState<number>(0);
    const [narrowBrand, setNarrowBrand] = useState<string>('');
    const [brand, setBrand] = useState<Brand>();
    const [category, setCategory] = useState<string>('');
    const [categoryAttributes, setCategoryAttributes] = useState<AttributeType[]>([]);
    const [categoryAttributeValues, setCategoryAttributeValues] = useState<AttributeTypeValue[]>([]);
    const [itemPrice, setItemPrice] = useState<string>('')
    const [atvId, setAtvId] = useState<string>('');
    const { organization, organizationId } = useContext(CognitoContext);

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
            const fetchedCategoryAttributes: CategoryAttribute[] = await DataStore.query(CategoryAttribute, (cat) => cat.categoryId.eq(category));
            const categoryAttributeTypes = await Promise.all(fetchedCategoryAttributes.map(async (cat) => cat.attributeType));
            const firstCategoryAttributeType = categoryAttributeTypes.shift();
            setCategoryAttributes(categoryAttributeTypes);

            if (firstCategoryAttributeType) {
                setAtvId(firstCategoryAttributeType.id);
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

    const addItemAndResetState = async () => {
        const fetchedCategory = await DataStore.query(Category, category);
        const client = await DataStore.query(Client, id ?? '');
        
        if (client) {
            // TODO: need real userId
            await DataStore.save(new Item({ itemCategoryId: category, itemId: `${client?.account}-${client?.nextItemNumber}`, clientItemsId: id, itemBrandId: brand?.id, price: itemPrice, statusId: '1', userId: '1', itemName: `${brand?.description} ${fetchedCategory?.categoryName}`, organization, itemOrganizationId: organizationId }));
            await DataStore.save(Client.copyOf(client, (updated) => {
                updated.nextItemNumber = (parseInt(client.nextItemNumber) + 1).toString();
            }))
        }

        setActiveStep(0);
        setNarrowBrand('');
        setBrand(undefined);
        setCategory('');
        setCategoryAttributes([]);
        setCategoryAttributeValues([]);
        setItemPrice('');
        setAtvId('');
    }

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
            content: <ConfirmAddItem brand={brand} price={itemPrice} attributeValues={categoryAttributeValues} categoryId={category} confirm={addItemAndResetState} />
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
            </Box>
        </Box>
    )
}

export default AddItem;