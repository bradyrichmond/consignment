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

        alert(JSON.stringify(rangeLimits));

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
        <Box>
            {brands && brands.length > 0 ?
                brands.map((brand) => 
                    <Button key={brand.id} onClick={() => handleButtonClick(brand)} sx={{color: 'white', border: '1px solid white', borderRadius: '.25rem' }}>{brand.description}</Button>
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