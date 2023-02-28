import React, { FC, PropsWithChildren } from 'react';

import { useTheme } from '@chakra-ui/react';

import Stack from '../stack';

import Box from '../box';

import { NavigationLinkProps } from './NavigationLink';
import { NavigationLanguageMenu } from './NavigationLanguageMenu';
import { NavigationItems } from './NavigationItems';
import { NavigationAvatar } from './NavigationAvatar';
import { useNavigationDrawer } from './hooks/useNavigationDrawer';
import { NavigationDrawer } from './drawer';
import { getHeaderLinks } from './config/headerLinks';
import { DrawerNodeItems, getDrawerNodeItems } from './config/drawerNodeItems';

interface NavigationConfiguration {
  homeUrl: string;
  currentLanguage: string;
  menuHeight: string;
  user: User | null;
  drawerNodeItems: DrawerNodeItems;
  headerLinks: NavigationLinkProps[];
}

export interface User {
  id: number;
  name: string;
  type: 'private' | 'professional';
}

export type UserType = 'private' | 'professional';
export type Plattform = 'as24' | 'ms24';

interface NavigationProps {
  user: User;
}

const Navigation: FC<NavigationProps> = ({ user }) => {
  const { name } = useTheme();
  const plattform: Plattform = name === 'AutoScout 24' ? 'as24' : 'ms24';
  const linkConfig = {
    userType: user.type,
    plattform,
  };

  const config: NavigationConfiguration = {
    homeUrl: '/',
    currentLanguage: 'en',
    user,
    menuHeight: '60px',
    drawerNodeItems: getDrawerNodeItems(linkConfig),
    headerLinks: getHeaderLinks(linkConfig),
  };

  const { drawer, isOpen, onClose, createDrawerHandler } = useNavigationDrawer({
    drawerNodeItems: config.drawerNodeItems,
  });

  return (
    <>
      <Box
        width="full"
        borderBottomColor="gray.200"
        borderBottomWidth="1px"
        zIndex="header"
        position="absolute"
        fontFamily="Make It Sans" // TODO Figure out how to handle this
      >
        <Box
          maxWidth="container.xl"
          height={config.menuHeight}
          alignItems="center"
          margin={{ xl: 'auto' }}
          display="flex"
          justifyContent="space-between"
          px="2rem"
          backgroundColor="white"
        >
          <NavigationItems
            plattform={plattform}
            headerLinks={config.headerLinks}
            createDrawerHandler={createDrawerHandler}
          />
          <Stack direction="row" spacing="2xl" align="center">
            <NavigationAvatar
              user={user}
              createDrawerHandler={createDrawerHandler}
            />
            <NavigationLanguageMenu />
          </Stack>
        </Box>
        <NavigationDrawer
          drawer={drawer}
          isOpen={isOpen}
          onClose={onClose}
          menuHeight={config.menuHeight}
        />
      </Box>
    </>
  );
};
export default Navigation;
export { PropsWithChildren as FullHeightProps };
