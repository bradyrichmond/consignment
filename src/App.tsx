import React, { createContext, useContext, useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Clients from './features/Clients';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import Home from './features/Home';
import { Box } from '@mui/material';
Amplify.configure(awsExports);

const buildRoutes = (isLoggedIn: boolean, pathname: string, userGroups: string[]) => createBrowserRouter([
  {
    path: '/',
    element: isLoggedIn ? <Home /> : <Navigate to='/login' state={{goto: pathname}}/>,
    children: [
      {
        path: 'clients',
        element: <Clients />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export const CognitoContext = createContext({ userIsLoggedIn: false, setUserIsLoggedIn: (loggedIn: boolean) => {}, userGroups: [], setUserGroups: (groups: []) => {} });
export const DrawerContext = createContext({ drawerContent: '', setDrawerContent: (drawerItem: string) => {}, drawerClientId: '', setDrawerClientId: (clientId: string) => {} });

const App = () => {
  const pathname = window.location.pathname;
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userGroups, setUserGroups] = useState([]);
  const [drawerContent, setDrawerContent] = useState('');
  const [drawerClientId, setDrawerClientId] = useState('');

  return (
    <CognitoContext.Provider value={{userIsLoggedIn, setUserIsLoggedIn, userGroups, setUserGroups}}>
      <DrawerContext.Provider value={{drawerContent, setDrawerContent, drawerClientId, setDrawerClientId}}>
        <CognitoContext.Consumer>
          { value => 
            <RouterProvider router={buildRoutes(value.userIsLoggedIn, pathname, value.userGroups)} />
          }
        </CognitoContext.Consumer>
      </DrawerContext.Provider>
    </CognitoContext.Provider>
  );
}

const Login = () => {
  const navigate = useNavigate();
  const cognito = useContext(CognitoContext);

  const userLoggedIn = (user: any) => {
    cognito.setUserIsLoggedIn(true);
    cognito.setUserGroups(user.signInUserSession.accessToken.payload['cognito:groups']);
    navigate('/clients')
    return true;
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Box width='auto' height='100%'>
          {user && userLoggedIn(user) && 
            <Box />
          }
        </Box>
      )}
    </Authenticator>
  )
}

export default App;
