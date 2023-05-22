import { createContext } from "react";

export const CognitoContext = createContext({ userIsLoggedIn: false, setUserIsLoggedIn: (loggedIn: boolean) => {}, userGroups: [], setUserGroups: (groups: []) => {} });

export const DrawerContext = createContext({ 
  drawerContent: '', 
  setDrawerContent: (drawerItem: string) => {}, 
  drawerClientId: '', 
  setDrawerClientId: (clientId: string) => {},
  drawerItemId: '',
  setDrawerItemId: (itemId: string) => {}
});