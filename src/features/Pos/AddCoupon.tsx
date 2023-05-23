import React, { useEffect, useState } from 'react';
import ModalContainer from '../../utils/ModalContainer';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Coupon, CouponType } from '../../models';
import { DataStore, Predicates } from 'aws-amplify';
import { useForm } from 'react-hook-form';
import { AddCouponForm } from '../Coupons/AddCoupon';

interface AddCouponProps {
    close: (couponId?: string) => void
}

const AddCoupon = (props: AddCouponProps) => {
    const { close } = props;
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const { handleSubmit, register } = useForm();

    useEffect(() => {    
        const getCoupons = async () => {
            const fetchedCoupons = await DataStore.query(Coupon, Predicates.ALL, {
                page: 0,
                limit: 100
            });

            setCoupons(fetchedCoupons);
        }

        getCoupons();
    }, [])

    const handleSelectCoupon = (id: string) => {
        close(id);
    }

    const handleCreateNewCoupon = async (data: any) => {
        const { name, amount, type } = data;
        const newCoupon = await DataStore.save(new Coupon({ name, amount: parseFloat(amount), type: type === CouponType.FLAT ? CouponType.FLAT : CouponType.PERCENT }));
        handleSelectCoupon(newCoupon.id);
    }

    return (
        <ModalContainer onClose={close}>
            <>
                <Box display='flex' flexDirection='row' flexWrap='wrap'>
                    {coupons && 
                        coupons.map((c) => {
                            return (
                                <Button onClick={() => handleSelectCoupon(c.id)} key={c.id}>{c.name}</Button>
                            )  
                        })
                    }
                </Box>
                <Box display='flex' flexDirection='column'>
                    <Typography>New Coupon</Typography>
                    <AddCouponForm handleAddCoupon={handleCreateNewCoupon} />
                </Box>
            </>
        </ModalContainer>
    )
}

export default AddCoupon;