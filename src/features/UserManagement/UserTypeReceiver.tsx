import React, { useState } from 'react';
import { Box, Chip, Modal, Typography } from '@mui/material';
import { useDrop } from 'react-dnd';
import { Auth } from 'aws-amplify';
import ConfirmModal from '../../utils/ConfirmModal';

interface UserTypeReceiverProps {
    label: string
    onDelete: (user: any) => void
    onDrop: (user: any) => void
    users: any[]
}

const UserTypeReceiver = (props: UserTypeReceiverProps) => {
    const { label, onDrop, onDelete, users } = props;
    const [isAlreadyRoleModal, setIsAlreadyRoleModal] = useState(false);
    const [cantRemoveSelfModal, setCantRemoveSelfModal] = useState(false);
    const [minimumAdminsModal, setMinimumAdminsModal] = useState(false);
    
    const handleDrop = (user: any) => {
        const userId = user.Attributes.filter((a:any) => a.Name === 'sub')[0].Value;
        const userIdList = users.filter((u) => u.Attributes.filter((a:any) => a.Name === 'sub')[0].Value === userId);
        
        if (userIdList.length < 1) {
            onDrop(user);
        } else {
            toggleAlreadyRoleModal();
        }
    }

    const handleDelete = async (user: any) => {
        const userId = user.Attributes.filter((a:any) => a.Name === 'sub')[0].Value;
        const loggedInUser = await Auth.currentUserInfo();
        const loggedInUserId = loggedInUser.attributes['sub'].Value;

        if (userId === loggedInUserId) {
            toggleCantRemoveSelfModal();
            return;
        }
        
        if (users.length === 1 && label === 'Admin') {
            toggleMinimumAdminsModal();
            return;
        }

        onDelete(user);
    }

    const [, drop] = useDrop(
        () => ({
            accept: 'user',
            drop: (droppedItem: any) => {
                handleDrop(droppedItem)
            },
        }),
        [users]
    )

    const toggleAlreadyRoleModal = () => {
        setIsAlreadyRoleModal((cur) => !cur);
    }
    
    const toggleCantRemoveSelfModal = () => {
        setCantRemoveSelfModal((cur) => !cur);
    }
    
    const toggleMinimumAdminsModal = () => {
        setMinimumAdminsModal((cur) => !cur);
    }

    return (
        <Box display='flex' flexDirection='column' margin='2rem'>
            <Modal
                open={isAlreadyRoleModal}
                onClose={toggleAlreadyRoleModal}
            >
                <ConfirmModal close={toggleAlreadyRoleModal} validationText='Ok' confirmText='User is already a member of this role.' confirm={toggleAlreadyRoleModal}/>
            </Modal>
            <Modal
                open={cantRemoveSelfModal}
                onClose={toggleCantRemoveSelfModal}
            >
                <ConfirmModal close={toggleCantRemoveSelfModal} validationText='Ok' confirmText='You cannot make change to your own account.' confirm={toggleCantRemoveSelfModal}/>
            </Modal>
            <Modal
                open={minimumAdminsModal}
                onClose={toggleMinimumAdminsModal}
            >
                <ConfirmModal close={toggleMinimumAdminsModal} validationText='Ok' confirmText='You must have at least one admin.' confirm={toggleMinimumAdminsModal}/>
            </Modal>
            <Typography variant='h2'>{label}</Typography>
            <Box minHeight='100px' width='100%' ref={drop} bgcolor='rgba(0,0,0, 0.1)' padding='1rem' borderRadius='0.25rem'>
                {users && users.map((u: any) => <Chip label={u.Username} onDelete={() => handleDelete(u)} key={u.Username} />)}
            </Box>
        </Box>
    )
}

export default UserTypeReceiver;