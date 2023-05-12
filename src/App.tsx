import React, { createContext, useContext, useEffect, useState } from 'react';
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
Amplify.configure(awsExports);

const buildRoutes = (isLoggedIn: boolean, pathname: string, userGroups: string[]) => createBrowserRouter([
  {
    path: '/',
    element: isLoggedIn ? <Home /> : <Navigate to='/login' state={{goto: pathname}}/>,
    children: [
      {
        path: 'add-items/:id',
        element: <AddItem />
      },
      {
        path: 'attribute-types',
        element: <AttributeTypes />
      },
      {
        path: 'brands',
        element: <Brands />
      },
      {
        path: 'categories',
        element: <Categories />
      },
      {
        path: 'consigners',
        element: <Clients />
      },
      {
        path: 'items',
        element: <Items />
      },
      {
        path: 'pos',
        element: <Pos />
      },
      {
        path: 'settings',
        element: <Settings />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export const CognitoContext = createContext({ userIsLoggedIn: false, setUserIsLoggedIn: (loggedIn: boolean) => {}, userGroups: [], setUserGroups: (groups: []) => {} });
export const DrawerContext = createContext({ 
  drawerContent: '', 
  setDrawerContent: (drawerItem: string) => {}, 
  drawerClientId: '', 
  setDrawerClientId: (clientId: string) => {},
  drawerItemId: '',
  setDrawerItemId: (itemId: string) => {}
});

const dark = () => {
  return createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#4cbfa6',
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
        main: '#4cbfa6',
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
          <CognitoContext.Consumer>
            { value => 
              <RouterProvider router={buildRoutes(value.userIsLoggedIn, pathname, value.userGroups)} />
            }
          </CognitoContext.Consumer>
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

  const userLoggedIn = (user: any) => {
    cognito.setUserIsLoggedIn(true);
    cognito.setUserGroups(user.signInUserSession.accessToken.payload['cognito:groups']);
    navigate(goto);
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
