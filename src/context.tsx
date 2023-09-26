import { createContext } from "react";
import { Organization } from "./models";

export const CognitoContext = createContext({ 
  userIsLoggedIn: false,
  setUserIsLoggedIn: (loggedIn: boolean) => {},
  userGroups: [], 
  setUserGroups: (groups: []) => {},
  organizationId: '',
  setOrganizationId: (organizationId: string) => {},
  organization: new Organization({ name: 'default' }),
  setOrganization: (organization: Organization) => {}
});

export const DrawerContext = createContext({ 
  drawerContent: '', 
  setDrawerContent: (drawerItem: string) => {}, 
  drawerClientId: '', 
  setDrawerClientId: (clientId: string) => {},
  drawerItemId: '',
  setDrawerItemId: (itemId: string) => {},
});