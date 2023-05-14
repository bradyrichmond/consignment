import { API, Auth } from "aws-amplify";

export const addUserToGroup = async (username: string, groupname: string) => {
    await API.post('AdminQueries', '/addUserToGroup', {
        body: {
            username,
            groupname
        },
        headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }});
}

export const removeUserFromGroup = async (username: string, groupname: string) => {
    await API.post('AdminQueries', '/removeUserFromGroup', {
        body: {
            username,
            groupname
        },
        headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }});
}

export const getUsersInGroup = async (groupname: string) => {
    return await API.get('AdminQueries', '/listUsersInGroup', {
        queryStringParameters: {
            groupname
        },
        headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }});
}

export const getGroupsForUser = async (username: string) => {
    return await API.get('AdminQueries', 'listGroupsForUser',{
        queryStringParameters: {
            username
        },
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }});
}
