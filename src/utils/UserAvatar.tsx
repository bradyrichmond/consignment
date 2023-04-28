import { Avatar, Box, Typography } from "@mui/material";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { toTitleCase } from "../features/Clients";

const UserAvatar = () => {
    const [name, setName] = useState('');
    const [initial, setInitial] = useState('');

    useEffect(() => {
        const getUser = async () => {
            const user = await Auth.currentUserInfo();
            setName(user.username);
            setInitial(user.username[0].toUpperCase());
        }

        getUser();
    }, [])

    return (
        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
            <Box marginRight='2rem'><Avatar>{initial}</Avatar></Box>
            <Typography>{toTitleCase(name)}</Typography>
        </Box>
    )
}

export default UserAvatar;