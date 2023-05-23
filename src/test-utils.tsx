import React, {ReactElement, useState} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import { Theme, ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { CognitoContext, DrawerContext } from './context';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

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
  

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const [userGroups, setUserGroups] = useState([]);
    const [drawerContent, setDrawerContent] = useState('');
    const [drawerClientId, setDrawerClientId] = useState('');
    const [drawerItemId, setDrawerItemId] = useState('');
    const [theme, setTheme] = useState<Theme>(light);

  return (
        <CognitoContext.Provider value={{userIsLoggedIn, setUserIsLoggedIn, userGroups, setUserGroups}}>
            <DrawerContext.Provider value={{drawerContent, setDrawerContent, drawerClientId, setDrawerClientId, drawerItemId, setDrawerItemId}}>
                <ThemeProvider theme={theme}>
                  <BrowserRouter>
                    {children}
                  </BrowserRouter>
                </ThemeProvider>
            </DrawerContext.Provider>
        </CognitoContext.Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}