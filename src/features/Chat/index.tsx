import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { ChatMessage, ChatRoom, User } from '../../models';
import { Box, Modal, TextField, Typography } from '@mui/material';
import { Auth, DataStore, Predicates, SortDirection } from 'aws-amplify';
import AddIcon from '@mui/icons-material/Add';
import AddChatRoom from './AddChatRoom';
import { useForm } from 'react-hook-form';
import { CognitoContext } from '../../context';

const Chat = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [rooms, setRooms] = useState<ChatRoom[]>([]);
    const [activeRoom, setActiveRoom] = useState('');
    const [isAddingRoom, setIsAddingRoom] = useState(false);
    const { handleSubmit, register, reset } = useForm();
    const [currentUser, setCurrentUser] = useState<User>();
    const { userGroups, organization, organizationId } = useContext(CognitoContext);

    useEffect(() => {
        const chatRoomSub = DataStore.observeQuery(
            ChatRoom
        ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;
            const locationId = localStorage.getItem('locationId');

            const itemsWithUserGroups = items.map((i) => {
                return {id: i.id, userGroups: i.accessList}
            })
            
            // @ts-ignore
            const filteredItems = items.filter((i) => i.location?.includes(locationId) || itemsWithUserGroups.find((iwg) => iwg.id === i.id).userGroups.some((j) => userGroups.includes(j)));
            setRooms(filteredItems);
        });

        const getUserInfo = async () => {
            const userInfo = await Auth.currentUserInfo();
            const users = await DataStore.query(User, (u) => u.cognitoId.eq(userInfo.id))
            setCurrentUser(users[0]);
        }

        getUserInfo();

        return () => {
            chatRoomSub.unsubscribe();
        }
    }, [])

    useEffect(() => {
        if (!activeRoom) {
            const topRoom = rooms[0];

            if (topRoom) {
                setActiveRoom(topRoom.id);
            }
        }
    }, [rooms])

    useEffect(() => {
        const messageSub = DataStore.observeQuery(
            ChatMessage,
            (c) => c.chatRoomMessagesId.eq(activeRoom),
            {
                sort: (c) => c.createdAt(SortDirection.DESCENDING)
            }
        ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;
            setMessages(items);
        });

        return () => {
            messageSub.unsubscribe();
        }
    }, [activeRoom])

    const sendMessage = async (data: any) => {
        if (currentUser) {
            await DataStore.save(new ChatMessage({ author: currentUser, authorId: currentUser.id, chatMessageAuthorId: currentUser.id, chatRoomMessagesId: activeRoom, message: data.message, organization, chatMessageOrganizationId: organizationId }));
            reset();
        }
    }

    const selectChatRoom = (id?: string) => {
        if (id) {
            setActiveRoom(id);
        }
    }

    const startCreatingNewRoom = () => {
        setIsAddingRoom(true);
    }

    const closeModals = () => {
        setIsAddingRoom(false);
    }

    return (
        <Box display='flex' flexDirection='row' height='100%' width='100%'>
            <Modal
                open={isAddingRoom}
                onClose={closeModals}
            >
                <AddChatRoom close={closeModals}/>
            </Modal>
            <Box width='20%'>
                {rooms && rooms.map((r) => <ChatRoomItem roomName={r.name} roomId={r.id} active={r.id === activeRoom} onClick={selectChatRoom} />)}
                <ChatRoomItem roomName={<AddIcon fontSize='large'/>} roomId='' active={false} onClick={startCreatingNewRoom} />
            </Box>
            <Box flex='1' display='flex' flexDirection='column' height='100%' bgcolor='white'>
                <Box flex='1' display='flex' flexDirection='column' sx={{overflowY: 'auto'}}>
                    {messages && currentUser &&
                        messages.map((m) => <ChatMessageContainer message={m.message ?? ''} messageData={m} images={m.images} messageIsFromLoggedInUser={m.authorId === currentUser.id}/>)
                    }
                </Box>
                {activeRoom && 
                    <Box bgcolor='white' padding='2rem'>
                        <form onSubmit={handleSubmit(sendMessage)}>
                            <TextField label='message' fullWidth variant='standard' inputProps={{ 'data-testid': 'message' }} {...register('message', { required: true, minLength: 2 })} />
                        </form>
                    </Box>
                }
            </Box>
        </Box>
    )
}

interface ChatRoomItemProps {
    roomName: string | ReactElement
    roomId: string
    onClick: (id?: string) => void
    active: Boolean
}

const ChatRoomItem = (props: ChatRoomItemProps) => {
    const { roomName, roomId, onClick, active } = props;

    const handleClick = () => {
        onClick(roomId);
    }

    return (
        <Box padding='2rem' bgcolor={active ? '#434ce6' : 'white'} display='flex' justifyContent='center' alignItems='center' onClick={handleClick}>
            <Typography variant='h5' color={active ? 'white' : 'black'}>{roomName}</Typography>
        </Box>
    )
}

interface ChatMessageProps {
    message?: string
    messageData: ChatMessage
    images?: (string | null)[] | null
    messageIsFromLoggedInUser: boolean
}

const ChatMessageContainer = (props: ChatMessageProps) => {
    const { message, messageData, messageIsFromLoggedInUser, images } = props;
    const [author, setAuthor] = useState<User>();

    useEffect(() => {
        const getAuthor = async () => {
            const authorData = await messageData.author;
            setAuthor(authorData);
        }

        getAuthor();
    }, [])

    return (
        <Box display='flex' flexDirection='column' bgcolor='white' paddingLeft='2rem' paddingRight='2rem'>
            <Box display='flex' flexDirection='row' alignItems='flex-start' justifyContent='center' padding='1rem'>
                <Typography variant='h6' color='grey'>{messageIsFromLoggedInUser ? 'You' : author?.firstName}</Typography>
            </Box>
            <Box display='flex' padding='1rem' borderRadius='.5rem' bgcolor={messageIsFromLoggedInUser ? '#434ce6' : 'grey'}>
                {message && <Typography variant='h5' color={messageIsFromLoggedInUser ? 'white' : 'black'}>{message}</Typography>}
            </Box>
        </Box>
    )
}

export default Chat;