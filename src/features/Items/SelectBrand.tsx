import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Brand } from '../../models';
import { DataStore } from 'aws-amplify';
import { Button, Typography } from '@mui/material';

interface SelectBrandProps {
    onButtonClick: (brand: Brand) => void,
    range: string
}

const SelectBrand = (props: SelectBrandProps) => {
    const { onButtonClick, range } = props;
    const [brands, setBrands] = useState<Brand[]>([])

    useEffect(() => {
        const upperRangeLimits = range.split(',');
        const lowerRangeLimits = range.toLowerCase().split(',');
        const rangeLimits = [...upperRangeLimits, ...lowerRangeLimits];

        const getBrands = async () => {
            const fetchedBrands = await DataStore.query(Brand, (b) => b.or(b => [...rangeLimits.map((l) => b.description.beginsWith(l))]));
            setBrands(fetchedBrands);
        }

        getBrands();
    }, [range])

    const handleButtonClick = (brand: Brand) => {
        onButtonClick(brand);
    }

    return (
        <Box height='100%'>
            {brands && brands.length > 0 ?
                brands.map((brand) =>
                    <Box margin='1rem'>
                        <Button key={brand.id} onClick={() => handleButtonClick(brand)} sx={{color: 'white', border: '1px solid white', borderRadius: '.25rem', fontSize: '3rem'}}>{brand.description}</Button>
                    </Box>
                )
                :
                <Typography>
                    No Brands here
                </Typography>
            }
        </Box>
    )
}

export default SelectBrand;