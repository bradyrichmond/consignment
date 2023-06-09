import React, { useContext, useEffect, useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Clients from './features/Clients';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import Home from './features/Home';
import { Box, Theme, ThemeProvider, createTheme } from '@mui/material';
import Items from './features/Items';
import AddItem from './features/Items/AddItem';
import Brands from './features/Brands';
import Categories from './features/Categories';
import AttributeTypes from './features/AttributeTypes';
import Settings from './features/Settings';
import Pos from './features/Pos';
import UserManagement from './features/UserManagement';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Reporting from './features/Reporting';
import Coupons from './features/Coupons';
import { CognitoContext, DrawerContext } from './context';
import Concierge from './features/Concierge';
import CreateDropOff from './features/Concierge/CreateDropOff';
import DropOffComplete from './features/Concierge/DropOffComplete';
import EmployeeDisplay from './features/Concierge/Employee';
import Checkin from './features/Concierge/CheckIn';
import Appointments from './features/Appointments';
Amplify.configure(awsExports);

const checkProtectedRoute = (userGroups: string[], allowedGroups: string[]) => {
  return userGroups.filter((value) => allowedGroups.includes(value)).length > 0;
}

export const buildRoutes = (isLoggedIn: boolean, pathname: string, userGroups: string[]) => createBrowserRouter([
  {
    path: '/',
    element: isLoggedIn ? <Home /> : <Navigate to='/login' state={{goto: pathname}}/>,
    children: [
      {
        path: '/',
        element: checkProtectedRoute(userGroups, ['Salespeople', 'Processors', 'Managers', 'Admins']) ? <Clients /> : <Box>Access Denied</Box>
      },
      {
        path: 'add-items/:id',
        element: checkProtectedRoute(userGroups, ['Salespeople', 'Processors', 'Managers', 'Admins']) ? <AddItem /> : <Box>Access Denied</Box>
      },
      {
        path: 'appointments',
        element: checkProtectedRoute(userGroups, ['Salespeople', 'Processors', 'Managers', 'Admins']) ? <Appointments /> : <Box>Access Denied</Box>
      },
      {
        path: 'attribute-types',
        element: checkProtectedRoute(userGroups, ['Manager', 'Admins']) ? <AttributeTypes /> : <Box>Access Denied</Box>
      },
      {
        path: 'brands',
        element: checkProtectedRoute(userGroups, ['Manager', 'Admins']) ? <Brands />  : <Box>Access Denied</Box>
      },
      {
        path: 'categories',
        element: checkProtectedRoute(userGroups, ['Manager', 'Admins']) ? <Categories /> : <Box>Access Denied</Box>
      },
      {
        path: 'concierge/employee',
        element: checkProtectedRoute(userGroups, ['Salespeople', 'Processors', 'Managers', 'Admins']) ? <EmployeeDisplay /> : <Box>Access Denied</Box>
      },
      {
        path: 'consigners',
        element: checkProtectedRoute(userGroups, ['Salespeople', 'Processors', 'Managers', 'Admins']) ? <Clients /> : <Box>Access Denied</Box>
      },
      {
        path: 'coupons',
        element: checkProtectedRoute(userGroups, ['Manager', 'Admins']) ? <Coupons /> : <Box>Access Denied</Box>
      },
      {
        path: 'items',
        element: checkProtectedRoute(userGroups, ['Salespeople', 'Processors', 'Managers', 'Admins']) ? <Items /> : <Box>Access Denied</Box>
      },
      {
        path: 'pos',
        element: checkProtectedRoute(userGroups, ['Salespeople', 'Processors', 'Managers', 'Admins']) ? <Pos /> : <Box>Access Denied</Box>
      },
      {
        path: 'reports',
        element: checkProtectedRoute(userGroups, ['Manager', 'Admins']) ? <Reporting /> : <Box>Access Denied</Box>
      },
      {
        path: 'settings',
        element: checkProtectedRoute(userGroups, ['Admins']) ? <Settings /> : <Box>Access Denied</Box>
      },
      {
        path: 'user-management',
        element: checkProtectedRoute(userGroups, ['Admins']) ? <UserManagement /> : <Box>Access Denied</Box>
      }
    ]
  },
  {
    path: '/concierge',
    element: <Concierge />
  },
  {
    path: '/concierge/client',
    element: <Checkin />
  },
  {
    path: '/concierge/client/complete',
    element: <DropOffComplete />
  },
  {
    path: '/concierge/create-dropoff',
    element: <CreateDropOff />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

const dark = () => {
  return createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#4cbfa6',
      },
      secondary: {
        main: '#e0e2e6',
      },
      error: {
        main: '#ed0b70',
      },
      info: {
        main: '#023b59',
      },
      background: {
        default: '#121212'
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '2rem',
            marginBottom: '2rem'
          }
        }
      }
    }
  })
}

const light = () => {
  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#434ce6',
      },
      secondary: {
        main: '#f6ebf4',
      },
      error: {
        main: '#ed0b70',
      },
      info: {
        main: '#023b59',
      },
      background: {
        default: '#F1ECEC'
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '2rem',
            marginBottom: '2rem'
          }
        }
      }
    }
  })
}

const themes = [light, dark];

const App = () => {
  const pathname = window.location.pathname;
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userGroups, setUserGroups] = useState([]);
  const [drawerContent, setDrawerContent] = useState('');
  const [drawerClientId, setDrawerClientId] = useState('');
  const [drawerItemId, setDrawerItemId] = useState('');
  const [theme, setTheme] = useState<Theme>(light);

  useEffect(() => {
    const themeSetting = localStorage.getItem('theme');
    const themeName = parseInt(themeSetting ?? '0');
    setTheme(themes[themeName]);
  }, [])

  return (
    <CognitoContext.Provider value={{userIsLoggedIn, setUserIsLoggedIn, userGroups, setUserGroups}}>
      <DrawerContext.Provider value={{drawerContent, setDrawerContent, drawerClientId, setDrawerClientId, drawerItemId, setDrawerItemId}}>
        <ThemeProvider theme={theme}>
          <DndProvider backend={HTML5Backend}>
            <CognitoContext.Consumer>
              { value => 
                <RouterProvider router={buildRoutes(value.userIsLoggedIn, pathname, value.userGroups)} />
              }
            </CognitoContext.Consumer>
          </DndProvider>
        </ThemeProvider>
      </DrawerContext.Provider>
    </CognitoContext.Provider>
  );
}

const Login = () => {
  const navigate = useNavigate();
  const cognito = useContext(CognitoContext);
  const location = useLocation();
  const { goto } = location.state

  const userLoggedIn = (user: any, signOut: any) => {
    cognito.setUserIsLoggedIn(true);
    cognito.setUserGroups(user.signInUserSession.accessToken.payload['cognito:groups']);
    navigate(goto);
    return true;
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Box width='auto' height='100%'>
          {user && userLoggedIn(user, signOut) && 
            <Box />
          }
        </Box>
      )}
    </Authenticator>
  )
}

export default App;
