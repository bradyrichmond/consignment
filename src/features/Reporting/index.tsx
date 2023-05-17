import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import useStoreLocation from '../../utils/useStoreLocation';

import { format, sub } from 'date-fns';

import { Item, Tender, TenderType, Transaction } from '../../models';
import { currencyFormatter } from '../../utils/PrintReceipt';
import { Amplify, DataStore } from 'aws-amplify';
import EndOfDayReport from './EndOfDayReport';

const REPORTS: string[] = ['End of day'];

const Reporting = () => {
    const [isShowingEndOfDayPreview, setIsShowingEndOfDayPreview] = useState(false);

    const handleClick = (label: string) => {
        if (label === 'End of day') {
            previewEndOfDayReport();
        }
    }

    const previewEndOfDayReport = () => {
        setIsShowingEndOfDayPreview(true);
    }

    return (
        <Box padding='2rem' display='flex' flexDirection='column' flexWrap='wrap'>
            <Box display='flex' flexDirection='row'>
                {REPORTS.map((report: string) => <ReportButton label={report} handleClick={handleClick}/>)}
            </Box>
            <Box flex='1'>
                {isShowingEndOfDayPreview && 
                    <EndOfDayReport />
                }
            </Box>
        </Box>
    )
}

interface ReportButtonProps {
    label: string
    handleClick: (label: string) => void
}

const ReportButton = (props: ReportButtonProps) => {
    const { label, handleClick } = props;

    return (
        <Button onClick={() => handleClick(label)}>{label}</Button>
    )
}

export default Reporting;