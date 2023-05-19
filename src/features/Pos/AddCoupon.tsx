import React, { useEffect, useState } from 'react';
import ModalContainer from '../../utils/ModalContainer';
import { Box, Button } from '@mui/material';
import { Coupon } from '../../models';
import { DataStore, Predicates } from 'aws-amplify';

interface AddCouponProps {
    close: (couponId?: string) => void
}

const AddCoupon = (props: AddCouponProps) => {
    const { close } = props;
    const [coupons, setCoupons] = useState<Coupon[]>([]);

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

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' flexDirection='row' flexWrap='wrap'>
                {coupons && 
                    coupons.map((c) => {
                        return (
                            <Button onClick={() => handleSelectCoupon(c.id)} key={c.id}>{c.name}</Button>
                        )  
                    })
                }
            </Box>
        </ModalContainer>
    )
}

export default AddCoupon;