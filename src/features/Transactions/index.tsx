import React, { ChangeEvent, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { DataStore, Predicates } from "aws-amplify";
import { Transaction } from "../../models";
import { Button, InputAdornment, LinearProgress, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { ProcessCsvButton } from "../Clients";

const Transactions = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getTransactions = async () => {
            const fetchedTransactions = await DataStore.query(Transaction, Predicates.ALL, {
                page: 0,
                limit: 100
            });

            setTransactions(fetchedTransactions);
            setLoading(false);
        }

        getTransactions();
    }, [])

    useEffect(() => {
        const getData = setTimeout(searchChange, 250);
        
        return () => clearTimeout(getData);
    }, [searchTerm])

    const onSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        const changeSearchTerm = e.target.value;
        setSearchTerm(changeSearchTerm);
    }

    const searchChange = async () => {
        const fetchedAttributeTypes = await DataStore.query(Transaction, (b) => b.id.contains(searchTerm));

        setTransactions(fetchedAttributeTypes);
    }

    const fileReader = new FileReader();

    const bulkAddTransactions = async (e: ChangeEvent<HTMLInputElement>) => {
        // TODO: Need to add bulk upload
    }

    const columns: GridColDef[] = [
        {field: 'attributeTypeDescription', headerName: 'Attribute Type Name', width: 200},
        {field: 'lastUpdateTimestamp', headerName: 'Last Updated', width: 200},
        {field: 'viewDetails', headerName: 'View Details?', width: 300, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <>
                    <Button variant="contained" component="label" style={{backgroundColor: 'black', border: '1px solid white'}} onClick={() => navigate(`/transactions/${params.id.toString()}`)}>
                        View Details
                    </Button>
                </>
            )
        }},
    ];

    const rows = transactions ?? [];

    return (
        <Box height='100%' display='flex' flexDirection='column' padding='2rem'>
            <Box paddingTop='2rem' paddingBottom='2rem' display='flex' flexDirection='row' width='100%' alignItems='center'>
                <TextField InputProps={{
                        endAdornment: <InputAdornment position="start"><SearchIcon style={{color: 'white'}}/></InputAdornment>,
                    }}
                    fullWidth={true}
                    onChange={onSearchChange}
                    style={{border: '1px solid white', borderRadius: '.25rem'}}
                />
            </Box>
            <ProcessCsvButton label='Bulk Upload Transactions' action={bulkAddTransactions} />
            <Box flex='1'>
                {loading ? 
                    <LinearProgress color='primary' />
                    :
                    <DataGrid columns={columns} rows={rows} style={{color: 'white'}} />
                }
            </Box>
        </Box>
    )
}

export default Transactions;