import React, { MouseEvent, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ModalContainer from '../../utils/ModalContainer';
import { Button, Typography } from '@mui/material';

export enum STEPS {
    PAYMENT_INTENT = 'PAYMENT_INTENT',
    COLLECTING = 'COLLECTING',
    PROCESSING = 'PROCESSING',
    DONE = 'DONE'
}

interface ProcessingCardProps {
    step: string
    close: () => void
}

const ProcessingCard = (props: ProcessingCardProps) => {
    const { step, close } = props;

    useEffect(() => {
        if (step === STEPS.DONE) {
            close();
        }
    }, [step])

    return (
        <ModalContainer>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem' width='50%' minHeight='50%' display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant='h1'>
                        {step === STEPS.PAYMENT_INTENT &&
                            'Initializing...'
                        }
                        {step === STEPS.COLLECTING &&
                            'Reading Card...'
                        }
                        {step === STEPS.PROCESSING &&
                            'Finalizing...'
                        }
                    </Typography>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default ProcessingCard;