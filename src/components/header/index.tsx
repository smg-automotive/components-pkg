import React, { FC, PropsWithChildren } from 'react';

import { Language } from '@smg-automotive/i18n-pkg';

import { Brand } from 'src/types/brand';

import TranslationProvider from '../translationProvider';
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
  currentLanguage: Language;
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
  plattform: Brand;
  language: Language;
  user: User;
  hasNotification: boolean;
}

const Navigation: FC<NavigationProps> = ({
  plattform,
  language,
  user,
  hasNotification,
}) => {
  const linkConfig = {
    userType: user.type,
    plattform,
  };

  const config: NavigationConfiguration = {
    homeUrl: '/',
    currentLanguage: language,
    user,
    menuHeight: '60px',
    drawerNodeItems: getDrawerNodeItems({
      ...linkConfig,
      urlPathParams: { accountId: user.id },
    }),
    headerLinks: getHeaderLinks(linkConfig),
  };

  const { drawer, isOpen, onClose, createDrawerHandler } = useNavigationDrawer({
    drawerNodeItems: config.drawerNodeItems,
  });

  return (
    <TranslationProvider language={config.currentLanguage} scopes={['header']}>
      <Box
        width="full"
        borderBottomColor="gray.200"
        borderBottomWidth="1px"
        zIndex="header"
        position="absolute"
        backgroundColor="white"
      >
        <Box
          maxWidth="container.xl"
          height={config.menuHeight}
          alignItems="center"
          margin={{ xl: 'auto' }}
          display="flex"
          justifyContent="space-between"
          px={{ base: 'sm', xs: 'lg' }}
        >
          <NavigationItems
            plattform={plattform}
            headerLinks={config.headerLinks}
            drawer={drawer}
            isOpen={isOpen}
            createDrawerHandler={createDrawerHandler}
          />
          <Stack direction="row" spacing="2xl" align="center">
            <NavigationAvatar
              user={user}
              createDrawerHandler={createDrawerHandler}
              isOpen={isOpen}
              drawer={drawer}
              hasNotification={hasNotification}
            />
            <NavigationLanguageMenu activeLanguage={config.currentLanguage} />
          </Stack>
        </Box>
        <NavigationDrawer
          drawer={drawer}
          isOpen={isOpen}
          onClose={onClose}
          menuHeight={config.menuHeight}
        />
      </Box>
    </TranslationProvider>
  );
};
export default Navigation;
export { PropsWithChildren as FullHeightProps };
