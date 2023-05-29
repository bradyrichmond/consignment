import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, MuiEvent } from '@mui/x-data-grid';
import { Coupon } from '../../models';
import { DataStore, Predicates } from 'aws-amplify';
import SearchBar from '../../components/SearchBar';
import AddCoupon from './AddCoupon';

const Coupons = () => {
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddingCoupon, setIsAddingCoupon] = useState(false);

    const getCoupons = async () => {
        const fetchedCoupons = await DataStore.query(Coupon, Predicates.ALL, {
            page: 0,
            limit: 100
        });

        setCoupons(fetchedCoupons);
    }

    useEffect(() => {
        getCoupons();
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
        const fetchedCoupons = await DataStore.query(Coupon, (c) => c.name.contains(searchTerm));

        setCoupons(fetchedCoupons);
    }

    const deleteCoupon = async (params: any) => {
        await DataStore.delete(Coupon, params.row.id);
        getCoupons();
    }

    const startAddingCoupon = () => {
        setIsAddingCoupon(true);
    }

    const stopAddingCoupon = () => {
        setIsAddingCoupon(false);
        getCoupons();
    }

    const rows = coupons;
    const columns: GridColDef[] = [
        {field: 'name', headerName: 'Coupon Name', flex: 1},
        {field: 'amount', headerName: 'Discount Amount', flex: 1, editable: true, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                //  @ts-ignore
                <Typography>{params.row.amount} {params.row.type}</Typography>
            )
        }},
        {field: 'delete', headerName: '', flex: 1, editable: true, renderCell: (params: GridRenderCellParams<String>) => {
            return (
                <Button variant='contained' onClick={(event: MuiEvent<React.MouseEvent>) => deleteCoupon(params)} sx={{marginTop: '2rem', marginBottom: '2rem'}}>Delete Coupon</Button>
            )
        }},
    ];


    return (
        <Box height='100%' padding='2rem'>
            <Modal
                open={isAddingCoupon}
                onClose={stopAddingCoupon}
            >
                <AddCoupon close={stopAddingCoupon} />
            </Modal>
            <Box paddingTop='2rem' paddingBottom='2rem' display='flex' flexDirection='row' width='100%' alignItems='center'>
                <Box flex='1'>
                    <SearchBar onSearchChange={onSearchChange} />
                </Box>
                <Box paddingLeft='2rem' display='flex' justifyContent='center' alignItems='center' width='30%'>
                    <Box flex='1' display='flex' justifyContent='center' alignItems='center'>
                        <Button variant="contained" component="label" onClick={startAddingCoupon} sx={{margin: 0}}>
                            Add a Coupon
                        </Button>
                    </Box>
                </Box>
            </Box>
            <DataGrid rows={rows} columns={columns} sx={{fontSize: '2rem'}} getRowHeight={() => 'auto'} />
        </Box>
    )
}

export default Coupons;