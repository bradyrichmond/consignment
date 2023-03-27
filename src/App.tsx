import React, { createContext } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Clients from './features/clients';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import Home from './features/home';
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

export const CognitoContext = createContext({ userIsLoggedIn: false, userGroups: [] });

const App = () => {
  const pathname = window.location.pathname;

  return (
    <CognitoContext.Provider value={{userIsLoggedIn: false, userGroups: []}}>
      <CognitoContext.Consumer>
        { value => 
          <RouterProvider router={buildRoutes(value.userIsLoggedIn, pathname, value.userGroups)} />
        }
      </CognitoContext.Consumer>
    </CognitoContext.Provider>
  );
}

const Login = () => {
  const userLoggedIn = (user: any) => {
    return true;
  }

  return (
    <Authenticator hideSignUp>
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
