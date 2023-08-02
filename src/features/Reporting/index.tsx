import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import EndOfDayReport from './EndOfDayReport';
import HourlySales from './HourlySales';

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
            <Box display='flex' flexDirection='column'>
                <Typography>Printable Reports</Typography>
                <Box display='flex' flexDirection='row'>
                    {REPORTS.map((report: string) => <ReportButton key={report} label={report} handleClick={handleClick} />)}
                </Box>
            </Box>
            <Box flex='1'>
                {isShowingEndOfDayPreview && 
                    <EndOfDayReport />
                }
            </Box>
            <Box display='flex' flexDirection='column'>
                <HourlySales />
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