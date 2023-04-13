import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const labels = ['A,B,C', 'D,E,F', 'G,H,I', 'J,K,L', 'M,N,O', 'P,Q,R,S', 'T,U,V', 'W,X,Y,Z'];

interface NarrowBrandProps {
    onButtonClick: (value: string) => void
}

const NarrowBrand = (props: NarrowBrandProps) => {
    const { onButtonClick } = props;

    return (
        <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='flexStart' height='100%'>
            {labels.map((label) => {
                return (
                    <Box flex='1' margin='1rem' minWidth='30%' maxWidth='30%'>
                        <Button onClick={() => onButtonClick(label)} sx={{color: 'white', border: '1px solid white', borderRadius: '.25rem', fontSize: '3rem', width: '100%' }}>{label}</Button>
                    </Box>
                )
            })}
        </Box>
    )
}

export default NarrowBrand;